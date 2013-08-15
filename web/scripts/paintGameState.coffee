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
            temp = []
            for i in [0..@gameManager.config.visual.grid.gridX] by 1
                temp.push null
            @picture.push temp

        for name,character of @gameConfig.characters
            if name.indexOf('Border') == -1
                character.color = character.sprite
                @picture[character.x][character.y] = character

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
                if not pixel.match?
                    continue
                if pixel.match != @picture[pixel.x][pixel.y]?.color
                    won = false
            if won
                @gameWon()
            else
                @gameLost()
        return

    start: ->
        @startedExecuting = true
        @startedGame = true
        return

    drawPixel: (x, y, color) ->
        if not @gameManager.config.game.characterBase.hasOwnProperty color
            return
        char = @gameManager.generateCharacter color,
                x, y, false
        char.color = color
        @picture[x][y] = char
        @commands.push {
            key: 'drawPixel',
            exec: @_drawPixel.bind @, x, y, color, char
        }
        return

    _drawPixel: (x, y, color, char) ->
        if @picture[x][y]?
            @visual.removeCharacter @gameManager.config.visual, @picture[x][y].visual
        @visual.pushCharacter @gameManager.config.visual, char.visual
        @picture[x][y] = char
        return

    getPixel: (x, y) ->
        if @picture[x][y]
            return @picture[x][y].color
        else
            return "white"

    gameWon: =>
        if not @startedGame
            return
        playAudio 'victory.ogg'
        @stars += 1
        @score += 5
        @startedGame = false
        @gameManager.gameWon @score, @stars

        gameName = @gameManager.gameName()
        codeland = @gameManager.environment.codeland
        gameIndex = codeland.currentQuest.games.indexOf gameName
        questIndex = codeland.quests.indexOf codeland.currentQuest
        if ++gameIndex == codeland.currentQuest.games.length
            questIndex = ++questIndex % codeland.quests.length
            gameIndex = 0
        gameName = codeland.quests[questIndex].games[gameIndex]
        messages = []
        messages[0] = 'Congratulations!'
        window.objCloud 400, messages,
            "body", "30%", "30%", 1.5, gameName, @gameManager
        @gameManager.gameRunFinished()
        return

    gameLost: =>
        if not @startedGame
            return
        if clockHandle?
            clearInterval clockHandle
        @startedGame = false
        playAudio 'defeat.ogg'
        messages = []
        messages[0] = "Try Again!"
        window.objCloud 400, messages,
            "body", "30%", "30%", 3, "none", @gameManager
        clockHandle = setInterval @clock, 17
        @gameManager.gameRunFinished()
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
        return @gameState.getPixel x, y
