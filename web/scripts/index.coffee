# In coffeescript jQuery ($) -> sets the onReady function and lets one use $ without
# fear of naming conflicts.
jQuery ($) ->
    levelOne = 'System.out.println("Hello World");'
    # That string will at one point live somewhere different, but this is just for testing.
    commands = {
        go: {
            inputs: 1,
            maxUses: 3
        },
        turnRight: {
            inputs: 0,
            maxUses: 2
        },
        turn: {
            inputs: 2,
            maxUses: 3
        }
    }

    editor = new PlayerCodeEditor "editor", levelOne, commands
    window.Editor = editor # For testing only, puts editor in global namespace.
    doppio = new DoppioApi()
    $('#compileAndRun').click runStudentCode(doppio, editor)
    return

runStudentCode = (doppio, editor) ->
    return ->
        code = editor.getStudentCode()
        console.log "Code: #{code}"
        doppio.compileAndRun code
        return
