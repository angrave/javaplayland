"use strict"

class window.DoppioApi
    ###
        A class to interact with doppio with.
        Do not call the constructor until the document is ready.
    ###
    constructor: () ->
        @load_mini_rt()
        return

    # Read in a binary classfile synchronously. Return an array of bytes.
    read_classfile: (cls, cb, failure_cb) ->
        cls = cls[1...-1] # Convert Lfoo/bar/Baz; -> foo/bar/Baz.
        for path in jvm.system_properties['java.class.path']
            fullpath = "#{path}#{cls}.class"
            try
                data = util.bytestr_to_array node.fs.readFileSync(fullpath)
            catch e
                data = null
            return cb(data) if data != null
        failure_cb(-> throw new Error "Error: No file found for class #{cls}.")

    load_mini_rt: ->
        try
            data = node.fs.readFileSync("/home/doppio/scripts/demo/mini-rt.tar")
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
            node.fs.writeFileSync(path, util.array_to_bytestr(file), 'utf8', true)
        untar new util.BytesArray(util.bytestr_to_array data), writeOneFile
        end_untar = (new Date()).getTime()
        console.log "Untarring took a total of #{end_untar-start_untar}ms."

    compileAndRun: (studentCode) ->
        fname = "Student.java"
        cname = fname.slice 0, -5
        console.log cname
        @saveFile fname, studentCode
        msg = ''
        stdout = (str) ->
            msg += str
            console.log str
            return str

        stdin = -> "\n"

        class_args = [fname]
        exec_finish_cb = ->
            console.log 'Done'
            return

        compile_finished_cb = ->
            console.log "Compilation Finished"
            if msg.length == 0
                @exec stdout, stdin, cname, class_args, exec_finish_cb

        @compile stdout, fname, compile_finished_cb.bind @

    saveFile: (fname, contents) ->
        contents += '\n' unless contents[contents.length-1] == '\n'
        node.fs.writeFileSync(fname, contents)
        console.log("File saved as '#{fname}'.")

    compile: (stdout, fname, finish_cb) ->
        console.log "Compiling #{fname} ..."
        start_compile = (new Date()).getTime()
        jvm.set_classpath '/home/doppio/vendor/classes/', './:/home/doppio'
        user_input = (resume) -> resume ''
        bs_cl = new ClassLoader.BootstrapClassLoader(@read_classfile)
        rs = new runtime.RuntimeState(stdout, user_input, bs_cl)
        args = [ fname ]
        my_cb = ->
            end_compile = (new Date()).getTime()
            console.log "javac took a total of #{end_compile-start_compile}ms."
            console.log 'Compilation complete'
            finish_cb()
        jvm.run_class rs, 'classes/util/Javac', args, my_cb
        return

    exec: (stdout, stdin, class_name, class_args, finish_cb) ->
        console.log "Running #{class_name}"
        bs_cl = new ClassLoader.BootstrapClassLoader(@read_classfile)
        rs = new runtime.RuntimeState(stdout, stdin, bs_cl)
        jvm.run_class(rs, class_name, class_args, finish_cb)
        return