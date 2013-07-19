window.objCloud = (dim,par,obj,x,y,tscale) ->
	cont = document.createElement("div")
	text = document.createElement("div")
	cloud = document.createElement("img")
	xb = document.createElement("img")
	xbcloud = document.createElement("img")
	subbd = document.createElement("div")

	if obj = "body"
		backdrop = document.createElement("div")
		$(backdrop).css({"position":"absolute","z-index":"290","width":"100%","height":"100%","background-color":"black","opacity":".5","top":"0","left":"0"})
		$(obj).append(backdrop)
	$(subbd).css({"position":"absolute","top":"0%","right":"0%","width":dim/8,"height":dim/8})
	$(xbcloud).attr({"src":"img/subcloud.png","width":"100%", "height":"100%"})
	$(xbcloud).css({"position":"absolute","top":"0%","right":"0%"})
	$(xb).attr({"src":"img/x.png","width":"50%","height":"50%","z-index":"298"})
	$(xb).css({"position":"absolute","top":"28%","right":"26%"})
	
	$(cloud).attr({"src":"img/cloud.png","width":dim})
	$(cont).css({"position":"absolute","top":x,"left":y,"z-index":"297"})
	$(text).css({"width":"75%","95%","position":"absolute","top":"26%","left":"8%","z-index":"299","margin":"0","padding":"0", "text-align":"center"})

	$(obj).append(cont)
	$(cont).append(cloud)
	$(cont).append(text)
	$(cont).append(subbd)
	$(subbd).append(xbcloud)
	$(subbd).append(xb)


	$(text).css({'font-size':(dim*.05*tscale) + 'px',"top":(dim-$(text).height)/2+"px","left":($(cont).width()-$(text).width())/2+"px"})


	$(xb).click(() -> $(cont).remove();$(backdrop).remove())

	text.innerHTML = "<p style='margin-top:auto;margin-right:auto'>"+par+"</p>"
	return



window.playAudio = (name) ->
	sound = document.createElement("video")
	$(sound).attr({"src":"audio/"+name,"autoplay":"true"})
	return