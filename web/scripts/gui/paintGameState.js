// Generated by CoffeeScript 1.8.0
(function() {
  var PaintGameCommands, deepcopy,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  if (typeof deepcopy === "undefined" || deepcopy === null) {
    deepcopy = function(src) {
      return $.extend(true, {}, src);
    };
  }

  window.PaintGameState = (function() {

    /*
        A class to contain the game logic for paint games.
     */
    var clockHandle;

    clockHandle = null;

    function PaintGameState(gameManager, waitForCode) {
      var character, i, name, temp, _i, _j, _ref, _ref1, _ref2;
      this.gameManager = gameManager;
      this.stopGame = __bind(this.stopGame, this);
      this.gameLost = __bind(this.gameLost, this);
      this.gameWon = __bind(this.gameWon, this);
      this.clock = __bind(this.clock, this);
      this.cleanPrevHighlight = __bind(this.cleanPrevHighlight, this);

      /*
          Sets up the game's constants and the visual display
      
          @param gameManager
              The game manager running this game
          @param waitForCode
              Whether or not to wait for the students code to exectute
              to start the game (and start checking for events).
       */
      this.gameConfig = deepcopy(this.gameManager.config.game);
      this.gameCommands = new PaintGameCommands(this);
      this.visual = this.gameManager.visual;
      this.score = 0;
      this.stars = 0;
      this.tick = 0;
      this.speed = 30;
      this.finishedExecuting = false;
      this.startedExecuting = false;
      this.commands = [];
      this.picture = [];
      this.highlightid = null;
      for (i = _i = 0, _ref = this.gameManager.config.visual.grid.gridY; _i <= _ref; i = _i += 1) {
        temp = [];
        for (i = _j = 0, _ref1 = this.gameManager.config.visual.grid.gridX; _j <= _ref1; i = _j += 1) {
          temp.push(null);
        }
        this.picture.push(temp);
      }
      _ref2 = this.gameConfig.characters;
      for (name in _ref2) {
        character = _ref2[name];
        if (name.indexOf('Border') === -1) {
          character.color = character.sprite;
          this.picture[character.x][character.y] = character;
        }
      }
      if (clockHandle != null) {
        clearInterval(clockHandle);
      }
      clockHandle = setInterval(this.clock, 17);
      this.startedGame = waitForCode ? false : true;
      return;
    }

    PaintGameState.prototype.getGameCommands = function() {

      /*
          External Function (used by something outside of this file)
      
          Returns a handle to this games commands (a class).
       */
      return this.gameCommands;
    };

    PaintGameState.prototype.clock = function() {

      /*
          Internal Function (used only by the code in this file)
      
          The main engine behind the game.
          This function is called every X milliseconds via setInterval.
          Each time it is called it updates the visual and every Y times
          it is called it checks for events and executes the next command
          in the queue.
       */
      var command;
       if (this.tick % this.speed === 0) {
          this.checkEvents();
          if (this.commands.length > 0) {
            command = this.commands.splice(0, 1)[0];
            command.exec();
          } else {
            this.finishedExecuting = this.startedExecuting;
          }
        }
      this.visual.getFrame(this.gameManager.config.visual, this.tick);
      this.tick++;
    };

    PaintGameState.prototype.checkPainting = function() {

      /*
          Internal Function (used only by the code in this file)
      
          Returns whether or not the painting has been filled
          out correctly.
       */
      var correct, expected, name, pixel, x, y, _i, _j, _ref, _ref1, _ref2, _ref3;
      correct = true;
      _ref = this.gameConfig.characters;
      for (name in _ref) {
        pixel = _ref[name];
        expected = pixel.match;
        if (expected == null) {
          expected = pixel.color;
        }
        if (expected === ((_ref1 = this.picture[pixel.x][pixel.y]) != null ? _ref1.color : void 0)) {
          this.picture[pixel.x][pixel.y].matched = true;
        } else {
          correct = false;
        }
      }
      for (x = _i = 0, _ref2 = this.gameManager.config.visual.grid.gridX; 0 <= _ref2 ? _i <= _ref2 : _i >= _ref2; x = 0 <= _ref2 ? ++_i : --_i) {
        for (y = _j = 0, _ref3 = this.gameManager.config.visual.grid.gridY; 0 <= _ref3 ? _j <= _ref3 : _j >= _ref3; y = 0 <= _ref3 ? ++_j : --_j) {
          pixel = this.picture[x][y];
          if (pixel) {
            if (!pixel.matched) {
              correct = false;
            }
            pixel.matched = false;
          }
        }
      }
      return correct;
    };

    PaintGameState.prototype.checkEvents = function() {

      /*
          Internal Function (used only by the code in this file)
      
          Checks if the gamestate necessitates triggering any event.
          For paint games it is only necessary if the game finished to
          check if it was done correctly.
       */
      if (this.finishedExecuting) {
        //Clean up the last highlighted line
        this.cleanPrevHighlight();
        if (clockHandle != null) {
          clearInterval(clockHandle);
        }
        if (this.checkPainting()) {
          this.gameWon();
        } else {
          this.gameLost();
        }
      }
    };

    PaintGameState.prototype.start = function() {

      /*
          Internal Function (used only by the code in this file)
      
          Starts the game
       */
      this.startedExecuting = true;
      this.startedGame = true;
    };

    PaintGameState.prototype.highlightCommand = function(startLine, endLine)
    {
      //Don't highlight regions or past end of the code (indicates library code)
      if(startLine != endLine)
      {
        return;
      }
      if(endLine > this.gameManager.codeEditor.editor.editSession.getLength())
      {
        return;
      }
      keystring = 'highlightCommand' + String(startLine);
      console.log(keystring);
      if(this.commands.length === 0 || this.commands[this.commands.length-1].key != keystring)
      {
        this.commands.push({
          key: keystring,
          exec: this._highlightLine.bind(this, startLine, endLine)
        });
      }
    }

    PaintGameState.prototype._highlightLine = function(startLine, endLine)
    {
      this.cleanPrevHighlight()
      this.highlightid = this.gameManager.codeEditor.editor.editSession.highlightLines(startLine, endLine);
    }

    PaintGameState.prototype.cleanPrevHighlight = function()
    {
      if(this.highlightid) {
        this.gameManager.codeEditor.editor.editSession.removeMarker(this.highlightid.id);
        this.highlightid = null;
      }
    }

    PaintGameState.prototype.drawPixel = function(x, y, color) {

      /*
          External Function (used by something outside of this file)
      
          Places a draw pixel command on the commands queue.
      
          @param x
              The x position of the pixel
          @param y
              The y position of the pixel
          @param color
              The color of the pixel
       */
      var char;
      if (!this.gameManager.config.game.characterBase.hasOwnProperty(color)) {
        return;
      }
      char = this.gameManager.generateCharacter(color, x, y, false);
      char.color = color;
      this.picture[x][y] = char;
      console.log('drawPixel');
      //This is a HACK. Should just be a push onto the back, not the second last element
      this.commands.splice(this.commands.length-1, 0, {
        key: 'drawPixel',
        exec: this._drawPixel.bind(this, x, y, char)
      });
    };

    PaintGameState.prototype._drawPixel = function(x, y, char) {

      /*
          Internal Function (used only by the code in this file)
      
          Draws the given pixel at the x and y locations with color color.
      
          @param x
              The x position of the pixel
          @param y
              The y position of the pixel
          @param char
              The pixel to draw
       */
      if (this.picture[x][y] != null) {
        this.visual.removeCharacter(this.gameManager.config.visual, this.picture[x][y].visual);
      }
      this.visual.pushCharacter(this.gameManager.config.visual, char.visual);
      this.picture[x][y] = char;
    };

    PaintGameState.prototype.getPixel = function(x, y) {

      /*
          External Function (used by something outside of this file)
      
          Returns the pixel color at position (x, y)
      
          @param x
              The x position of the pixel to query
          @param y
              The y position of the pixel to query
       */
      if (this.picture[x][y]) {
        return this.picture[x][y].color;
      } else {
        return "white";
      }
    };

    PaintGameState.prototype.gameWon = function() {

      /*
          Internal Function (used only by the code in this file)
      
          Stops the game and reports the win to the game Manager.
       */
      if (!this.startedGame) {
        return;
      }
      this.stopGame();
      this.gameManager.gameWon();
    };

    PaintGameState.prototype.gameLost = function() {

      /*
          Internal Function (used only by the code in this file)
      
          Stops the game and reports the loss to the game Manager.
       */
      if (!this.startedGame) {
        return;
      }
      this.stopGame();
      this.gameManager.gameLost();
    };
	
	PaintGameState.prototype.compileError = function(error_num) {
      /*
          Internal Function (used only by the code in this file)
      
          Stops the game and reports the loss to the game Manager.
       */
      this.gameManager.compileError(error_num);
    };

    PaintGameState.prototype.stopGame = function() {

      /*
          External Function (used by something outside of this file)
      
          Stops the game.
       */
      if (clockHandle != null) {
        clearInterval(clockHandle);
      }
      clockHandle = null;
      this.startedGame = false;
    };

    return PaintGameState;

  })();

  PaintGameCommands = (function() {

    /*
        A class to contain the functions called by the student's
        Java code for paint games.
     */
    function PaintGameCommands(gameState) {
      this.gameState = gameState;
      return;
    }

    PaintGameCommands.prototype.finishedParsingStartGame = function() {

      /*
          Java Function (called by the Java code)
      
          Starts the game.
       */
      this.gameState.start();
    };
	
	 PaintGameCommands.prototype.compileError = function(error_num) {
      /*
          External Function (used by something outside of this file)
      
          Stops the game and reports the loss to the game Manager.
       */
      this.gameState.compileError(error_num);
    };

    PaintGameCommands.prototype.drawPixel = function(x, y, color) {

      /*
          Java Function (called by the Java code)
      
          Draws a pixel at position (x, y) of color color.
      
          @param x
              The x position of the pixel
          @param y
              The y position of the pixel
          @param color
              The color of the pixel
       */
      this.gameState.drawPixel(x, y, color);
    };

    PaintGameCommands.prototype.getPixel = function(x, y) {

      /*
          Java Function (called by the Java code)
      
          Returns the color of the pixel at (x, y)
      
          @param x
              The x position of the pixel to query
          @param y
              The y position of the pixel to query
       */
      return this.gameState.getPixel(x, y);
    };

    return PaintGameCommands;

  })();

}).call(this);
