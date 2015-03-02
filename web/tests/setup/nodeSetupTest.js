describe("nodeSetup", function() {
	it("The file system exists and was mounted",function() {
		expect(BrowserFS.FileSystem).not.toBeNull();
	});
	
	it("Node.js has been started", function() {
		expect(window.node).not.toBeNull();
	});
});