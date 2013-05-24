jQuery ($) ->
    levelOne = "go(15);\nturnRight();\ngo(5);"
    # That string will at one point live somewhere different, but this is just for testing.

    editor = ace.edit "editor"
    editor.setTheme "ace/theme/monokai"
    editor.getSession().setMode "ace/mode/java"
    editor.setValue levelOne
    editor.clearSelection()
    editor.gotoLine 0, 0, false
    editor.setReadOnly true
    editor.focus()

    button = (func) -> ->
        # This is a wrapper for the functions which are tied to buttons.
        text = editor.getSession().getDocument()
        currentRow = editor.getCursorPosition().row
        func.call @, text, currentRow
        editor.focus()

    $('#switchUp').click button (text, currentRow) ->
        if currentRow > 0
            previousRow = currentRow - 1
            previousLine = text.getLine previousRow
            text.removeLines previousRow, previousRow
            text.insertLines currentRow, [previousLine]
        return

    $('#switchDown').click button (text, currentRow) ->
        maxRow = text.getLength()
        if currentRow < maxRow - 1
            nextRow = currentRow + 1
            nextLine = text.getLine nextRow
            text.removeLines nextRow, nextRow
            text.insertLines currentRow, [nextLine]
        return

    $('#deleteLine').click button (text, currentRow) ->
        text.removeLines currentRow, currentRow
        return
    return