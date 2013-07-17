debugging = true
log = (mesg) ->  console.log mesg if debugging
if not deepcopy?
    deepcopy = (src) -> $.extend(true, {},src)

class window.GameManager
    constructor: (@environment) ->
        @config = deepcopy @environment.description

        @editorDiv = 'codeEditor'
        @visualDiv = 'gameVisual'
        @setUpGame()

    setUpGame: ->
        ###
            Sets up everything for the game to run.
        ###
        @gameDiv = jQuery @environment.gamediv
        editdiv = document.createElement("div")
        vis = document.createElement("div")
        butdiv = document.createElement("div")

        $(editdiv).attr({'id':@editorDiv,'class':'code_editor'})
        $(editdiv).css({
            width:'50%',height:'80%','position':'absolute',
            'top':'10%','left':'15%',"background-color":"#366CA3",
            "border":"4px double #3F80C0"})

        @gameDiv.append(editdiv)

        $(vis).attr({'id':@visualDiv})
        $(vis).css({
            width:'30%',height:'80%','position':'absolute',
            'top':'10%','left':'67.5%',"background-color":"#366CA3",
            "border":"4px double #3F80C0"})
        @gameDiv.append(vis)


        $(butdiv).css({
            width:'10%',height:'80%','position':'absolute',
            'top':'10%','left':'2.5%',"background-color":"#366CA3",
            "border":"4px double #3F80C0"})
        #border:4px double rgba(39,79,118,100);background-color:rgba(39,79,118,40);padding:4px
        $(butdiv).append '<img alt="Java reference" id="refOpen" style=";width:30%;height:15%;position:absolute;top:45%;left:10%;" src="/img/cc0/Spiral_bound_book-128px.png"/>'
        $(butdiv).append '<img alt="Select level" id="gmOp" style="width:30%;height:15%;position:absolute;top:25%;left:10%" src="/img/cc0/treasuremap-128px.png">'
        $(butdiv).append '<img alt="About" id="about" style="width:30%;height:15%;position:absolute;top:25%;left:56%" src="/img/freeware/info-48px.png"/>'
        $(butdiv).append '<img style="width:30%;height:15%;position:absolute;top:5%;left:10%" alt="Play" id="compileAndRun" src="/img/freeware/button_play_green-48px.png"/>'
        $(butdiv).append '<img style="width:30%;height:15%;position:absolute;top:5%;left:56%" alt="Reset" id="resetState" src="/img/cc-bynd/undo_yellow-48px.png"/>'

        @gameDiv.append(butdiv)


        @codeEditor = new EditorManager @editorDiv, @config.editor, @config.code
        @interpreter = new CodeInterpreter @config.editor.commands

        @environment.visualMaster.container.id = @visualDiv
        @visual = new GameVisual @environment.visualMaster, @environment.frameRate
        @interpretGameConfigMap()
        @addEventListeners()
        return

    startGame: (waitForCode) =>
        if not waitForCode?
            waitForCode = false

        @visual.startGame @config.visual
        @gameState = new MapGameState @, waitForCode
        @commandMap = new MapGameCommands @gameState
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
        @finishGame()
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
        jQuery('#about').click AboutPage
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
        @codeEditor.scan()
        if not @canRun
            return
        @interpreter.scanText @codeEditor.getStudentCode()
        @startGame true
        @interpreter.executeCommands @commandMap
        return

class MapGameState
    clockHandle = null
    #<--DIRECTIONS-->
    #       ^
    #       0
    #   < 3 4 1 >
    #       2
    #       v
    constructor: (@gameManager, waitForCode) ->
        @gameConfig = deepcopy @gameManager.config.game
        @visual = @gameManager.visual
        @score = 0
        @stars = 0
        @protagonist = @gameConfig.characters.protagonist
        @target = @gameConfig.characters.gflag
        @tick = 0
        @tock = 0
        @waitTime = 8

        for name, character of @gameConfig.characters
            if character.AI? and character.moves?
                @_stand character
                for command in character.AI.normal
                    @executeAICommand character, command

        if clockHandle?
            clearInterval clockHandle
        clockHandle = setInterval @clock, 17
        @startedGame = false
        @waiting = false
        if not waitForCode then @start()
        return

    executeAICommand: (character, command) ->
        @character = character
        for arg, index in command.arguments
            if arg in ["character", "protagonist"]
                command.arguments[index] = this[arg]
        this[command.command].apply @, command.arguments
        @character = null
        return

    clock: =>
        if @startedGame
            if @tick % 30 == 0
                if not @waiting
                    @checkEvents @protagonistDoneMoving
                    for name, character of @gameConfig.characters
                        @runCharacterCommand character
                    @waiting = true
                else
                    for name, character of @gameConfig.characters
                        @visual.changeState character.index, 4
                    @waiting = false
            if not @waiting and (@tick - @waitTime) % 30 == 0
                @tick -= @waitTime + 1
        @visual.getFrame @gameManager.config.visual, @tock
        @tick++
        @tock++
        return

    runCharacterCommand: (character) ->
        if not character.moves?
            return
        if character.moves.length > 0
            command = character.moves.splice(0, 1)[0]
            if command.line?
                @gameManager.codeEditor.editorGoToLine command.line
            result = command.exec()
            if character.AI?
                if not result.success
                    if character.AI.failed[command.key]?
                        for aiCommand in character.AI.failed[command.key]
                            @executeAICommand character, aiCommand
        else
            if character == @protagonist
                @protagonistDoneMoving = true
        if character.AI? and character.moves.length == 0
            for aiCommand in character.AI.normal
                @executeAICommand character, aiCommand
        if result?.continueExecution
            @runCharacterCommand character
        else
            @score++
        return

    leaveTrail: (placeTrail) ->
        if placeTrail? and not @protagonistDoneMoving
            char = @gameManager.generateCharacter 'trail',
                placeTrail.x, placeTrail.y, false
            @visual.pushCharacter @gameManager.config.visual, char.visual
        return

    checkEvents: (protagonistDoneMoving) ->
        # Just doing player collisions at the moment.
        triggers = {"victory": @gameWon, "loss": @gameLost}
        for name, character of @gameConfig.characters
            if character == @protagonist
                continue
            if @protagonist.x == character.x and @protagonist.y == character.y
                if character.trigger?
                    if character.trigger != "victory" or\
                        (character.trigger == "victory" and\
                            protagonistDoneMoving)
                        triggers[character.trigger]()
        if @protagonistDoneMoving and @protagonist.moving
            @visual.charAnimate @protagonist.index
            @protagonist.moving = false
        return

    start: ->
        if @protagonist.moves.length > 0
            @visual.charAnimate @protagonist.index
            @protagonist.moving = true
        @protagonistDoneMoving = false
        @_stand @protagonist
        @startedGame = true
        return

    _stand: (character) ->
        if not character?
            character = @protagonist
        character.moves.push {
            key: 'stand',
            exec: ((char) ->
                @visual.changeState char.index, 4
                return {success: true, continueExecution: false}
                ).bind @, character
        }
        return

    move: (character, steps, line) ->
        if not character?
            character = @protagonist

        if character.moves.length > 0 and
          character.moves[character.moves.length - 1].key == 'stand'
            character.moves.pop()
        character.moves.push {
            key: 'startMove',
            exec: (((char) ->
                success = @_move(char)
                return {success: success, continueExecution: false}
                ).bind @, character),
            line: line
        }
        for i in [1...steps] by 1
            @_moving(character)
        return

    _moving: (character) ->
        if not character?
            character = @protagonist

        character.moves.push {
            key: 'moving',
            exec: ((char) ->
                success = @_move(char)
                return {success: success, continueExecution: false}
                ).bind @, character
        }

    _move: (character) ->
        if not character?
            character = @protagonist

        # Top Left: 0,0
        moved = false
        [newx, newy] = @computeStepInDirection(character.dir,
            character.x, character.y)
        hitEvent = @checkCanMove(newx, newy, character)
        if !hitEvent
            @visual.changeState character.index, character.dir
            if character == @protagonist
                @leaveTrail {'x': character.x, 'y': character.y}
            character.x = newx
            character.y = newy
            moved = true
        else
            @visual.changeState character.index, 4
        return moved

    checkCanMove: (newX, newY, character) ->
        if newX < 0 or newX >= @gameManager.config.visual.grid.gridX\
          or newY < 0 or newY >= @gameManager.config.visual.grid.gridY
            # Player is out of bounds of grid.
            if character == @protagonist
                if newX < -1 or newX >= @gameManager.config.visual.grid.gridX + 1\
                  or newY < -1 or newY >= @gameManager.config.visual.grid.gridY + 1
                    @gameLost()
                else
                    return false
            return true

        if character.group?
            for name, otherCharacter of @gameConfig.characters
                if otherCharacter == character
                    continue
                if not otherCharacter.blocks?
                    continue
                if newX == otherCharacter.x and \
                      newY == otherCharacter.y and \
                      character.group in otherCharacter.blocks
                    return true
        return false

    turn: (character, direction, line) ->
        if not character?
            character = @protagonist

        if character.moves.length > 0 and
          character.moves[character.moves.length - 1].key == 'stand'
            character.moves.pop()

        character.moves.push {
            key: 'turn',
            exec: (((dir, char) ->
                continueExec = @_turn char, dir
                return {success: true, continueExecution: continueExec}
                ).bind @, direction, character),
            line: line
        }
        @_stand character
        return

    turnRight: (character, line) ->
        if not character?
            character = @protagonist

        if character.moves.length > 0 and
          character.moves[character.moves.length - 1].key == 'stand'
            character.moves.pop()

        character.moves.push {
            key: 'turn',
            exec: (((char) ->
                continueExec = @_turn char, ((char.dir + 1) % 4)
                return {success: true, continueExecution: continueExec}
                ).bind @, character),
            line: line
        }
        @_stand(character)
        return

    turnLeft: (character, line) ->
        if not character?
            character = @protagonist

        if character.moves.length > 0 and
          character.moves[character.moves.length - 1].key == 'stand'
            character.moves.pop()

        character.moves.push {
            key: 'turn',
            exec: (((char) ->
                continueExec = @_turn char, ((char.dir + 3) % 4)
                return {success: true, continueExecution: continueExec}
                ).bind @, character),
            line: line
        }
        @_stand(character)
        return

    _turn: (character, direction) ->
        if not character?
            character = @protagonist

        if character.dir == direction
            return true
        else
            character.dir = direction
            @visual.charFace character.index, character.dir
            @visual.changeState character.index, 4
        return

    gameWon: =>
        clearInterval clockHandle
        playAudio 'victory.ogg'
        @stars += 1
        @score += 5
        @gameManager.gameWon @score, @stars
        return

    gameLost: =>
        if clockHandle?
            clearInterval clockHandle
        for name, character of @gameConfig.characters
            @visual.changeState character.index, 4
            character.moves = null
        playAudio 'defeat.ogg'
        @startedGame = false
        alert "Try again!"
        clockHandle = setInterval @clock, 17
        return

    stopGame: =>
        if clockHandle?
            clearInterval clockHandle
        for name, character of @gameConfig.characters
            @visual.changeState character.index, 4
            character.moves = null
        @startedGame = false
        return

    computeStepInDirection: (direction, currentX, currentY) ->
        # Bits are more fun that lookup tables or a switch
        # sign is positive 1 for South 10, and East 01, -1 for North 00, and West 11
        [sign, isEastOrWest] = [-1 + ((direction + 1) & 2), direction & 1]
        if isEastOrWest
            newx = currentX + sign
            newy = currentY
        unless isEastOrWest
            newx = currentX
            newy = currentY + sign

        return [newx, newy]

class MapGameCommands
    constructor: (@gameState) ->
        return

    finishedParsingStartGame: ->
        @gameState.start()
        return

    go: (steps, line) =>
        steps = 1 if steps is undefined
        if line is undefined
            line = steps
            steps = 1
        # log "Go #{steps} steps."
        @gameState.move @gameState.protagonist, steps, line

    turn: (dir, line) =>
        # log "turn '#{dir}'"
        return if dir is undefined
        d = $.inArray(dir, ['N','E','S','W'])
        if d >= 0
            @gameState.turn @gameState.protagonist, d, line
        else
            d = $.inArray(dir, ['North','East','South','West'])
            if d >= 0
                @gameState.turn @gameState.protagonist, d, line
            else if !isNaN d
                @gameState.turn @gameState.protagonist, (4 + dir % 4) % 4, line
        return

    turnRight: (line) =>
        # log "turnRight"
        @gameState.turnRight @gameState.protagonist, line
        return

    turnLeft: (line) =>
        # log "turnLeft"
        @gameState.turnLeft @gameState.protagonist, line
        return

    turnAndGo: (direction, steps, line) =>
        # log "turnAndGo #{direction} #{steps}"
        @turn direction, line
        @go steps, line
        return

    goNorth: (steps, line) => @turnAndGo 0, steps
    goEast:  (steps, line) => @turnAndGo 1, steps
    goSouth: (steps, line) => @turnAndGo 2, steps
    goWest:  (steps, line) => @turnAndGo 3, steps

    # used in sequence4
    mysteryA: (line) => @goEast 4, line
    mysteryB: (line) => @goSouth 1, line
    mysteryC: (line) => @goWest 2, line
