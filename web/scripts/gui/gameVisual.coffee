class window.GameVisual
    ticker = 0 #counts the number of frames that have passed
    imgArray = [] #array of arrays of preloaded images
    univImg = [] #array of universally used images
    objArray = [] #array of objects that permeate the game board
    frameClock = null #reference to the setInterval object that runs the game
    lyr1 = null #object for referencing the first of the two canvas objects to be used as a frame
    lyr2 = null #object for referencing the second of the two canvas objects to be used as a frame
    ldingLyr = null #object for referencing the loading screen div that will sit atop the canvases while resources are being loaded, unsure of exact procedure
    frameLength = 17
    ar = null
    ticker = null
    cobj = null

    ###
    #gameVisual constructor accepts a master configuration and ms.  The configuration object will primarily contain image pathing information so the images
    #can be preloaded.  The int will determine the length of time before a new frame is drawn and swapped, optimal values seem to reside in 15-17 milliseconds
    ###
    constructor: (config,fl) ->
        frameLength = fl
        this.initContainer(config.container.width,config.container.height,config.container.id)
        this.initResources(config.preLoading)
        return
    ###
    #initContainer accepts a width, height, and a div ID.  The div is formatted to the width and height given and two canvas elements are created.
    #These canvas elements are stacked ontop of eachother in the div.  Need to resolve the issue concerning a loading screen.
    ###
    initContainer: (w,h,d) ->
        cobj = $("##{d}")

        gh = cobj.height()
        gw = cobj.width()

        lyr1 = document.createElement("canvas")
        #required to make tmp a direct reference to the canvas element, as opposed to a jquery object, otherwise getContext will not resolve
        lyr2 = document.createElement("canvas")

        cobj.prepend(lyr1)
        $(lyr1).text("Your browser does not support Canvas") #this text is shown if canvas is not supported
        $(lyr1).css("position","absolute")
        $(lyr1).attr("width",w)
        $(lyr1).attr("height",h)
        $(lyr1).css({"z-index":"3"})

        cobj.prepend(lyr2)
        $(lyr2).text("Your browser does not support Canvas")
        $(lyr2).css("position","absolute")
        $(lyr2).attr("width",w)
        $(lyr2).attr("height",h)
        $(lyr2).css({"z-index":"2"})

        return

    ###
    #initResources is hard coded at the moment but will eventually take parsed information from the master config file and then use it to
    #preload all the necessary images.  Sounds will eventually be included in here as well.
    ###
    initResources: (config) ->
        univImg[0] = new Image()
        univImg[0].src = "img/interface/fallen.png"
        univImg[1] = new Image()
        univImg[1].src = "img/interface/shadow.png"
        tmp = []
        index = 0
        for key,imgar of config
            tmp = []
            for fi in imgar
                imgo = new Image()
                imgo.src = fi
                tmp[tmp.length] = imgo
            imgArray[index++] = tmp
        return

    ###
    #startGame is hard coded at the moment but will eventually take parsed information from a sub config file and then use it
    #to determine the nature of the game to be played.  Will initialize array of objects, determine objectives and start the game clock
    ###
    startGame: (config) =>
        ar = config.animation.length
        objArray = []
        for set in config.characters
            tmp = new charObj(
                imgArray[set.imgSet],set.dir,
                config.grid.border+(config.grid.gridUnit*set.x),
                config.grid.border+(config.grid.gridUnit*set.y),
                set.xOff,set.yOff,set.xSize,set.ySize,set.animated)
            objArray[objArray.length] = tmp
        return

    pushCharacter: (config, character) =>
        tmp = new charObj(
            imgArray[character.imgSet],character.dir,
            config.grid.border+(config.grid.gridUnit*character.x),
            config.grid.border+(config.grid.gridUnit*character.y),
            character.xOff,character.yOff,character.xSize,
            character.ySize,character.animated)
        objArray[objArray.length] = tmp
        return

    removeCharacter: (config, character) =>
        index = -1
        for object, i in objArray
            if object.xpos == config.grid.border+(config.grid.gridUnit*character.x) and
              object.ypos == config.grid.border+(config.grid.gridUnit*character.y) and
              object.animarray == imgArray[character.imgSet]
                index = i
                break
        if index != -1
            objArray.splice index, 1
            return true
        return false

    drawText = () ->

    drawShape = () ->

    ###
    #charFace accepts an index and a direction.  The index will be equivalent to a character id and will reference the character object inside the
    #objArray member for which to change the image to face a direction.
    ###
    charFace: (char, direction) ->
        objArray[char].imFace(direction)
        return

    charAnimate: (char) ->
        objArray[char].toggleAnimation()
        return

    ###
    #pixMove accepts a character index and an x and y coordinate referencing pixels.  This is a more powerful function than gridMove allowing for freer movement
    #for potential use in other gametypes.  Can break things if used in improper conjunction with gridMove.
    ###
    pixMove: (char,x,y) ->
        objArray[char].absPos(x,y)

    changeState: (char,state) ->
        objArray[char].chngState(state)

    getState: (char) ->
        objArray[char].state()

    ###
    #charObj is a class representing the characters that can move around the canvas.  It keeps track of the direction the character is facing,
    #the x and y coordinate in pixels, an array of the image objects pertaining to the character, the appropriate image for different frames,
    #and a queue of directions, each of which is eaten and interpreted as a singular move in the direction as follows, where 4 is stationary
    #       ^
    #       0
    #   < 3 4 1 >
    #       2
    #       v
    #   5 -> Falling Animation
    #More documenation to be added when the code is more concrete and permanent
    ###
    class charObj
        constructor: (@animarray,@dir,@xpos,@ypos,@xOff,@yOff,@xSize,@ySize,@animated) ->
            @antickerAdd = 0
            @ldir = @dir
            @cstate = 4
            @fallticker = 0
            @juheight = 0
            @crest = false
            return

        jHeight: () ->
            if @crest == false
                if @juheight == 15
                    @crest = true
                    return 15
                @juheight++
            else
                @juheight--
            #console.log @juheight + ":" + @crest
            if @juheight == 1 && @crest == true
                @juheight = 0
                @crest = false
                return 1
            return @juheight

        absPos: (@xpos,@ypos) ->
            return

        toggleAnimation: ->
            @animated = not @animated
            @antickerAdd = ar
            return

        current: (anticker) ->
            objState = []
            num = 0
            if @animated and ((anticker + @antickerAdd) % (2 * ar)) >= ar
                num = 1
            num = num + (2 * @dir)
            num = num % @animarray.length

            objState[0] = @animarray[num]
            objState[1] = @xSize
            objState[2] = @ySize
            objState[3] = @xOff
            objState[4] = @yOff

            fallFrames = 10.0
            if @cstate == 5
                if @fallticker > fallFrames
                    objState[0] =  univImg[0]
                else
                    @fallticker++
                    fraction = @fallticker / fallFrames
                    
                    objState[1] = @xSize*(1-fraction)
                    objState[2] = @ySize*(1-fraction)
                    objState[3] = @xOff+fraction * @xSize/2
                    objState[4] = @yOff+fraction * @ySize/2
            else
                @fallticker = 0

            return objState

        imFace: (@dir) ->
            return

        chngState: (act) ->
            @cstate = act
            return

        state: () ->
            return @cstate

    getFrame: (config,outtick) ->
        @ticker = outtick
        @chckMv(config)
        if cobj.width() > cobj.height()
            $(lyr1).css("width",cobj.height())
            $(lyr1).css("height",cobj.height())
            $(lyr2).css("width",cobj.height())
            $(lyr2).css("height",cobj.height())
            tdist = cobj.width() - cobj.height()
            tdist = tdist / 2
            $(lyr1).css({"left":tdist,"top":"0"})
            $(lyr2).css({"left":tdist,"top":"0"})
        else
            $(lyr1).css("width",cobj.width())
            $(lyr1).css("height",cobj.width())
            $(lyr2).css("width",cobj.width())
            $(lyr2).css("height",cobj.width())
            tdist = cobj.height() - cobj.width()
            tdist = tdist / 2
            $(lyr2).css({"top":tdist,"left":"0"})
            $(lyr1).css({"top":tdist,"left":"0"})

        if $(lyr1).css("z-index") == "3"
            @drawFrame(lyr2,config)
            @swapFrames(lyr2,lyr1)
        else
            @drawFrame(lyr1,config)
            @swapFrames(lyr1,lyr2)
        return

    drawFrame: (frame,config) ->
        this.drawGrid(frame,config.grid)
        this.drawChar(frame)
        return

    drawChar: (frame) ->
        td = frame.getContext('2d')
        for obj in objArray by -1
            s = obj.current(@ticker)
            if obj.state() >= 6 && obj.state() <= 9
                td.drawImage(univImg[1],obj.xpos+s[3],obj.ypos+s[4],s[1],s[2])
                td.drawImage(s[0],obj.xpos+s[3],obj.ypos+s[4]-obj.jHeight(),s[1],s[2])
            else
                td.drawImage(s[0],obj.xpos+s[3],obj.ypos+s[4],s[1],s[2])
        return

    chckMv: (config) ->
        for obj in objArray
            if obj.state() >= 6 && obj.state() <= 9
                mr = 2*config.animation.pixMoveRate
            else
                mr = config.animation.pixMoveRate
            if obj.state() == 0 || obj.state() == 6
                obj.imFace(0)
                obj.ypos = obj.ypos - mr
            if obj.state() == 1 || obj.state() == 7
                obj.imFace(1)
                obj.xpos = obj.xpos + mr
            if obj.state() == 2 || obj.state() == 8
                obj.imFace(2)
                obj.ypos = obj.ypos + mr
            if obj.state() == 3 || obj.state() == 9
                obj.imFace(3)
                obj.xpos = obj.xpos - mr
        return

    swapFrames: (f1,f2) ->
        $(f1).css("z-index","3")
        $(f2).css("z-index","2")
        return

    ###

    ###
    drawGrid: (tmp,config) ->
        grid = tmp.getContext("2d")

        grid.fillStyle = 'white'
        grid.fillRect(0,0,1000,1000)

        grid.beginPath()
        this.drawVLine ps,grid,config.border,config.gridUnit,config.gridX for ps in [config.border..(config.gridUnit*(config.gridX))+config.border] by config.gridUnit
        this.drawHLine ps,grid,config.border,config.gridUnit,config.gridY for ps in [config.border..(config.gridUnit*(config.gridY))+config.border] by config.gridUnit
        grid.strokeStyle = "black"
        grid.stroke()
        
        grid.font = "15px sans-serif"
        grid.textAlign = 'center'
        grid.fillStyle = '#A0A0E0'
        for index in [0..config.gridX-1] 
            if index>0 then text= index else text = 'x'
            grid.fillText text,config.border+config.gridUnit*(index+0.5),config.border-config.gridUnit*0.25 
                
        for index in [0..config.gridY-1] 
            if index>0 then text= index else text = 'y'
            grid.fillText text,config.border-config.gridUnit*0.35,config.border+config.gridUnit*(index+0.5)+6 #Slightly under half the font height
        
        return
    ###
    #drawVLine and drawHLine accept a position, a canvas object, and a maximum dimension
    #they mark vertical and horizontal lines respectively for the grid stroke in gridMake
    ###
    drawVLine: (pos,obj,border,gridUnit,gridX) ->
        obj.moveTo pos,border
        obj.lineTo pos,border+(gridUnit*gridX)
        return

    drawHLine: (pos,obj,border,gridUnit,gridY) ->
        obj.moveTo border,pos
        obj.lineTo border+(gridUnit*gridY),pos
        return
