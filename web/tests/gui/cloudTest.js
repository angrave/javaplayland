describe("cloudTest",function() {
	
	it("Cloud object can be initialized",function() {
		expect(window.objCloud(400, ["test", "test2"], "body", "30%", "30%", 1.5, "none", this.gameManager)).not.toBeNull();
	});
	
	
	
});