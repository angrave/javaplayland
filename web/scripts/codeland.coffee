"use strict"
# things assigned to root will be available outside this module
root = exports ? this.codeland = {}
root.UIcont = null

root.initialize = (UIcont) ->
    root.loadGameDescriptions()
    root.UIcont = UIcont
    player = root.getPlayer()
    root.drawGameMap(player)

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
    #TODO FADE IN
    return

root.startGame = (game) ->
    console.log("Starting #{game}")
    if not root.visualMaster
        root.visualMaster = {
            container: {
                width: 360,
                height: 360
                # id: "gbox"
            },
            preLoading: {
                protagonist: [
                    "img/wmn1_bk1.gif","img/wmn1_bk2.gif",
                    "img/wmn1_rt1.gif","img/wmn1_rt2.gif",
                    "img/wmn1_fr1.gif","img/wmn1_fr2.gif",
                    "img/wmn1_lf1.gif","img/wmn1_lf2.gif"
                ]
                vicflag: ["img/vicflag1.png","img/vicflag2.png"]
            }
        }
        root.visualFrameRate = 17
    root.currentGame.finishGame() if root.currentGame

    gamediv = $(root.UIcont)
    tmp1 = document.getElementById("gameSelection")
    root.UIcont.removeChild(tmp1)

    #Todo FADE IN

    description = root.getGameDescriptions()[game]
    env = {
        key: game
        description : description
        visualMaster: root.visualMaster
        frameRate: root.visualFrameRate
        gamediv : gamediv
        player : root.getPlayer()
        codeland : this
    }

    managerString  = description?.manager ?= 'GameManager'

    root.currentGame = new window[managerString](env)

    root.currentGame.startGame()

deepcopy = (src) -> $.extend(true, {},src)

#IE Support ....
# if not console?
#     console = {}
if console.log == null
    console.log = -> return

# BACKEND Methods useful for all games
root.getString = (key) -> localStorage.getItem key

root.setString = (key,value) -> localStorage.setItem key value

root.load = (key) ->
    val = root.getString key
    return null unless val?
    result = jQuery.parseJSON (val)
    return result if result?
    throw new Error("Could not parse "+val)

root.store = (key,val) ->
    throw new Error("Value must exist") unless val ?
    root.setString(key, jQuery.toJSON(val) )

#Updates the player data
root.storeGameCompletionData = (key, data) ->
    throw new Error("Cannot be null") unless key? && data?
    root.updatePlayer((p)-> p.games[key] = data)
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
    player  = root.getPlayer()
    callback(player)
    root.store("CurrentPlayer", player)
    return

root.loadGameDescriptions = () ->
    jQuery.ajax({
        dataType: "json",
        url: 'config/quest1.json',
        async: false,
        success: (data) ->
            root.gameDescriptions = data
            return
    });
    return

root.getGameDescriptions = ->
    if root.gameDescriptions?
        return root.gameDescriptions
    root.loadGameDescriptions()
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