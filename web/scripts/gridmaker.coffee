window.frameLength = 15
window.unitSize = 30
class charObj
	queueSize = 1
	queue = [4]
	constructor: (@animarray,@dir,@xpos,@ypos) ->

	current: (anticker) ->
		num = 0
		if (anticker % (frameLength*6)) >= frameLength*3
			num = 1
		num = num + (2*@dir)
		return @animarray[num]

	dirFace: (@dir) ->

	nwMove: (d) ->
		queue[queueSize] = d
		queueSize++
		return

	moveDir: (d) ->
		return queue[d]

	ppo: () ->
		if queueSize == 1
			queue.splice(0,1,4)
		else
			queue.splice(0,1)
			queueSize--


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

	prot = new charObj(imgar,1,0,0)
	cray = {ca: [prot]}
	cray.ca[0].nwMove(1)
	cray.ca[0].nwMove(1)
	cray.ca[0].nwMove(2)
	cray.ca[0].nwMove(3)
	cray.ca[0].nwMove(1)
	ticker = {counter: 0}

	coffeederp = () ->
		ticker.counter++
		checkTop(lyr1,lyr2,w,h,cray,us,ticker)

	setInterval coffeederp,frameLength
	return
	

checkTop = (frame1,frame2,w,h,cray,us,ticker) ->
	chckMv(cray,ticker)
	if $(frame1).css("z-index") == "3"
		drawFrame(frame2,w,h,cray,us,ticker)
		swapFrames(frame2,frame1)
	else
		drawFrame(frame1,w,h,cray,us,ticker)
		swapFrames(frame1,frame2)
	return

drawFrame = (frame,w,h,cray,us,ticker) ->
	drawGrid(frame,w,h,us)
	drawChar(frame,cray,ticker)
	return

drawChar = (frame,cray,ticker) ->
	td = frame.getContext('2d')
	for obj in cray.ca
		img = new Image()
		img.src = obj.current(ticker.counter)
		img.onLoad = td.drawImage(img,obj.xpos+2,obj.ypos+2,26,26)
	return

chckMv = (cray,ticker) ->
	for obj in cray.ca
		if obj.moveDir(0) == 0
			obj.dirFace(0)
			obj.ypos = obj.ypos - 1
		if obj.moveDir(0) == 1
			obj.dirFace(1)
			obj.xpos = obj.xpos + 1
		if obj.moveDir(0) == 2
			obj.dirFace(2)
			obj.ypos = obj.ypos + 1
		if obj.moveDir(0) == 3
			obj.dirFace(3)
			obj.xpos = obj.xpos - 1
	if ticker.counter % 30 == 0
		obj.ppo()
	if ticker.counter == 30000
		ticker.counter = 0

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