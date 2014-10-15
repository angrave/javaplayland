BrowserFS.install(window)
mfs = new BrowserFS.FileSystem.MountableFileSystem()
mfs.mount('/tmp', new BrowserFS.FileSystem.InMemory())
mfs.mount('/sys', new BrowserFS.FileSystem.XmlHttpRequest('/listings.json','doppio-jvm'))
BrowserFS.initialize(mfs)
window.node = BrowserFS.node
node.fs.mkdirSync('/tmp')
node.process.chdir('/tmp')
