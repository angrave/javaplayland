class window.gameSelector
  cont = null
  config=null
  constructor: (@div, @dis) ->
    $("#acelne").remove()

    config=findConfig('scripts/config/gameSelection.json')
    tmp=makeDiv(null,config["tmpCSS"])
    cont = $(tmp)
    $(tmp).attr("id","gameSelection")
    @div.append(tmp)
    return

  buildDiv: (count, game, desc, player, canPlay, codeland) ->

    span = document.createElement("span")
    $(span).css(config["spanCSS"])

    $(span).attr("id","select#{game}")
    $(span).attr("class","select#{count}")
    cont.append(span)

    $(span).click(-> codeland.startGame(game) )
    if player?.passed is true  #Coded by Lavanya
        $(span).append """<b><font color="white">#{count}: #{desc.title}</font></b> """
        src = 'img/interface/star.png'
        img = $ '<img>', {
            id: 'star',
            src: src,
            style: 'max-height:16px',
            alt: "Start Game"
        }
        $(span).append img.get 0
    else
        $(span).append """<font color="white">#{count}: #{desc.title}</font>""" #Coded by Lavanya

  buildAn: (con,canPlay) ->
    tmp2 = makeImgElem(null,config["tmp2CSS"])
    $(con).append(tmp2)

    images=config["images"]
    problem = () ->
      if $(tmp2).attr("src") is images["womanFrontA"]
        $(tmp2).attr("src",images["womanFrontB"])
      else
        $(tmp2).attr("src",images["womanFrontA"])
   
    if canPlay
       setInterval(problem,450)
    else
       $(tmp2).attr("src",images["womanFrontA"])

  buildScore: (con,player) ->
    tmp=makeDiv(null,config["tmpBuildScoreCSS"])

    $(con).append(tmp)

    tmp1 = $('<p></p>')
    tmp2 = $('<p></p>')
    tmp3 = $('<p></p>')

    $(tmp).append(tmp1)
    $(tmp).append(tmp2)
    $(tmp).append(tmp3)

    if player?.passed is true
      $(tmp1).text("Status:  Complete")
    else
      $(tmp1).text("Status:  Incomplete")

    $(tmp2).text("Hi-Score: #{if player? then player.hiscore else 0}")

    if @dis
      $(tmp3).text("Stars: #{player?.stars}")
    else
      for ns in [1..player?.stars] by 1
        $(tmp).append("<img src='img/interface/star.png' width='20%' height='20%'></img>")
      for es in [player?.stars...3] by 1
        $(tmp).append("<img src='img/interface/stare.png' width='20%' height='20%'></img>")
    return

  buildInfo: (con,desc) ->
    tmp=makeDiv(null,cssData["tmpBuildInfoCSS"])

    $(con).append(tmp)

    tmp1 = $('<p></p>')
    tmp2 = $('<p></p>')

    $(tmp).append(tmp1)
    $(tmp).append(tmp2)

    $(tmp1).text("Name:  #{desc.name}")
    $(tmp2).text("Description:  #{desc.description}")


  canPlay: (con, cp, codeland, game) ->
    if cp
      $(con).click( -> codeland.startGame(game) )
    else
      over=makeDiv(null,cssData["tmpOverCSS"])
      ovr = $('<div></div>')
      $(con).prepend(ovr)
