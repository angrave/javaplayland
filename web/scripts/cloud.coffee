
window.playAudio = (name) ->
	sound = document.createElement("video")
	$(sound).attr({"src":"audio/"+name,"autoplay":"true"})
	return

window.objCloud = (dim,par,obj,x,y,tscale,ng,man) ->
    tipnum = 0
    resizeCloud = () ->
        cloudWidth = $(window).width()/2
        cloudHeight = $(window).height()/2
        textWidth = "80%"
        textHeight = "80%"
        $(cloud).css "align", "middle"
        $(cloud).css "width", cloudWidth
        $(cloud).css "height", cloudHeight
        $(text).css "text-align", "center"
        $(text).css "width", textWidth
        $(text).css "height", textHeight
        $(text).css "top", "30%"
        $(text).css "left", "10%"

    rb = () ->
        if tipnum == par.length - 1
            tipnum = 0
        else 
            tipnum++
        text.innerHTML = "<p style='margin-top:auto;margin-right:auto'>"+par[tipnum]+"</p>"

    lb = () ->
        if tipnum == 0
            tipnum = par.length - 1
        else 
            tipnum--
        text.innerHTML = "<p style='margin-top:auto;margin-right:auto'>"+par[tipnum]+"</p>"
    cont = document.createElement("div")
    text = document.createElement("div")
    cloud = document.createElement("img")
    xb = document.createElement("img")
    xbcloud = document.createElement("img")
    subbd = document.createElement("div")
	
    if par.length > 1
        ntc = document.createElement("div")
        nti = document.createElement("img")
        ntl = document.createElement("img")
        ntr = document.createElement("img")

        $(ntc).css({"position":"absolute","z-index":"310","bottom":"-10%","right":"-5%","width":dim/2,"height":dim/7})
        $(nti).attr({"src":"img/subcloud.png","width":"100%", "height":"100%"})
        $(nti).css({"position":"absolute","top":"0%","right":"0%"})

        $(ntl).attr({"src":"img/larrow.png","width":"15%"})
        $(ntl).css({"position":"absolute","z-index":"302", "top":"30%","left":"30%"})
        $(ntr).attr({"src":"img/rarrow.png","width":"15%"})
        $(ntr).css({"position":"absolute","z-index":"302", "top":"30%","right":"30%"})

        $(ntc).append(nti)
        $(ntc).append(ntl)
        $(ntc).append(ntr)
        $(cont).append(ntc)

        $(ntr).click(() -> rb())
        $(ntl).click(() -> lb())
		
    if obj = "body"
        backdrop = document.createElement("div")
        $(backdrop).css({"position":"absolute","z-index":"290","width":"100%","height":"100%","background-color":"black","opacity":".5","top":"0","left":"0"})
        $(obj).append(backdrop)
        $(backdrop).click(() -> $(cont).remove();$(backdrop).remove())

    if ng != "none"
        ngco = document.createElement("div")
        ngi = document.createElement("img")
        ngt = document.createElement("div")
        $(ngco).css({"position":"absolute","z-index":"310","bottom":"0%","right":"0%","width":dim/2,"height":dim/7})
        $(ngi).attr({"src":"img/subcloud.png","width":"100%", "height":"100%"})
        $(ngi).css({"position":"absolute","top":"0%","right":"0%"})
        $(ngt).css({"position":"absolute","z-index":"302", "top":"35%","text-align":"center","height":dim/10,"width":"100%"})
        ngt.innerHTML = "Next Game!"
        $(ngco).append(ngi)
        $(ngco).append(ngt)
        $(cont).append(ngco)

        $(ngco).click(() -> man.finishGame();codeland.startGame(ng);$(cont).remove();$(backdrop).remove();)

    $(subbd).css({"position":"absolute","top":"0%","right":"0%","width":dim/8,"height":dim/8})
    $(xbcloud).attr({"src":"img/subcloud.png","width":"100%", "height":"100%"})
    $(xbcloud).css({"position":"absolute","top":"0%","right":"0%"})
    $(xb).attr({"src":"img/x.png","width":"50%","height":"50%","z-index":"298"})
    $(xb).css({"position":"absolute","top":"28%","right":"26%"})
     
    $(cloud).attr({"src":"img/cloud.png","align":"middle","width":$(window).width()/2,"height":$(window).height()/2}) #Lavanya
    $(cont).css({"position":"absolute","top":x,"left":y,"z-index":"297"})
    $(text).css({"text-align":"center","width":"80%","height":"80%","position":"absolute","top":"30%","left":"10%","z-index":"299"})

    $(cont).append(cloud)
    $(cont).append(text)
    $(window).resize(resizeCloud)
    $(cont).append(subbd)
    $(subbd).append(xbcloud)
    $(subbd).append(xb)

    $(obj).append(cont)
    text.innerHTML = "<p style='margin-top:auto;margin-right:auto'>"+par[0]+"</p>"
    $(text).css({'font-size':(dim*.05*tscale) + 'px'})
    # Width is 75%, leaving 25% left to play with
    left=0.125*dim
    $(text).css({"left":left+"px"})
    #Removed vertical centering - looks better without it
    #"top":(dim*0.8-$(text).height())/2+"px",


    $(xb).click(() -> $(cont).remove();$(backdrop).remove())

    return


