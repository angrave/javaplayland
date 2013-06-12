"use strict"
# things assigned to root will be available outside this module
root = exports ? this.codeland = {}


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
  
root.storeGameCompletionData = (key,data) ->
    throw new Error("Cannot be null") unless val? && data?
    p = root.getPlayer()
    p.games[key] = data
    root.store("PlayerData",p)
    
root.getPlayer = ->
    @currentPlayer ?= root.load("CurrentPlayer")
    @currentPlayer ?= {
        first : 'Jim'
        last : 'Jam'
        avator : 'generic'
        games : {
            java1a : {
                hiscore : 20
                stars : 1
                passed : true
            }
        }
    }


root.getGameDescriptions = ->
    @gameDescriptions ?= {
        java1a : { name : 'Blurp one' , description : 'Blurpy Java1a is great' }
        java3a : { name : 'Blurp three' , description : 'Blurpy Java3a is cool' , depends : [ 'java2a'] }    
        java2a : { name : 'Blurp two' , description : 'Blurpy Java2a is fantastic' , depends : [ 'java1a'] }    
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


 # FRONTEND UI   
root.drawGameMap = ->
    mapDiv = $('#mapdiv')
    gameSequence = root.getGameSequence()
    player = root.getPlayer()
    descriptions = root.getGameDescriptions()
    
    addGameToMap = (game) ->
        #!! Assumes name,description do not contain html
        entry=$("<div id='select#{game}'>#{descriptions[game].name},#{descriptions[game].description}</div>")
        info = player.games[game]
        if info
            entry.append(info.hiscore) if  info.hiscore
            entry.append(" Passed! ") if  info.passed 
            entry.append("Stars = #{info.stars}")  if info.stars
        entry.click( ->alert("You clicked #{game}") ) if root.canPlay game
        entry.appendTo(mapDiv)
          
    mapDiv.empty()
    addGameToMap game for game in gameSequence
    #TODO FADE IN
    return

root.startGame = (game) ->
    console.log("Starting #{game}")
    @currentGame.finishGame() if @currentGame
        
    gamediv = $('#gamediv')
    gamediv.empty()
    #Todo FADE IN
    
    gameconfig = {}
    env = {
        key: game
        description : root.getGameDescriptions()[game]
        gamediv : gameDiv
        player : root.getPlayer()
        codeland : this
        config : gameconfig 
    }
    
    managerString  = gameDescription.manager ?= 'GameManager'

    @currentGame = new this[managerString](env)

    @currentGame.startGame()