describe("cloudTest",function() {
	
//var cloud = window.objCloud(400, ["test", "test2"], "body", "30%", "30%", 1.5, "none", this.gameManager)

	it("Cloud object can be initialized",function() {
		expect(objCloud(400, ["test", "test2"], $("<div></div>"), "30%", "30%", 1.5, "none", this.gameManager)).not.toBeNull();
	});

	
	
	
});