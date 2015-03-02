describe("utils",function() {

	describe("findConfig",function() {
		it("The utility function is in place from previous JavaScript", function() {
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
		
		it("Functions on bad input/special characters", function() {
			var cssData = findConfig('config/this_file_doesnt_exist.json');
			console.log(cssData);
			expect(cssData).toBeNull();
			
			cssData = findConfig('@#$&*(@#$&');
			expect(cssData).toBeNull();
		});
	});
	
	describe("getTextFile",function() {
		it("The utility function is in place from previous JavaScript", function() {
			expect(getTextFile).toEqual(jasmine.any(Function));
		});
		
		it("The getTextFile function is correctly described", function() {
			console.log(getTextFile);
			expect(getTextFile.toString()).toEqual(jasmine.stringMatching("textData"));
		});
		
		it("Gets some text file data from the disk (must host on localhost/web/test.html)", function() {
			var textData = getTextFile('index.html');
			expect(textData).not.toBeNull();
		});
		
		it("Correct text from index.html returned  (must host on localhost/web/test.html)", function() {
			var textData = getTextFile('index.html');
			expect(textData.toString()).toEqual(jasmine.stringMatching('<!DOCTYPE html>'));
			expect(textData.toString()).toEqual(jasmine.stringMatching('Code Moo'));
		});
		
		it("Functions on bad input/special characters", function() {
			var textData = getTextFile('this_file_doesnt_exist.txt');
			console.log(textData);
			expect(textData).toBeNull();
			
			textData = getTextFile('@#$&*(@#$&');
			expect(textData).toBeNull();
		});
	});
	
	describe("playAudio", function() {
		it("The utility function is in place from previous JavaScript", function() {
			expect(playAudio).toEqual(jasmine.any(Function));
		});
		
		it("The playAudio function is correctly described", function() {
			console.log(playAudio);
			expect(playAudio.toString()).toEqual(jasmine.stringMatching("sound"));
		});
		
		it("Audio is playable", function() {
			playAudio("victory.ogg");
			var player = document.getElementsByTagName("video");
			expect(player).not.toBeNull();
		});
	});
});
