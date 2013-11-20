if not deepcopy?
    deepcopy = (src) -> $.extend(true, {},src)

class window.DoppioGameState

    constructor: (@gameManager, @gameLogic) ->
        return

    getGameCommands: ->
        return @gameCommands

