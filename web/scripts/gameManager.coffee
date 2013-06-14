debugging = true
log : (mesg) ->  console.log mesg if debugging


class window.GameManager
    constructor: (@environment) ->
        @config = @environment.description
        if not @config.editor?
            @config.editor = {}
        if not @config.code?
            @config.code = {}

        if not @config.editor.buttons?
            @config.editor.buttons = ['switchUp', 'switchDown',
                'deleteLine', 'insertButtons']
        if not @config.editor.commands?
            @config.editor.commands = {
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
                }

        if not @config.code.prefix?
            @config.code.prefix = """
                public class Student {
                public static void main(String[] args) {\n
                """
        if not @config.code.initial?
            @config.code.initial = """
                go(15);
                turnRight();
                turn(__, __);
                go(2);
                """
        if not @config.code.postfix?
            @config.code.postfix = '}\n}'

        @editorDiv = 'codeEditor'
        @visualDiv = 'gameVisual'
        @setUpGame()

    setUpGame: ->
        ###
            Sets up everything for the game to run.
        ###
        gameDiv = jQuery @environment.gamediv
        gameDiv.append "<div id=\"#{@editorDiv}\"></div>"
        gameDiv.append '<button id="compileAndRun">Go</button>'

        @codeEditor = new EditorManager @editorDiv, @config.editor, @config.code
        @interpreter = new CodeInterpreter @config.editor.commands
        return

    startGame: ->
        return

    addEventListeners: ->
        jQuery('#compileAndRun').click @runStudentCode
        return

    runStudentCode: =>
        @interpreter.scanText @codeEditor.getStudentCode()
        @interpreter.executeCommands @
        return

class MapGameState
    constructor: (@config) ->
        @config ?= { x: 4, y: 4, direction: 0, maxX:9, maxY:9, traps: [[2,4],[9,9]], targets: [[5,5]], targetCount : 0}

    checkLocationOrThrow: ->
        @badLocation = true unless (0<= gameState.x <= gameState.maxX && 0 <= gameState.y <= gameState.maxY)
        if not gameState.traps
            return

        for [badx, bady] in gameState.traps
            if (gameState.x == badx && gameState.y == bady)
                @badLocation = true
        throw new BadLocation() if @badLocation
        return

    move: (steps) =>
        # Bits are more fun that lookup tables or a switch
        # sign is positive 1 for North00, East01, and -1 for South10, West11
        [sign, isEastOrWest] = [1  - (gameState.direction &2), gameState.direction &1]
        x += sign if isEastOrWest
        y += sign unless isEastOrWest
        #Use recursion to move one square at a time
        _go( steps -1) if steps>0


class MapGameCommands
    constructor: (@gameState) ->
        return

    go: (steps) =>
        steps = 1 if steps is undefined #Correct syntax??
        _go(steps) if steps>=1

    turn: (dir) =>
        log "turn '#{dir}'"
        return if dir is undefined
        d = inArray(dir,['N','E','S','W'])
        if d >=0
            direction = d
        else
            direction = (4+dir%4)%4

    turnRight: =>
        log "turnRight"
        direction = (direction + 1) %4

    turnLeft: =>
        log "turnLeft"
        direction = (direction + 3) %4

    turnAndGo: (direction, steps) =>
        log "turnAndGo #{direction} #{steps}"
        turn direction
        go steps

    goNorth: (steps) => turnAndGo 0, steps
    goEast: (steps) =>  turnAndGo 1, steps
    goWest: (steps) =>  turnAndGo 2, steps
    goSouth: (steps) => turnAndGo 3, steps

    # used in sequence4
    mysteryA: => goEast 4
    mysteryB: => goSouth 1
    mysteryC: => goWest 2
