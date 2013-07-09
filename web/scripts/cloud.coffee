window.posCloud = (dim,par,x,y) ->
	text = document.createElement("div")
	cloud = document.createElement("img")

	$(cloud).attr({"src":"img/cloud.png","width":dim})
	$(cloud).css({"position":"absolute","top":x,"left":y,"z-index":"297"})
	$(text).css({"width":"70%","height":"70%","position":"relative","top":"30%","left":"30%","z-index":"298"})

	$("body").append(cloud)
	$(cloud).append(text)

	text.innerHTML = par

objCloud = (dim,text,obj,ox,oy) ->