class GameEditor
    constructor: (@codeText) ->
        @editor = ace.edit "editor"
        @editor.setTheme "ace/theme/monokai"
        @editor.getSession().setMode "ace/mode/java"
        @editor.setValue @codeText
        @editor.clearSelection()
        @editor.gotoLine 0, 0, false
        @editor.setReadOnly true
        @editor.focus()

        @addClickEventListeners()

    button: (func) ->
        # This is a wrapper for the functions which are tied to buttons.
        gameEditor = @
        return ->
            text = gameEditor.editor.getSession().getDocument()
            currentRow = gameEditor.editor.getCursorPosition().row
            func.call gameEditor, text, currentRow
            gameEditor.editor.focus()

    addClickEventListeners: ->
        $('#switchUp').click @button @switchUp
        $('#switchDown').click @button @switchDown
        $('#deleteLine').click @button @deleteLine
        $('#resetText').click @button @resetText

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
        return

    resetText: (text, currentRow) ->
        text.setValue @codeText
        return


jQuery ($) ->
    levelOne = "go(15);\nturnRight();\ngo(5);"
    # That string will at one point live somewhere different, but this is just for testing.
    new GameEditor levelOne

    return