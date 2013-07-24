debugging = true
log = (mesg) ->  console.log mesg if debugging
if not deepcopy?
    deepcopy = (src) -> $.extend(true, {},src)

class window.GameManager
    constructor: (@environment) ->
        @config = deepcopy @environment.description
        @gameStateBase = @environment.gameState

        @editorDiv = 'codeEditor'
        @visualDiv = 'gameVisual'
        @setUpGame()
        return

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
            width:'55%',height:'80%','position':'absolute',
            'top':'10%','left':'8%',"background-color":"#366CA3",
            "border":"4px double #3F80C0"})

        @gameDiv.append(editdiv)

        $(vis).attr({'id':@visualDiv})
        $(vis).css({
            width:'30%',height:'80%','position':'absolute',
            'top':'10%','left':'67.5%',"background-color":"#366CA3",
            "border":"4px double #3F80C0"})
        @gameDiv.append(vis)


        $(butdiv).css({
            width:'5%',height:'80%','position':'absolute',
            'top':'10%','left':'2.5%',"background-color":"#366CA3",
            "border":"4px double #3F80C0"})
        #border:4px double rgba(39,79,118,100);background-color:rgba(39,79,118,40);padding:4px
        $(butdiv).append '<img alt="Java reference" id="refOpen" style=";width:60%;height:15%;position:absolute;top:65%;left:10%;" src="/img/cc0/Spiral_bound_book-128px.png" title="Java book"/>'
        $(butdiv).append '<img alt="Select level" id="gmOp" style="width:60%;height:15%;position:absolute;top:45%;left:10%" src="/img/cc0/treasuremap-128px.png" title="Select level">'
        #$(butdiv).append '<img alt="About" id="about" style="width:60%;height:15%;position:absolute;top:25%;left:56%" src="/img/freeware/info-48px.png"/>'
        $(butdiv).append '<img style="width:60%;height:15%;position:absolute;top:5%;left:10%" alt="Play" id="compileAndRun" src="/img/freeware/button_play_green-48px.png" title="Run code"/>'
        $(butdiv).append '<img style="width:60%;height:15%;position:absolute;top:25%;left:10%" alt="Reset" title="Restart level (reset code back to original)" id="resetState" src="/img/cc-bynd/undo_yellow-48px.png"/>'

        @gameDiv.append(butdiv)


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

    startGame: (waitForCode) =>
        if not waitForCode?
            waitForCode = false

        @visual.startGame @config.visual
        @gameState = new window[@gameStateBase](@, waitForCode)
        @commandMap = @gameState.getGameCommands()
        return

    interpretGameConfigMap: ->
        x = @config.game.offset.x
        y = @config.game.offset.y
        map = @config.game.map
        while map != ""
            achar = map.substring 0, 1
            if achar of @config.game.key
                name = @config.game.key[achar]
                @generateCharacter name, x, y, true
            if achar == '\n'
                y++
                x = @config.game.offset.x
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

    gameWon: (score, stars) ->
        log "Game Won: #{@environment.key}"

        player = @environment.player
        if player.games[@environment.key]?
            if player.games[@environment.key].hiscore? > score
                score = player.games[@environment.key].hiscore

            if player.games[@environment.key].stars? > stars
                stars = player.games[@environment.key].stars

        @environment.codeland.storeGameCompletionData @environment.key, {
            hiscore : score,
            stars : stars,
            passed : true
        }
        return

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
        jQuery('#resetState').click @reset
        jQuery('#refOpen').click InitFloat
        jQuery('#gmOp').click codeland.showMap
        #jQuery('#about').click AboutPage
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
        @codeEditor.resetEditor()
        @startGame false
        return

    runStudentCode: =>
        code = @codeEditor.getStudentCode()
        if @environment.backEnd == 'interpreter'
            @codeEditor.scan()
            if not @canRun
                return
            @interpreter.scanText code
            @startGame true
            @interpreter.executeCommands @commandMap
        else if @environment.backEnd == 'doppio'
            stdout = log = console.log
            @environment.codeland.doppioAPI.setOutputFunctions stdout, log
            finish_cb = ->
                return
            if not @environment.codeland.doppioReady
                @environment.codeland.waitForWrapper @runStudentCode
                console.log 'Waiting for Doppio to be compiled'
                return
            @startGame true
            @environment.codeland.doppioAPI.run code, true, finish_cb
        return