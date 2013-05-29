# In coffeescript jQuery ($) -> set the onReady function and lets one use $ without
# fear of naming conflicts.
jQuery ($) ->
    levelOne = "go(15);\nturnRight();\ngo(5);"
    # That string will at one point live somewhere different, but this is just for testing.
    commands = {
        go: {
            inputs: 1,
            maxUses: 3,
            usedAtStart: 2
        },
        turnRight: {
            inputs: 0,
            maxUses: 2,
            usedAtStart: 1
        }
    }
    editor = new GameEditor levelOne, commands
    window.Editor = editor # For testing only, puts editor in global namespace.
    return

class GameEditor
    constructor: (@codeText, @commands) ->
        @editor = ace.edit "editor"
        @editSession = @editor.getSession()
        # @undoManager = @editSession.getUndoManager()

        @editor.setTheme "ace/theme/chrome"
        @editSession.setMode "ace/mode/java"
        @editor.setReadOnly true
        @resetText()
        @editor.focus()

        @setUpInsertCommands()
        @addButtonEventListeners()

        # @undoManager.reset()

    getCommandFromLine: (line) ->
        re = /^(.+)\(/
        re.exec(line)[1]

    setUpInsertCommands: ->
        ###
        Adds an option to the Selector for the insert button for each command
        this game has.
        ###
        selector = $('#commandToInsert')
        for command of @commands
            selector.append $ "<option/>",
                {
                    value: command,
                    text: command
                }
        return

    UpdateCommandsStatus: ->
        ###
        Creates and fills the commands remaining field above the editor.
        ###
        statusField = $('#commandStatus')
        statusField.html()
        string = ""
        for command of @commands
            string += "#{command}: #{@commands[command]['maxUses'] - @commands[command]['used']} "
        statusField.html string
        return

    displaySelectInputFields: (event) ->
        ###
        An even triggered when the Selector for the insert button is changed.
        It creates a number of input fields equal to the number of inputs to the
        selected command.
        ###
        selectedOption = event.target.options[event.target.selectedIndex].text
        numberOfInputs = @commands[selectedOption]['inputs']
        inputsDiv = $('#insertInputs')
        inputsDiv.empty()
        for i in [1..numberOfInputs] by 1
            inputsDiv.append("<input id='#{i}' type='text' size='5'>")
        return

    addButtonEventListeners: ->
        $('#switchUp').click @button @usesCurrentPosition @switchUp
        $('#switchDown').click @button @usesCurrentPosition @switchDown
        $('#deleteLine').click @button @editsText @usesCurrentRow @deleteLine
        $('#insertLine').click @button @editsText @usesCurrentRow @insertLine
        $('#resetText').click @button @resetText
        selector = $('#commandToInsert')
        selector.change @displaySelectInputFields.bind @
        selector.change()
        return


    switchUp: (currentRow, currentColumn) ->
        if currentRow > 0
            @editSession.moveLinesUp(currentRow, currentRow)
            @editor.gotoLine currentRow, currentColumn, false
        return

    switchDown: (currentRow, currentColumn) ->
        maxRow = @editSession.getLength()
        if currentRow < maxRow - 1
            @editSession.moveLinesDown(currentRow, currentRow)
            @editor.gotoLine currentRow + 2, currentColumn, false
        return

    deleteLine: (text, currentRow) ->
        line = text.getLine currentRow
        if line != ""
            command = @getCommandFromLine line
            @commands[command]['used']--
            @UpdateCommandsStatus()
            if text.getLength() == 1
                text.insertLines currentRow + 1, ["\n"]
                text.removeNewLine currentRow
            text.removeLines currentRow, currentRow
        return

    insertLine: (text, currentRow) ->
        command = $('#commandToInsert').find(':selected').text()
        if @commands[command]['used'] < @commands[command]['maxUses']
            @commands[command]['used']++
            numberOfInputs = @commands[command]['inputs']
            inputs = []
            inputsDiv = $('#insertInputs')
            for i in [1..numberOfInputs] by 1
                inputs[i - 1] = inputsDiv.find("##{1}").val()

            # Possibly do some input sanitizing here.

            toInsert = "#{command}(#{inputs.join()});"
            text.insertLines currentRow, [toInsert]
            @UpdateCommandsStatus()
        return

    resetText: ->
        @editor.setValue @codeText
        @editor.clearSelection()
        @editor.gotoLine 0, 0, false
        for command of @commands
            @commands[command]['used']=@commands[command]['usedAtStart']
        @UpdateCommandsStatus()
        return

    button: (func) ->
        ###
        This is a wrapper for the functions which are tied to buttons.
        It restores focus to the editor after the button has been pressed.
        ###
        gameEditor = @
        return ->
            func.call gameEditor
            gameEditor.editor.focus()
            return

    usesCurrentRow: (func) ->
        ###
        This is a wrapper for the functions which need to know the current row.
        It figures out the current row and passes it to the function.
        ###
        gameEditor = @
        return ->
            currentRow = gameEditor.editor.getCursorPosition().row
            arguments[arguments.length++] = currentRow
            func.apply gameEditor, arguments
            return

    usesCurrentPosition: (func) ->
        ###
        This is a wrapper for the functions which need to know the cursor's row and column
        It figures out the current row and column and passes them to the function.
        ###
        gameEditor = @
        return ->
            cursorPosition = gameEditor.editor.getCursorPosition()
            arguments[arguments.length++] = cursorPosition.row
            arguments[arguments.length++] = cursorPosition.column
            func.apply gameEditor, arguments
            return

    editsText: (func) ->
        ###
        This is a wrapper for functions which edit the text in the editor directly.
        It gets a reference to the text and passes it to the function.
        ###
        gameEditor = @
        return ->
            text = gameEditor.editSession.getDocument()
            arguments[arguments.length++] = text
            func.apply gameEditor, arguments
            return
