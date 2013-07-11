window.objCloud = (dim,par,obj,x,y,tscale) ->
	cont = document.createElement("div")
	text = document.createElement("p")
	cloud = document.createElement("img")
	xb = document.createElement("img")

	$(xb).attr({"src":"img/x.png","width":"7%"})
	$(xb).css({"position":"absolute","top":"13%","right":"13%"})
	$(cloud).attr({"src":"img/cloud.png","width":dim})
	$(cont).css({"position":"absolute","top":x,"left":y,"z-index":"297"})
	$(text).css({"max-width":"82%","max-height":"52%","position":"absolute","top":"26%","left":"8%","z-index":"298","margin":"0","padding":"0",})

	$(obj).append(cont)
	$(cont).append(cloud)
	$(cont).append(text)
	$(cont).append(xb)

	$(text).css({'font-size':(dim*.05*tscale) + 'px'})


	$(xb).click(() -> $(cont).remove())

	text.innerHTML = par
	return

window.playAudio = (name) ->
	sound = document.createElement("video")
	$(sound).attr({"src":"audio/"+name,"autoplay":"true"})
	return