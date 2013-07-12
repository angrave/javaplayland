"use strict"
# things assigned to root will be available outside this module
root = exports ? this.codeland = {}
root.UIcont = null

root.initialize = (UIcont) ->
    root.gameSelectionScrollPosition = 0
    root.loadJSONConfigs()
    root.initializeDoppio()
    root.UIcont = UIcont
    player = root.getPlayer()
    root.drawGameMap(player)
    return

root.initializeDoppio = ->
    root.doppioWrapper = 'wrapper.bsh'
    node.fs.writeFileSync root.doppioWrapper, root.quest.commandBeanshell
    root.doppioAPI = new DoppioApi null, console.log, root.doppioWrapper
    # classes.doppio.JavaScript.eval("console.log(1);");
    # root.doppioAPI = new DoppioApi null, console.log, null
    return

root.reference = () ->

 # FRONTEND UI
root.drawGameMap = (player) ->
    descriptions = root.getGameDescriptions()
    mapDiv = $(root.UIcont)
    mapDiv.empty()
    gameSequence = root.getGameSequence()
    sel = new gameSelector(mapDiv, false)
    addGameToMap = (game) ->
        # console.log "Game: #{game}"
        sel.buildDiv(game, descriptions[game], player.games[game], root.canPlay(game), codeland)
    addGameToMap game for game in gameSequence
    $('#gameSelection').animate {
        scrollTop: root.gameSelectionScrollPosition
    }, 0
    #TODO FADE IN
    return

root.startGame = (game) ->
    console.log("Starting #{game}")
    root.currentGame.finishGame() if root.currentGame

    gamediv = $(root.UIcont)
    tmp1 = document.getElementById("gameSelection")
    root.gameSelectionScrollPosition = tmp1.scrollTop
    root.UIcont.removeChild(tmp1)

    #Todo FADE IN

    description = root.getGameDescriptions()[game]
    env = {
        key: game
        description : description
        visualMaster: root.visualMaster
        frameRate: root.visualMaster.frameRate
        gamediv : gamediv
        player : root.getPlayer()
        codeland : this
    }

    managerString  = description?.manager ?= 'GameManager'

    root.currentGame = new window[managerString](env)

    root.currentGame.startGame()

deepcopy = (src) -> $.extend(true, {}, src)

#IE Support ....
# if not console?
#     console = {}
if console.log == null
    console.log = -> return

# BACKEND Methods useful for all games
root.getString = (key) -> localStorage.getItem key

root.setString = (key, value) -> localStorage.setItem key, value

root.clearString = (key) -> localStorage.removeItem key

root.load = (key) ->
    val = root.getString key
    return null unless val?
    result = JSON.parse val
    return result if result?
    throw new Error("Could not parse " + val)

root.store = (key, val) ->
    throw new Error("Value must exist") unless val?
    root.setString(key, JSON.stringify val)
    return

#Updates the player data
root.storeGameCompletionData = (key, data) ->
    throw new Error("Cannot be null") unless key? && data?
    root.updatePlayer((p)-> p.games[key] = data)
    root.showMap()
    return

root.showMap = () ->
    root.drawGameMap root.getPlayer()
    return

root.getGame = ->
    return getPlayer().currentGame

root.getPlayer = ->
    root.currentPlayer ?= root.load("CurrentPlayer")
    root.currentPlayer ?= {
        id : +(new Date())
        currentGame : ''
        first : ''
        last : ''
        avator : 'generic'
        games : {
            java1a : {
                hiscore : 20
                stars : 1
                passed : true
            }
        }
    }

root.updatePlayer = (callback) ->
    player = root.getPlayer()
    callback(player)
    root.store("CurrentPlayer", player)
    return

root.clearPlayer = ->
    root.clearString "CurrentPlayer"
    return

root.loadJSONConfigs = () ->
    if not root.gameDescriptions?
        root.gameDescriptions = {}

    jQuery.ajax({
        dataType: 'json',
        url: 'config/defaults.json',
        async: false,
        success: (data) ->
            root.gameDefaults = data
            return
        })

    jQuery.ajax({
        dataType: 'json',
        url: 'config/quest1.json',
        async: false,
        success: (data) ->
            root.quest = data
            for game in data.games
                jQuery.ajax({
                    dataType: 'json',
                    url: "config/#{game}.json"
                    async: false,
                    success: (gameData) ->
                        root.addToObject root.gameDefaults, gameData
                        root.convertShorthandToCode gameData
                        root.gameDescriptions[game] = gameData
                        return
                    })
            return
    });
    jQuery.ajax({
        dataType: 'json',
        url: 'config/visualMaster.json',
        async: false,
        success: (data) ->
            root.visualMaster = data
            return
        })
    return

root.addToObject = (source, destination) ->
    for key, value of source
        if key of destination
            if typeof value == "object"
                root.addToObject value, destination[key]
        else
            destination[key] = value
    return

root.convertShorthandToCode = (gameData) ->
    if gameData.code.initial?
        return
    initial = ''
    shorthand = gameData.code.shorthand
    while shorthand != ''
        for short in gameData.code.shorthandKey
            re = new RegExp short.regex
            result = re.exec shorthand
            if result != null
                if initial != ''
                    initial += '();\n'
                initial += short.repl
                break
        if result == null
            result = /\(.*\)/.exec shorthand
            if result != null
                initial += result[0] + ';'
        if result != null
            shorthand = shorthand.substring result.length
        else
            shorthand = shorthand.substring 1
    if initial.substring initial.length - 1 != ';'
        initial += '();'
    gameData.code.initial = initial
    return

root.getGameDescriptions = ->
    if root.gameDescriptions?
        return root.gameDescriptions
    root.loadJSONConfigs()
    return root.gameDescriptions

root.getGameSequence = ->
    return root.gameSequence if root.gameSequence
    root.gameSequence = []
    games = root.getGameDescriptions()
    addGame = (name) =>
        return if $.inArray(name, root.gameSequence)!=-1
        doFirst = games[name].depends ?= []
        addGame g for g in doFirst
        root.gameSequence.push name
        return
    addGame(g) for g,ignore of games
    return root.gameSequence


root.canPlay = (game) ->
    player = root.getPlayer()
    #If already completed then no need to check dependencies
    return true if player?.games[game]?.passed

    depends = root.getGameDescriptions()[game]?.depends
    return true unless depends
    passCount = 0
    # Count number of dependencies that have completed
    #( (g)-> passCount++ if player?.games[g]?.passed )(g) for g in depends

    passCount++ for g in depends when player?.games[g]?.passed
    return passCount == depends.length