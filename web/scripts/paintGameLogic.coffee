# Some browsers have a deepcopy function, others do not.
# For those who do not, we use the JQuery deepcopy function.
if not deepcopy?
    deepcopy = (src) -> $.extend(true, {},src)

class window.PaintGameLogic
    ###
        A class to hold the game logic for paint games
    ###
    constructor: (@gameState, @gameManager) ->
        ###
            Sets up the game logic for a paint game

            @param gameState
                The game state which is executing this logic
            @param gameManager
                The game manager which is running the game using
                this logic
        ###
        @gameConfig = deepcopy @gameManager.config.game
        @gameCommands = new PaintGameCommands @
        @visual = @gameManager.visual
        @score = 0
        @stars = 0
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
        return

    startExecuting: ->
        @gameState.gameStarted()
        return

    finishExecuting: ->
        @gameState.gameFinished()
        return

    getGameCommands: ->
        ###
            External Function (used by something outside of this file)

            Returns a handle to this games commands (a class).
        ###
        return @gameCommands

    checkEvents: (startedExecuting, finishedExecuting) ->
        ###
            External Function (used by something outside of this file)

            Checks if the gamestate necessitates triggering any event.
            For paint games it is only necessary if the game finished to
            check if it was done correctly.

            Note:
            Currently the score is set at 100% for winning paint games and
            stars earned is 1.
        ###
        if finishedExecuting
            if @checkPainting()
                @gameState.gameWon 100, 1
            else
                @gameState.gameLost()
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

    drawPixel: (x, y, color) ->
        ###
            External Function (used by something outside of this file)

            Draws the given pixel at the x and y locations with color color.

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


class PaintGameCommands
    ###
        A class to contain the functions called by the student's
        Java code for paint games.
    ###
    constructor: (@gameLogic) ->
        return

    gameExecutionStart: =>
        ###
            Java Function (called by the Java code)

            Starts the game.
        ###
        @gameLogic.startExecuting()
        return

    gameExecutionFinish: =>
        ###
            Java Function (called by the Java code)

            Marks the game has finished executing.
        ###
        @gameLogic.finishExecuting()
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
        @gameLogic.drawPixel x, y, color
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
        return @gameLogic.getPixel x, y
