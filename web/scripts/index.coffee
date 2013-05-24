jQuery ($) ->
    levelOne = "go(15);\nturnRight();\ngo(5);"
    # That string will at one point live somewhere different, but this is just for testing.

    editor = ace.edit "editor"
    editor.setTheme "ace/theme/monokai"
    editor.getSession().setMode "ace/mode/java"
    editor.setValue levelOne
    editor.clearSelection
    editor.gotoLine 0, 0, false
    editor.setReadOnly true
    editor.focus()

    $('#switchUp').click ->
        source = editor.getSession().getDocument()
        currentRow = editor.getCursorPosition().row
        if currentRow > 0
            previousRow = currentRow - 1
            previousLine = source.getLine previousRow
            source.removeLines previousRow, previousRow
            source.insertLines currentRow, [previousLine]
        editor.focus()
        return

    $('#switchDown').click ->
        source = editor.getSession().getDocument()
        maxRow = source.getLength()
        currentRow = editor.getCursorPosition().row
        if currentRow < maxRow - 1
            nextRow = currentRow + 1
            nextLine = source.getLine nextRow
            source.removeLines nextRow, nextRow
            source.insertLines currentRow, [nextLine]
        editor.focus()
        return

    $('#deleteLine').click ->
        source = editor.getSession().getDocument()
        currentRow = editor.getCursorPosition().row
        source.removeLines currentRow, currentRow
        return
    return