# In coffeescript jQuery ($) -> sets the onReady function and lets one use $ without
# fear of naming conflicts.
jQuery ($) ->
    env = {
        gamediv: $('#gameDiv')
        description: {}
    }
    manager = new GameManager(env)
    window.Manager = manager
    return
