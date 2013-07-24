window.appendBar = (d) ->

	coffeeisdumb = () ->
		if $(edge).attr("src") == "img/barin.png"
			$(cont).animate({"left":"0px"})
			$(cont).animate({"left":"-10px"})
			$(edge).attr({"src":"img/barout.png"})
		else
			$(cont).animate({"left":"0px"})
			$(cont).animate({"left":"-50px"})
			$(edge).attr({"src":"img/barin.png"})
		return false


	cont = document.createElement("div")
	edge = document.createElement("img")

	ref = document.createElement("img")
	select = document.createElement("img")
	about = document.createElement("img")

	$(cont).css({"width":"50px","height":'100px','position':'absolute','top':'10%','left':'-50px',"z-index":"280","background-color":"#003366","border-top":"1px solid black","border-bottom":"1px solid black"})
	$(edge).attr({"width":"30px","src":"img/barin.png"})
	$(edge).css({'position':'absolute','top':'-10px','right':'-30px'})

	$(ref).attr({"height":"40%","width":"60%","alt":"Java reference","src":"/img/cc0/Spiral_bound_book-128px.png","title":"Reference Page"})
	$(ref).css({"position":"absolute","top":"6.6%","right":"10%"})
	$(select).attr({"height":"40%","width":"65%","alt":"Select level","src":"/img/cc0/treasuremap-128px.png","title":"Level Selection"})
	$(select).css({"position":"absolute","bottom":"6.6%","right":"10%"})

	$(cont).append(ref)
	$(cont).append(select)
	$(cont).append(about)
	$(cont).append(edge)

	$(ref).click InitFloat
	$(select).click codeland.showMap
	$(about).click AboutPage

	$(edge).click(() -> coffeeisdumb())

	$(d).append(cont)