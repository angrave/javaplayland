debugging = true
if(debugging)
    log = (mesg) -> console.log(mesg)
else
    log = (mesg) -> null
        
log("GameManager log")
if not deepcopy?
    deepcopy = (src) -> $.extend(true, {},src)

class window.GameManager
    #environment is defined in codeland.startGame
    constructor: (@environment) ->
        @config = deepcopy @environment.description
        @gameStateBase = @environment.gameState

        @editorDiv = 'codeEditor'
        @visualDiv = 'gameVisual'
        @setUpGame()
        return

    storeStats: ->
        @environment.codeland.storeGameStats @environment.key, @environment.stats 

    setUpGame: ->
        ###
            Sets up everything for the game to run.
        ###
        @gameDiv = jQuery @environment.gamediv
        @gameDiv.empty()
        editdiv = document.createElement("div")
        vis = document.createElement("div")
        butdiv = document.createElement("div")

        $(editdiv).attr({'id':@editorDiv,'class':'code_editor'})
        $(editdiv).css({
            width:'60%',height:'80%','position':'absolute',
            'top':'10%','left':'3.3%',"background-color":"#366CA3",
            "border":"4px double #3F80C0"})

        @gameDiv.append(editdiv)

        $(vis).attr({'id':@visualDiv})
        $(vis).css({
            width:'30%',height:'80%','position':'absolute',
            'top':'10%','right':'3.3%',"background-color":"#366CA3",
            "border":"4px double #3F80C0"})
        @gameDiv.append(vis)


        $(editdiv).append '<img height="15%" style="position:absolute;bottom:1%;right:1%" alt="Play" id="compileAndRun" src="img/freeware/button_play_green-48px.png" title="Run Code"/>'
        $(editdiv).append '<img height="15%" style="position:absolute;bottom:1%;right:1%" alt="Stop" id="stopRun" src="img/freeware/button_stop_red-48px.png" title="Stop Code"/>'
        $(editdiv).append '<img height="15%" style="position:absolute;bottom:1%;right:8%" alt="Reset" title="Restart level (reset code back to original)" id="resetState" src="img/cc-bynd/undo_yellow-48px.png"/>'
        $(editdiv).append '<img height="15%" style="position:absolute;bottom:1%;right:15%" alt="Help/Tips" title="Help/Tips" id="help" src="img/freeware/info-48px.png"/>'
        jQuery('#stopRun').hide()


        @codeEditor = new EditorManager @editorDiv, @config.editor, @config.code
        @interpreter = new CodeInterpreter @config.editor.commands

        @environment.visualMaster.container.id = @visualDiv
        @visual = new GameVisual @environment.visualMaster, @environment.frameRate
        @interpretGameConfigMap()
        @codeEditor.editor.editor.focus()
        @addEventListeners()
        return

    gameName: () =>
        return @environment.key

#Note this does not mean run the student's code. Rather it's the entry point to show animations and start the desired game map as a live experience.
    startGame: (waitForCode) =>
        #TODO Explain purpose of waitForCode
        waitForCode ?= false

        @visual.startGame @config.visual
        @gameState = new window[@gameStateBase](@, waitForCode)
        @commandMap = @gameState.getGameCommands()
        return

    interpretGameConfigMap: ->
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

    #Callback for games
    gameLost: ->
        @updateGameLostStats()
        playAudio 'defeat.ogg'
        
        messages = ["Try Again!"]
        window.objCloud(400,messages,"body","30%","30%",3,"none",@gameManager)
        @gameRunFinished()
    
    #Callback for games
    gameWon: ->
        @updateGameWonStats()
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
        s = @environment.stats
        s.lostCount+= 1
        s.lastLoss = Date.now()
        s.firstLoss = s.lastLoss unless s.firstLoss
        @storeStats()
        
    #Callback for games 
    updateGameWonStats: (score, stars) ->
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
        @gameState?.stopGame()
        @codeEditor = null
        @interpreter = null
        @visual = null
        @gameState = null
        @commandMap = null
        return

    addEventListeners: ->
        jQuery('#compileAndRun').click @runStudentCode
        jQuery('#stopRun').click @stopStudentCode
        jQuery('#resetState').click @reset
        jQuery('#help').click @helpTips
        @codeEditor.onStudentCodeChangeListener @startGame.bind @, false
        @codeEditor.onCommandValidation @commandsValid
        return

    commandsValid: (valid) =>
        if valid
            jQuery('#compileAndRun').attr 'disabled', false
            @canRun = true
        else
            jQuery('#compileAndRun').attr 'disabled', true
            @canRun = false
        return

    reset: =>
        @environment.stats.resetCount += 1
        @storeStats() 
               
        @codeEditor.resetEditor()
        @startGame false
        return

    runStudentCode: =>
        if @running
            return
        @running = true
        code = @codeEditor.getStudentCode()
        jQuery('#compileAndRun').hide()
        jQuery('#stopRun').show()
        
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
        if not @running
            return
        @environment.stats.abortCount +=1
        @storeStats()  
        if @environment.backEnd == 'doppio'
            @environment.codeland.doppioAPI.abort @showRun
        else
            @showRun()
        @startGame true
        return false

    showRun: =>
        jQuery('#stopRun').hide()
        jQuery('#compileAndRun').show()
        @running = false
        return

    gameRunFinished: ->
        @showRun()
        return

    helpTips:=>
        @environment.stats.tipsCount +=1
        @storeStats()  
        ma = @config?.code?.comments
        if ma
            if ma.length > 1
                title =ma[0]
                ma = ma[1..]
                ma[0] = title + '<br>' + ma[0]
            conf = {widthpx:600,mesgs:ma,parentTag:"body",xoffset:"30%",yoffset:"30%",textscaling:0.7,nextgame:"none",gameManager: @gameManager}
            window.objCloud(conf.widthpx,conf.mesgs,conf.parentTag,conf.xoffset,conf.yoffset,conf.textscaling,conf.nextgame,conf.gameManager)
        return
