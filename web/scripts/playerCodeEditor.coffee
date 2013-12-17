String.prototype.startsWith ?= (str) ->
    return @lastIndexOf(str, 0) == 0

jQuerySelectorEscapedString = (str) ->
  return str.replace(/[^a-z0-9_]/gi, '\\$&')

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

        @acelne = document.createElement("div")
        $(@acelne).append '<div id="parameter-pop-up" class="pop-up-container"></div>'

        if @editorConfig.buttons.length != 0
            buttonField = jQuery '<div>', {id: 'buttons'}
            if $.inArray('insertButtons', @editorConfig.buttons) != -1
                buttonField.append jQuery('<div>', {
                    id: 'insertButtons'}).get(0)
            editorDiv.append buttonField.get 0



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

        @interpreter = new CodeInterpreter @commands
        @editor = new PlayerCodeEditor 'ace-editor', \
            @commands, @codeConfig.initial, @codeConfig.show, @codeConfig.prefix, \
            @codeConfig.postfix, @codeConfig.hiddenPostFix, \
            @editorConfig.freeformEditting, @interpreter

        # Create editor buttons

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
        $(@acelne).css({"display": "block"})
        $('.ace_editor').append(@acelne)
        $(".ace_scrollbar").scroll(() => @moveEditorButtons())
        @setUpInsertButtons()
        @addEventListeners()
        @onStudentCodeChange()
        @moveEditorButtonDelay = 30
        setTimeout @moveEditorButtons, @moveEditorButtonDelay
        return

    setUpInsertButtons: ->
        ###
            Inserts a button for each command of the game to the html field
            with the id of 'insertButtons'.
        ###
        if $.inArray('insertButtons', @editorConfig.buttons) == -1
            return

        buttonField = jQuery('#insertButtons')
        buttons = []
        if @commands.shorthand?
            for line in @commands.shorthand
                lineText = line
                maxUses = 1
                if typeof line == "object"
                    if line.line?
                        lineText = line.line
                    if line.maxUses?
                        maxUses = line.maxUses
                command = {
                    usesRemaining: maxUses,
                    inputs: 0,
                    maxUses: maxUses,
                    rawText: true
                }
                @commands[lineText] = command
                @editor.commands[lineText] = command
            delete @commands.shorthand
        for command of @commands
            codeEditor = @editor
            if @commands[command].rawText?
                line = command
                funct = codeEditor.insertLine
            else
                line = @editor.createBlankFunctionHeader(command) + ';'
                funct = codeEditor.insertCommand

            button = jQuery '<button>', {
                id: command,
                value: command,
                text: "#{line}",
                title: @toUsesRemainingText(maxUses, maxUses),
                click: (e) ->
                    (codeEditor.button codeEditor.usesCurrentRow \
                        codeEditor.usesTextDocument funct )
                    .call(codeEditor,
                            codeEditor.createNamedArguments({line: e.currentTarget.value}))
                    return false
            }
            buttons.push button.get 0
        buttonField.append buttons
        return

    addEventListeners: ->
        ed = @editor
        if $.inArray('switchUp', @editorConfig.buttons) != -1
            jQuery('.ace_uparrow').click ed.button ed.usesCurrentPosition ed.switchUp

        if $.inArray('switchDown', @editorConfig.buttons) != -1
            jQuery('.ace_downarrow').click ed.button ed.usesCurrentPosition ed.switchDown

        if $.inArray('deleteLine', @editorConfig.buttons) != -1
            jQuery('.ace_xbutton').click ed.button ed.usesTextDocument ed.usesCurrentRow ed.deleteLine

        ed.onChangeListener @onStudentCodeChange
        ed.onClickListener @onEditorClick
        ed.onCursorMoveListener @onEditorCursorMove
        updateMove = =>
            setTimeout @moveEditorButtons, @moveEditorButtonDelay
            return
        ed.editSession.on 'changeScrollTop', updateMove

        normalResize = ed.editor.renderer.onResize.bind ed.editor.renderer
        addOurResize = (force, gutterWidth, width, height) ->
            normalResize(force, gutterWidth, width, height)
            updateMove()
            return
        ed.editor.renderer.onResize = addOurResize

        # Prevents Folding
        ed.editor.setShowFoldWidgets false

        # Touch Handlers
        @ongoingTouches = []
        jQuery('.ace_scroller').bind "touchstart", @handleTouchStart
        jQuery('.ace_scroller').bind "touchend", @handleTouchEnd
        jQuery('.ace_scroller').bind "touchcancel", @handleTouchCancel
        jQuery('.ace_scroller').bind "touchleave", @handleTouchEnd
        jQuery('.ace_scroller').bind "touchmove", @handleTouchMove
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
        if @editorConfig.freeformEditting
            if @scanTimer?
                window.clearTimeout @scanTimer
                @scanTimer = null
            @scanTimer = window.setTimeout @scan, 300
        else
        @UpdateCommandsStatus null
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
            button = buttonField.find "##{jQuerySelectorEscapedString command}"
            if @commands[command].rawText?
                line = command
            else
                line = @editor.createBlankFunctionHeader command

            if remaining != null
                usesRemaining = remaining[command]
            else
                usesRemaining = @commands[command]['usesRemaining']


            button.attr 'title',@toUsesRemainingText(usesRemaining, @commands[command].maxUses)
            if usesRemaining <= 0
                button.attr 'disabled', true
                if usesRemaining < 0
                    valid = false
            else
                button.attr 'disabled', false
            button.text "#{line}"

            ### #{usesRemaining}" ###
        @onCommandRemainingValid? valid
        return

    toUsesRemainingText: (usesRemaining,maxUses) ->
        return 'Already used (delete the code line to re-use this button)' if usesRemaining<=0
        return 'Can only appear once!' if usesRemaining==1 and maxUses==1
        return 'Can only appear one more time!' if usesRemaining==1
        return"Can be used #{usesRemaining} more times"


    moveEditorButtons: =>
        row = @editor.editor.getCursorPosition().row
        maxrows = @editor.editSession.getLength()
        aglw = $('.ace_gutter-layer').width()
        aglh = $('.ace_gutter-cell').height()
        aalt = $('.ace_gutter-active-line').position().top

        if maxrows == row + 1
            $(".ace_downarrow").css({"display":"none"})
        else
            $(".ace_downarrow").css({"display":"block"})

        $(@acelne).css(
            {"width":"15px";"max-height":aglh*2.6,
            "z-index": 20,"position":"relative",
            "top":aalt-aglh*1.5+"px",
            "left":0+"px","display": "block"})
        @poffset = $(".ace_scrollbar").scrollTop()
        return

    onEditorCursorMove: (cursorEvent) =>
        if @parameterPopUp == undefined
            @parameterPopUp = jQuery('#parameter-pop-up')

        setTimeout @moveEditorButtons, @moveEditorButtonDelay

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
            @parameterPopUp.css 'top', "12px"
            @parameterPopUp.css 'left', gutterOffset + 5

            # Prevents the ace editor from stealing focus
            @parameterPopUp.mousedown (mousedownEvent) ->
                mousedownEvent.stopPropagation()
                return

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

    editorGoToLine: (row) ->
        @editor.gotoLine row
        return

    handleTouchStart: (evt) =>
        for touch in evt.originalEvent.changedTouches
            @ongoingTouches.push touch
        return

    handleTouchMove: (evt) =>
        evt.preventDefault()
        touches = evt.originalEvent.changedTouches
        for touch in touches
            id = @onGoingTouchIndexByID touch.identifier
            verticalDistance = @ongoingTouches[id].pageY - touch.pageY
            horizontalDistance = @ongoingTouches[id].pageX - touch.pageX
            @editor.editor.renderer.scrollBy horizontalDistance, verticalDistance
            @ongoingTouches.splice id, 1, touch
        return

    handleTouchEnd: (evt) =>
        touches = evt.originalEvent.changedTouches
        for touch in touches
            id = @onGoingTouchIndexByID touch.identifier
            verticalDistance = @ongoingTouches[id].pageY - touch.pageY
            horizontalDistance = @ongoingTouches[id].pageX - touch.pageX
            @editor.editor.renderer.scrollBy horizontalDistance, verticalDistance
            @ongoingTouches.splice id, 1
        return

    handleTouchCancel: (evt) =>
        touches = evt.originalEvent.changedTouches
        for touch in touches
            id = @onGoingTouchIndexByID touch.identifier
            @ongoingTouches.splice id, 1
        return

    onGoingTouchIndexByID: (idToFind) =>
        for i in [0...@ongoingTouches.length] by 1
            id = @ongoingTouches[i].identifier
            if id == i
                return i
        return -1 # Not Found


class window.PlayerCodeEditor
    ###
        Creates and provides functionality for an Ace editor representing player's code.
    ###
    constructor: (
            @editorDivId, @commands, @initialText, @wrapCode, @codePrefix,
            @codeSuffix, @hiddenSuffix, @freeEdit, @interpreter) ->
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

        @codePrefixLength = 0
        @codeSuffixLength = 0
        if @wrapCode == true
            if @codePrefix != ""
                @codeText = @codePrefix + @initialText
                @codePrefixLength = @codePrefix.split('\n').length - 1
            if @codeSuffix != ""
                @codeText += '\n' + @codeSuffix
                @codeSuffixLength = @codeSuffix.split('\n').length - 1 + 1
        else
            @codePrefix = ""
            @codeSuffix = ""
            @codeText = @initialText

        @enableKeyboardShortcuts()

        @resetState()
        @onChangeCallback = null
        @editor.on 'change', @onChange
        return

    getStudentCode: ->
        code = @editor.getValue()
        if @hiddenSuffix?
            code += '\n' + @hiddenSuffix
        return code


    gotoLine: (row) ->
        column = @editor.getCursorPosition().column
        @editor.gotoLine row, column, true
        return

    enableKeyboardShortcuts: ->
        ###
            This usually enables keyboard shortcuts.
            That said, it currently does nothing as those keyboard
            shortcuts ignore prefix / suffix length and we effectively
            have to over-write them with our own.
        ###
        # @editor.commands.commands.movelinesup['readOnly'] = true
        # @editor.commands.commands.movelinesdown['readOnly'] = true
        return

    disableKeyboardShorcuts: ->
        @editor.commands.commands.movelinesup['readOnly'] = false
        @editor.commands.commands.movelinesdown['readOnly'] = false
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

        if @commands.hasOwnProperty line.trim()
            @commands[line.trim()]['usesRemaining']++
        else
            command = @interpreter.identifyCommand line
            if command?
                @commands[command]['usesRemaining']++
        if text.getLength() == 1
            text.insertLines currentRow + 1, ["\n"]
            text.removeNewLine currentRow
        text.removeLines currentRow, currentRow
        return

    insertCommand: ({text, line, currentRow}) ->
        @commands[line]['usesRemaining']--
        printLine = (@createBlankFunctionHeader line) + ';'
        @insertLine {text: text, line:printLine, currentRow:currentRow}
        return

    insertLine: ({text, line, currentRow}) ->
        maxRow = @editSession.getLength()
        currentRow = Math.max(currentRow, @codePrefixLength-1)
        currentRow = Math.min(currentRow, maxRow-@codeSuffixLength-1  )
        currentLine = text.getLine currentRow

        if @commands.hasOwnProperty line
            @commands[line]['usesRemaining']--

        if currentLine.trim() == ""
            text.removeLines currentRow, currentRow
            text.insertLines currentRow, [line]
            cursorOffset = 1
        else
            text.insertLines currentRow + 1, [line]
            cursorOffset = 2

        if text.getLength() == 2 and text.getLine(currentRow) == ""
            text.removeNewLine currentRow

        @editor.gotoLine currentRow + cursorOffset, 0, false
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
        @editor.resize()
        @reIndentCode()

        @gotoLine @codePrefixLength + 1 + @findFirstNonCommentLine(@initialText)

        @editor.renderer.scrollToRow @codePrefixLength
        for name, command of @commands
            command['usesRemaining'] = command['maxUses']
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


    findFirstNonCommentLine: (src) ->
        ###
            Returns the line numer of the first non-comment line.
            This is obviously not a complete parser so obscure edge cases are unsupported
            e.g. print("/*") would be mistaken for a multiline comment.
        ###
        lines = src.split('\n')
        count=0
        inMLC = false #Multi-line comment
        for line in src.split('\n')
            count +=1
            if(line.match(/^S*$/))
                continue # Ignore empty lines
            isSLC =  !!line.match(/^\s*\/\//)

            countStartMLC = line.split('/*').length-1
            countEndMLC = line.split('*/').length-1

            if(inMLC)
                if(!isSLC)
                    inMLC = countStartMLC >countEndMLC
            else
                if( (!isSLC && !(inMLC=countStartMLC > countEndMLC)))
                    break
        return count
