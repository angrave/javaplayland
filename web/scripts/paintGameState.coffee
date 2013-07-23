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

        if clockHandle?
            clearInterval clockHandle
        clockHandle = setInterval @clock, 17
        @startedGame = false
        if not waitForCode then @start()
        return

    getGameCommands: ->
        return @gameCommands

    clock: =>
        # if @startedGame == true
            # if @tick % 30 == 0
        @visual.getFrame @gameManager.config.visual, @tick
        @tick++
        return

    start: ->
        @startedGame = true
        return

    drawPixel: (x, y, color) ->
        char = @gameManager.generateCharacter color,
                x, y, false
        @visual.pushCharacter @gameManager.config.visual, char.visual
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
        gameNumber = parseInt gameName.charAt gameName.length - 1, 10
        gameNumber++
        if gameNumber == 22
            gameNumber = 21
        gameName = gameName.slice 0, gameName.length - 1
        gameName = gameName.concat gameNumber
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
