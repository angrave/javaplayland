"use strict"

class window.DoppioApi
    ###
        A class to interact with doppio with.
        Please do not call the constructor until the entire document has loaded
        (this is usually accomplished with jQuery(document).onReady)
    ###

    constructor: (@stdout, logIgnore) ->
        ###
            Sets up Doppio environment.
            @stdout (msg) ->
                A function that will receive messages from the executing java code.
            @log (msg) ->
                A function that will receive log messages such as total execution
                time or abort requests. Set to null to disable logging.
        ###

        @load_mini_rt()
        @bs_cl = new ClassLoader.BootstrapClassLoader(@read_classfile)
        jvm.set_classpath '/home/doppio/vendor/classes/', './'
        stdin = -> "\n"
        @rs = new runtime.RuntimeState(@output, stdin, @bs_cl)
        @running = false
        @preloaded = false
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

    read_classfile: (cls, cb, failure_cb) ->
        ###
            Used internally in Doppio.
            Read in a binary classfile synchronously. Return an array of bytes.
        ###
        cls = cls[1...-1] # Convert Lfoo/bar/Baz; -> foo/bar/Baz.
        for path in jvm.system_properties['java.class.path']
            fullpath = "#{path}#{cls}.class"
            try
                data = util.bytestr_to_array node.fs.readFileSync(fullpath)
            catch e
                data = null
            return cb(data) if data != null and data.length > 0
        failure_cb(-> throw new Error "Error: No file found for class #{cls}.")

    load_mini_rt: ->
        ###
            Loads the compressed pre-compiled java classes for Doppio
        ###
        try
            data = node.fs.readFileSync("/home/doppio/preload.tar")
        catch e
            console?.error e
        if data == null
            throw new Error "No mini-rt data"

        file_count = 0
        done = false
        start_untar = (new Date()).getTime()
        writeOneFile = (percent, path, file) ->
            base_dir = 'vendor/classes/'
            [base, ext] = path.split '.'
            file_count++
            cls = base.substr base_dir.length
            if file.length > 0
                node.fs.writeFileSync(path, util.array_to_bytestr(file), 'utf8', true)
            return
        untar new util.BytesArray(util.bytestr_to_array data), writeOneFile
        end_untar = (new Date()).getTime()
        console?.log "Untarring took a total of #{end_untar-start_untar}ms."
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
