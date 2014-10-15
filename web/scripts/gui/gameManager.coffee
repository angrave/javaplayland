debugging = true
if(debugging)
    log = (mesg) -> console.log(mesg)
else
    log = (mesg) -> null

log("GameManager log")

# Some browsers have a deepcopy function, others do not.
# For those who do not, we use the JQuery deepcopy function.
if not deepcopy?
    deepcopy = (src) -> $.extend(true, {}, src)

class window.GameManager
    cssCfg=null
    constructor: (@environment) ->
        ###
            External Function (used by something outside of this file)

            Takes in the game environment and sets up the code editor and
            the game visual and the game logic.

            @param environment
                The environment and configuration required for this game.
        ###

        @cssCfg=findConfig('scripts/config/gameManager.json')
		
        @config = deepcopy @environment.description
        @gameStateBase = @environment.gameState

        @editorDiv = 'codeEditor'
        @visualDiv = 'gameVisual'
        @setUpGame()
        return

    storeStats: ->
        ###
            Internal Function (used only by the code in this file)

            Saves the game statistics to codeland.
        ###
        @environment.codeland.storeGameStats @environment.key, @environment.stats
        return

    setUpGame: ->
        ###
            Internal Function (used only by the code in this file)

            Sets up everything for the game to run.
            That is, the code editor, the game visual and the event listeners.
        ###
        @gameDiv = $ @environment.gamediv
        @gameDiv.empty()
        butdiv=makeDiv()
        editdiv=makeDiv({'id':@editorDiv,'class':'code_editor'},@cssCfg["editDivCSS"])
        @gameDiv.append(editdiv)
        vis = makeDiv({'id':@visualDiv},@cssCfg["visCSS"])
        @gameDiv.append(vis)
        eDiv=@cssCfg["editDiv"]
        for i in [0..3]
          $(editdiv).append(eDiv[i])
        $('#stopRun').hide()


        @codeEditor = new EditorManager @editorDiv, @config.editor, @config.code
        @interpreter = new CodeInterpreter @config.editor.commands

        @environment.visualMaster.container.id = @visualDiv
        @visual = new GameVisual @environment.visualMaster, @environment.frameRate
        @interpretGameConfigMap()
        @codeEditor.editor.editor.focus()
        @addEventListeners()
        return

    gameName: () =>
        ###
            Internal Function (used only by the code in this file)

            Returns the key of the current game.
        ###
        return @environment.key

    startGame: (waitForCode) =>
        ###
            Internal Function (used only by the code in this file)

            This starts the game's visual and initializes the logic for the game.

            @param waitForCode
                Whether the game logic should wait for the code to begin running.
        ###
        waitForCode ?= false

        @visual.startGame @config.visual
        @gameState = new window[@gameStateBase](@, waitForCode)
        @commandMap = @gameState.getGameCommands()
        return

    interpretGameConfigMap: ->
        ###
            Internal Function (used only by the code in this file)

            Parses the map found in the game's config file and creates
            the necessary characters in the visual and in the gameManager.
        ###
        x = @config.game.offset.x ?=0
        y = @config.game.offset.y ?=0
        map = @config.game.map ?= ""
        while map != ""
            achar = map.substring 0, 1
            if achar of @config.game.key
                name = @config.game.key[achar]
                @generateCharacter name, x, y, true
            if achar == '\n'
                y++
                x = @config.game.offset.x ?=0
            else
                x++
            map = map.substring 1
        for key, character of @config.game.characters
            character.index = @config.visual.characters.indexOf character.visual
        return

    generateCharacter: (name, x, y, staysOnReset, dir) ->
        ###
            External Function (used by something outside of this file)

            Creates a character using the defaults found in the config file,
            overwriting them as necessary and generating an appropriate name.
            Places this character in the visual config and in the game's config
            and makes sure the victory flag is the first item in the visual
            config's array.

            @param name
                The name of the type of character to create
            @param x
                The x location of the character
            @param y
                The y location of the character
            @param staysOnReset
                Whether this character is a permanent part of the game
            @param dir
                The direction the character is facing
        ###
        base = deepcopy @config.game.characterBase[name]
        visualBase = deepcopy @config.visual.visualBase[base.sprite]
        base.x = x
        base.y = y
        visualBase.x = x
        visualBase.y = y
        if dir?
            base.dir = dir
        if base.dir?
            visualBase.dir = base.dir
        # In case another copy of this character already exists:
        baseName = name
        numLength = 1
        while name of @config.game.characters
            if name == baseName
                name = name + '1'
            else
                num = parseInt name.substring(name.length - numLength), 10
                num++
                name = baseName + num
                numLength = num.toString().length
        visualBase.name = name
        base.visual = visualBase
        if staysOnReset
            if name == 'gflag'
                @config.visual.characters.unshift visualBase
            else if name == 'protagonist'
                if @config.visual.characters.length > 0
                    if @config.visual.characters[0].name = 'gflag'
                        gflag = @config.visual.characters.shift()
                        @config.visual.characters.unshift visualBase
                        @config.visual.characters.unshift gflag
                else @config.visual.characters.push visualBase
            else
                @config.visual.characters.push visualBase
            @config.game.characters[name] = base
        return {'game': base, 'visual': visualBase}

    gameLost: ->
        ###
            External Function (used by something outside of this file)

            Updates the game statistics on the loss, plays the losing sound,
            and summons the game lost cloud.
        ###
        @updateGameLostStats()
        playAudio 'defeat.ogg'

        messages = ["Try Again!"]
        window.objCloud(400,messages,"body","30%","30%",3,"none",@gameManager)
        @gameRunFinished()

    gameWon: (score, stars) ->
        ###
            External Function (used by something outside of this file)

            Updates the game statistics on the win, plays the winning sound,
            and summons the game won cloud.

            @param score
                The score the player achieved during this play of the game.
            @param stars
                How many stars the player earned during this play of the game.
        ###
        @updateGameWonStats score, stars
        playAudio 'victory.ogg'

        gameName = @gameName()
        codeland = @environment.codeland
        gameIndex = codeland.currentQuest.games.indexOf gameName
        questIndex = codeland.quests.indexOf codeland.currentQuest
        if ++gameIndex == codeland.currentQuest.games.length
            questIndex = ++questIndex % codeland.quests.length
            gameIndex = 0
        gameName = codeland.quests[questIndex].games[gameIndex]
        messages = ['Congratulations!']
        window.objCloud 400, messages, "body",  "30%", "30%", 1.5, gameName, @
        @gameRunFinished()

    updateGameLostStats: ->
        ###
            Internal Function (used only by the code in this file)

            Creats the losing statistics and saves them to codeland.
        ###
        s = @environment.stats
        s.lostCount += 1
        s.lastLoss = Date.now()
        s.firstLoss = s.lastLoss unless s.firstLoss
        @storeStats()

    updateGameWonStats: (score, stars) ->
        ###
            Internal Function (used only by the code in this file)

            Creates the statistics of the won game and saves them
            to codeland.

            @param score
                The score the player achieved during this play of the game.
            @param stars
                How many stars the player earned during this play of the game.

            @return
                Whether or not this achieved score is a new high score for the
                player.
        ###
        log "Game Won: #{@environment.key}"
        s = @environment.stats
        s.winCount += 1
        s.passed = true
        s.lastWin = Date.now()
        s.firstWin = s.lastWin unless s.firstWin
        s.stars = Math.max(stars, s.stars)

        isNewHiscore = s.hiscore < score
        s.hiscore = score if(isNewHiscore)

        @storeStats()
        #Other celebrations after storeStats
        return isNewHiscore

    finishGame: ->
        ###
            External Function (used by something outside of this file)

            Stops the current game and uninitializes used classes.
        ###
        @gameState?.stopGame()
        @codeEditor = null
        @interpreter = null
        @visual = null
        @gameState = null
        @commandMap = null
        return

    addEventListeners: ->
        ###
            Internal Function (used only by the code in this file)

            Sets up the event listeners the game manager responds to.
        ###
        $('#compileAndRun').click @runStudentCode
        $('#stopRun').click @resetGame
        $('#resetState').click @reset
        $('#help').click @helpTips
        @codeEditor.onStudentCodeChangeListener @resetGame.bind @
        @codeEditor.onCommandValidation @commandsValid
        return

    commandsValid: (valid) =>
        ###
            External Function (used by something outside of this file)
            Event Function (passed in as a callback or bound to a button press)

            Disables the run button should the commands in the editor be
            invalid, enables the run button should they be valid.

            @param valid
                Whether or not the code in the code editor is valid.
        ###
        if valid
            $('#compileAndRun').attr 'disabled', false
            @canRun = true
        else
            $('#compileAndRun').attr 'disabled', true
            @canRun = false
        return

    reset: =>
        ###
            Event Function (passed in as a callback or bound to a button press)

            Resets the code editor and the game.
        ###
        @environment.stats.resetCount += 1
        @storeStats()

        @resetGame()
        @resetCode()
        return

    resetGame: =>
        ###
            Event Function (passed in as a callback or bound to a button press)

            Resets the game.
        ###
        @stopStudentCode()
        @startGame false
        return

    resetCode: =>
        ###
            Internal Function (used only by the code in this file)

            Resets the student's code.
        ###
        @codeEditor.resetEditor()
        return

    runStudentCode: =>
        ###
            Event Function (passed in as a callback or bound to a button press)

            Scans the code from the code editor and begins running the student's
            code.
        ###
        if @running
            return
        @running = true
        code = @codeEditor.getStudentCode()
        $('#compileAndRun').hide()
        $('#stopRun').show()

        @environment.stats.runCount += 1
        @storeStats()

        if @environment.backEnd == 'interpreter'
            @codeEditor.scan()
            if not @canRun
                return
            @interpreter.scanText code
            @startGame true
            @interpreter.executeCommands @commandMap
        else if @environment.backEnd == 'doppio'
            @codeEditor.scan()
            if not @canRun
                return
            stdout = (mesg)-> console.log mesg
            @environment.codeland.doppioAPI.setOutputFunctions stdout stdout
            finish_cb = ->
                return
            if not @environment.codeland.doppioReady
                @environment.codeland.waitForWrapper @runStudentCode
                @running = false
                log 'Waiting for Doppio to be compiled'
                return
            @startGame true
            @environment.codeland.doppioAPI.run code, true, finish_cb
            @codeEditor.UpdateCommandsStatus(null)
        return false

    stopStudentCode: =>
        ###
            Internal Function (used only by the code in this file)

            Stops running the student's code and resets the visual.
        ###
        if not @running
            return
        @environment.stats.abortCount +=1
        @storeStats()
        if @environment.backEnd == 'doppio'
            @environment.codeland.doppioAPI.abort @showRun
        else
            @showRun()
        return false

    showRun: =>
        ###
            Internal Function (used only by the code in this file)

            Shows the run button.
        ###
        $('#stopRun').hide()
        $('#compileAndRun').show()
        @running = false
        return

    gameRunFinished: ->
        ###
            Internal Function (used only by the code in this file)

            Called when a run has finished, currently only re-displays
            the run button.
        ###
        @showRun()
        return

    helpTips:=>
        ###
            Event Function (passed in as a callback or bound to a button press)

            Summons the help tips cloud to display the tips associated with
            this game.
        ###
        @environment.stats.tipsCount +=1
        @storeStats()
        ma = @config?.code?.comments
        console.log("Help")
        if ma
            if ma.length > 1
                title =ma[0]
                ma = ma[1..]
                ma[0] = title + '<br>' + ma[0]
            conf = {widthpx:600,mesgs:ma,parentTag:"body",xoffset:"30%",yoffset:"30%",textscaling:0.7,nextgame:"none",gameManager: @gameManager}
            window.objCloud(conf.widthpx,conf.mesgs,conf.parentTag,conf.xoffset,conf.yoffset,conf.textscaling,conf.nextgame,conf.gameManager)
        return
