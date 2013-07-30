window.appendBar = (d) ->

	coffeeisdumb = () ->
		if $(edge).attr("src") == "img/barin.png"
			$(cont).animate({"left":"0px"})
			$(cont).animate({"left":"-10px"})
			$(edge).attr({"src":"img/barout.png"})
		else
			$(cont).animate({"left":"0px"})
			$(cont).animate({"left":"-100px"})
			$(edge).attr({"src":"img/barin.png"})
		return false


	cont = document.createElement("div")
	edge = document.createElement("img")

	ref = document.createElement("img")
	select = document.createElement("img")
	sand = document.createElement("img")

	$(cont).css({"width":"100px","height":'100px','position':'absolute','top':'10%','left':'-100px',"z-index":"280","background-color":"#003366","border-top":"1px solid black","border-bottom":"1px solid black"})
	$(edge).attr({"width":"30px","src":"img/barin.png"})
	$(edge).css({'position':'absolute','top':'-10px','right':'-30px'})

	$(ref).attr({"height":"40%","width":"30%","alt":"Java reference","src":"/img/cc0/Spiral_bound_book-128px.png","title":"Reference Page"})
	$(ref).css({"position":"absolute","top":"6.6%","right":"5%"})
	$(select).attr({"height":"40%","width":"35%","alt":"Select level","src":"/img/cc0/treasuremap-128px.png","title":"Level Selection"})
	$(select).css({"position":"absolute","bottom":"6.6%","right":"5%"})
	$(sand).attr({"height":"40%","width":"35%","alt":"Code Sandbox","src":"/img/cc-bynd/keyboard.png","title":"Code SandBox"})
	$(sand).css({"position":"absolute","top":"6.6%","right":"45%"})

	$(cont).append(ref)
	$(cont).append(select)
	$(cont).append(sand)
	$(cont).append(edge)

	$(ref).click referencePage
	$(select).click codeland.showMap
	$(sand).click sandBoxPage

	$(cont).children().click(() -> coffeeisdumb())

	$(d).append(cont)