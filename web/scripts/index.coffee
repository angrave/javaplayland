# In coffeescript jQuery ($) -> set the onReady function and lets one use $ without
# fear of naming conflicts.
jQuery ($) ->
    levelOne = "go(15);\nturnRight();\ngo(5);"
    # That string will at one point live somewhere different, but this is just for testing.
    commands = {
        go: 1,
        turnRight: 0
    }
    new GameEditor levelOne, commands
    return

class GameEditor
    constructor: (@codeText, @commands) ->
        @editor = ace.edit "editor"
        @editor.setTheme "ace/theme/chrome"
        @editor.getSession().setMode "ace/mode/java"
        @editor.setValue @codeText
        @editor.clearSelection()
        @editor.gotoLine 0, 0, false
        @editor.setReadOnly true
        @editor.focus()

        @setUpInsertCommands()
        @addButtonEventListeners()

    setUpInsertCommands: ->
        selector = $('#commandToInsert')
        for command of @commands
            selector.append $ "<option/>",
                {
                    value: command,
                    text: command
                }
        return

    displaySelectInputFields: (event) ->
        selectedOption = event.target.options[event.target.selectedIndex].text
        numberOfInputs = @commands[selectedOption]
        inputsDiv = $('#insertInputs')
        inputsDiv.empty()
        for i in [1..numberOfInputs] by 1
            inputsDiv.append("<input id='#{i}' type='text' size='5'>")
        return

    button: (func) ->
        # This is a wrapper for the functions which are tied to buttons.
        gameEditor = @
        return ->
            text = gameEditor.editor.getSession().getDocument()
            currentRow = gameEditor.editor.getCursorPosition().row
            func.call gameEditor, text, currentRow
            gameEditor.editor.focus()

    addButtonEventListeners: ->
        $('#switchUp').click @button @switchUp
        $('#switchDown').click @button @switchDown
        $('#deleteLine').click @button @deleteLine
        $('#insertLine').click @button @insertLine
        $('#resetText').click @button @resetText
        selector = $('#commandToInsert')
        selector.change @displaySelectInputFields.bind @
        selector.change()
        return

    switchUp: (text, currentRow) ->
        if currentRow > 0
            previousRow = currentRow - 1
            previousLine = text.getLine previousRow
            text.removeLines previousRow, previousRow
            text.insertLines currentRow, [previousLine]
        return

    switchDown: (text, currentRow) ->
        maxRow = text.getLength()
        if currentRow < maxRow - 1
            nextRow = currentRow + 1
            nextLine = text.getLine nextRow
            text.removeLines nextRow, nextRow
            text.insertLines currentRow, [nextLine]
        return

    deleteLine: (text, currentRow) ->
        text.removeLines currentRow, currentRow
        @editor.gotoLine currentRow, 0, false
        return

    insertLine: (text, currentRow) ->
        command = $('#commandToInsert').find(':selected').text()
        numberOfInputs = @commands[command]
        inputs = []
        inputsDiv = $('#insertInputs')
        for i in [1..numberOfInputs] by 1
            inputs[i - 1] = inputsDiv.find("##{1}").val()

        # Possibly do some input sanitizing here.

        toInsert = "#{command}(#{inputs.join()});"
        text.insertLines currentRow, [toInsert]
        return

    resetText: (text, currentRow) ->
        text.setValue @codeText
        return
