describe("gameSelectionTest",function() {
	
	describe("constructor",function() {
		
		it("constructor returns an object", function() {
			expect(gameSelector($("<div id=\"test\"></div>"), false)).not.toBeNull();
		});

		it("default data is stored correctly", function(){
			var select = new gameSelector($("<div id =\"test\"></div>"), false);
			expect(window.div.attr("id")).toEqual("test");

		});

	});
	
});