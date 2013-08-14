"use strict"

root = window.coderunner = {}


load_mini_rt = ->
    node.fs.readFile "/sys/preload.tar", (err, data) ->
      if err
        console.error "Error downloading preload.tar: #{err}"
        return      # Grab the XmlHttpRequest file system.
      xhrfs = node.fs.getRootFS().mntMap["/sys"]

      untar new util.BytesArray(data), ((percent, path, file) ->
        if path[0] != '/' then path = "/#{path}"
        try
            if file.length > 0
                xhrfs.preloadFile path, file
        catch e
            console.error "Error writing #{path}: #{e}"
        )


saveFile = (fname,contents) ->
        contents += '\n' unless contents[contents.length-1] == '\n'
        node.fs.writeFileSync(fname, contents)

initializeDoppioEnvironment = ->
    return if root.doppioEnvironmentInitialized
    root._bs_cl = new ClassLoader.BootstrapClassLoader(jvm.read_classfile)
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


        fname = "/tmp/program.bsh"
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
        jvm.set_classpath '/sys/vendor/classes/', '/tmp/'

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
