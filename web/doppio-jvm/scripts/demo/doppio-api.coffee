"use strict"
root = this

root.init_editor = ->
    root.editor = ace.edit('source')
    JavaMode = require("ace/mode/java").Mode
    root.editor.getSession().setMode(new JavaMode())
    root.editor.getSession().setValue ('classes.doppio.JavaScript.eval("console.log(\\\"HELLO WORLD\\\");");')
    return

root.preload = ->
    root.doppioAPI = new DoppioApi()
    root.init_editor()

    $('#run_btn').click (e) ->
        root.doppioAPI.run root.editor.getValue()
        e.preventDefault()
        return
    $('#abort_btn').click (e) ->
        root.doppioAPI.abort()
        e.preventDefault()
        return
    return

$(document).ready ->
    root.preload()

### TEST CODE ###
# classes.doppio.JavaScript.eval("console.log(\"HELLO WORLD\");");

class window.DoppioApi
    ###
        A class to interact with doppio with.
        Do not call the constructor until the document is ready.
    ###
    constructor: () ->
        @load_mini_rt()
        @bs_cl = new ClassLoader.BootstrapClassLoader(@read_classfile)
        jvm.set_classpath '/home/doppio/vendor/classes/', './'
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
            return cb(data) if data != null and data.length > 0
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
            if file.length > 0
                node.fs.writeFileSync(path, util.array_to_bytestr(file), 'utf8', true)
            return
        untar new util.BytesArray(util.bytestr_to_array data), writeOneFile
        end_untar = (new Date()).getTime()
        console.log "Untarring took a total of #{end_untar-start_untar}ms."

    run: (studentCode) ->
        start_time = (new Date()).getTime()
        fname = 'program.bsh'
        @saveFile fname, studentCode
        stdout = (str) ->
            console.log str
            return str
        stdin = -> "\n"
        class_args = [fname]
        finish_cb = =>
            end_time = (new Date()).getTime()
            console.log 'Finished Run'
            console.log "Took #{end_time - start_time}ms."
            @rs = null
            return

        @rs = new runtime.RuntimeState(stdout, stdin, @bs_cl)
        jvm.run_class(@rs, 'bsh/Interpreter', class_args, finish_cb)
        return

    abort: =>
        console.log 'User Abort Requested'
        if @rs
            console.log 'Aborting Run'
            cb = =>
                console.log 'Aborted Successfully'
                @rs = null
            @rs.async_abort(cb)
        else
            console.log 'No Run Detected'
        return

    saveFile: (fname, contents) ->
        contents += '\n' unless contents[contents.length-1] == '\n'
        node.fs.writeFileSync(fname, contents)
        console.log("File saved as '#{fname}'.")
        return