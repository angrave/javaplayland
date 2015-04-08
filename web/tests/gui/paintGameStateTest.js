describe("paintGameStateTest",function() {
	
	it("game state exists",function() {
		expect(window.PaintGameState).not.toBeNull();
	});
	
	it("game state has properties",function() {
		expect(window.PaintGameState.stopGame).not.toBeNull();
		expect(window.PaintGameState.gameManager).not.toBeNull();
		expect(window.PaintGameState.gameLost).not.toBeNull();
		expect(window.PaintGameState.gameWon).not.toBeNull();
		expect(window.PaintGameState.clock).not.toBeNull();
	});
	/**
	it("getPixel works correctly",function() {
		paintGameStateTester = PaintGameState(window.gameManager, window.waitForCode);
		alert(paintGameStateTester);
		expect(window.PaintGameState.prototype.getPixel(0,0)).toEqual(window.PaintGameState.gameState.getPixel(0,0));
	});
**/
	
});