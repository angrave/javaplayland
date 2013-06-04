class window.PlayerCodeEditor
    ###
    Creates and provides functionality for an Ace editor representing player's code.
    Also provides functionality to several buttons it expects to be on the html page
    that interact with the player's code.

    Expects the following from the html page:
        A field with id of "insertButtons"
        A div with id equal that passed in as the div where the ace editor will be.
        Buttons with the ids of:
            switchUp
            switchDown
            deleteLine
            resetState
        A selector with id of "commandToInsert"
    ###
    constructor: (@editorDivId, @codeText, @commands) ->
        ###
            Sets internal variables, the default text and buttons
            and their event handlers.
        ###
        @editor = ace.edit @editorDivId
        @editSession = @editor.getSession()
        @editor.setTheme "ace/theme/chrome"
        @editSession.setMode "ace/mode/java"

        @buildNeededRegex()
        @resetState()
        @editor.focus()

        @setUpInsertButtons()
        @addEventListeners()
        @enableKeyboardShortcuts()

    enableKeyboardShortcuts: ->
        ###
            Currently does nothing.
            It used to be that the text was in read-only mode.
            Now that it is not the two shortcuts this used to enable
            are enabled by default by ace.
        ###
        return

    buildNeededRegex: ->
        for command of @commands
            numberOfInputs = @commands[command]['inputs']
            innerRegex = ""
            for i in [1..numberOfInputs] by 1
                innerRegex += ".+"
                if i != numberOfInputs
                    innerRegex += ","

            re = "^#{command}\\((#{innerRegex})\\)(?:,|.|$)"
            @commands[command]['regex'] = RegExp re
        return

    setUpInsertButtons: ->
        ###
            Inserts a button for each command of the game to the html field
            with the id of 'insertButtons'.
        ###
        buttonField = jQuery('#insertButtons')
        buttons = []
        for command of @commands
            line = @createBlankFunctionHeader(command)
            usesRemaining = @commands[command]['usesRemaining']
            codeEditor = @
            button = jQuery '<button>', {
                id: command,
                value: line,
                text: "#{line}: #{usesRemaining}",
                click: (e) ->
                    (codeEditor.button codeEditor.usesCurrentRow \
                        codeEditor.editsText codeEditor.insertLine)
                    .call(codeEditor,
                            codeEditor.createNamedArguments({line: e.currentTarget.value}))
                    return false
            }
            buttons.push button.get 0
        buttonField.append buttons
        return

    createBlankFunctionHeader: (command) ->
        numberOfInputs = @commands[command]['inputs']
        underscoresForInputs = ""
        for i in [1..numberOfInputs] by 1
            underscoresForInputs += '__'
            if i != numberOfInputs
                underscoresForInputs += ', '
        return "#{command}(#{underscoresForInputs})"

    addEventListeners: ->
        jQuery('#switchUp').click @button @usesCurrentPosition @switchUp
        jQuery('#switchDown').click @button @usesCurrentPosition @switchDown
        jQuery('#deleteLine').click @button @editsText @usesCurrentRow @deleteLine
        jQuery('#resetState').click @button @resetState
        @editor.on 'change', @onTextChange.bind @
        return

    onTextChange: (changeEvent) ->
        ###
            This function is triggered after the text in the ace editor is changed.
        ###
        if @scanTextID
            window.clearTimeout @scanTextID
            delete @scanTextID
        @scanTextID = window.setTimeout @scanTextCallback.bind(@), 1500
        return true

    scanTextCallback: ->
        @scanText()
        @UpdateCommandsStatus()

    scanText: ->
        ###
        ###
        for command of @commands
            @commands[command]['usesRemaining'] = @commands[command]['maxUses']

        text = @editor.getValue()
        currentLine = 0
        while text != ""
            alert "Processing: \n#{text}"
            result = null
            for command of @commands
                result = @commands[command]['regex'].exec text
                if result != null
                    @commands[command]['usesRemaining']--
                    alert "Found: \n#{result[0]}"
                    @processMatch command, result[1]
                    break

            if result == null
                result = /^\n/.exec text
                if result != null
                    currentLine++

            if result == null
                result = /^;/.exec text

            if result == null
                text = text.substring 1
                alert "Unrecognized"
            else
                text = text.substring result[0].length
        return

    processMatch: (command, innerText) ->
        alert "Inner Process: \n#{innerText}"
        if typeof innerText == "undefined" or innerText == null or innerText == ""
            return
        while innerText != ""
            for command of @commands
                result = @commands[command]['regex'].exec innerText
                if result != null
                    @commands[command]['usesRemaining']--
                    alert "Found: \n#{result[0]}"
                    @processMatch command, result[1]
                    break

            if result == null
                result = /^,/.exec innerText

            if result == null
                innerText = innerText.substring 1
            else
                innerText = innerText.substring result[0].length

        return

    UpdateCommandsStatus: ->
        ###
            Updates the number of commands remaining for each command.
        ###
        buttonField = jQuery '#insertButtons'
        for command of @commands
            button = buttonField.find "##{command}"
            line = @createBlankFunctionHeader command
            usesRemaining = @commands[command]['usesRemaining']
            if usesRemaining <= 0
                button.attr 'disabled', true

            button.text "#{line}: #{usesRemaining}"
        return

    switchUp: ({currentRow, currentColumn}) ->
        if currentRow > 0
            @editSession.moveLinesUp(currentRow, currentRow)
            @editor.gotoLine currentRow, currentColumn, false
        return

    switchDown: ({currentRow, currentColumn}) ->
        maxRow = @editSession.getLength()
        if currentRow < maxRow - 1
            @editSession.moveLinesDown(currentRow, currentRow)
            @editor.gotoLine currentRow + 2, currentColumn, false
        return

    deleteLine: ({text, currentRow}) ->
        line = text.getLine currentRow
        if text.getLength() == 1
            text.insertLines currentRow + 1, ["\n"]
            text.removeNewLine currentRow
        text.removeLines currentRow, currentRow
        return

    insertLine: ({text, line, currentRow}) ->
        inputsDiv = jQuery('#insertButtons')
        text.insertLines currentRow, [line]

        if text.getLength() == 2 and text.getLine(currentRow + 1) == ""
            text.removeNewLine currentRow

        return

    resetState: ->
        ###
            Resets the text displayed in the editor,
            the commands used counts, and other internal variables.
        ###
        @editor.setValue @codeText
        @editor.clearSelection()
        @editor.gotoLine 0, 0, false
        @scanText()
        @UpdateCommandsStatus()
        return

    button: (func) ->
        ###
            This is a wrapper for the functions which are tied to buttons.
            It restores focus to the editor after the button has been pressed.
        ###
        playerCodeEditor = @
        return ->
            if arguments.length != 0 and playerCodeEditor.detectNamedArgument arguments[0]
                func.apply playerCodeEditor, arguments
            else
                func.call playerCodeEditor
            playerCodeEditor.editor.focus()
            return false

    usesCurrentRow: (func) ->
        ###
            This is a wrapper for the functions which need to know the current row.
            It retrieves the current row and passes it to the function.
        ###
        playerCodeEditor = @
        return ->
            currentRow = playerCodeEditor.editor.getCursorPosition().row
            @addNamedArguments arguments, {currentRow: currentRow}

            func.apply playerCodeEditor, arguments
            return false

    usesCurrentPosition: (func) ->
        ###
            This is a wrapper for the functions which need to know the cursor's row and column
            It retrieves the current row and the current column and passes them to the function.
        ###
        playerCodeEditor = @
        return ->
            cursorPosition = playerCodeEditor.editor.getCursorPosition()
            @addNamedArguments arguments, {
                currentRow: cursorPosition.row,
                currentColumn: cursorPosition.column
            }

            func.apply playerCodeEditor, arguments
            return false

    editsText: (func) ->
        ###
            This is a wrapper for functions which edit the text in the editor directly.
            It gets a reference to the text and passes it to the function.
        ###
        playerCodeEditor = @
        return ->
            text = playerCodeEditor.editSession.getDocument()
            @addNamedArguments arguments, {text: text}

            func.apply playerCodeEditor, arguments
            return false

    addNamedArguments: (originalArguments, argumentDictionary) ->
        ###
            Adds the named arguments to the original arguments.
            Makes changes to originalArguments, returns nothing.
        ###
        if originalArguments.length == 0
            originalArguments[originalArguments.length++] = \
                @createNamedArguments argumentDictionary
        else
            argumentFound = false
            for argument of originalArguments
                if @detectNamedArgument originalArguments[argument]
                    jQuery.extend true, originalArguments[argument],
                        argumentDictionary
                    argumentFound = true
                    break
            if not argumentFound
                originalArguments[originalArguments.length++] = \
                    @createNamedArguments argumentDictionary
        return

    createNamedArguments: (argumentDictionary) ->
        ###
            Takes in an object of key-value pairs,
            returns an object of the Named Arguments format.
        ###
        argumentDictionary['namedArgumentsFlag'] = true
        return argumentDictionary

    detectNamedArgument: (argument) ->
        ###
            Returns whether or not the argument is of the namedArguments format.
        ###
        if argument == null
            return false
        if typeof argument != 'object'
            return false
        if not ('namedArgumentsFlag' of argument)
            return false
        if argument['namedArgumentsFlag'] != true
            return false
        return true
