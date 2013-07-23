if not deepcopy?
    deepcopy = (src) -> $.extend(true, {},src)

class window.PaintGameState
    clockHandle = null

    constructor: (@gameManager, waitForCode) ->
        @gameConfig = deepcopy @gameManager.config.game
        @gameCommands = new PaintGameCommands @
        @visual = @gameManager.visual
        @score = 0
        @stars = 0
        @tick = 0
        @finishedExecuting = false
        @startedExecuting = false
        @commands = []
        @picture = []
        for i in [0..@gameManager.config.visual.grid.gridY] by 1
            temp = [@gameManager.config.visual.grid.gridX]
            @picture.push temp

        if clockHandle?
            clearInterval clockHandle
        clockHandle = setInterval @clock, 17
        @startedGame = if waitForCode then false else true
        return

    getGameCommands: ->
        return @gameCommands

    clock: =>
        if @startedGame == true
            if @tick % 30 == 0
                @checkEvents()
                if @commands.length > 0
                    command = @commands.splice(0, 1)[0]
                    command.exec()
                else
                    @finishedExecuting = @startedExecuting
        @visual.getFrame @gameManager.config.visual, @tick
        @tick++
        return

    checkEvents: ->
        if @finishedExecuting
            won = true
            for name, pixel of @gameConfig.characters
                if (pixel.match?) and (pixel.match != @picture[pixel.x][pixel.y])
                        won = false
            if won
                @gameWon()
        return

    start: ->
        @startedExecuting = true
        @startedGame = true
        return

    drawPixel: (x, y, color) ->
        @commands.push {
            key: 'drawPixel',
            exec: @_drawPixel.bind @, x, y, color
        }
        return

    _drawPixel: (x, y, color) ->
        char = @gameManager.generateCharacter color,
                x, y, false
        @visual.pushCharacter @gameManager.config.visual, char.visual
        @picture[x][y] = color
        return

    gameWon: =>
        if not @startedGame
            return
        playAudio 'victory.ogg'
        @stars += 1
        @score += 5
        @startedGame = false
        @gameManager.gameWon @score, @stars

        gameName = @gameManager.gameName()
        gameIndex = @gameManager.environment.codeland.currentQuest.games.indexOf gameName
        gameIndex = ++gameIndex % @gameManager.environment.codeland.currentQuest.games.length
        gameName = @gameManager.environment.codeland.currentQuest.games[gameIndex]
        window.objCloud 400, "Well Done!",
            "body", "30%", "30%", 3, gameName, @gameManager
        return

    gameLost: =>
        if not @startedGame
            return
        if clockHandle?
            clearInterval clockHandle
        @startedGame = false
        playAudio 'defeat.ogg'
        window.objCloud 400, "Try again!",
            "body", "30%", "30%", 3, "none", @gameManager
        clockHandle = setInterval @clock, 17
        return

    stopGame: =>
        if clockHandle?
            clearInterval clockHandle
        @startedGame = false
        return

class PaintGameCommands
    constructor: (@gameState) ->
        return

    finishedParsingStartGame: ->
        @gameState.start()
        return

    drawPixel: (x, y, color) ->
        @gameState.drawPixel x, y, color
        return

    getPixel: (x, y) ->
        console.log "getPixel(#{x},#{y}) called"
        return
