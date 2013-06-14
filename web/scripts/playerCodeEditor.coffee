String.prototype.startsWith ?= (str) ->
    return @lastIndexOf(str, 0) == 0

# class window.EditorManager
#     ###
#         Manages the code editor.
#     ###
#     constructor: (@editorDivId) ->



class window.PlayerCodeEditor
    ###
        Creates and provides functionality for an Ace editor representing player's code.
    ###
    constructor: (@editorDivId, codeText, @commands, @codePrefix, @codeSuffix) ->
        ###
            Sets internal variables, the default text and buttons
            and their event handlers.
        ###
        @editor = ace.edit @editorDivId
        @editSession = @editor.getSession()
        @editSession.setMode 'ace/mode/java'
        @editSession.setUseSoftTabs true
        @editor.setReadOnly false

        @codePrefixLength = codePrefix.split('\n').length - 1
        @codeSuffixLength = codeSuffix.split('\n').length

        @codeText = @codePrefix + codeText + '\n' + @codeSuffix

        @enableKeyboardShortcuts()

        @resetState()
        @editor.focus()

    getStudentCode: ->
        return @editor.getValue()

    enableKeyboardShortcuts: ->
        ###
            Not currently enabled as it would be difficult to prevent
            keyboard shortcuts from changing uneditable areas.
        ###
        # @editor.commands.commands.movelinesup['readOnly'] = true
        # @editor.commands.commands.movelinesdown['readOnly'] = true
        return

    onChangeListener: (callback) ->
        @editor.on 'change', callback
        return

    onClickListener: (callback) ->
        @editor.on 'click', ((clickEvent) =>
            inBounds = true
            if clickEvent.$pos.row < @codePrefixLength or\
               clickEvent.$pos.row >= @editSession.getLength() - @codeSuffixLength
                inBounds = false
            return callback inBounds, clickEvent
            )
        return

    onCursorMoveListener: (callback) ->
        @editSession.getSelection().on 'changeCursor', callback
        return

    switchUp: ({currentRow, currentColumn}) ->
        maxRow = @editSession.getLength()
        if currentRow - 1 < @codePrefixLength or currentRow >= maxRow - @codeSuffixLength
            return
        if currentRow > 0
            @editSession.moveLinesUp(currentRow, currentRow)
            @editor.gotoLine currentRow, currentColumn, false
        return

    switchDown: ({currentRow, currentColumn}) ->
        maxRow = @editSession.getLength()
        if currentRow + 1 >= maxRow - @codeSuffixLength or currentRow < @codePrefixLength
            return
        if currentRow < maxRow - 1
            @editSession.moveLinesDown(currentRow, currentRow)
            @editor.gotoLine currentRow + 2, currentColumn, false
        return

    deleteLine: ({text, currentRow}) ->
        maxRow = @editSession.getLength()
        if currentRow >= maxRow - @codeSuffixLength or currentRow < @codePrefixLength
            return
        line = text.getLine currentRow
        if text.getLength() == 1
            text.insertLines currentRow + 1, ["\n"]
            text.removeNewLine currentRow
        text.removeLines currentRow, currentRow
        return

    insertLine: ({text, line, currentRow}) ->
        maxRow = @editSession.getLength()
        if currentRow + 1 < @codePrefixLength or currentRow + 1 >= maxRow - (@codeSuffixLength - 1)
            return

        printLine = (@createBlankFunctionHeader line) + ';'
        # nextLineIndent = @editSession.getMode().getNextLineIndent(
        #     @editSession.getState(currentRow),
        #     text.getLine(currentRow),
        #     @editSession.getTabString())
        # printLine = nextLineIndent + printLine

        text.insertLines currentRow + 1, [printLine]

        if text.getLength() == 2 and text.getLine(currentRow) == ""
            text.removeNewLine currentRow

        @editor.gotoLine currentRow + 2, 0, false
        return

    editLine: ({text, editRow, newLine}) ->
        maxRow = @editSession.getLength()
        if editRow + 1 < @codePrefixLength or editRow + 1 >= maxRow - (@codeSuffixLength - 1)
            return
        # thisLineIndent = @editSession.getMode().getNextLineIndent(
        #     @editSession.getState(editRow - 1),
        #     text.getLine(editRow - 1),
        #     @editSession.getTabString())

        # printLine = thisLineIndent + newLine
        text.insertLines editRow, [newLine]
        text.removeLines editRow + 1, editRow + 1

        return

    resetState: ->
        ###
            Resets the text displayed in the editor,
            the commands used counts, and other internal variables.
        ###
        @editor.setValue @codeText
        @editor.clearSelection()
        @editor.gotoLine 0, 0, false
        @reIndentCode()
        return

    reIndentCode: ->
        position = @editor.getCursorPosition()
        text = @editSession.getDocument()
        mode = @editSession.getMode()
        for currentRow in [0...@editSession.getLength()] by 1
            if currentRow == 0
                continue

            thisLineIndent = mode.getNextLineIndent(
                @editSession.getState(currentRow - 1),
                @editSession.getLine(currentRow - 1),
                @editSession.getTabString())

            thisLine = @editSession.getLine currentRow
            currentIndent = /^\s*/.exec(thisLine)[0]
            if currentIndent != thisLineIndent
                thisLine = thisLineIndent + thisLine.trim()

            text.insertLines currentRow, [thisLine]
            text.removeLines currentRow + 1, currentRow + 1

            mode.autoOutdent(
                @editSession.getState(currentRow),
                @editSession, currentRow)
        @editor.moveCursorToPosition position
        return

    createBlankFunctionHeader: (command) ->
        ###
            Creates a function header with __ for parameters.
            eg go(__)
        ###
        numberOfInputs = @commands[command]['inputs']
        underscoresForInputs = ""
        for i in [1..numberOfInputs] by 1
            underscoresForInputs += '__'
            if i != numberOfInputs
                underscoresForInputs += ', '
        return "#{command}(#{underscoresForInputs})"

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

            playerCodeEditor.reIndentCode()
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

            if arguments.length != 0 and playerCodeEditor.detectNamedArgument arguments[0]
                func.apply playerCodeEditor, arguments
            else
                func.call playerCodeEditor
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

            if arguments.length != 0 and playerCodeEditor.detectNamedArgument arguments[0]
                func.apply playerCodeEditor, arguments
            else
                func.call playerCodeEditor
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

            if arguments.length != 0 and playerCodeEditor.detectNamedArgument arguments[0]
                func.apply playerCodeEditor, arguments
            else
                func.call playerCodeEditor

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
