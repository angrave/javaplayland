root = exports ? referencePage = {}

editorCount = 0

window.sandBoxPage = () ->
    backFade = document.createElement("div")
    refContainer = document.createElement("div")

    $(backFade).css({width:'100%',height:'100%',position:'absolute','z-index':'300','background-color':'#000000','opacity':'.5'})
    $(refContainer).css({width:'90%',height:'90%',left:'5%',top:'5%',position:'absolute','z-index':'301','background-color':'#FFFFFF'})

    $("body").prepend(backFade)
    $(backFade).attr({id:'bF'})
    $("body").prepend(refContainer)

    input = document.createElement("div")
    output = document.createElement("div")

    $(input).css({width:'45%',height:'90%',position:'absolute',left:'3.3%',top:'5%','border':'1px solid black'})
    $(output).css({width:'44%',height:'90%',"padding-left":"1%",position:'absolute',right:'3.3%',top:'5%','border':'1px solid black',"overflow":"auto"})

    $(refContainer).prepend(input)
    $(refContainer).prepend(output)

    en1 = document.createElement("img")
    en2 = document.createElement("img")

    $(en1).attr({'src':'img/enlarge1.png',class:'en'})
    $(en2).attr({'src':'img/enlarge1.png',class:'en'})

    $(en1).css({position:'absolute',right:'4px',top:'4px',"z-index":"320"})
    $(en2).css({position:'absolute',right:'4px',top:'4px',"z-index":"320"})

    $(input).append(en1)
    $(output).append(en2)

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

        $(input).stop()
        $(output).stop()

        $(input).animate({width:'45%',height:'90%',opacity:'1'})
        $(output).animate({width:'45%',height:'90%',opacity:'1'})

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
    setUpJavaSandbox input, output, samplecode
    return


window.referencePage = () ->
    backFade = document.createElement("div")
    refContainer = document.createElement("div")

    $(backFade).css({width:'100%',height:'100%',position:'absolute','z-index':'300','background-color':'#000000','opacity':'.5'})
    $(refContainer).css({width:'90%',height:'90%',left:'5%',top:'5%',position:'absolute','z-index':'301','background-color':'#FFFFFF'})

    $("body").prepend(backFade)
    $(backFade).attr({id:'bF'})
    $("body").prepend(refContainer)

    ref = document.createElement("div")

    $(ref).css({width:'90%',height:'90%',position:'absolute',right:'5%',top:'5%','border':'1px solid black',"overflow":"auto"})

    inject(ref)

    examples = $(ref).children(".ex")

    $(refContainer).prepend(ref)

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
    i = document.createElement("div")
    o = document.createElement("div")

    $(i).attr({"class":"ei"})
    $(o).attr({"class":"eo"})

    $(dive).append(i)
    $(dive).append(o)

    setUpJavaSandbox(i,o,text)

setUpJavaSandbox = (input, output, texti) ->
    ###
        Sets up the code editor and the doppio api for running Java code.
    ###
    input = $(input)
    output = $(output)
    textOutput = $('<div ></div>')
    output.append textOutput.get 0
    textOutput.css {"white-space": "pre-line","font-family": "monospace","overflow":"auto"}
    input.append '<div id="javasandboxsource'+editorCount+'"></div>'
    sandBoxEditor = new PlayerCodeEditor \
        'javasandboxsource'+editorCount, # editorDivId
        null,                            # commands
        texti,                           # codeText
        false,                           # wrapCode
        "",                              # codePrefix
        "",                              # codeSuffix
        null,                            # hiddenSuffix
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
                jQuery(this).show()
                jQuery(this).siblings("img").hide()
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
                jQuery(this).siblings("img").show()
                jQuery(this).hide()
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
    $(refContainer).css({ width:'60%',height:'60%',left:'30%',top:'30%',position:'absolute','z-index':'301','background-color':'#FFFFFF'})

    $("body").prepend(backFade)
    $(backFade).attr({id:'bF'})
    $("body").prepend(refContainer)

    header = document.createElement("div")
    para = document.createElement("div")

    $(header).css({"position":"static","overflow":"auto","font-size":"26px","width":"100%","left":"25%","text-align":"center"})
    $(para).css({"overflow":"auto","max-height":"75%","position":"static"})

    header.innerHTML = "Legal Terms and Attributions"
    para.innerHTML = "
        Copyright (C) 2013 The Board of Trustees at the University of Illinois
    <br/>
        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    <br/>
        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    <br/>
        THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
<hr>


    <em>Third-party open-source content</em><br/>
    Sounds from freesound and images from openclipart.org are licensed under <a href='http://creativecommons.org/publicdomain/zero/1.0/''>the creative commons 0 license</a>
    ('game over','level completed' sounds; 'book', 'star' and treasure map icons)<br />
    The Doppio jvm license is available <a href='https://github.com/int3/doppio/blob/master/LICENSE'>here</a>.<br/>
    Last Guardian Sprites by Philipp Lenssen are licensed under the Creative Commons <a href='http://creativecommons.org/licenses/by/3.0/'> attribution license</a>.<br/>
    The yellow arrow icon by Jack Cai and the grey keyboard icon by The Working Group downloaded from findicons.com is licensed under <a href='http://creativecommons.org/licenses/by-nd/2.5/'>Creative Commons Attributions no Derivatives</a>
    <hr>

    <em>Acknowledgements</em><br>
    We wish to thank Holly, Maggie and Abby and the other participants at the 2013 University of Illinois Computer Science Summer G.A.M.E.S Camp for their game ideas, feedback and testing.
    <br>
    We wish to thank CJ Carey, John Vilk and the other developers of Doppio-JVM (a project by the <a href='http://plasma.cs.umass.edu/'>Plasma research group at UMass</a>)</a> and BrowserFS for use of their software and their support of this project.<br>
    <em>Software development and bug contribution</em><br>
	<br>
    Original software created by University of Illinois students and faculty, Chris Liu, Fabian Junge, James Kelly and Lawrence Angrave.
    <br/>
    "

	$(refContainer).append(header)
	$(refContainer).append(para)
	$("#bF").click(closeClick)












###
This version of the reference page has been depricated

Dictionary takes a string json reference in the form of a directory path and a container DOM element to create the dictionary in.  Example .json format is in the
config directory named dictionary.json.  The dictionary function appends a div to its container that serves the dynamic information content depending on the
dictionary item that is clicked in the list.

window.dictionary = (text,cont) ->
    #appends a div for the paragraph content, to be further developed to contain code snippets and videos
    info = document.createElement("div")
    list = document.createElement("div")
    $(info).css({"overflow":"auto","white-space": "pre-wrap", "width":"100%","height":"65%","position":"absolute","top":"35%","border-top":"1px solid black"})
    $(list).css({"overflow":"auto","white-space": "pre-wrap", "width":"100%","height":"35%","position":"absolute","top":"0%",})
    $(cont).append(info)
    $(cont).append(list)
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
                if tcont != list
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

    $.getJSON(text, (data) -> delve data,list)

InitFloat builds the floating div and appropriates its space for the java virtual console and the dictionary.  It also attaches several enlargement functions
that allow each appropriate div to fullscreen and then shrink back

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
    $(output).css({width:'50%',height:'45%',position:'absolute',right:'5%',top:'50%','border':'1px solid black',"overflow":"auto"})

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

    window.dictionary("dictionary.json",dictionary)

    setUpJavaSandbox input, output
    return
###
