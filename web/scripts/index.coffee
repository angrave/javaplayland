# In coffeescript jQuery ($) -> sets the onReady function and lets one use $ without
# fear of naming conflicts.
jQuery ($) ->
    manager = new GameManager()
    window.Manager = manager
    return
