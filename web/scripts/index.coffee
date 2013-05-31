# In coffeescript jQuery ($) -> sets the onReady function and lets one use $ without
# fear of naming conflicts.
jQuery ($) ->
    levelOne = "go(15);\nturnRight();\ngo(5);"
    # That string will at one point live somewhere different, but this is just for testing.
    commands = {
        go: {
            inputs: 1,
            maxUses: 3,
            usedAtStart: 2
        },
        turnRight: {
            inputs: 0,
            maxUses: 2,
            usedAtStart: 1
        }
    }
    editor = new PlayerCodeEditor "editor", levelOne, commands
    window.Editor = editor # For testing only, puts editor in global namespace.
    return

