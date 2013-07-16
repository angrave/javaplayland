"use strict"

class window.DoppioApi
    ###
        A class to interact with doppio with.
        Please do not call the constructor until the entire document has loaded
        (this is usually accomplished with jQuery(document).onReady)
    ###

    constructor: (@stdout, @log, @beanshellWrapperName) ->
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
        @rs = null
        return

    setOutputFunctions: (@stdout, @log) ->
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
            console.error e
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
        @log? "Untarring took a total of #{end_untar-start_untar}ms."

    run: (studentCode, beanshellWrapperName, finished_cb) =>
        ###
            Runs the given Java Code.
            Note, this does not recognize classes.
        ###
        if @rs != null
            @log? 'Already Running, not re-starting run'
            return
        start_time = (new Date()).getTime()
        @log? 'Starting Run'
        fname = 'program.bsh'
        node.fs.writeFileSync(fname, studentCode)
        stdin = -> "\n"
        if beanshellWrapperName?
            class_args = [beanshellWrapperName]
        else
            class_args = [fname]
        finish_cb = =>
            end_time = (new Date()).getTime()
            if @rs != null
                @log? 'Finished Run'
                @log? "Took #{end_time - start_time}ms."
                @rs = null
            finished_cb()
            return

        @rs = new runtime.RuntimeState(@stdout, stdin, @bs_cl)
        jvm.run_class(@rs, 'bsh/Interpreter', class_args, finish_cb)
        return

    abort: (finished_cb)=>
        ###
            Abort the current run.
        ###
        @log? 'User Abort Requested'
        if @rs
            @log? 'Aborting Run'
            cb = =>
                @log? 'Aborted Successfully'
                @rs = null
                finished_cb() if finished_cb?
            @rs.async_abort(cb)
        else
            @log? 'No Run Detected'
        return
