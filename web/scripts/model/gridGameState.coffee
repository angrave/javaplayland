if not deepcopy?
    deepcopy = (src) -> $.extend(true, {},src)

class window.GridGameState
    clockHandle = null

    invalidParameterException: (value) ->
        @name = 'invalidParameterException'
        @value = value
        return

    #<--DIRECTIONS-->
    #       ^
    #       0
    #   < 3 4 1 >
    #       2
    #       v
    constructor: (@gameManager, waitForCode) ->
        @gameConfig = deepcopy @gameManager.config.game
        @gameCommands = new GridGameCommands @
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

    getGameCommands: ->
        return @gameCommands

    executeAICommand: (character, command) ->
        @character = character
        for arg, index in command.arguments
            if arg in ["character", "protagonist"]
                command.arguments[index] = this[arg]
        this[command.command].apply @, command.arguments
        @character = null
        return

    clock: =>
        if @startedGame == true
            if @tick % 30 == 0
                @checkEvents()
                if not @waiting
                    for name, character of @gameConfig.characters
                        try
                            @runCharacterCommand character
                        catch e
                            @gameLost()
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
        if character == @protagonist and character.moves.length == 0
            @protagonistDoneMoving = true
        if character.AI? and character.moves.length == 0
            for aiCommand in character.AI.normal
                @executeAICommand character, aiCommand
        if result?.continueExecution
            @runCharacterCommand character
        return

    leaveTrail: (placeTrail) ->
        if placeTrail? and not @protagonistDoneMoving
            char = @gameManager.generateCharacter 'trail',
                placeTrail.x, placeTrail.y, false
            @visual.pushCharacter @gameManager.config.visual, char.visual
        return

    checkEvents: ->
        # Just doing player collisions at the moment.
        if @protagonist.x < 0 or @protagonist.x >= @gameManager.config.visual.grid.gridX\
          or @protagonist.y < 0 or @protagonist.y >= @gameManager.config.visual.grid.gridY
            @protagonistFalls()

        triggers = {"victory": @gameWon, "loss": @gameLost, "fall": @protagonistFalls}
        for name, character of @gameConfig.characters
            if character == @protagonist
                continue
            if @protagonist.x == character.x and @protagonist.y == character.y
                if character.trigger?
                    if character.trigger != "victory" or\
                        (character.trigger == "victory" and\
                            @protagonistDoneMoving)
                        triggers[character.trigger]()
        if @protagonistDoneMoving and @protagonist.moving
            @visual.charAnimate @protagonist.index
            @protagonist.moving = false
            @gameLost()
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

    jump: (character, steps, line) ->
        if not character?
            character = @protagonist

        if character.moves.length > 0 and
          character.moves[character.moves.length - 1].key == 'stand'
            character.moves.pop()

        character.moves.push {
            key: 'jumping',
            exec: ((char) ->
                success = @_jump(char)
                return {success: success, continueExecution: false}
                ).bind @, character
        }


    move: (character, steps, line) ->
        if not character?
            character = @protagonist

        if character.moves.length > 0 and
          character.moves[character.moves.length - 1].key == 'stand'
            character.moves.pop()
        character.moves.push {
            key: 'startMove',
            exec: (((char, steps) ->
                success = @_move(char, steps)
                return {success: success, continueExecution: false}
                ).bind @, character, steps),
            line: line
        }
        return
        
    fail: (line)->
        @protagonist.moves.push {
            key: 'fail',
            exec: (((char, steps) ->
                @protagonistFalls()
                return {success: true, continueExecution: false}
                ).bind @, @protagonist, 1),
            line: line
        }
        return

    _moving: (character) ->
        if not character?
            character = @protagonist

        character.moves.unshift {
            key: 'moving',
            exec: ((char) ->
                success = @_move(char, 1)
                return {success: success, continueExecution: false}
                ).bind @, character
        }
        return

    _move: (character, steps) ->
        if not character?
            character = @protagonist

        if isNaN(steps)
            throw new @invalidParameterException steps
        for i in [1...steps] by 1
            @_moving(character)

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

#Refactor...
#_jump logic is similar to _move except we move two squares before the hit test
# character+5 to show jumping
    _jump: (character) ->
        if not character?
            character = @protagonist

        # Top Left: 0,0
        moved = false
        [xx, yy] = @computeStepInDirection(character.dir,
            character.x, character.y)
        [newx, newy] = @computeStepInDirection(character.dir,
                xx, yy)
        hitEvent = @checkCanMove(newx, newy, character)
        if !hitEvent
            @visual.changeState character.index, character.dir+6
            if character == @protagonist
                @leaveTrail {xx,yy}
                @leaveTrail {'x': character.x, 'y': character.y}
            character.x = newx
            character.y = newy
            moved = true
        else
            @visual.changeState character.index, 4
        return moved


    checkCanMove: (newX, newY, character) ->
        ###
            Returns true if the character CAN'T move.
        ###
        if character != @protagonist and\
          (newX < 0 or newX >= @gameManager.config.visual.grid.gridX\
          or newY < 0 or newY >= @gameManager.config.visual.grid.gridY)
            # Player is out of bounds of grid.
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
        return if not @startedGame
        @stopGame()
            
        @stars = 1
        @score = 5
        @gameManager.gameWon @score, @stars       
        return

    gameLost: =>
        return if not @startedGame
        @stopGame()
        @gameManager.gameLost()
        return

    protagonistFalls: =>
        for name, character of @gameConfig.characters
            character.moves = null
        @visual.changeState @protagonist.index, 5
        setTimeout @gameLost, 680
        return

    stopGame: =>
        @startedGame = false
            
        if clockHandle?
            clearInterval clockHandle
        
        for name, character of @gameConfig.characters
            if @visual.getState(character.index) != 5
                @visual.changeState character.index, 4
            character.moves = null
        return

    computeStepInDirection: (direction, currentX, currentY) ->
        # OK, we admint bits are more fun that lookup tables or a switch
        # sign is positive 1 for South 10, and East 01, -1 for North 00, and West 11
        [sign, isEastOrWest] = [-1 + ((direction + 1) & 2), direction & 1]
        newx = currentX + sign * isEastOrWest
        newy = currentY + sign * (1-isEastOrWest)
        return [newx, newy]

class GridGameCommands
    constructor: (@gameState) ->
        return

    finishedParsingStartGame: ->
        @gameState.start()
        return

    go: (steps, line) =>
        steps = 1 if steps is undefined
        steps = parseInt steps.toString(), 10
        if line is undefined
            line = steps
            steps = 1
        if isNaN(steps)
            @gameState.fail(line)
        #console.log "Go #{steps} steps."
        else
            @gameState.move @gameState.protagonist, steps, line
        return

    turn: (dir, line) =>
        if not line?
            line = 0
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
        if not line?
            line = 0
        @turn direction, line
        @go steps, line
        return
      

    jump: (line) =>
        @gameState.jump @gameState.protagonist, line
        return

    goNorth: (steps, line) => @turnAndGo 0, steps, line
    goEast:  (steps, line) => @turnAndGo 1, steps, line
    goSouth: (steps, line) => @turnAndGo 2, steps, line
    goWest:  (steps, line) => @turnAndGo 3, steps, line

    mysteryGo: (line) => @goEast 4, line
    mysteryMove: (line) => @goWest 2, line
