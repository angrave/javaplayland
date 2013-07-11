"use strict"

root = window.coderunner = {}


load_mini_rt = ->
    try
        data = node.fs.readFileSync("/home/doppio/preload.tar")
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
    # Assumes load_mini_rt() is already called
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


onResize = ->
      $('#source').height( Math.min(50,$(window).height() * 0.25))
      
class window.CodeRunner
    stdout : null
    user_input : null
    
    constructor : () ->
        @rs=null
        
        @runJavaBtn=$('#run_btn')  
        @stopJavaBtn=$('#abort_btn')
        @outputDiv = $('#output')


        @editor = ace.edit('source')
        @session = @editor.getSession()
        
        JavaMode = require("ace/mode/java").Mode
        @session.setMode(new JavaMode())
        @session.setValue ("for(int i=0;i<10;i++) {print(i);}\nclasses.doppio.JavaScript.eval(\"alert(1)\");")
              
        @stopJavaBtn.attr("disabled", true);
        
        @runJavaBtn.click (e) =>
            @run()
            e.preventDefault()       
        onResize()
        return
        

    edit: =>
        @editor.focus()
        return this
    
    run: =>
        @outputDiv.text 'Starting...3..'
        initializeDoppioEnvironment()
        
        @outputDiv.text( @outputDiv.text() + '2..' )

        
        fname = "program.bsh"
        contents = @session.getValue()
        saveFile fname, contents
        msg = '' ;
        stdout = (str) =>
            msg += str
            @outputDiv.text msg
        stdin = -> "\n"
        class_args = [ fname ]
        finish_cb = =>
             @outputDiv.text 'Done'
            @rs = null
        @rs = new runtime.RuntimeState(stdout, stdin, root._bs_cl)
        jvm.set_classpath '/home/doppio/vendor/classes/', './'
        
        @outputDiv.text( @outputDiv.text() + '1..' )
        @stopJavaBtn.click (e) =>
            if @rs
                stdout('Stopping...')
                @stopJavaBtn.attr("disabled", true)
                aborted_cb = => 
                    @rs=null
                    stdout('Stopped')
                    @runJavaBtn.attr("disabled", false)
                @rs.async_abort(aborted_cb) 
                e.preventDefault()
                
        @runJavaBtn.attr("disabled", true)
        @stopJavaBtn.attr("disabled", false)

        finish_cb= =>
            @stopJavaBtn.attr("disabled", true);
            @runJavaBtn.attr("disabled", false);
            @edit()
        @outputDiv.text ''   
        jvm.run_class(@rs, 'bsh/Interpreter', class_args, finish_cb)
        
        return this

$(document).ready ->
    load_mini_rt()
    new window.CodeRunner()
