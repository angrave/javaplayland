root = exports ? referencePage = {}

editorCount = 0


#This class represents the sandbox used to run Java code.
class sandBoxInfo 

    backFade = null
    refContainer = null
    input= null
    output= null

    constructor: () ->

    ''' 
    This sets up the IO area.
    @param pageSize Represents the size of the window.
    '''
    setupInput: (pageSize) ->
        vSize= pageSize+"%"  #The vertical size of each panel.
        hSize = pageSize/2+"%" #The horizontal size of each panel.
        input=$('<div></div>')
        output=$('<div></div>')   
        $(input).css({width:''+hSize,height:''+vSize,position:'absolute',left:'3.3%',top:'5%','border':'1px solid black'})
        $(output).css({width:''+hSize,height:''+vSize,"padding-left":"1%",position:'absolute',right:'3.3%',top:'5%','border':'1px solid black',"overflow":"auto"})

    ''' 
    This sets up the reference container.
    @param pageSize Represents the size of the reference container.
    '''
    setupRefContainer: (pageSize)->
        pSize= pageSize+"%"
        refContainer = $('<div></div>')
        $("body").prepend(refContainer)
        $(refContainer).css({width:''+pSize,height:''+pSize,left:'5%',top:'5%',position:'absolute','z-index':'301','background-color':'#FFFFFF'})
        return

    #Add the IO area to the page
    addIO: ()->
        $(refContainer).prepend(input)
        $(refContainer).prepend(output)

    setupBackFade: () ->
        backFade = $('<div></div>')
        $(backFade).css("width:'100%',height:'100%',position:'absolute','z-index':'300','background-color':'#000000','opacity':'.5'")
        $("body").prepend(backFade)
        $(backFade).attr({id:'bF'})

    setupEnlarge: () ->
        en1=$('<img></img>')
        en2=$('<img></img>')
        $(en1).attr({'src':'img/enlarge1.png',class:'en'})
        $(en2).attr({'src':'img/enlarge1.png',class:'en'})
        $(en1).css({position:'absolute',right:'4px',top:'4px',"z-index":"320"})
        $(en2).css({position:'absolute',right:'4px',top:'4px',"z-index":"320"})
        $(input).append(en1)
        $(output).append(en2)

    getInput: () ->
        return input          

    getOutput: () ->
        return output

    getBackFade: () ->
        return backFade

    getRefContainer: () ->
        return refContainer

#This method adds a Java sandbox to the current page and returns information about it.
window.sandBoxPage = (pageSize) ->

    sInfo= new sandBoxInfo()
    sInfo.setupInput(pageSize)
    sInfo.setupBackFade(300)
    sInfo.setupRefContainer(pageSize-10)
    sInfo.addIO()
    sInfo.setupEnlarge()

    enHover = () ->
        this.src = 'img/enlarge2.png'
    lvHover = () ->
        this.src = 'img/enlarge1.png'
    enClick = () ->
        $(this).unbind()

        $(this).parent().stop()
        $(this).parent().siblings().stop()

        this.src = 'img/shrink1.png'
        $(this).parent().animate({width:'90%',height:'90%'})
        $(this).parent().siblings().animate({width:'0%',height:'0%',opacity:'0'})

        $(".en").hover(clHover,cllvHover)
        $(".en").click(clClick)
    closeClick = () ->
        $(backFade).remove()
        $(refContainer).remove()
        codeland.doppioAPI.abort()
    clClick = () ->
        $(this).unbind()

        $(sInfo.getInput()).stop()
        $(sInfo.getOutput()).stop()

        $(sInfo.getInput()).animate({width:'45%',height:'90%',opacity:'0'})
        $(sInfo.getOutput()).animate({width:'45%',height:'90%',opacity:'0'})

        $(".en").hover(enHover,lvHover)
        $(".en").click(enClick)
    clHover = () ->
        this.src = 'img/shrink2.png'
    cllvHover = () ->
        this.src = 'img/shrink1.png'

    $(".en").hover(enHover,lvHover)
    $(".en").click(enClick)
    $("#bF").click(closeClick)

    samplecode=[
        "////Write your Java statements here",
        "int answer = 6*7;",
        "print(answer);",
        "String text=\"Hello World\";",
        "text = text.toUpperCase();",
        "for(int i=10;i>0;i--) {",
        "\tprint(i);",
        "}",
        "String ello = text.substring(1, text.length()); // Drop first character",
        "print(text);",
        "print(ello);",
        "int[] array = new int[] {2,3,5,7,11,13};",
        "print(array);"
    ].join('\n')
    console.log("Done")
    setUpJavaSandbox sInfo.getInput(), sInfo.getOutput(), samplecode
    return sInfo


window.referencePage = () ->

    sInfo=new sandBoxInfo()
    sInfo.setupRefContainer(301)
    sInfo.setupBackFade()


    ref = $('<div></div>')
    $(ref).css({width:'90%',height:'90%',position:'absolute',right:'5%',top:'5%','border':'1px solid black',"overflow":"auto"})
    inject(ref)

    examples = $(ref).children(".ex")

    $(sInfo.getRefContainer()).prepend(ref)

    closeClick = () ->
        $(backFade).remove()
        $(refContainer).remove()
        codeland.doppioAPI.abort()

    $("#bF").click(closeClick)

    for sel in [0...examples.size()]
        setUpExample(examples.eq(sel))

setUpExample = (dive) ->
    text = $(dive).text()
    $(dive).empty()
    i = $('<div></div>')
    o = $('<div></div>')


    $(i).attr({"class":"ei"})
    $(o).attr({"class":"eo"})

    $(dive).append(i)
    $(dive).append(o)

    setUpJavaSandbox(i,o,text)

setUpJavaSandbox = (input, output, texti) ->

    console.log("1")
    ###
        Sets up the code editor and the doppio api for running Java code.
    ###
    input = $(input)
    output = $(output)
    textOutput = $('<div ></div>')
    output.append textOutput.get 0
    textOutput.css {"white-space": "pre-line","font-family": "monospace","overflow":"auto"}
    console.log("1.1")
    console.log("Input:"+input.html())
    input.append '<div id="javasandboxsource'+editorCount+'"></div>'

    sandBoxEditor = new PlayerCodeEditor \
        'javasandboxsource'+editorCount, # editorDivId
        null,                            # commands
        texti,                           # codeText
        false,                           # wrapCode
        "",                              # codePrefix
        "",                              # codeSuffix
        true,                            # hiddenSuffix
        true,                            # freeEdit
        null                            # interpreter
    editorCount++
    # See http://stackoverflow.com/questions/11584061/automatically-adjust-height-to-contents-in-ace-cloud9-editor
    msg = ""
    stdout = (str) ->
        msg += str
        textOutput.text msg
        return
    log = (mesg) -> console.log mesg

    
    run = jQuery '<img>', {
        id: 'runCode'+editorCount,
        src: 'img/freeware/button_play_green-48px.png',
        css: {'max-height':'19%', 'display':'block', 'min-height': '24px'},
        alt: 'Run Button',
        title:'Run the program',
        click: (e) ->
            textOutput.text 'Running...'
            jQuery(this).hide()
            jQuery(this).siblings("img").show()

            msg = ''
            finished_cb = =>
                #Ensure "Running..." is removed even if nothing was printed by the Java program
                stdout('')
                $(this).show()
                $(this).siblings("img").hide()
            codeland.doppioAPI.abort()
            codeland.doppioAPI.setOutputFunctions stdout, log
            srcText  = sandBoxEditor.getStudentCode()
            if(srcText.indexOf("class") != -1)
                stdout('Classes are not yet supported by our Web-based Java')
                finished_cb()
            else
                codeland.doppioAPI.run(srcText,null, finished_cb)

            e.preventDefault()
            return
    }
    
    abort = jQuery '<img>', {
        id: 'abortCode'+editorCount,
        src: 'img/freeware/button_stop_red-48px.png',
        css: {'max-height':'19%', 'display':'block', 'min-height': '24px'},
        alt: 'Abort Button',
        title: 'Stop the currently running program',
        click: (e) ->
            aborted = =>
                stdout("Stopped")
                $(this).siblings("img").show()
                $(this).hide()
            codeland.doppioAPI.abort(aborted)
            e.preventDefault()
            return
    }
    

    abort.hide()
    input.append run.get 0
    input.append abort.get 0
    return


window.AboutPage = () ->

    closeClick = () ->
        $(backFade).remove()
        $(refContainer).remove()

    sInfo=new sandBoxInfo()
    sInfo.setupBackFade()
    sInfo.setupRefContainer()


    header = $('<div></div>')
    para = $('<div></div>') 


    $(header).css({"position":"static","overflow":"auto","font-size":"26px","width":"100%","left":"25%","text-align":"center"})
    $(para).css({"overflow":"auto","max-height":"75%","position":"static"})

    $(header).html("Legal Terms and Attributions")
    $.get "/web/scripts/copyrightHTML.txt", (data) ->
        $(para).html(data)
    


    $(refContainer).append(header)
    $(refContainer).append(para)
    $("#bF").click(closeClick)










