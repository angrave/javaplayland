class charObj
	anticker = 0
	constructor: (@animarray,@dir,@xpos,@ypos) ->

	current: () ->
		num = 0
		if anticker == 0
			anticker = 1
		else
			anticker = 0
			num = 1
		num = num + (2*@dir)
		return @animarray[num]

this.initGame = (w,h,d,us) ->
	obj = $("##{d}") 
	obj.width w
	obj.height h
	lyr1 = document.createElement("canvas")  #required to make tmp a direct reference to the canvas element, as opposed to a jquery object, otherwise getContext will not resolve
	lyr2 = document.createElement("canvas")

	obj.prepend(lyr1)
	$(lyr1).text("Your browser does not support Canvas")
	$(lyr1).css("position","absolute")
	$(lyr1).attr("width",w)
	$(lyr1).attr("height",h)
	$(lyr1).css("z-index","3")

	obj.prepend(lyr2)
	$(lyr2).text("Your browser does not support Canvas")
	$(lyr2).css("position","absolute")
	$(lyr2).attr("width",w)
	$(lyr2).attr("height",h)
	$(lyr2).css("z-index","2")

	imgar = ["img/pn1.png","img/pn2.png","img/pe1.png","img/pe2.png","img/ps1.png","img/ps2.png","img/pw1.png","img/pw2.png"]

	prot = new charObj(imgar,2,150,150)
	
	coffeederp = () ->
		checkTop(lyr1,lyr2,w,h,prot,us)

	setInterval coffeederp,500 
	return
	

checkTop = (frame1,frame2,w,h,prot,us) ->
	if $(frame1).css("z-index") == "3"
		drawFrame(frame2,w,h,prot,us)
		swapFrames(frame2,frame1)
	else
		drawFrame(frame1,w,h,prot,us)
		swapFrames(frame1,frame2)
	return

drawFrame = (frame,w,h,obj,us) ->
	drawGrid(frame,w,h,us)
	drawChar(frame,obj)
	return

drawChar = (frame,obj) ->
	td = frame.getContext('2d')
	img = new Image()
	img.src = obj.current()
	img.onLoad = td.drawImage(img,150,150)
	return


swapFrames = (f1,f2) ->
	$(f1).css("z-index","3")
	$(f2).css("z-index","2")
	return 

###

###
drawGrid = (tmp,w,h,us) ->
	grid = tmp.getContext("2d")

	grid.fillStyle = "#FFFFFF"
	grid.fillRect(0,0,w,h)

	grid.beginPath()
	drawVLine ps,grid,h for ps in [0..w] by us
	drawHLine ps,grid,w for ps in [0..h] by us
	grid.strokeStyle = "black"
	grid.stroke()
	return
###
drawVLine and drawHLine accept a position, a canvas object, and a maximum dimension
they mark vertical and horizontal lines respectively for the grid stroke in gridMake
###
drawVLine = (pos,obj,height) ->
	obj.moveTo pos,0 
	obj.lineTo pos,height
	return

drawHLine = (pos,obj,width) ->
	obj.moveTo 0,pos
	obj.lineTo width,pos
	return