class window.gameSelector
	cont = null
	constructor: (@div, @dis) ->
		tmp = document.createElement("div")
		cont = $(tmp)
		$(tmp).css(height:'100%', overflow:'auto',position:'relative','font-size':($(window).height()*0.02) + 'px')
		$(tmp).attr("id","gameSelection")
		@div.append(tmp)
		return

	buildDiv: (game, desc, player, canPlay, codeland) ->
			tmp1 = document.createElement("div")
			$(tmp1).css({width:'50%',height:'46%','border-style':'double','border-width':'medium','margin-bottom':'1%',"margin-top":"1%",position:'relative',left:'25%',"background-color":"#003366"})
			$(tmp1).attr("id","select#{game}")
			cont.append(tmp1)



			@buildAn(tmp1,canPlay)
			@buildScore(tmp1,player)
			@buildInfo(tmp1,desc)
			@canPlay(tmp1,canPlay, codeland, game)

	buildAn: (con,canPlay) ->
		tmp2 = document.createElement("img")
		$(con).append(tmp2)
		$(tmp2).css({width:'25%',height:'80%',position:'absolute',left:'5%',top:'10%',margin:0,padding:0})
		derp = () ->
			if $(tmp2).attr("src") is "img/wmn1_fr1.gif"
				$(tmp2).attr("src","img/wmn1_fr2.gif")
			else
				$(tmp2).attr("src","img/wmn1_fr1.gif")
		if canPlay
			setInterval(derp,450)
		else
			$(tmp2).attr("src","img/wmn1_fr1.gif")

	buildScore: (con,player) ->
		tmp = document.createElement("div")
		$(con).append(tmp)
		$(tmp).css({width:'25%',height:'80%',position:'absolute',left:'35%',top:'10%',margin:0,padding:0})

		tmp1 = document.createElement("p")
		tmp2 = document.createElement("p")
		tmp3 = document.createElement("div")

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
				$(tmp).append("<img src='img/star.png' width='20%' height='20%'></img>")
			for es in [player?.stars...3] by 1
				$(tmp).append("<img src='img/stare.png' width='20%' height='20%'></img>")
		return

	buildInfo: (con,desc) ->
		tmp = document.createElement("div")
		$(con).append(tmp)
		$(tmp).css({width:'30%',height:'80%',position:'absolute',left:'65%',top:'10%',margin:0,padding:0})

		tmp1 = document.createElement("p")
		tmp2 = document.createElement("p")

		$(tmp).append(tmp1)
		$(tmp).append(tmp2)

		$(tmp1).text("Name:  #{desc.name}")
		$(tmp2).text("Description:  #{desc.description}")


	canPlay: (con, cp, codeland, game) ->
		if cp
			$(con).click( -> codeland.startGame(game) )
		else
			ovr = document.createElement("div")
			$(con).prepend(ovr)
			$(ovr).css({'opacity':'.5','width':'100%','height':'100%',position:'inherit','z-index':'1','background-color':'#000000'})
