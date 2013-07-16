root = exports ? referencePage = {}

###
Dictionary takes a string json reference in the form of a directory path and a container DOM element to create the dictionary in.  Example .json format is in the
config directory named dictionary.json.  The dictionary function appends a div to its container that serves the dynamic information content depending on the
dictionary item that is clicked in the list.
###
window.dictionary = (text,cont) ->
    #appends a div for the paragraph content, to be further developed to contain code snippets and videos
    info = document.createElement("div")
    $(info).css({"width":"100%","height":"35%","position":"absolute","top":"65%","border-top":"1px solid black"})
    $(cont).append(info)
    #the attache function accepts a key and data and creates the content for the info div
    attache = (k,d) ->
        info.innerHTML = d
        return
    #the showChildren function accepts a DOM element from the dictionary list and displays or hides its children and alters its arrow image appropriately
    showChildren = (nde) ->
        if $(nde).children("img").attr("src") == "img/listarrow1.png"
            $(nde).children("img").attr({"src":"img/listarrow2.png"})
            $(nde).children("div").css({"display":"block"})
        else
            $(nde).children("img").attr({"src":"img/listarrow1.png"})
            $(nde).children("div").css({"display":"none"})
    #delve accepts a data object tmp and a recursive DOM object tcont.  The function recursively calls itself to build the hierarchal list
    delve = (tmp,tcont) ->
        for key,data of tmp
            if typeof data == "string"
                $(tcont).click(((k,d) -> attache(k,d); return false).bind(null, key, data))
            else
                npa = document.createElement("div")
                ar = document.createElement("img")
                $(ar).attr({"src":"img/listarrow1.png"})
                $(ar).css({"position":"relative","left":"0","top":"0"})
                $(npa).css({"margin":"4px 0 0 20px"})
                if tcont != cont
                    $(npa).css({"display":"none"})
                else
                    $(npa).css({"margin-left":"0"})
                npa.innerHTML = key
                $(tcont).append(npa)
                for key1,data1 of data
                    if typeof data1 != "string"
                        $(npa).prepend(ar)
                        $(npa).click(((n) -> showChildren(n); return false).bind(null,npa))
                        break
                delve data,npa
        return

    $.getJSON(text, (data) -> delve data,cont)
###
InitFloat builds the floating div and appropriates its space for the java virtual console and the dictionary.  It also attaches several enlargement functions
that allow each appropriate div to fullscreen and then shrink back
###
window.InitFloat = ->
    backFade = document.createElement("div")
    refContainer = document.createElement("div")

    $(backFade).css({width:'100%',height:'100%',position:'absolute','z-index':'300','background-color':'#000000','opacity':'.5'})
    $(refContainer).css({width:'90%',height:'90%',left:'5%',top:'5%',position:'absolute','z-index':'301','background-color':'#FFFFFF'})

    $("body").prepend(backFade)
    $(backFade).attr({id:'bF'})
    $("body").prepend(refContainer)

    dictionary = document.createElement("div")
    input = document.createElement("div")
    output = document.createElement("div")

    $(dictionary).css({width:'35%',height:'90%',position:'absolute',left:'5%',top:'5%',bottom:'80%','border':'1px solid black'})
    $(input).css({width:'50%',height:'40%',position:'absolute',right:'5%',top:'5%','border':'1px solid black'})
    $(output).css({width:'50%',height:'40%',position:'absolute',right:'5%',top:'50%','border':'1px solid black'})

    $(refContainer).prepend(dictionary)
    $(refContainer).prepend(input)
    $(refContainer).prepend(output)

    en1 = document.createElement("img")
    en2 = document.createElement("img")
    en3 = document.createElement("img")

    $(en1).attr({'src':'img/enlarge1.png',class:'en'})
    $(en2).attr({'src':'img/enlarge1.png',class:'en'})
    $(en3).attr({'src':'img/enlarge1.png',class:'en'})

    $(en1).css({position:'absolute',right:'4px',top:'4px',"z-index":"320"})
    $(en2).css({position:'absolute',right:'4px',top:'4px',"z-index":"320"})
    $(en3).css({position:'absolute',right:'4px',top:'4px',"z-index":"320"})

    $(dictionary).append(en1)
    $(input).append(en2)
    $(output).append(en3)


    enHover = () ->
        this.src = 'img/enlarge2.png'
    lvHover = () ->
        this.src = 'img/enlarge1.png'
    enClick = () ->
        $(this).unbind()

        $(this).parent().stop()
        $(this).parent().siblings().stop()

        this.src = 'img/shrink1.png'
        $(this).parent().animate({width:'90%',height:'90%',top:'5%'})
        $(this).parent().siblings().animate({width:'0%',height:'0%',opacity:'0'})

        $(".en").hover(clHover,cllvHover)
        $(".en").click(clClick)
    closeClick = () ->
        $(backFade).remove()
        $(refContainer).remove()
        codeland.doppioAPI.abort()
    clClick = () ->
        $(this).unbind()

        $(dictionary).stop()
        $(input).stop()
        $(output).stop()

        $(dictionary).animate({width:'35%',height:'90%',opacity:'1'})
        $(input).animate({width:'50%',height:'40%',opacity:'1'})
        $(output).animate({width:'50%',height:'40%',opacity:'1',top:'50%'})

        $(".en").hover(enHover,lvHover)
        $(".en").click(enClick)
    clHover = () ->
        this.src = 'img/shrink2.png'
    cllvHover = () ->
        this.src = 'img/shrink1.png'

    $(".en").hover(enHover,lvHover)
    $(".en").click(enClick)
    $("#bF").click(closeClick)

    window.dictionary("config/dictionary.json",dictionary)

    setUpJavaSandbox input, output
    return

setUpJavaSandbox = (input, output) ->
    ###
        Sets up the code editor and the doppio api for running Java code.
    ###
    input = $(input)
    output = $(output)
    textOutput = $('<div></div>')
    output.append textOutput.get 0
    textOutput.css "white-space", "pre-line"
    input.append '<div id="javasandboxsource"></div>'
    sandBoxEditor = new PlayerCodeEditor 'javasandboxsource', null, \
        'for (int i = 0; i < 5; i++) {\n System.out.println("Hello");\n}', \
        false, "", "", true

    msg = ""
    stdout = (str) ->
        msg += str

        textOutput.text msg
        return
    log = console.log
    codeland.doppioAPI.setOutputFunctions stdout, log

    run = jQuery '<img>', {
        id: 'runCode',
        src: '/img/freeware/button_play_green-48px.png',
        alt: 'Run Button',
        click: (e) ->
            textOutput.text 'Running...'
            jQuery('#runCode').hide(2000, ->  jQuery('#abortCode').show() )
           
            msg = ''
            finished_cb = ->           
                jQuery('#abortCode').hide(500 , -> jQuery('#runCode').show())            
            codeland.doppioAPI.run(sandBoxEditor.getStudentCode(),'', finished_cb)
            
            e.preventDefault()
            return
    }
    abort = jQuery '<img>', {
        id: 'abortCode',
        src: '/img/freeware/button_stop_red-48px.png',
        alt: 'Abort Button',
        click: (e) ->
            aborted = -> 
                stdout("Stopped")
                jQuery('#runCode').show()
                jQuery('#abortCode').hide()
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

    backFade = document.createElement("div")
    refContainer = document.createElement("div")

    $(backFade).css({width:'100%',height:'100%',position:'absolute','z-index':'300','background-color':'#000000','opacity':'.5'})
    $(refContainer).css({width:'40%',height:'40%',left:'30%',top:'30%',position:'absolute','z-index':'301','background-color':'#FFFFFF'})

    $("body").prepend(backFade)
    $(backFade).attr({id:'bF'})
    $("body").prepend(refContainer)

    header = document.createElement("div")
    para = document.createElement("div")

    $(header).css({"font-size":"26px","position":"absolute","width":"50%","top":"5%","left":"25%","text-align":"center"})
    $(para).css({"font-size":"14px","position":"absolute","width":"90%","bottom":"12%","left":"5%","text-align":"center"})


    header.innerHTML = "Legal Terms and Attributions"
    para.innerHTML = "Copyright 2013 The Board of Trustees at the University of Illinois<br />Creative Commons Licenses from openclipart.org are 
    licensed under <a href='http://creativecommons.org/publicdomain/zero/1.0/''>the creative commons 0 license</a>
    (Spiral Bound book, star icon, cow eat grass, treasure map)<br />
    <a href='https://github.com/int3/doppio/blob/master/LICENSE'>Doppio Java Virtual Machine</a><br />Original Content is licensed under MIT Expat License
    <br />Creative Commons Licenses from findicons.com are licensed under <a href='http://creativecommons.org/licenses/by-nd/2.5/'>Creative Commons Attributions no Derivatives</a>"	

	$(refContainer).append(header)
	$(refContainer).append(para)
	$("#bF").click(closeClick)
