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
    return cb(data) if data != null

  failure_cb(-> throw new Error "Error: No file found for class #{cls}.")

load_mini_rt = ->
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
      [base,ext] = path.split('.')
      file_count++
      cls = base.substr(base_dir.length)
      node.fs.writeFileSync(path, util.array_to_bytestr(file), 'utf8', true)
    untar new util.BytesArray(util.bytestr_to_array data), writeOneFile
    end_untar = (new Date()).getTime()
    console.log "Untarring took a total of #{end_untar-start_untar}ms."

compileAndRun = ->
    fname = "Student.java"
    cname = fname.slice(0,-5)
    console.log cname
    contents = editor.getSession().getValue()
    root.saveFile fname, contents
    msg = '' ;
    stdout = (str) ->
        msg += str
        console.log str
        $('#messages').text msg
    stdin = -> "\n"
    class_args = [ fname ]
    exec_finish_cb = ->
         root.rs = null
         console.log 'Done'
    compile_finished_cb  = ->
        root.rs = null
        if msg.length ==0
            root.exec stdout, stdin, cname, class_args, exec_finish_cb
    root.compile stdout, fname, compile_finished_cb

init_editor = ->
    editor = ace.edit('source')
    JavaMode = require("ace/mode/java").Mode
    editor.getSession().setMode(new JavaMode())
    editor.getSession().setValue ("public class Student {\n  public static void main(String[]args) {\n    System.out.println(\"Args=\"+args[0]);\n  }\n}")

root.preload = ->
    load_mini_rt()
    init_editor()
    
    root.bs_cl = new ClassLoader.BootstrapClassLoader(read_classfile)
    
    $('#run_btn').click (e) ->
        compileAndRun()
        e.preventDefault()
    $('#abort_btn').click (e) ->
        console.log 'abort button clicked'
        if root.rs
            $('#messages').text 'Stopping ...'
            cb =-> $('#messages').text 'Stopped'
            root.rs.async_abort(cb) 
        else
            console.log 'but nothing to do'
        e.preventDefault()


    
$(document).ready ->
    root.preload()

root.rs = null

root.saveFile = (fname,contents) ->
    contents += '\n' unless contents[contents.length-1] == '\n'
    node.fs.writeFileSync(fname, contents)
    console.log("File saved as '#{fname}'.")

root.compile = (stdout, fname,finish_cb) ->
    $('#messages').text "Compiling #{fname} ..."
    start_compile=(new Date()).getTime()
    jvm.set_classpath '/home/doppio/vendor/classes/', './:/home/doppio'
    user_input = (resume) -> resume ''

    rs = new runtime.RuntimeState(stdout, user_input, root.bs_cl)
    root.rs = rs
    args = [ fname ]
    my_cb = (success) ->
        end_compile=(new Date()).getTime()
        root.rs = null
        console.log "javac took a total of #{end_compile-start_compile}ms."
        if success
            $('#messages').text 'Compilation complete'
        else
            $('#messages').text ''
        finish_cb()
    useECJ = true
    if useECJ
        jvm.system_properties['jdt.compiler.useSingleThread'] = true
        #Could play with -noExit too
        jvm.run_class rs, 'org/eclipse/jdt/internal/compiler/batch/Main', args, my_cb
    else 
        jvm.run_class rs, 'classes/util/Javac', args, my_cb
    return

root.exec = (stdout,stdin, class_name,class_args, finish_cb) ->
    $('#messages').text "Running #{class_name}"
    rs = new runtime.RuntimeState(stdout, stdin, root.bs_cl)
    jvm.run_class(rs, class_name, class_args, finish_cb)
    $('#messages').text ''
    return

root.abortjvm = ->
    alert('Abort! Abort! Not Yet..')
