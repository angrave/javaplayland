"use strict"
# things assigned to root will be available outside this module
root = exports ? this.codeland = {}
root.UIcont = null

#IE Support ....

# if ( ! window.console)
#     window.console= { log: -> }


#Chrome support: 'this' must be the console object
#log = (mesg)-> console.log mesg

root.initialize = (UIcont) ->
    $('#copyrightinfo').click -> window.AboutPage()
    root.gameSelectionScrollPosition = 0
    root.loadJSONConfigs()
    root.UIcont = UIcont    
    root.initializeDoppio()
    return

root.initializeDoppio = ->
    root.doppioReady = false
    root.doppioPreloaded = false
    progress= $('#progress')
    count = 0;
    last_display = ""
    progress_cb = (ignore_incorrect_fraction)->
        count = count + 1
        display = Math.floor((100*count) / 391) 
        if(display==100) 
            display = "Starting Java Virtual Machine..."
        else display = "Opening "+display
        if(last_display != display)
            last_display = display
            progress.html display
    preload_cb = ->
        root.doppioAPI.preload root.beanshellPreload, root.wrapperCompiled_cb
        root.doppioPreloaded = true
    root.doppioAPI = new DoppioApi null, preload_cb, progress_cb
    return


root.wrapperCompiled_cb = =>
    root.doppioReady = true
    console.log 'Finished Preloading Doppio'
    player = root.getPlayer()
    root.drawGameMap(player)
    window.appendBar("#mainbody")
    if root.wrapperCompiledCallback?
        console.log 'Found Callback, running'
        root.wrapperCompiledCallback()
    return

root.waitForWrapper = (callback) ->
    root.wrapperCompiledCallback = callback
    return

root.reference = () ->

 # FRONTEND UI
root.drawGameMap = (player) ->
    descriptions = root.getGameDescriptions()
    mapDiv = $(root.UIcont)
    mapDiv.empty()

    gameSequence = root.getGameSequence()
    sel = new gameSelector(mapDiv, false)
    tmp1 = document.getElementById("gameSelection")

    count = 0
    addGameToMap = (game) ->
        # console.log "Game: #{game}"
        count = count + 1
        sel.buildDiv(count, game, descriptions[game], player.games[game], root.canPlay(game), codeland)
#    addGameToMap game for game in gameSequence
    qcount = 0
    for quest in root.quests
        $("<div bgcolor='#888888'>Quest #{++qcount}:#{quest.title}</div>").appendTo tmp1
        for gameKey in quest.games
            addGameToMap gameKey
 
    $('<span style="font-size:200%" class="cursiveHeadline">Choose your Java Game</span><br>').prependTo tmp1
    $('<img src="/img/cc0/treasuremap-128px.png">').prependTo tmp1

    $('#gameSelection').animate {
        scrollTop: root.gameSelectionScrollPosition
    }, 0
    #TODO FADE IN
    return

root.startGame = (game) ->
    console.log("Starting #{game}")
    for quest, index in root.quests
        found = quest.games.indexOf game
        if found != -1
            root.currentQuest = root.quests[index]
            break
    root.currentGame.finishGame() if root.currentGame
    root.currentGame = null
    
    gamediv = $(root.UIcont)
    tmp1 = document.getElementById("gameSelection")
    if tmp1 != null
        root.gameSelectionScrollPosition = tmp1.scrollTop
        root.UIcont.removeChild(tmp1)

    #Todo FADE IN

    description = root.getGameDescriptions()[game]
    stats = root.loadGameStats(game) 
    stats.openedCount++
    root.storeGameStats(game,stats)
    
    env = {
        key: game
        description : description
        visualMaster: root.visualMasters[game]
        frameRate: root.visualMasters[game].frameRate
        gamediv : gamediv
        player : root.getPlayer()
        codeland : this
        backEnd: description.backEnd
        gameState: description.gameState
        stats : stats        
    }
    #Not used ... window.location.hash='game='+encodeURIComponent(game)
    root.currentGame = new GameManager env
    root.currentGame.startGame()
    root.currentGame.helpTips() unless env.stats.runCount >0
    return

deepcopy = (src) -> $.extend(true, {}, src)

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

root.loadGameStats = (gameKey) ->
    p=root.getPlayer()
    data = p.games[gameKey] ?= {}
#Ensure we have the minimum number of expect properties
    data.abortCount ?=0
    data.runCount ?=0
    data.winCount ?=0
    data.lostCount ?=0
    data.resetCount ?=0
    data.openedCount ?=0
    data.hiscore ?=0
    data.passed ?= false
    data.stars ?= 0
    data.tipsCount ?= 0
    return data

#Updates the player data
root.storeGameStats = (key, data) ->
    throw new Error("Cannot be null") unless key? && data?
    root.updatePlayer((p)-> 
        p.games[key] ?= {} 
        $.extend(p.games[key],data)
    )
    return

root.showMap = () ->
    root.currentGame.finishGame() if root.currentGame
    root.wrapperCompiledCallback = null if root.wrapperCompiledCallback?
    root.currentGame = null
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
        games : { }
    }

root.updatePlayer = (callback) ->
    player = root.getPlayer()
    callback(player)
    root.store("CurrentPlayer", player)
    return

root.clearPlayer = ->
    root.clearString "CurrentPlayer"
    return

root.readJSON = (theurl, cb) ->
    fail = false
    console.log "Reading #{theurl}"
    try
        jQuery.ajax {
            dataType: 'json',
            url: theurl,
            async: false,
            error : () ->
                fail = true
                console.log "Could not read #{theurl}"
                cb(undefined)
                return
            success: (data) ->
                cb(data)
                return
            }
    catch exception
        fail= true
        console.log "#{theurl}: #{exception} #{exception.message} #{exception.stack}"
    if(fail)
        throw "Configuration Exception reading #{theurl}"
    return

root.loadJSONConfigs = () ->
    if not root.gameDescriptions?
        root.gameDescriptions = {}
    configFail = false
    root.readJSON 'config/config.json', (data) ->
        if data == undefined
            configFail = true
        root.baseDefaults = data.defaults
        root.gameDefaults = {}
        for type in data.gameTypes
            root.readJSON "config/#{type}", (typeData) ->
                if typeData == undefined
                    configFail = true
                root.gameDefaults[typeData.gameType] = typeData
                return
        root.quests = []
        root.visualMasters = {}
        root.beanshellPreload = data.beanshellPreload
        questIndex = -1
        for quest in data.quests
            root.readJSON "config/#{quest}", (questData) ->
                if questData == undefined or questData.key == undefined
                    configFail = true
                ++questIndex
                root.quests[questIndex] = questData
                for game in questData.games
                    root.readJSON "config/#{game}.json", (gameData) ->
                        if gameData == undefined
                            configFail = true
                        try
                            root.addToObject root.baseDefaults, gameData
                            root.addToObject root.gameDefaults[gameData.gameType].defaults, gameData
                            root.visualMasters[game] = root.gameDefaults[gameData.gameType].visualMaster
                            root.stringifyConfigArrays gameData
                            root.convertShorthandToCode gameData
                            root.addHintsToCode gameData
                            root.gameDescriptions[game] = gameData
                            return
                        catch error
                            configFail = true
                            console.log "#{error} #{error.message} #{error.stack}"
                        return
                return
        root.currentQuest = root.quests[0]
        return
    if configFail
        root.gameDescriptions = null
        throw "Configuration Exception"
    return

root.addToObject = (source, destination) ->
    for key, value of source
        if key of destination
            if typeof value == "object"
                root.addToObject value, destination[key]
        else
            destination[key] = value
    return

root.stringifyConfigArrays = (gameData) ->
    gameData.game.map = gameData.game.map.join '\n' if gameData?.game.map?.join?
    gameData.code.prefix = gameData.code.prefix.join '\n' if gameData?.code.prefix.join?
    if gameData.code.prefix.charAt(gameData.code.prefix.length - 1) != '\n'
        gameData.code.prefix += '\n'
    gameData.code.postfix = gameData.code.postfix.join '\n' if gameData?.code.postfix.join?
    gameData.code.initial = gameData.code.initial.join '\n' if gameData?.code.initial?.join?
    return

root.convertShorthandToCode = (gameData) ->
    if gameData.code.initial?
        return
    initial = ''
    shorthand = gameData.code.shorthand
    if not shorthand?
        return
    while shorthand != ''
        for short in gameData.code.shorthandKey
            re = new RegExp short.regex
            result = re.exec shorthand
            if result != null
                if initial != ''
                    last = initial.substring(initial.length - 1)
                    if last == ';'
                        initial += '\n'
                    else if last != '\n'
                        initial += '();\n'
                initial += short.repl
                break
        if result == null
            result = /\(.*?\)/.exec shorthand
            if result != null
                initial += result[0] + ';'
        if result != null
            shorthand = shorthand.substring result[0].length
        else
            shorthand = shorthand.substring 1
    if initial != '' && initial.substring(initial.length - 1) != ';'
        initial += '();'
    gameData.code.initial = initial
    return

root.addHintsToCode = (gameData) ->
    gameData.code.initial?=''
    if gameData.code.comments
        # Also ensures newlines in the data are properly commented out
        one = '// '+ ((gameData.code.comments.join('\n')).replace(/\n/g,'\n// '))+ '\n'
        # Hints go in prefix if it exists, otherwise they are prepended to the main area
        if gameData.code.prefix.length > 1 # Ignore lonely \n
            gameData.code.prefix = one + gameData.code.prefix
        else 
            gameData.code.initial = one + '\n' + gameData.code.initial
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
    return
