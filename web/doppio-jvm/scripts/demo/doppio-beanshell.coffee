"use strict"

root = window.coderunner = {}


load_mini_rt = ->
    try
        data = node.fs.readFileSync("/home/doppio/scripts/demo/mini-rt.tar")
    catch e
        console.error e
    if data == null
        throw new Error "No mini-rt data"

    file_count = 0
    done = false
    writeOneFile = (percent, path, file) ->
      base_dir = 'vendor/classes/'
      [base,ext] = path.split('.')
      file_count++
      cls = base.substr(base_dir.length)
      node.fs.writeFileSync(path, util.array_to_bytestr(file), 'utf8', true)
    untar new util.BytesArray(util.bytestr_to_array data), writeOneFile

saveFile = (fname,contents) ->
        contents += '\n' unless contents[contents.length-1] == '\n'
        node.fs.writeFileSync(fname, contents)

initializeDoppioEnvironment = ->
    return if root.doppioEnvironmentInitialized
    load_mini_rt()
    # Read in a binary classfile synchronously. Return an array of bytes.
    read_classfile = (cls, cb, failure_cb) ->
      cls = cls[1...-1] # Convert Lfoo/bar/Baz; -> foo/bar/Baz.
      for path in jvm.system_properties['java.class.path']
        fullpath = "#{path}#{cls}.class"
        try
          data = util.bytestr_to_array node.fs.readFileSync(fullpath)
        catch e
          data = null
        return cb(data) if data != null
      failure_cb(-> throw new Error "Error: No file found for class #{cls}.")
    root._bs_cl = new ClassLoader.BootstrapClassLoader(read_classfile)
    root.doppioEnvironmentInitialized  = true


getOrCreateCodeRunner = (element) ->
    e=$(element)
    coderunner = e.data('coderunner')
    if coderunner is undefined
        coderunner = new window.CodeRunner(element)
        e.data('coderunner',coderunner)
    return coderunner 


root.edit= (element)->
    return getOrCreateCodeRunner(element).edit()

root.run= (element) ->
    return getOrCreateCodeRunner(element).run()


class window.CodeRunner
    stdout : null
    user_input : null
    
    constructor : (@element) ->
        @rs=null
        @parentDiv = $('<div/>',{name:'runjava-parent',style:'position:static;',height:'100'})
        @editorDiv = $('<div/>',{name:'runjava-editor',style:"",id:'fubar'})
        #position:absolute;top:0;bottom:110;left:0;right:110
        @controlsDiv = $('<div/>',{name:'runjava-controls'})
        @outputDiv= $('<div/>',{name:'runjava-output',text:''})
        
        @runJavaBtn = $('<a/>',{name:'runjava-ctrl-run',text:'run'})
        @stopJavaBtn = $('<a/>',{name:'runjava-ctrl-stop',text:'stop'})
        @resetCodeBtn = $('<a/>',{name:'runjava-ctrl-reset',text:'reset'})
        
        $(@element).parent().append(@parentDiv)
        @parentDiv.after (@outputDiv)
        @parentDiv.after @controlsDiv
        (@parentDiv.append (item)) for item in [@editorDiv,@outputDiv,@controlsDiv]
        
        for control in [@runJavaBtn, @stopJavaBtn, @resetCodeBtn]
            @controlsDiv.append (control)
            control.css('border','2px solid gray')
            

        #Todo stopBtn.css('visibility', 'hidden') 
        @editor = ace.edit('fubar')
        #@editorDiv[0])
        
        
        JavaMode = require("ace/mode/java").Mode
        @session = @editor.getSession()
        @session.setMode(new JavaMode())
        
        val= @element.innerHTML 
        @session.setValue(val) if val
        
        e= $(@element)
        #-document.scrollTop()
        position=@element.getBoundingClientRect()
        
        @blurb = {
            "left": position.left+"px",
            "right": position.right+"px",
            "top": position.top+"px",
            "bottom": position.bottom+"px",
        }
        
        @resizeEditor= => 
            position=@element.getBoundingClientRect()
            @editorDiv.css("position","absolute")
            @blurb = {
                "left": position.left,
                "top": position.top
                }
            @editorDiv.css(@blurb )
            #.width not supported in IE
            @editorDiv.width  20 + position.right - position.left
            @editorDiv.height 20 +  position.bottom - position.top
        @resizeEditor()
        @editor.getSession().on('change', (e)=>
#            e.text @editor.getSession().getValue()
        )
#        $(window).resize( @resizeEditor )
        
        
        @runJavaBtn.click (e) =>
            @run()
            e.preventDefault()       
        return

    edit: =>
        @editor.focus()
        return this
    
    run: =>
        @outputDiv.text 'Starting...5..4..3..'
        initializeDoppioEnvironment()
        
        @outputDiv.text( @outputDiv.text() + '2..' )

        
        fname = "program.bsh"
        contents = @session.getValue()
        saveFile fname, contents
        msg = '' ;
        stdout = (str) ->
            msg += str
            @outputDiv.text msg
        stdin = -> "\n"
        class_args = [ fname ]
        finish_cb = =>
            @rs = null
        @rs = new runtime.RuntimeState(stdout, stdin, root._bs_cl)
        @outputDiv.text( @outputDiv.text() + '1..' )
        @stopJavaBtn.click (e) =>
                stdout('Stopping...')
                aborted_cb = -> stdout('Stopped')
                @rs.abortjvm(aborted_cb) if @rs
                e.preventDefault()
        #Todo enable stop button here. disable run button earlier if any async setup
        finish_cb= =>
            @edit()
            #Todo enable/disable buttons here
        @outputDiv.text ''   
        jvm.run_class(@rs, 'LearnJavaInterpreter', class_args, finish_cb)
        
        return this
