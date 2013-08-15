"use strict"

root = exports ? this

globals = {
    '../vendor/underscore/underscore.js': '_'
}
#Doppio's simple require  ...
window.require = (path, herp) ->
    if (herp?)  
        path = herp
    if (path of globals) 
        return window[globals[path]]
    [name , ext] = BrowserFS.node.path.basename(path).split('.')
    return window[name] ?= {}

# modern browsers slow the event loop when tab is not in focus,
# so don't give up control! but guard against stack overflows, too.
nonAsyncCount = 0
root.asyncExecute = (fn) ->
  if (document? and (document.hidden or document.mozHidden or
      document.webkitHidden or document.msHidden) and
      nonAsyncCount++ < 10000)
    fn()
  else
    nonAsyncCount = 0
    setImmediate fn

window.onerror =  (msg, url, line) ->
    window.onerror = null
    console?.log(arguments)
    progress = $("#progress")
    if(progress.length > 0)
        progress.html "Ooops!<br>Note for developers (" + msg+":" + url+" at line "+line+")" 
    return false;
    
