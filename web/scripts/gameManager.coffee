debugging = true
log = (mesg) ->  console.log mesg if debugging
if not deepcopy?
    deepcopy = (src) -> $.extend(true, {},src)

class window.GameManager
    constructor: (@environment) ->
        @config = @environment.description

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

        $(editdiv).attr({'id':@editorDiv,'class':'code_editor'})
        $(editdiv).css({width:'35%',height:'90%','position':'absolute','top':'5%','left':'5%'})

        $(vis).attr({'id':@visualDiv,'class':'game_visual'})
        $(vis).css({width:'35%',height:'90%','position':'absolute','top':'5%','right':'5%'})

        @gameDiv.append(editdiv)
        @gameDiv.append '<button id="refOpen" style="position:absolute;top:40%;right:45%">Reference</button>'
        @gameDiv.append '<button id="gmOp" style="position:absolute;top:48%;right:45%">Game Map</button>'
        $(editdiv).append '<button id="compileAndRun">Go</button>'
        $(editdiv).append '<button id="resetState">Reset</button>'
        @gameDiv.append(vis)

        @codeEditor = new EditorManager @editorDiv, @config.editor, @config.code
        @interpreter = new CodeInterpreter @config.editor.commands

        @environment.visualMaster.container.id = @visualDiv
        @visual = new GameVisual @environment.visualMaster, @environment.frameRate
        @addEventListeners()
        return

    startGame: (waitForCode) ->
        if not waitForCode?
            waitForCode = false

        for character, val of @config.game.characters
            # Load starting positions into visual config
            @config.visual.characters[character].x = val.x
            @config.visual.characters[character].y = val.y
            if val.dir?
                @config.visual.characters[character].dir = val.dir

        @visual.startGame @config.visual
        @gameState = new MapGameState @, waitForCode
        @commandMap = new MapGameCommands @gameState
        return

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
        @codeEditor = null
        @interpreter = null
        @visual = null
        return

    addEventListeners: ->
        jQuery('#compileAndRun').click @runStudentCode
        jQuery('#resetState').click @reset
        jQuery('#refOpen').click InitFloat
        jQuery('#gmOp').click codeland.showMap

        return

    reset: =>
        @codeEditor.resetEditor()
        @startGame false
        return

    runStudentCode: =>
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

        for name, character of @gameConfig.characters
            if character.AI? and character.moves?
                @_stand character
                for command in character.AI.normal
                    @executeAICommand character, command

        if clockHandle?
            clearInterval clockHandle
        clockHandle = setInterval @clock, 17
        @startedGame = false
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
        @tick++
        if @startedGame and @tick % 30 == 0
            @checkEvents @protagonistDoneMoving
            for name, character of @gameConfig.characters
                @runCharacterCommand character
        @visual.getFrame @gameManager.config.visual, @tick
        return

    runCharacterCommand: (character) ->
        if not character.moves?
            return
        if character.moves.length > 0
            command = character.moves.splice(0, 1)[0]
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

        return

    start: ->
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

    move: (steps, character) ->
        if not character?
            character = @protagonist

        if character.moves.length > 0 and
          character.moves[character.moves.length - 1].key == 'stand'
            character.moves.pop()
        character.moves.push {
            key: 'startMove',
            exec: ((char) ->
                success = @_move(char)
                return {success: success, continueExecution: false}
                ).bind @, character
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
            character.x = newx
            character.y = newy
            moved = true
        else
            @visual.changeState character.index, 4
        return moved

    checkCanMove: (newX, newY, character) ->
        canNotMove = false
        if newX < 0 or newX >= @gameManager.config.visual.grid.gridX\
          or newY < 0 or newY >= @gameManager.config.visual.grid.gridY
            # Player is out of bounds of grid.
            canNotMove = true

        if character.group?
            for name, otherCharacter of @gameConfig.characters
                if otherCharacter == character
                    continue
                if not otherCharacter.blocks?
                    continue
                if newX == otherCharacter.x and \
                      newY == otherCharacter.y and \
                      character.group in otherCharacter.blocks
                    canNotMove = true
        return canNotMove

    turn: (direction, character) ->
        if not character?
            character = @protagonist

        if character.moves.length > 0 and
          character.moves[character.moves.length - 1].key == 'stand'
            character.moves.pop()

        character.moves.push {
            key: 'turn',
            exec: ((dir, char) ->
                continueExec = @_turn dir, char
                return {success: true, continueExecution: continueExec}
                ).bind @, direction, character
        }
        @_stand character
        return

    turnRight: (character) ->
        if not character?
            character = @protagonist

        if character.moves.length > 0 and
          character.moves[character.moves.length - 1].key == 'stand'
            character.moves.pop()

        character.moves.push {
            key: 'turn',
            exec: ((char) ->
                continueExec = @_turn ((char.dir + 1) % 4), char
                return {success: true, continueExecution: continueExec}
                ).bind @, character
        }
        @_stand(character)
        return

    turnLeft: (character) ->
        if not character?
            character = @protagonist

        if character.moves.length > 0 and
          character.moves[character.moves.length - 1].key == 'stand'
            character.moves.pop()

        character.moves.push {
            key: 'turn',
            exec: ((char) ->
                continueExec = @_turn ((char.dir + 3) % 4), char
                return {success: true, continueExecution: continueExec}
                ).bind @, character
        }
        @_stand(character)
        return

    _turn: (direction, character) ->
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
        @startedGame = false
        alert "You Have Lost!"
        clockHandle = setInterval @clock, 17
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

    go: (steps) =>
        steps = 1 if steps is undefined
        # log "Go #{steps} steps."
        @gameState.move steps

    turn: (dir) =>
        # log "turn '#{dir}'"
        return if dir is undefined
        d = $.inArray(dir, ['N','E','S','W'])
        if d >= 0
            @gameState.turn d
        else
            d = $.inArray(dir, ['North','East','South','West'])
            if d >= 0
                @gameState.turn d
            else if !isNaN d
                @gameState.turn (4 + dir % 4) % 4
        return

    turnRight: =>
        # log "turnRight"
        @gameState.turnRight()
        return

    turnLeft: =>
        # log "turnLeft"
        @gameState.turnLeft()
        return

    turnAndGo: (direction, steps) =>
        # log "turnAndGo #{direction} #{steps}"
        @turn direction
        @go steps
        return

    goNorth: (steps) => @turnAndGo 0, steps
    goEast:  (steps) => @turnAndGo 1, steps
    goSouth: (steps) => @turnAndGo 2, steps
    goWest:  (steps) => @turnAndGo 3, steps

    # used in sequence4
    mysteryA: => @goEast 4
    mysteryB: => @goSouth 1
    mysteryC: => @goWest 2
