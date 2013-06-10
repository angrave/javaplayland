"use strict"

root = this

# To be initialized on document load
stdout = null
user_input = null
controller = null
editor = null
progress = null
bs_cl = null


# Read in a binary classfile synchronously. Return an array of bytes.
read_classfile = (cls, cb, failure_cb) ->
  cls = cls[1...-1] # Convert Lfoo/bar/Baz; -> foo/bar/Baz.
  for path in jvm.system_properties['java.class.path']
    fullpath = "#{path}#{cls}.class"
    try
      data = util.bytestr_to_array node.fs.readFileSync(fullpath)
    catch e
      data = null
    return cb(data) if data?

  failure_cb(-> throw new Error "Error: No file found for class #{cls}.")

root.preload = ->
      try
        data = node.fs.readFileSync("/home/doppio/browser/mini-rt.tar")
      catch e
        console.error e
      if data?
        file_count = 0
        done = false
        start_untar = (new Date).getTime()
        writeOneFile = (percent, path, file) ->
          update_bar(percent, path)
          base_dir = 'vendor/classes/'
          [base,ext] = path.split('.')
          file_count++
          cls = base.substr(base_dir.length)
          node.fs.writeFileSync(path, util.array_to_bytestr(file), 'utf8', true)
        untar new util.BytesArray(util.bytestr_to_array data), writeOneFile
        end_untar = (new Date).getTime()
        console.log "Untarring took a total of #{end_untar-start_untar}ms."
      return


root.saveFile = (fname,contents) ->
    contents += '\n' unless contents[contents.length-1] == '\n'
    node.fs.writeFileSync(fname, contents)
 
#Example stdout: msg = '' ; stdout = (str) -> msg += str

root.compile = (stdout, fname,finish_cb) -> 
    start_compile=(new Date).getTime()
    jvm.set_classpath '/home/doppio/vendor/classes/', './:/home/doppio'
    user_input = (resume) -> resume ''
    bs_cl = new ClassLoader.BootstrapClassLoader(read_classfile)
    rs = new runtime.RuntimeState(stdout, user_input, bs_cl)
    my_cb = ->
        end_compile=(new Date).getTime()
        console.log "javac took a total of #{end_compile-start_compile}ms."
        finish_cb()
    jvm.run_class rs, 'classes/util/Javac', args, my_cb  
    return

root.exec = (stdout,stdin, classname,class_args, finish_cb) ->
    bs_cl = new ClassLoader.BootstrapClassLoader(read_classfile)
    rs = new runtime.RuntimeState(stdout, stdin, bs_cl)
    jvm.run_class(rs, class_name, class_args, finish_cb)
    return

root.abortjvm = ->
    alert('Abort! Abort! Not Yet..')
