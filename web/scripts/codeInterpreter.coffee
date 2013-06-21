class window.CodeInterpreter
    constructor: (@commands) ->
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

    executeCommands: (commandMap) ->
        for commandCard in @commandStack
            commandMap[commandCard.command].apply commandMap, commandCard.parameters
        commandMap.finishedParsingStartGame()
        return

    scanText: (text) ->
        ###
            Scans the selected text and returns a dictionary
            which contains, for each command which which this
            interpretor was constructed, how many uses they have
            remaining.
        ###
        @commandStack = []
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
                    parameters = @processCommand command, result[1], usesRemaining
                    @commandStack.push {command: command, parameters: parameters}
                    break

            if result == null
                result = /^\s+/.exec text
                if result != null
                    if result[0].indexOf('\n') != -1
                        currentLine++

            if result == null
                result = /^;/.exec text

            if result == null
                # We do not recognize this line, ignore it.
                result = /^.*\n/.exec text
                if result != null
                    currentLine++

            if result == null
                # None of our regexes returned, eat the first character and continue
                text = text.substring 1
            else
                text = text.substring result[0].length
        return usesRemaining

    processCommand: (command, innerText, usesRemaining) ->
        ###
            Processes a found command.
        ###
        if typeof innerText == "undefined" or innerText == null or innerText == ""
            return []
        parameters = []
        while innerText != ""
            result = null
            # for command of @commands
                # result = @commands[command]['parser'].exec innerText
                # if result != null
                #     usesRemaining[command]--
                #     @processCommand command, result[1]
                #     break

            if result == null
                # Remove leading whitespace
                result = /^\s/.exec innerText

            if result == null
                # Match a String
                result = /^(?:"(.*?)")|(?:'(.*?)')/.exec innerText
                if result != null
                    if result[1] != null
                        parameters.push result[1]
                    else
                        parameters.push result[2]

            if result == null
                # Match until a ,
                result = /^(?:[^,]+)/.exec innerText
                if result != null
                    parameters.push result[0]

            if result == null
                innerText = innerText.substring 1
            else
                innerText = innerText.substring result[0].length
        return parameters

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