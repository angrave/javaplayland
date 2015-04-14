describe("guiUtilTest", function() {
	
	describe("makeDiv", function() {

		it("The function is in place", function() {
			expect(makeDiv).toEqual(jasmine.any(Function));
		});

		it("The function is correctly described", function() {
			console.log(makeDiv);
			expect(makeDiv.toString()).toEqual(jasmine.stringMatching("nDiv"));
		});

		it("the function works on empty input", function() {
			var nDiv = makeDiv(null, null);
			expect(nDiv).not.toBeNull();
		});

		it("the function correctly adds given styling", function() {
			var nDiv = makeDiv({id: 'testUI'}, null);
			expect(nDiv.attr('id')).toEqual(jasmine.stringMatching('testUI'));

			var nDiv2 = makeDiv(null, {position: 'absolute'});
			expect(nDiv2.css('position')).toEqual(jasmine.stringMatching('absolute'));

		});

	}); 

	describe("makeImgElem", function() {
		
		it("The function is in place", function() {
			expect(makeImgElem).toEqual(jasmine.any(Function));
		});

		it("The function is correctly described", function() {
			console.log(makeImgElem);
			expect(makeImgElem.toString()).toEqual(jasmine.stringMatching("nImg"));
		});

		it("the function works on empty input", function() {
			var nImg = makeImgElem("none", "none");
			expect(nImg).not.toBeNull();
		});

		it("the function correctly adds given styling", function() {
			var nImg = makeImgElem({id: 'testUI'}, "none");
			expect(nImg.attr('id')).toEqual(jasmine.stringMatching('testUI'))

			var nImg2 = makeImgElem("none", {position: 'absolute'});
			expect(nImg2.css('position')).toEqual(jasmine.stringMatching('absolute'));

		});

	});
	
});