describe("codeInterpreter",function() {
	
	var testCommands = { "go": {
        "inputs": 0,
        "maxUses": 3
      },
      "turnRight": {
        "inputs": 0,
        "maxUses": 2
      }};

    var testInterpreter = new CodeInterpreter(testCommands);

	describe("CodeInterpreter constructor",function() {
		
		it("Constructor successfully creates object", function() {
			expect(testInterpreter).not.toBeNull();
		});

		it("object has correct initial properites", function() {
			expect(testInterpreter.commands['go']).toEqual(jasmine.objectContaining({ inputs: 0, maxUses: 3, parser: { exec: jasmine.any(Function) } }));
			expect(testInterpreter.usesRemaining['go']).toEqual(3);
		});

	});

	describe("identifyCommand", function() {
		
		it("The function is in place", function() {
			expect(testInterpreter.identifyCommand).toEqual(jasmine.any(Function));
		});

		it("The function is correct on valid inputs", function() {
			var testCommand = testInterpreter.identifyCommand("go();");
			expect(testCommand).toEqual("go");

			var testCommand2 = testInterpreter.identifyCommand("turnRight(\"placeholder\");");
			expect(testCommand2).toEqual("turnRight");
		});


		it("function returns null on invalid inputs", function() {
			var testFalseCommand = testInterpreter.identifyCommand("go");
			expect(testFalseCommand).toBeNull();

			var testFalseCommand2 = testInterpreter.identifyCommand("turnLeft();");
			expect(testFalseCommand2).toBeNull();

		});

	});

	describe("scanCommand", function() {
		it("The function is in place", function() {
			expect(testInterpreter.scanCommand).toEqual(jasmine.any(Function));
		});

		it("The function returns the correct command", function(){
			var testCommand = testInterpreter.scanCommand("go();");
			expect(testCommand['command']).toEqual("go");

			var testCommand2 = testInterpreter.scanCommand("turnRight(\"placeholder\");");
			expect(testCommand2['command']).toEqual("turnRight");
		});

		it("the function returns the correct parameters", function(){
			var testCommand2 = testInterpreter.scanCommand("turnRight(\"placeholder\");");
			expect(testCommand2['parameters']).toEqual(["placeholder"]);
		});

		it("the function returns null on invalid inputs", function() {
			var testFalseCommand = testInterpreter.identifyCommand("go");
			expect(testFalseCommand).toBeNull();

			var testFalseCommand2 = testInterpreter.identifyCommand("turnLeft();");
			expect(testFalseCommand2).toBeNull();
		});

	});

	describe("scanText", function() {

		it("The function is in place", function() {
			expect(testInterpreter.scanText).toEqual(jasmine.any(Function));
		});

		it("Function correctly decrements usesRemaining", function() {
			var uses = testInterpreter.scanText("go();\nturnRight();");
			expect(uses['go']).toEqual(2);
			expect(uses['turnRight']).toEqual(1);
		});


	});




});