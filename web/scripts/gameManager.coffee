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
        $(editdiv).append '<button id="compileAndRun">Go</button>'
        $(editdiv).append '<button id="resetState">Reset</button>'
        @gameDiv.append(vis)

        @codeEditor = new EditorManager @editorDiv, @config.editor, @config.code
        @interpreter = new CodeInterpreter @config.editor.commands

        @environment.visualMaster.container.id = @visualDiv
        @visual = new GameVisual @environment.visualMaster, @environment.frameRate
        @addEventListeners()
        return

    startGame: ->
        @config.visual.characters.protagonist.x = @config.game.startpos[0]
        @config.visual.characters.protagonist.y = @config.game.startpos[1]
        @config.visual.characters.gflag.x = @config.game.targetpos[0]
        @config.visual.characters.gflag.y = @config.game.targetpos[1]
        @visual.startGame @config.visual
        @gameState = new MapGameState @
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
        return

    reset: =>
        @codeEditor.resetEditor()
        @startGame()
        return

    runStudentCode: =>
        @interpreter.scanText @codeEditor.getStudentCode()
        @startGame()
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
    constructor: (@gameManager) ->
        @gameConfig = deepcopy @gameManager.config.game
        @visual = @gameManager.visual
        @score = 0
        @stars = 0
        @playerMoves = []
        @protagonist = {
            x: @gameConfig.startpos[0],
            y: @gameConfig.startpos[1],
            dir: @gameConfig.characters.protagonist.dir
            index: @gameConfig.characters.protagonist.index
        }
        @target = {
            x: @gameConfig.targetpos[0]
            y: @gameConfig.targetpos[1]
        }
        @tick = 0
        if clockHandle?
            clearInterval clockHandle
        clockHandle = setInterval @clock, 17
        @startedGame = false
        return

    clock: =>
        @tick++
        if @startedGame and @tick % 30 == 0
            if @playerMoves.length > 0
                # Update Game State
                command = @playerMoves.splice(0, 1)[0]
                command.exec()
            else
                if @protagonist.x == @target.x and @protagonist.y == @target.y
                    @gameWon()
        @visual.getFrame @gameManager.config.visual, @tick
        return

    start: ->
        @_stand()
        @startedGame = true
        return

    _stand: ->
        @playerMoves.push {
            key: 'stand',
            exec: (->
                @visual.changeState @protagonist.index, 4
                return).bind @
        }
        return

    move: (steps) ->
        if @playerMoves.length > 0 and
          @playerMoves[@playerMoves.length - 1].key == 'stand'
            @playerMoves.pop()
        @playerMoves.push {
            key: 'startMove',
            exec: (->
                @_move()
                return).bind @
        }
        for i in [1...steps] by 1
            @_moving()
        return

    _moving: ->
        @playerMoves.push {
            key: 'moving',
            exec: (->
                @_move()
                return).bind @
        }

    _move: (steps) ->
        # Top Left: 0,0
        [newx, newy] = @computeStepInDirection(@protagonist.dir,
            @protagonist.x, @protagonist.y)
        hitEvent = @checkEvent(newx, newy)
        if !hitEvent
            @visual.changeState @protagonist.index, @protagonist.dir
            @protagonist.x = newx
            @protagonist.y = newy
        else
            @visual.changeState @protagonist.index, 4
        return

    turn: (direction) ->
        @playerMoves.push {
            key: 'turn',
            exec: (->
                @_turn direction
                return).bind @
        }
        @_stand()
        return

    turnRight: ->
        @playerMoves.push {
            key: 'turn',
            exec: (->
                @_turn ((@protagonist.dir + 1) % 4)
                return).bind @
        }
        @_stand()
        return

    turnLeft: ->
        @playerMoves.push {
            key: 'turn',
            exec: (->
                @_turn ((@protagonist.dir + 3) % 4)
                return).bind @
        }
        @_stand()
        return

    _turn: (direction) ->
        @protagonist.dir = direction
        @visual.charFace @protagonist.index, @protagonist.dir
        @visual.changeState @protagonist.index, 4
        return

    gameWon: ->
        clearInterval clockHandle
        @stars += 1
        @score += 5
        @gameManager.gameWon @score, @stars
        return

    checkEvent: (playerX, playerY) ->
        canNotMove = false
        if playerX < 0 or playerX >= @gameManager.config.visual.grid.gridX\
          or playerY < 0 or playerY >= @gameManager.config.visual.grid.gridY
            # Player is out of bounds of grid.
            canNotMove = true
        return canNotMove

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
    goWest:  (steps) => @turnAndGo 2, steps
    goSouth: (steps) => @turnAndGo 3, steps

    # used in sequence4
    mysteryA: => @goEast 4
    mysteryB: => @goSouth 1
    mysteryC: => @goWest 2
