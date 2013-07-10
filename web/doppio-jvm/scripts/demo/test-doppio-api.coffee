"use strict"
root = this

root.init_editor = ->
    root.editor = ace.edit('source')
    JavaMode = require("ace/mode/java").Mode
    root.editor.getSession().setMode(new JavaMode())
    root.editor.getSession().setValue ('classes.doppio.JavaScript.eval("console.log(\\\"HELLO WORLD\\\");");')
    return

root.preload = ->
    stdout = (msg) ->
        console.log msg
    log = console.log
    root.doppioAPI = new DoppioApi(stdout, log)
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
