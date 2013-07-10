"use strict"
root = this

root.init_editor = ->
    root.editor = new PlayerCodeEditor 'source', null, \
        'classes.doppio.JavaScript.eval("console.log(\\\"HELLO WORLD\\\");");', \
        false, "", "", true
    return

root.preload = ->
    stdout = (msg) ->
        console.log msg
    log = console.log
    root.doppioAPI = new DoppioApi(stdout, log)
    root.init_editor()

    $('#run_btn').click (e) ->
        root.doppioAPI.run root.editor.getStudentCode()
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
