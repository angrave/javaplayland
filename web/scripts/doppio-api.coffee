"use strict"

class window.DoppioApi
    ###
    An api for the PlayerCodeEditor to interact with doppio with.
    To be constructed only after the document is ready ($document.onReady).
    Requires node.fs, jquery($), _.js and jvm.
    This code assumes that the game's java file was preloaded by being included
    in mini-rt.tar.
    NOTE:
        I know Lawrence is working on a more general api, but I can't find it right now
        so I am just hacking this together to see if I can
        get it to work.
    ###
    constructor: () ->
        # This bit assumes document is ready:
        # stdout = (str) -> controller.message str, '', true # noreprompt
        @stdout = (str) -> alert str

        bs_cl = new ClassLoader.BootstrapClassLoader(readClassfile)
        @preload()

    preload: ->
        ###
            Loads the mini-rt.tar into the node filesystem.
        ###
        try
            data = node.fs.readFileSync("/home/doppio/browser/mini-rt.tar")
        catch e
            console.error e

        if data?
            file_count = 0
            done = false
            start_untar = (new Date).getTime()
            on_complete = ->
                end_untar = (new Date).getTime()
                console.log "Untarring took a total of #{end_untar-start_untar}ms."
                $('#overlay').fadeOut 'slow'
                $('#progress-container').fadeOut 'slow'
                # $('#console').click()
            update_bar = _.throttle ((percent, path) ->
                bar = $('#progress > .bar')
                preloading_file = $('#preloading-file')
                # +10% hack to make the bar appear fuller before fading kicks in
                display_perc = Math.min Math.ceil(percent*100), 100
                bar.width "#{display_perc}%", 150
                preloading_file.text(
                    if display_perc < 100 then "Loading #{path}"  else "Done!"))

            untar new util.BytesArray(util.bytestr_to_array data), ((percent, path, file) ->
                update_bar(percent, path)
                base_dir = 'vendor/classes/'
                [base, ext] = path.split('.')
                unless ext is 'class'
                    on_complete() if percent == 100
                    return
                file_count++
                cls = base.substr(base_dir.length)
                asyncExecute (->
                    # XXX: We convert from bytestr to array to process the tar file, and
                    #      then back to a bytestr to store as a file in the filesystem.
                    node.fs.writeFileSync(path, util.array_to_bytestr(file), 'utf8', true)
                    on_complete() if --file_count == 0 and done
                ), 0),
                ->
                    done = true
                    on_complete() if file_count == 0


    # Read in a binary classfile synchronously. Return an array of bytes.
    readClassfile: (cls, cb, failure_cb) ->
        cls = cls[1...-1] # Convert Lfoo/bar/Baz; -> foo/bar/Baz.
        for path in jvm.system_properties['java.class.path']
            fullpath = "#{path}#{cls}.class"
            try
                data = util.bytestr_to_array node.fs.readFileSync(fullpath)
            catch e
                data = null
            return cb(data) if data?

        failure_cb(-> throw new Error "Error: No file found for class #{cls}.")

    executeStudentCode: (studentCode, gameName) ->
        ###
            Runs the student's code for the game given by gameName.
            Assumes that there is such a file as gameName.java in the file system.
        ###


    # We don't need the commands object, but we need to know what functionality
    # to implement manually.
    commands:
        javac: (args, cb) ->
            jvm.set_classpath '/home/doppio/vendor/classes/', './:/home/doppio'
            rs = new runtime.RuntimeState(stdout, user_input, bs_cl)
            jvm.run_class rs, 'classes/util/Javac', args, ->
                # HACK: remove any classes that just got compiled from the class cache
                for c in args when c.match /\.java$/
                    bs_cl.remove_class(util.int_classname(c.slice(0,-5)))
                controller.reprompt()
            return null  # no reprompt, because we handle it ourselves
        java: (args, cb) ->
            if !args[0]? or (args[0] == '-classpath' and args.length < 3)
                return "Usage: java [-classpath path1:path2...] class [args...]"
            if args[0] == '-classpath'
                jvm.set_classpath '/home/doppio/vendor/classes/', args[1]
                class_name = args[2]
                class_args = args[3..]
            else
                jvm.set_classpath '/home/doppio/vendor/classes/', './'
                class_name = args[0]
                class_args = args[1..]
            rs = new runtime.RuntimeState(stdout, user_input, bs_cl)
            jvm.run_class(rs, class_name, class_args, -> controller.reprompt())
            return null  # no reprompt, because we handle it ourselves
        clear_cache: ->
            bs_cl = new ClassLoader.BootstrapClassLoader(readClassfile)
            return true
        rm: (args) ->
            return "Usage: rm <file>" unless args[0]?
            if args[0] == '*'
                fnames = node.fs.readdirSync('.')
                for fname in fnames
                    fstat = node.fs.statSync(fname)
                    if fstat.is_directory
                        return "ERROR: '#{fname}' is a directory."
                node.fs.unlinkSync(fname)
            else node.fs.unlinkSync args[0]
            true