# In coffeescript jQuery ($) -> sets the onReady function and lets one use $ without
# fear of naming conflicts.
jQuery ($) ->
    env = {
        gamediv: 'gameDiv'
        config: {}
    }
    manager = new GameManager(env)
    window.Manager = manager
    return
