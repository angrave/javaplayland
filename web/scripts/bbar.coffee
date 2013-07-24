window.appendBar = (d) ->

	coffeeisdumb = () ->
		if $(edge).attr("src") == "img/barin.png"
			$(cont).animate({"left":"0px"})
			$(cont).animate({"left":"-10px"})
			$(edge).attr({"src":"img/barout.png"})
		else
			$(cont).animate({"left":"0px"})
			$(cont).animate({"left":"-60px"})
			$(edge).attr({"src":"img/barin.png"})
		return false


	cont = document.createElement("div")
	edge = document.createElement("img")

	ref = document.createElement("img")
	select = document.createElement("img")
	about = document.createElement("img")

	$(cont).css({"width":"60px","height":'98px','position':'absolute','top':'10%','left':'-60px',"z-index":"280","background-color":"#003366","border-top":"1px solid black","border-bottom":"1px solid black"})
	$(edge).attr({"width":"30px","src":"img/barin.png"})
	$(edge).css({'position':'absolute','top':'-11px','right':'-30px'})

	$(ref).css({"position":"absolute","top":"3.3%","right":"10%"})
	$(ref).attr({"height":"30%","width":"50%","alt":"Java reference","src":"/img/cc0/Spiral_bound_book-128px.png","title":"Reference Page"})
	$(select).css({"position":"absolute","top":"36.6%","right":"10%"})
	$(select).attr({"height":"30%","width":"50%","alt":"Select level","src":"/img/cc0/treasuremap-128px.png","title":"Level Selection"})
	$(about).css({"position":"absolute","bottom":"3.3%","right":"10%"})
	$(about).attr({"height":"30%","width":"50%","alt":"About","src":"/img/freeware/info-48px.png","title":"About Page"})

	$(cont).append(ref)
	$(cont).append(select)
	$(cont).append(about)
	$(cont).append(edge)

	$(ref).click InitFloat
	$(select).click codeland.showMap
	$(about).click AboutPage

	$(edge).click(() -> coffeeisdumb())

	$(d).append(cont)