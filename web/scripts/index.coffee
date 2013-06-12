# In coffeescript jQuery ($) -> sets the onReady function and lets one use $ without
# fear of naming conflicts.
jQuery ($) ->
    builder = new GameBuilder()
    window.Builder = builder
    return
