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
        ###
            Internal Function (used only by the code in this file)

            Checks if the gamestate necessitates triggering any event.
            For paint games it is only necessary if the game finished to
            check if it was done correctly.
        ###
        if @finishedExecuting
            if @checkPainting()
                @gameWon()
            else
                @gameLost()
        return

    start: ->
        ###
            Internal Function (used only by the code in this file)

            Starts the game
        ###
        @startedExecuting = true
        @startedGame = true
        return

    drawPixel: (x, y, color) ->
        ###
            External Function (used by something outside of this file)

            Places a draw pixel command on the commands queue.

            @param x
                The x position of the pixel
            @param y
                The y position of the pixel
            @param color
                The color of the pixel
        ###
        if not @gameManager.config.game.characterBase.hasOwnProperty color
            return
        char = @gameManager.generateCharacter color,
                x, y, false
        char.color = color
        @picture[x][y] = char
        @commands.push {
            key: 'drawPixel',
            exec: @_drawPixel.bind @, x, y, char
        }
        return

    _drawPixel: (x, y, char) ->
        ###
            Internal Function (used only by the code in this file)

            Draws the given pixel at the x and y locations with color color.

            @param x
                The x position of the pixel
            @param y
                The y position of the pixel
            @param char
                The pixel to draw
        ###
        if @picture[x][y]?
            @visual.removeCharacter @gameManager.config.visual, @picture[x][y].visual
        @visual.pushCharacter @gameManager.config.visual, char.visual
        @picture[x][y] = char
        return

    getPixel: (x, y) ->
        ###
            External Function (used by something outside of this file)

            Returns the pixel color at position (x, y)

            @param x
                The x position of the pixel to query
            @param y
                The y position of the pixel to query
        ###
        if @picture[x][y]
            return @picture[x][y].color
        else
            return "white"

    gameWon: =>
        ###
            Internal Function (used only by the code in this file)

            Stops the game and reports the win to the game Manager.
        ###
        return if not @startedGame
        @stopGame()
        @gameManager.gameWon()
        return

    gameLost: =>
        ###
            Internal Function (used only by the code in this file)

            Stops the game and reports the loss to the game Manager.
        ###
        return if not @startedGame
        @stopGame()
        @gameManager.gameLost()
        return

    stopGame: =>
        ###
            External Function (used by something outside of this file)

            Stops the game.
        ###
        clearInterval clockHandle if clockHandle?
        clockHandle = null
        @startedGame = false
        return

class PaintGameCommands
    ###
        A class to contain the functions called by the student's
        Java code for paint games.
    ###
    constructor: (@gameState) ->
        return

    finishedParsingStartGame: ->
        ###
            Java Function (called by the Java code)

            Starts the game.
        ###
        @gameState.start()
        return

    drawPixel: (x, y, color) ->
        ###
            Java Function (called by the Java code)

            Draws a pixel at position (x, y) of color color.

            @param x
                The x position of the pixel
            @param y
                The y position of the pixel
            @param color
                The color of the pixel
        ###
        @gameState.drawPixel x, y, color
        return

    getPixel: (x, y) ->
        ###
            Java Function (called by the Java code)

            Returns the color of the pixel at (x, y)

            @param x
                The x position of the pixel to query
            @param y
                The y position of the pixel to query
        ###
        return @gameState.getPixel x, y
