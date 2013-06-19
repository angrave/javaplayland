"use strict"
# things assigned to root will be available outside this module
root = exports ? this.codeland = {}
root.UIcont = null

root.initialize = (UIcont) ->
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
    sel = new gameSelector(mapDiv,false)
    addGameToMap = (game) ->
        console.log "Game: #{game}"
        sel.buildDiv(game, descriptions[game], player.games[game], root.canPlay(game), codeland)
    addGameToMap game for game in gameSequence
    #TODO FADE IN
    return

root.startGame = (game) ->
    console.log("Starting #{game}")
    if not @visualMaster
        @visualMaster = {
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
            }
        }
        @visualFrameRate = 17
    @currentGame.finishGame() if @currentGame

    gamediv = $(root.UIcont)
    tmp1 = document.getElementById("gameSelection")
    root.UIcont.removeChild(tmp1)
    #Todo FADE IN

    description = root.getGameDescriptions()[game]
    env = {
        key: game
        description : description
        visualMaster: @visualMaster
        frameRate: @visualFrameRate
        gamediv : gamediv
        player : root.getPlayer()
        codeland : this
    }

    managerString  = description?.manager ?= 'GameManager'

    @currentGame = new window[managerString](env)

    @currentGame.startGame()

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
    @currentPlayer ?= root.load("CurrentPlayer")
    @currentPlayer ?= {
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


_sequence1 = {
    name : 'Code Sequence Puzzle #1'
    description : 'Find the correct sequence of code lines'
    task : 'Re-order existing code that only uses a small set of statements'
    tags : 'intro'
    editor : {
        buttons : ['switchUp','switchDown']
        commands : {
            go : { inputs:0, maxUses:8 }
            turnRight : { inputs:0, maxUses:1 }
        }
    }
    code : {
        prefix: ''
        postfix: ''
        show: false
        initial: 'go();\ngo();\ngo();\ngo();\ngo();\nturnRight();\ngo();\ngo();\ngo();'
    }
    events: {
        victory: [3,7]
    }
    game : {
        startpos : [1, 1]
        targetpos : [3, 5]
    }
    visual : {
        gameType: "grid",
        grid: {
            gridUnit: 30,
            border: 30,
            gridX: 10,
            gridY: 10
        },
        animation: {
            length: 30,
            pixMoveRate: 1
        },
        characters: {
            protagonist: {
                imgSet: 0,
                # x: 0,
                # y: 0,
                xOff: 2,
                yOff: 2,
                xSize: 26,
                ySize: 26
            }
        }
    }
    help : [ 'Oops your go <em>statements</em> and turnRight <em>statements</em>need to be in the correct <em>sequence of operations</em> to solve this puzzle',
    'Use up, down reset and test buttons to fix your code!','The reset button changes the code back to the original version']
    dyk : [ 'Computer programs contain many <em>statement</em>s.','Most of the time we need to write a ; after each statement','When the computer <em>executes</em> your program, it executes one statement at a time before executing the next one.','Computer programs are a like movie scripts and cooking recipies - the correct sequence matters!']
}


_sequence2= deepcopy _sequence1
_sequence2.name = 'Code Sequence Puzzle #2'
_sequence2.game = { startpos: [6,7], targetpos: [5,5]}
_sequence2.editor.commands = {go : { inputs:0, maxUses:7 }, turnLeft : { inputs:0, maxUses:4 }}
_sequence2.code.initial = 'go();\ngo();\ngo();\ngo();\ngo();\ngo();\n\nturnLeft();\nturnLeft();\nturnLeft();\ngo();'
_sequence2.depends = ['sequence1']
_sequence2.help = ['Perhaps if you go a bit too far you can end at the target square?' ]
_sequence2.dyk = [ 'When the Java compiler reads our program it looks for semicolons', 'So we could write our entire program on just one line but that would be very difficult for people to read!']


_sequence3= deepcopy _sequence2
_sequence3.name = 'Code Sequence Puzzle #3'
_sequence3.editor.buttons = ['delete']
_sequence2.editor.commands = {go : { inputs:0, maxUses:3 },goNorth : { inputs:0, maxUses:2 }, turnLeft : { inputs:0, maxUses:6 }, turnRight: { inputs:0, maxUses:2 }}
_sequence3.code.initial = 'turnLeft();\nturnRight();\nturnLeft();\nturnRight();go();\ngoNorth();\ngo();\nturnLeft();\nturnLeft();\nturnLeft();\nturnLeft();\ngo();\ngoNorth();'
_sequence2.game = { startpos: [7,3], targetpos: [5,2]}
_sequence3.depends = ['sequence1']
_sequence3.help = ['Time to debug this code!','This code has too many statements. Delete the unnecessary statements.']
_sequence3.dyk = ['When your code runs but does not work correctly you have a bug in your code!','Finding the cause and fixing the problem is called \'Debugging\'',]
_sequence2.depends = ['sequence1']

_sequence4= deepcopy _sequence3
_sequence4.name = 'Code Sequence Puzzle #4'
#goEast4.goSouth1.goWest2.
_sequence4.editor.buttons = ['switchUp','switchDown' , 'delete','mysteryA', 'mysteryB', 'mysteryC']
_sequence4.game = { startpos: [2,4], targetpos: [6,8]}
_sequence4.editor.commands = {mysteryA : { inputs:0, maxUses:5 }, mysteryB : { inputs:0, maxUses:5 }, mysteryC : { inputs:0, maxUses:5 }}
_sequence4.code.initial = ''
_sequence4.depends = ['sequence3']
_sequence4.help = ['Time to play! Write some test programs to discover out what each mystery function does']
_sequence4.dyk = []


root.getGameDescriptions = ->
    @gameDescriptions ?= {
        sequence1 : _sequence1
        sequence2 : _sequence2
        sequence3 : _sequence3
        sequence4 : _sequence4
    }
root.getGameSequence = ->
    return @gameSequence if @gameSequence
    @gameSequence = []
    games = root.getGameDescriptions()
    addGame = (name) =>
        return if $.inArray(name, @gameSequence)!=-1
        doFirst = games[name].depends ?= []
        addGame g for g in doFirst
        @gameSequence.push name
        return
    addGame(g) for g,ignore of games
    return @gameSequence


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