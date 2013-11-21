# Some browsers have a deepcopy function, others do not.
# For those who do not, we use the JQuery deepcopy function.
if not deepcopy?
    deepcopy = (src) -> $.extend(true, {}, src)

class window.PaintGameState
    ###
        A class to contain the game logic for paint games.
    ###
    clockHandle = null

    constructor: (@gameManager, waitForCode) ->
        ###
            Sets up the game's constants and the visual display

            @param gameManager
                The game manager running this game
            @param waitForCode
                Whether or not to wait for the students code to exectute
                to start the game (and start checking for events).
        ###
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

        for name, character of @gameConfig.characters
            if name.indexOf('Border') == -1
                character.color = character.sprite
                @picture[character.x][character.y] = character

        if clockHandle?
            clearInterval clockHandle
        clockHandle = setInterval @clock, 17
        @startedGame = if waitForCode then false else true
        return

    getGameCommands: ->
        ###
            External Function (used by something outside of this file)

            Returns a handle to this games commands (a class).
        ###
        return @gameCommands

    clock: =>
        ###
            Internal Function (used only by the code in this file)

            The main engine behind the game.
            This function is called every X milliseconds via setInterval.
            Each time it is called it updates the visual and every Y times
            it is called it checks for events and executes the next command
            in the queue.
        ###
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

    checkPainting: ->
        ###
            Internal Function (used only by the code in this file)

            Returns whether or not the painting has been filled
            out correctly.
        ###
        correct = true
        #Check border filling
        for name, pixel of @gameConfig.characters
            expected = pixel.match
            expected ?= pixel.color
            if expected == @picture[pixel.x][pixel.y]?.color
                    @picture[pixel.x][pixel.y].matched = true
            else
                correct = false
        # Check for painting over squares that should not have been painted
        for x in [0..@gameManager.config.visual.grid.gridX]
            for y in [0..@gameManager.config.visual.grid.gridY]
                pixel = @picture[x][y]
                if pixel
                    if !pixel.matched
                        correct = false
                    pixel.matched = false
        return correct

    checkEvents: ->
        if @finishedExecuting
            if @checkPainting()
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
        return if not @startedGame
        @stopGame()
        @gameManager.gameWon()
        return

    gameLost: =>
        return if not @startedGame
        @stopGame()
        @gameManager.gameLost()
        return

    stopGame: =>
        clearInterval clockHandle if clockHandle?
        clockHandle=null
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
