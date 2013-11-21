class window.DoppioGameState
    ###
        A class to contain the gamestate for games run via doppio.
    ###
    clockHandle = null

    constructor: (@gameManager, @gameLogicType) ->
        ###
            Initializes the game logic and the visual.

            @param gameManager
                The game manager running this game
            @param gameLogic
                Which game logic to use
        ###
        @visual = @gameManager.visual
        @gameLogic = new window[@gameLogicType](@, @gameManager)
        @tick = 0
        @finishedExecuting = false
        @startedExecuting = false
        if clockHandle?
            clearInterval clockHandle
        clockHandle = setInterval @clock, 17
        return

    getGameCommands: ->
        ###
            External Function (used by something outside of this file)

            Returns a handle to this game's commands (a class).
        ###
        return @gameLogic.getGameCommands()

    clock: =>
        ###
            Internal Function (used only by the code in this file)

            Updates the visual and asks the game logic to check for events
            every 30 ticks.
        ###
        if @startedExecuting == true
            if @tick % 30 == 0
                @gameLogic.checkEvents @startedExecuting, @finishedExecuting
        @visual.getFrame @gameManager.config.visual, @tick
        @tick++
        return

    gameWon: (scores, stars) =>
        ###
            External Function (used by something outside of this file)

            Stops the game and reports the win to the game Manager.
        ###
        return if not @finishedExecuting
        @stopGame()
        @gameManager.gameWon scores, stars
        return

    gameLost: =>
        ###
            External Function (used by something outside of this file)

            Stops the game and reports the loss to the game Manager.
        ###
        return if not @finishedExecuting
        @stopGame()
        @gameManager.gameLost()
        return

    gameStarted: =>
        @startedExecuting = true
        return

    gameFinished: =>
        @finishedExecuting = true
        return

    stopGame: =>
        ###
            External Function (used by something outside of this file)

            Stops the game.
        ###
        clearInterval clockHandle if clockHandle?
        clockHandle = null
        @startedExecuting = false
        @finishedExecuting = false
        return