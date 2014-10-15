

###
    Constructor for cloud
	@param dim: window (page) dimensions for initializing the cloud's width and height
	@param par: array of text to display in the cloud
    @param obj: container the cloud is in
    @param x: x offset for placing cloud
    @param y: y offset for placing cloud
    @param tscale: sizing the text
    @param ng: string used to go to the next game if it is not "none" - sets up the next game button, etc.
	@param man: gameManager instance
###
window.objCloud = (dim,par,obj,x,y,tscale,ng,man) -> #not sure is man is necessary - check on this

    ###
      JSON file that contains the attribute and CSS properties for each
    ###
    cssData=findConfig('scripts/config/cloud.json')

    tipnum = 0 #Number of tip inside of the cloud

    ###
      Function to resize the cloud object
    ###
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

    ###
      Sets up the right and left buttons to move to the next and previous instructions
    ###
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

    ###
      Setting up div elements
      cont: the entire container
      text: text in the cloud
      cloud: the cloud object
      xb: controls the x button to close the cloud
      xbcloud: the small cloud that the x button is in
      subbd: the container that xb and xbcloud is in
    ###
    cont = document.createElement("div")
    text = document.createElement("div")
    cloud = document.createElement("img")
    xb = document.createElement("img")
    xbcloud = document.createElement("img")
    subbd = document.createElement("div")

    ###
      If there is text in the par array:
    ###
    if par.length > 1

        ###
          ntc: the overall container that the cloud containing left and right arrows in the cloud
          nti: the cloud image
          ntl: the left arrow image
          ntr: the right arrow image
        ###
        ntc = $('<div></div>')
        nti = $('<img></img>')
        ntl = $('<img></img>')
        ntr = $('<img></img>')

        ###
          Attribute and css settings for the four objects above
        ###
        $(ntc).css({"position":"absolute","z-index":"310","bottom":"-10%","right":"-5%","width":dim/2,"height":dim/7})
        $(nti).attr(cssData["ntiAttr"])
        $(nti).css(cssData["ntiCSS"])

        $(ntl).attr(cssData["ntlAttr"])
        $(ntl).css(cssData["ntlCSS"])
        $(ntr).attr(cssData["ntrAttr"])
        $(ntr).css(cssData["ntrCSS"])

        ###
          Appends the left and right arrow cloud to the overall ntc container
        ###
        $(ntc).append(nti)
        $(ntc).append(ntl)
        $(ntc).append(ntr)
        $(cont).append(ntc)

        ###
          Calls the rb and lb functions when you click the left and right buttons respectfully
          The hover function highlights the buttons to show they are clickable until you reach the last tip.
        ###
        $(ntr).click(() -> rb())
        $(ntr).hover(
          () -> if(tipnum != par.length - 1) then $(ntr).attr(cssData["rArrowHighAttr"])
          () -> $(ntr).attr(cssData["rArrowAttr"])
        )

        $(ntl).click(() -> lb())
        $(ntl).hover(
          () -> if(tipnum != 0) then $(ntl).attr(cssData["lArrowHighAttr"])
          () -> $(ntl).attr(cssData["lArrowAttr"])
        )


    ###
      Blackens the background when you open the cloud
    ###
    if obj = "body"
        backdrop = document.createElement("div")
        $(backdrop).css({"position":"absolute","z-index":"290","width":"100%","height":"100%","background-color":"black","opacity":".5","top":"0","left":"0"})
        $(obj).append(backdrop)
        $(backdrop).click(() -> $(cont).remove();$(backdrop).remove())

    ###
      If there is a next game, creates a button to go to it with the text "Next Game".
      ngco: Container to store the "next game" cloud
      ngi: Cloud to display "next game"
      ngt: Container to display the text "next game"
    ###
    if ng != "none"
        ngco = document.createElement("div")
        ngi = document.createElement("img")
        ngt = document.createElement("div")
        $(ngco).css({"position":"absolute","z-index":"310","bottom":"0%","right":"0%","width":dim/2,"height":dim/7})
        $(ngi).attr(cssData["ngiAttr"])
        $(ngi).css(cssData["ngiCSS"])
        $(ngt).css({"position":"absolute","z-index":"302", "top":"35%","text-align":"center","height":dim/10,"width":"100%"})
        ngt.innerHTML = "Next Game!"

        ###
          Appends the cloud and "next game" text
        ###
        $(ngco).append(ngi)
        $(ngco).append(ngt)
        $(cont).append(ngco)

        ###
          Finishes the current game and starts the next game when you click on the "next game" cloud
          TODO: Debug this method
        ###
        $(ngco).click(() -> man.finishGame();codeland.startGame(ng);$(cont).remove();$(backdrop).remove())




    ###
      Sets the attribute and CSS properties for subbd, xbcloud, and xb (descriptions of these objects in an above comment)
    ###
    $(subbd).css({"position":"absolute","top":"0%","right":"0%","width":dim/8,"height":dim/8})
    $(xbcloud).attr(cssData["xbcloudAttr"])
    $(xbcloud).css(cssData["xbcloudCSS"])
    $(xb).attr(cssData["xbAttr"])
    $(xb).css(cssData["xbCSS"])

    ###
      Sets the attribute and CSS properties for cloud, cont, and text (descriptions of these objects in an above comment)
    ###
    $(cloud).attr({"src":"img/interface/cloud.png","align":"middle","width":$(window).width()/2,"height":$(window).height()/2}) #Lavanya
    $(cont).css({"position":"absolute","top":x,"left":y,"z-index":"297"})
    $(text).css(cssData["textCSS"])

    ###
      Adds the cloud and text objects to the cont overall object
    ###
    $(cont).append(cloud)
    $(cont).append(text)

    ###
      Adds the subbd object to the cont overall object (descriptions of these objects in an above comment)
    ###
    $(cont).append(subbd)

    ###
      Adds the xbcloud and xb objects to the subbd object (descriptions of these objects in an above comment)
    ###
    $(subbd).append(xbcloud)
    $(subbd).append(xb)

    ###
      Adds the cont object to the obj object (descriptions of these objects in an above comment)
    ###


    $(obj).append(cont)

    ###
      Specifies the text to be displayed in the cloud
    ###
    text.innerHTML = "<p style='margin-top:auto;margin-right:auto'>"+par[0]+"</p>"

    ###
      Specifies the CSS properties for the text
    ###
    $(text).css({'font-size':(dim*.05*tscale) + 'px'})
    # Width is 75%, leaving 25% left to play with
    left=0.125*dim
    $(text).css({"left":left+"px"})
    #Removed vertical centering - looks better without it
    #"top":(dim*0.8-$(text).height())/2+"px",

    ###
      When closing the x button, the cloud goes away and the black backdrop is removed.
    ###
    $(xb).click(() -> $(cont).remove();$(backdrop).remove())

    return



