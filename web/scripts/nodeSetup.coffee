

globals = {
    '../vendor/underscore/underscore.js': '_'
}
#Doppio's Hacky require function is just a map of previously loaded scripts. normalized basename->window.name ...
window.require = (path, herp) ->
    if (herp?)  
        path = herp
    if (path of globals) 
        return window[globals[path]]
    [name , ext] = BrowserFS.node.path.basename(path).split('.')
    return window[name] ?= {}

BrowserFS.install(window)
mfs = new BrowserFS.FileSystem.MountableFileSystem()
mfs.mount('/tmp', new BrowserFS.FileSystem.InMemory())
mfs.mount('/sys', new BrowserFS.FileSystem.XmlHttpRequest('/listings.json','doppio-jvm'))
BrowserFS.initialize(mfs)
window.node = BrowserFS.node
node.fs.mkdirSync('/tmp')
node.process.chdir('/tmp')
