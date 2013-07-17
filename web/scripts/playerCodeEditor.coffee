String.prototype.startsWith ?= (str) ->
    return @lastIndexOf(str, 0) == 0

class window.EditorManager
    ###
        Manages the code editor.
    ###
    constructor: (@editorDivId, @editorConfig, @codeConfig) ->
        @acelne = null
        @poffset = 0
        @onStudentCodeChangeCallback = null
        @commands = @editorConfig.commands
        @setUpEditor()
        return

    getStudentCode: ->
        return @editor.getStudentCode()

    setUpEditor: ->
        ###
            Builds the HTML for, and sets up the functionality of,
            the player code editor.
        ###
        editorDiv = jQuery "##{@editorDivId}"
        editorDiv.append '<div id="ace-editor"></div>'

        if @editorConfig.buttons.length != 0
            buttonField = jQuery '<div>', {id: 'buttons'}
            if $.inArray('insertButtons', @editorConfig.buttons) != -1
                buttonField.append jQuery('<div>', {
                    id: 'insertButtons'}).get(0)
            editorDiv.append buttonField.get 0

        editorDiv.append '<div id="parameter-pop-up" class="pop-up-container"></div>'

        # New logic for up, down, and delete "buttons"
        if $.inArray('switchUp', @editorConfig.buttons) != -1
            @switchUpImg = 'img/ua-usable.png'
        else
            @switchUpImg = 'img/ua.png'
        if $.inArray('switchDown', @editorConfig.buttons) != -1
            @switchDownImg = 'img/da-usable.png'
        else
            @switchDownImg = 'img/da.png'
        if $.inArray('deleteLine', @editorConfig.buttons) != -1
            @deleteImg = 'img/cx-usable.png'
        else
            @deleteImg = 'img/cx.png'

        @editor = new PlayerCodeEditor 'ace-editor', \
            @commands, @codeConfig.initial, @codeConfig.show, @codeConfig.prefix, \
            @codeConfig.postfix, @editorConfig.freeformEditting
        @interpreter = new CodeInterpreter @commands

        # Create editor buttons
        @acelne = document.createElement("div")
        x = document.createElement("img")
        $(x).attr({"src":"#{@deleteImg}","class":"ace_xbutton"})
        u = document.createElement("img")
        $(u).attr({"src":"#{@switchUpImg}","class":"ace_uparrow"})
        d = document.createElement("img")
        $(d).attr({"src":"#{@switchDownImg}","class":"ace_downarrow"})
        $(@acelne).append(u)
        $(@acelne).append(x)
        $(@acelne).append(d)
        $(@acelne).attr({"id":"acelne"})
        $(@acelne).css({"display": "none"})
        $('body').append @acelne
        soffset = () ->
            t = $("#acelne").position().top - $(".ace_scrollbar").scrollTop() + @poffset
            $("#acelne").css({"top": t+"px"})
            @poffset = $(".ace_scrollbar").scrollTop()

        $(".ace_scrollbar").scroll(() -> soffset())
        @setUpInsertButtons()
        @addEventListeners()
        @onStudentCodeChange()

    setUpInsertButtons: ->
        ###
            Inserts a button for each command of the game to the html field
            with the id of 'insertButtons'.
        ###
        if $.inArray('insertButtons', @editorConfig.buttons) == -1
            return

        buttonField = jQuery('#insertButtons')
        buttons = []
        for command of @commands
            line = @editor.createBlankFunctionHeader(command) + ';'
            usesRemaining = @commands[command]['usesRemaining']
            codeEditor = @editor
            button = jQuery '<button>', {
                id: command,
                value: command,
                text: "#{line}: #{usesRemaining}",
                click: (e) ->
                    (codeEditor.button codeEditor.usesCurrentRow \
                        codeEditor.usesTextDocument codeEditor.insertLine)
                    .call(codeEditor,
                            codeEditor.createNamedArguments({command: e.currentTarget.value}))
                    return false
            }
            buttons.push button.get 0
        buttonField.append buttons
        return

    addEventListeners: ->
        ed = @editor
        if $.inArray('switchUp', @editorConfig.buttons) != -1
            jQuery('.ace_uparrow').click ed.button ed.usesCurrentPosition ed.switchUp
        else
            jQuery('.ace_uparrow').click ed.editor.focus

        if $.inArray('switchDown', @editorConfig.buttons) != -1
            jQuery('.ace_downarrow').click ed.button ed.usesCurrentPosition ed.switchDown
        else
            jQuery('.ace_downarrow').click ed.editor.focus

        if $.inArray('deleteLine', @editorConfig.buttons) != -1
            jQuery('.ace_xbutton').click ed.button ed.usesTextDocument ed.usesCurrentRow ed.deleteLine
        else
            jQuery('.ace_xbutton').click ed.editor.focus

        ed.onChangeListener @onStudentCodeChange
        ed.onClickListener @onEditorClick
        ed.onCursorMoveListener @onEditorCursorMove
        return

    resetEditor: =>
        (@editor.button @editor.resetState)()
        return

    onStudentCodeChangeListener: (@onStudentCodeChangeCallback) ->
        return

    onCommandValidation: (@onCommandRemainingValid) ->
        return

    onStudentCodeChange: (changeData) =>
        ###
            When the student code changes, run it through the
            interpreter to figure out commands remaining.
        ###
        if @scanTimer?
            window.clearTimeout @scanTimer
            @scanTimer = null
        @scanTimer = window.setTimeout @scan, 500
        if @onStudentCodeChangeCallback?
            @onStudentCodeChangeCallback changeData
        return

    scan: =>
        remaining = @interpreter.scanText @editor.getStudentCode()
        @UpdateCommandsStatus remaining
        return

    UpdateCommandsStatus: (remaining) ->
        ###
            Updates the number of commands remaining for each command.
        ###
        valid = true
        buttonField = jQuery '#insertButtons'
        for command of @commands
            button = buttonField.find "##{command}"
            line = @editor.createBlankFunctionHeader command

            usesRemaining = remaining[command]
            if usesRemaining <= 0
                button.attr 'disabled', true
                if usesRemaining < 0
                    valid = false
            else
                button.attr 'disabled', false
            button.text "#{line}: #{usesRemaining}"
        @onCommandRemainingValid? valid
        return

    moveEditorButtons: =>
        row = @editor.editor.getCursorPosition().row

        $('.ace_editor').append(@acelne)
        aglw = $('.ace_gutter-layer').width()
        aglh = $('.ace_gutter-cell').height()
        aglpl = $('.ace_gutter-cell').css("padding-left")
        offset = aglh*row

        $(@acelne).css(
            {"width":"15px";"max-height":aglh*2.6,
            "z-index": 20,"position":"relative",
            "top":offset-12-$(".ace_scrollbar").scrollTop()+"px",
            "left":"32px","display": "block"})
        @poffset = $(".ace_scrollbar").scrollTop()
        return

    onEditorCursorMove: (cursorEvent) =>
        if @parameterPopUp == undefined
            @parameterPopUp = jQuery('#parameter-pop-up')

        if not @movingButtons
            setTimeout @moveEditorButtons, 20

        @parameterPopUp.hide()
        return

    onEditorClick: (inBounds, clickEvent) =>
        ###
            When the editor is clicked, we may or may not
            want to pop up a div for students to enter
            parameters into.
            Return true: continue event propogation
            Return false: stop event propogation
        ###
        row = clickEvent.$pos.row
        if @parameterPopUp == undefined
            @parameterPopUp = jQuery('#parameter-pop-up')

        if inBounds
            line = clickEvent.editor.getSession().getLine row
            rowLength = line.length
            if rowLength == 0
                @parameterPopUp.hide()
                return true

            commandInfo = @interpreter.scanCommand line
            if commandInfo == null
                clickEvent.stopPropagation()
                return false
            command = commandInfo.command
            if command == null
                @parameterPopUp.hide()
                return true

            numberOfInputs = @commands[command]['inputs']
            if numberOfInputs == 0
                @parameterPopUp.hide()
                return true

            @parameterPopUp.empty()
            @parameterPopUp.append '('
            for i in [1..numberOfInputs] by 1
                id = "#{command}-parameter-#{i}"
                @parameterPopUp.append "<input id='#{id}' type='text' size='5' class='pop-up-inside'>"
                codeParam = commandInfo.parameters[i - 1]
                if codeParam != "__"
                    jQuery("##{id}").val codeParam
                if i != numberOfInputs
                    @parameterPopUp.append ','
                    jQuery("##{id}").keypress(
                        (e) ->
                            if e.which == 13
                                setTimeout (->
                                    jQuery(e.currentTarget).next().focus()
                                    return), 0
                                return false
                            return true
                        )
                else
                    manager = @
                    jQuery("##{id}").keypress(
                        (e) ->
                            if e.which == 13
                                setTimeout (->
                                    manager.popUpEditLine row, command
                                    return), 0
                                return false
                            return true
                        )

            @parameterPopUp.append ')'
            button = jQuery '<button>', {
                id: 'editLine',
                text: 'Ok',
                class: 'pop-up-inside',
                click: @popUpEditLine.bind(@, row, command)
            }
            @parameterPopUp.append button.get 0

            editorOffset = jQuery('#ace-editor').position()
            gutterOffset = @editor.editor.renderer.$gutterLayer.gutterWidth + \
                @editor.editor.renderer.$gutterLayer.$padding?.left
            @parameterPopUp.css 'top', row * 12 + editorOffset.top - 3
            @parameterPopUp.css 'left', rowLength * 6 + gutterOffset + editorOffset.left

            @parameterPopUp.show()
            setTimeout (-> jQuery("##{command}-parameter-#{1}").focus(); return), 0
            clickEvent.stopPropagation()
            return false
        else
            @parameterPopUp.hide()
        return true

    popUpEditLine: (row, command) ->
        if @parameterPopUp == undefined
            @parameterPopUp = jQuery('#parameter-pop-up')

        line = "#{command}("
        for i in [1..@commands[command]['inputs']] by 1
            line += jQuery("#parameter-pop-up ##{command}-parameter-#{i}").val()
            if i != @commands[command]['inputs']
                line += ', '
        line += ');'

        ed = @editor
        (ed.button ed.usesTextDocument ed.editLine).call(ed,
            ed.createNamedArguments {newLine: line, editRow: row})
        @parameterPopUp.hide()
        return


class window.PlayerCodeEditor
    ###
        Creates and provides functionality for an Ace editor representing player's code.
    ###
    constructor: (@editorDivId, @commands, codeText, @wrapCode, @codePrefix, @codeSuffix, @freeEdit) ->
        ###
            Sets internal variables, the default text and buttons
            and their event handlers.
        ###
        @editor = ace.edit @editorDivId
        window.dbgAce = @editor
        @editSession = @editor.getSession()
        @editSession.setMode 'ace/mode/java'
        @editSession.setUseSoftTabs true
        @editor.setReadOnly !@freeEdit
        if !@freeEdit
            jQuery("##{@editorDivId} textarea").attr "readonly", "readonly"

        if @wrapCode
            @codeText = @codePrefix + codeText + '\n' + @codeSuffix
        else
            @codePrefix = ""
            @codeSuffix = ""
            @codeText = codeText

        @codePrefixLength = codePrefix.split('\n').length - 1
        @codeSuffixLength = codeSuffix.split('\n').length - 1

        @enableKeyboardShortcuts()

        @resetState()
        @onChangeCallback = null
        @editor.on 'change', @onChange
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

    onChangeListener: (@onChangeCallback) ->
        return

    onChange: (changeData) =>
        if @reindentTimer?
            window.clearTimeout @reindentTimer
            @reindentTimer = null
        if not @reIndenting
            window.setTimeout @reIndentCode, 500
        if @onChangeCallback != null
            @onChangeCallback changeData
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
        @editor.on 'changeSelection', callback
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

    insertLine: ({text, command, currentRow}) ->
        maxRow = @editSession.getLength()
        if currentRow + 1 < @codePrefixLength or currentRow + 1 >= maxRow - (@codeSuffixLength - 1)
            return

        printLine = (@createBlankFunctionHeader command) + ';'
        text.insertLines currentRow + 1, [printLine]

        if text.getLength() == 2 and text.getLine(currentRow) == ""
            text.removeNewLine currentRow

        @editor.gotoLine currentRow + 2, 0, false
        return

    editLine: ({text, editRow, newLine}) ->
        maxRow = @editSession.getLength()
        if editRow + 1 < @codePrefixLength or editRow + 1 >= maxRow - (@codeSuffixLength - 1)
            return

        position = @editor.getCursorPosition()
        text.insertLines editRow, [newLine]
        text.removeLines editRow + 1, editRow + 1
        @editor.moveCursorToPosition position
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

    reIndentCode: =>
        @reIndenting = true
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
        @editor.clearSelection()
        @reIndenting = false
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

    usesTextDocument: (func) ->
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
