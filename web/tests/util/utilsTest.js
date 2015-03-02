describe("Utils",function() {

	describe("findConfig",function() {
	  it("The utility function is in place from previous javascript", function() {
		expect(findConfig).toEqual(jasmine.any(Function));
	  });
	  
	  it("The findConfig function is correctly described", function() {
		console.log(findConfig);
		expect(findConfig.toString()).toEqual(jasmine.stringMatching("cssData"));
	  });
	  
	  it("Some CSS data is returned from AJAX request\
			(must host on localhost/web/test.html)", function () {
		var cssData = findConfig('config/color0050.json');
		console.log(cssData);
		expect(cssData).not.toBeNull();
	  });
	  
	  it("Correct color0050.json CSS data is returned (must host on localhost/web/test.html)", function() {
		var cssData = findConfig('config/color0050.json');
		console.log(cssData['title']);
		expect(cssData['title']).toEqual(jasmine.stringMatching("Color by code"));
		expect(cssData).toEqual(jasmine.objectContaining({title : "Color by code"}));
	  });
	});
});
