describe("Utils",function() {

  it("Loads the configuration file containing styling", function() {
	var cssData;
	expect(findConfig).toEqual(jasmine.any(Function));
	findConfig('./config/color0050');
  });
});
