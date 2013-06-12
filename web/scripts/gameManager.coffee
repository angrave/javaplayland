class window.GameManager
    constructor: () ->
        # This data will be passed to the GameManager in the future.
        data = {
            editor: {
                commands: {
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
                },
                startingText: """
                        go(15);
                        turnRight();
                        turn(__, __);
                        go(2);
                        """
            }
        }

        @commands = data.editor.commands
        @htmlDivs = {
            editDiv: "editor"
        }
        @editor = new PlayerCodeEditor @htmlDivs.editDiv, \
            data.editor.startingText, @commands
        @interpretor = new CodeInterpreter @commands

        @setUpInsertButtons()
        @addEventListeners()
        @onStudentCodeChange()

    setUpInsertButtons: ->
        ###
            Inserts a button for each command of the game to the html field
            with the id of 'insertButtons'.
        ###
        buttonField = jQuery('#insertButtons')
        buttons = []
        for command of @commands
            line = @createBlankFunctionHeader(command) + ';'
            usesRemaining = @commands[command]['usesRemaining']
            codeEditor = @editor
            button = jQuery '<button>', {
                id: command,
                value: command,
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

    addEventListeners: ->
        ###
        ###
        ed = @editor
        jQuery('#switchUp').click ed.button ed.usesCurrentPosition ed.switchUp
        jQuery('#switchDown').click ed.button ed.usesCurrentPosition ed.switchDown
        jQuery('#deleteLine').click ed.button ed.editsText ed.usesCurrentRow ed.deleteLine
        jQuery('#resetState').click ed.button ed.resetState
        ed.onChangeListener @onStudentCodeChange.bind @
        ed.onClickListener @onEditorClick.bind @
        ed.onCursorMoveListener @onEditorCursorMove.bind @
        return

    onStudentCodeChange: ->
        ###
            When the student code changes, run it through the
            interpreter
        ###
        remaining = @scanText()
        @UpdateCommandsStatus remaining
        return

    onEditorClick: (inBounds, clickEvent) ->
        ###
            When the editor is clicked, we may or may not
            want to pop up a div for students to enter
            parameters into.
        ###
        if @parameterPopUp == undefined
            @parameterPopUp = jQuery('#parameter-pop-up')

        if inBounds
            row = clickEvent.$pos.row
            line = clickEvent.editor.getSession().getLine row
            rowLength = line.length
            if rowLength == 0
                @parameterPopUp.hide()
                return

            command = @interpretor.identifyCommand line
            if command == null
                @parameterPopUp.hide()
                return

            numberOfInputs = @commands[command]['inputs']
            if numberOfInputs == 0
                @parameterPopUp.hide()
                return

            @parameterPopUp.empty()
            @parameterPopUp.append '('
            for i in [1..numberOfInputs] by 1
                @parameterPopUp.append "<input id='#{i}' type='text' size='5'>"
                if i != numberOfInputs
                    @parameterPopUp.append ','
            @parameterPopUp.append ')'
            button = jQuery '<button>', {
                id: 'editLine',
                text: 'Edit'
            }
            @parameterPopUp.append button.get 0

            @parameterPopUp.css 'top', row * 11 + 51
            @parameterPopUp.css 'left', rowLength * 6 + 70
            @parameterPopUp.show()
        else
            @parameterPopUp.hide()
        return

    onEditorCursorMove: (cursorEvent) ->
        if @parameterPopUp == undefined
            @parameterPopUp = jQuery('#parameter-pop-up')

        @parameterPopUp.hide()

    scanText: ->
        text = @editor.getStudentCode()
        return @interpretor.scanText text

    UpdateCommandsStatus: (remaining) ->
        ###
            Updates the number of commands remaining for each command.
        ###
        buttonField = jQuery '#insertButtons'
        for command of @commands
            button = buttonField.find "##{command}"
            line = @createBlankFunctionHeader command

            usesRemaining = remaining[command]
            if usesRemaining <= 0
                button.attr 'disabled', true
            else
                button.attr 'disabled', false
            button.text "#{line}: #{usesRemaining}"
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



class CodeInterpreter
    ###
    ###
    constructor: (@commands) ->
        ###
        ###
        @buildNeededParsers()
        return

    buildNeededParsers: ->
        ###
            Builds the parsers needed by the scanText function.
        ###
        for command of @commands
            @commands[command]['parser'] = {
                'exec': @buildParser command
                }
        return

    identifyCommand: (line) ->
        for command of @commands
            found = @commands[command]['parser'].exec line
            if found != null
                return command
        return null

    scanText: (text) ->
        ###
            Scans the selected text and returns a dictionary
            which contains, for each command which which this
            interpretor was constructed, how many uses they have
            remaining.
        ###
        usesRemaining = {}
        for command of @commands
            usesRemaining[command] = @commands[command]['maxUses']

        currentLine = 0
        while text != ""
            result = null
            for command of @commands
                result = @commands[command]['parser'].exec text
                if result != null
                    usesRemaining[command]--
                    @processMatch command, result[1], usesRemaining
                    break

            if result == null
                result = /^\s+/.exec text
                if result != null
                    currentLine++

            if result == null
                result = /^;/.exec text

            if result == null
                # We do not recognize this line, ignore it.
                result = /^.*\n/.exec text

            if result == null
                # None of our regexes returned, eat the first character and continue
                text = text.substring 1
            else
                text = text.substring result[0].length
        return usesRemaining

    processMatch: (command, innerText, usesRemaining) ->
        ###
        ###
        if typeof innerText == "undefined" or innerText == null or innerText == ""
            return
        while innerText != ""
            for command of @commands
                result = @commands[command]['parser'].exec innerText
                if result != null
                    usesRemaining[command]--
                    @processMatch command, result[1]
                    break

            if result == null
                result = /^,/.exec innerText

            if result == null
                innerText = innerText.substring 1
            else
                innerText = innerText.substring result[0].length

        return

    buildParser: (command) ->
        ###
            Creates a parser that will recognize the command.
            It will return an object of the form
            {
                '0': The matched string.
                '1': The inner parameters of the command.
            }
            or it will return null.
            The form of the return object is so that
            it will act somewhat like a RegExp object.
        ###
        return (text) ->
            textIndex = 0
            commandIndex = 0
            innerStartIndex = null
            innerEndIndex = null
            state = "beforeCommand"
            openParenthesis = 0
            commandMatched = null

            # reasonForNoMatch = ""
            continueMatch = true
            while continueMatch
                if textIndex > text.length
                    continueMatch = false
                switch state
                    when "beforeCommand"
                        switch text.charAt textIndex
                            when ' '
                                # do nothing special, continue parsing
                                break
                            when command.charAt commandIndex
                                # We have now reached the command
                                state = "atCommand"
                                commandIndex++
                            else
                                # reasonForNoMatch = 'First character does not match'
                                commandMatch = false
                                continueMatch = false
                    when "atCommand"
                        switch text.charAt textIndex
                            when ' '
                                if commandIndex != command.length
                                    # reasonForNoMatch = 'The command name is too short to match'
                                    commandMatch = false
                                    continueMatch = false
                            when '('
                                if commandIndex == command.length
                                    # The name of the command matches
                                    commandMatch = true
                                    innerStartIndex = textIndex + 1
                                    openParenthesis = 1
                                    state = "insideCommand"
                                else
                                    # reasonForNoMatch = 'The command name is too short to match'
                                    commandMatch = false
                                    continueMatch = false
                            when command.charAt commandIndex
                                commandIndex++
                            else
                                # reasonForNoMatch = 'The command's name does not match our command's name'
                                commandMatch = false
                                continueMatch = false
                    when "insideCommand"
                        switch text.charAt textIndex
                            when '('
                                openParenthesis++
                            when ')'
                                openParenthesis--
                                if openParenthesis == 0
                                    # We have finished consuming the command parameters
                                    innerEndIndex = textIndex - 1
                                    continueMatch = false
                            when '\n'
                                # We got to the end of the line before finishing parameter parsing.
                                innerEndIndex = textIndex
                                continueMatch = false
                textIndex++
            if not commandMatch
                # return {'0': null, '1': null, 'reason': reasonForNoMatch}
                return null
            return {
                '0': text.substring(0, textIndex),
                '1': text.substring(innerStartIndex, innerEndIndex + 1),
                'reason': ""
            }