"use strict"

class window.DoppioApi
    ###
        A class to interact with doppio with.
        Please do not call the constructor until the entire document has loaded
        (this is usually accomplished with jQuery(document).onReady)
    ###

    constructor: (@stdout, done_cb2, progress_cb) ->
        ###
            Sets up Doppio environment.
            @stdout (msg) ->
                A function that will receive messages from the executing java code.
            @log (msg) ->
                A function that will receive log messages such as total execution
                time or abort requests. Set to null to disable logging.
        ###

        stdin = -> "\n"
        @running = false
        @preloaded = false
        done_cb1= =>
            @bs_cl = new ClassLoader.BootstrapClassLoader(jvm.read_classfile)
            jvm.set_classpath '/sys/vendor/classes', '/tmp/'
            @rs = new runtime.RuntimeState(@output, stdin, @bs_cl)
            done_cb2?()
        console.log("1.1")
        @load_mini_rt(done_cb1,progress_cb)
        console.log("1.2")
        return

    setOutputFunctions: (stdout, @log) ->
        if not @running
            @stdout = stdout
        else
            console?.log 'Currently running'
            if not @updateOutput
                console?.log 'Will update output when finished'
                @updateOutput = stdout
        return

    output: (msg) =>
        if @stdout?
            @stdout msg
        return

    load_mini_rt: (done_cb,progress_cb)->
        console.log("Loading stuff")
        ###
            Loads the compressed pre-compiled java classes for Doppio
        ###
        node.fs.readFile "/sys/preload.tar", (err, data) ->
          if err
            console.error "Error downloading preload.tar: #{err}"
            return      # Grab the XmlHttpRequest file system.
          xhrfs = node.fs.getRootFS().mntMap["/sys"]

          write_one_file = (percent, path, file) ->
            progress_cb?(percent) 
            path = "/#{path}" if path[0] != '/'
            try
                xhrfs.preloadFile(path,file) if file.length > 0
            catch e
                console.error "Error writing #{path}: #{e}"

          untar new util.BytesArray(data), write_one_file, done_cb #The problem is here
        return

    run: (studentCode, gameContext, finished_cb) =>
        ###
            Runs the given Java Code.
        ###
        if @running
            if @preloaded
                console?.log 'Already Running, not re-starting run'
                finished_cb false
            else
                console?.log 'Not finished preloading, will run after preload finishes'
                @firstRun = @run.bind @, studentCode, gameContext, finished_cb
            return
        start_time = (new Date()).getTime()
        if @rs.is_abort_requested
            @rs.abort_requested = null
        console?.log 'Starting Run'
        class_args = [studentCode]
        finish_cb = =>
            end_time = (new Date()).getTime()
            if @running
                console?.log 'Finished Run'
                console?.log "Took #{end_time - start_time}ms."
                @running = false
            if @updateOutput?
                @setOutputFunctions @updateOutput, @log
                @updateOutput = null
            finished_cb true
            return
        @running = true
        if gameContext
            jvm.run_class(@rs, 'codemoo/RunGame', class_args, finish_cb)
        else
            jvm.run_class(@rs, 'codemoo/Run', class_args, finish_cb)
        return

    preload: (preloadFunctions, finished_cb) ->
        if @running
            console?.log 'Busy Running'
            finished_cb false
            return
        console?.log 'Starting Preload'
        class_args = [preloadFunctions]
        finish_cb = =>
            end_time = (new Date()).getTime()
            if @running
                console?.log 'Preloading Finished'
                console?.log "Took #{end_time - start_time}ms."
                @running = false
            if @updateOutput?
                @setOutputFunctions @updateOutput, @log
                @updateOutput = null
            finished_cb true
            @preloaded = true
            if @firstRun
                @firstRun()
                @firstRun = null
            return
        @running = true
        start_time = (new Date()).getTime()
        jvm.run_class(@rs, 'codemoo/Preload', class_args, finish_cb)
        return

    abort: (finished_cb)=>
        ###
            Abort the current run.
        ###
        console?.log 'User Abort Requested'
        if @running
            if @preloaded
                console?.log 'Aborting Run'
                cb = ->
                    console?.log 'Aborted Successfully'
                    @running = false
                    finished_cb() if finished_cb?
                @rs.async_abort(cb)
            else
                console?.log 'Cannot Abort Preloading'
                finished_cb() if finished_cb?
        else
            console?.log 'No Run Detected'
            finished_cb() if finished_cb?
        return
