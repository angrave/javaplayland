(function() {
  var debugging, deepcopy, log,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  debugging = true;

  if (debugging) {
    log = function(mesg) {
      return console.log(mesg);
    };
  } else {
    log = function(mesg) {
      return null;
    };
  }

  log("GameManager log");

  if (typeof deepcopy === "undefined" || deepcopy === null) {
    deepcopy = function(src) {
      return $.extend(true, {}, src);
    };
  }

  window.GameManager = (function() {
    var cssCfg;

    cssCfg = null;

    function GameManager(environment) {
      this.environment = environment;
      this.helpTips = __bind(this.helpTips, this);
      this.showRun = __bind(this.showRun, this);
      this.stopStudentCode = __bind(this.stopStudentCode, this);
      this.runStudentCode = __bind(this.runStudentCode, this);
      this.resetCode = __bind(this.resetCode, this);
      this.resetGame = __bind(this.resetGame, this);
      this.reset = __bind(this.reset, this);
      this.commandsValid = __bind(this.commandsValid, this);
      this.startGame = __bind(this.startGame, this);
      this.gameName = __bind(this.gameName, this);
      this.checkBraces = __bind(this.checkBraces, this);
      this.findSubstrs = __bind(this.findSubstrs, this);
      this.findLineNum = __bind(this.findLineNum, this);
      this.betweenIndices + __bind(this.betweenIndices, this);

      /*
          External Function (used by something outside of this file)
      
          Takes in the game environment and sets up the code editor and
          the game visual and the game logic.
      
          @param environment
              The environment and configuration required for this game.
       */
      this.cssCfg = findConfig('scripts/config/gameManager.json');
      this.config = deepcopy(this.environment.description);
      this.gameStateBase = this.environment.gameState;
      this.editorDiv = 'codeEditor';
      this.visualDiv = 'gameVisual';
      this.setUpGame();
      return;
    }

    GameManager.prototype.storeStats = function() {

      /*
          Internal Function (used only by the code in this file)
      
          Saves the game statistics to codeland.
       */
      this.environment.codeland.storeGameStats(this.environment.key, this.environment.stats);
    };

    GameManager.prototype.setUpGame = function() {

      /*
          Internal Function (used only by the code in this file)
      
          Sets up everything for the game to run.
          That is, the code editor, the game visual and the event listeners.
       */
      var butdiv, eDiv, editdiv, i, vis, _i;
      this.gameDiv = $(this.environment.gamediv);
      this.gameDiv.empty();
      butdiv = makeDiv();
      editdiv = makeDiv({
        'id': this.editorDiv,
        'class': 'code_editor',
        'style':'display:none'
      }, this.cssCfg["editDivCSS"]);
      this.gameDiv.append(editdiv);
      vis = makeDiv({
        'id': this.visualDiv,
        'style':'display:none'
      }, this.cssCfg["visCSS"]);
      this.gameDiv.append(vis);
      eDiv = this.cssCfg["editDiv"];
      for (i = _i = 0; _i <= 3; i = ++_i) {
        $(editdiv).append(eDiv[i]);
      }

      if(!(this.environment.stats.runCount > 0)){
        editdiv.fadeIn('fast');
        vis.fadeIn('fast');      
      }
      else{
        editdiv.fadeIn(800);
        vis.fadeIn(800);
      }


      $('#stopRun').hide();
      this.codeEditor = new EditorManager(this.editorDiv, this.config.editor, this.config.code);
      this.interpreter = new CodeInterpreter(this.config.editor.commands);
      this.environment.visualMaster.container.id = this.visualDiv;
      this.visual = new GameVisual(this.environment.visualMaster, this.environment.frameRate);
      this.interpretGameConfigMap();
      this.codeEditor.editor.editor.focus();
      this.addEventListeners();
    };

    GameManager.prototype.gameName = function() {

      /*
          Internal Function (used only by the code in this file)
      
          Returns the key of the current game.
       */
      return this.environment.key;
    };

    GameManager.prototype.startGame = function(waitForCode) {

      /*
          Internal Function (used only by the code in this file)
      
          This starts the game's visual and initializes the logic for the game.
      
          @param waitForCode
              Whether the game logic should wait for the code to begin running.
       */
      if (waitForCode == null) {
        waitForCode = false;
      }
      this.visual.startGame(this.config.visual);
      this.gameState = new window[this.gameStateBase](this, waitForCode);
      this.commandMap = this.gameState.getGameCommands();
    };

    GameManager.prototype.interpretGameConfigMap = function() {

      /*
          Internal Function (used only by the code in this file)
      
          Parses the map found in the game's config file and creates
          the necessary characters in the visual and in the gameManager.
       */
      var achar, character, key, map, name, x, y, _base, _base1, _base2, _base3, _ref;
      x = (_base = this.config.game.offset).x != null ? _base.x : _base.x = 0;
      y = (_base1 = this.config.game.offset).y != null ? _base1.y : _base1.y = 0;
      map = (_base2 = this.config.game).map != null ? _base2.map : _base2.map = "";
      while (map !== "") {
        achar = map.substring(0, 1);
        if (achar in this.config.game.key) {
          name = this.config.game.key[achar];
          this.generateCharacter(name, x, y, true);
        }
        if (achar === '\n') {
          y++;
          x = (_base3 = this.config.game.offset).x != null ? _base3.x : _base3.x = 0;
        } else {
          x++;
        }
        map = map.substring(1);
      }
      _ref = this.config.game.characters;
      for (key in _ref) {
        character = _ref[key];
        character.index = this.config.visual.characters.indexOf(character.visual);
      }
    };

    GameManager.prototype.generateCharacter = function(name, x, y, staysOnReset, dir) {

      /*
          External Function (used by something outside of this file)
      
          Creates a character using the defaults found in the config file,
          overwriting them as necessary and generating an appropriate name.
          Places this character in the visual config and in the game's config
          and makes sure the victory flag is the first item in the visual
          config's array.
      
          @param name
              The name of the type of character to create
          @param x
              The x location of the character
          @param y
              The y location of the character
          @param staysOnReset
              Whether this character is a permanent part of the game
          @param dir
              The direction the character is facing
       */
      var base, baseName, gflag, num, numLength, visualBase;
      base = deepcopy(this.config.game.characterBase[name]);
      visualBase = deepcopy(this.config.visual.visualBase[base.sprite]);
      base.x = x;
      base.y = y;
      visualBase.x = x;
      visualBase.y = y;
      if (dir != null) {
        base.dir = dir;
      }
      if (base.dir != null) {
        visualBase.dir = base.dir;
      }
      baseName = name;
      numLength = 1;
      while (name in this.config.game.characters) {
        if (name === baseName) {
          name = name + '1';
        } else {
          num = parseInt(name.substring(name.length - numLength), 10);
          num++;
          name = baseName + num;
          numLength = num.toString().length;
        }
      }
      visualBase.name = name;
      base.visual = visualBase;
      if (staysOnReset) {
        if (name === 'gflag') {
          this.config.visual.characters.unshift(visualBase);
        } else if (name === 'protagonist') {
          if (this.config.visual.characters.length > 0) {
            if (this.config.visual.characters[0].name = 'gflag') {
              gflag = this.config.visual.characters.shift();
              this.config.visual.characters.unshift(visualBase);
              this.config.visual.characters.unshift(gflag);
            }
          } else {
            this.config.visual.characters.push(visualBase);
          }
        } else {
          this.config.visual.characters.push(visualBase);
        }
        this.config.game.characters[name] = base;
      }
      return {
        'game': base,
        'visual': visualBase
      };
    };

    GameManager.prototype.gameLost = function() {

      /*
          External Function (used by something outside of this file)
      
          Updates the game statistics on the loss, plays the losing sound,
          and summons the game lost cloud.
       */
      var messages;
      this.updateGameLostStats();
      playAudio('defeat.ogg');
      messages = ["Try Again!"];
      window.objCloud(400, messages, "body", "30%", "30%", 3, "none", this.gameManager);
      return this.gameRunFinished();
    };
	
	GameManager.prototype.compileError = function(error_msg) {

      /*
          External Function (used by something outside of this file)
      
          Updates the game statistics on the loss, plays the losing sound,
          and summons the game lost cloud.
       */
      var messages;
      this.updateGameLostStats();
      playAudio('defeat.ogg');
      messages = ["Compile Error!<br>" + error_msg];
      window.objCloud(400, messages, "body", "30%", "30%", 3, "none", this.gameManager);
      return this.gameRunFinished();
    };

    GameManager.prototype.gameWon = function(score, stars) {

      /*
          External Function (used by something outside of this file)
      
          Updates the game statistics on the win, plays the winning sound,
          and summons the game won cloud.
      
          @param score
              The score the player achieved during this play of the game.
          @param stars
              How many stars the player earned during this play of the game.
       */
      var codeland, gameIndex, gameName, messages, questIndex;
      this.updateGameWonStats(score, stars);
      playAudio('victory.ogg');
      gameName = this.gameName();
      codeland = this.environment.codeland;
      gameIndex = codeland.currentQuest.games.indexOf(gameName);
      questIndex = codeland.quests.indexOf(codeland.currentQuest);
      if (++gameIndex === codeland.currentQuest.games.length) {
        questIndex = ++questIndex % codeland.quests.length;
        gameIndex = 0;
      }
      gameName = codeland.quests[questIndex].games[gameIndex];
      messages = ['Congratulations!'];
      window.objCloud(400, messages, "body", "30%", "30%", 1.5, gameName, this);
      //recalculate completion percentage
      window.codeland.calculateProgress();
      return this.gameRunFinished();
    };

    GameManager.prototype.updateGameLostStats = function() {

      /*
          Internal Function (used only by the code in this file)
      
          Creats the losing statistics and saves them to codeland.
       */
      var s;
      s = this.environment.stats;
      s.lostCount += 1;
      s.lastLoss = Date.now();
      if (!s.firstLoss) {
        s.firstLoss = s.lastLoss;
      }
      return this.storeStats();
    };

    GameManager.prototype.updateGameWonStats = function(score, stars) {

      /*
          Internal Function (used only by the code in this file)
      
          Creates the statistics of the won game and saves them
          to codeland.
      
          @param score
              The score the player achieved during this play of the game.
          @param stars
              How many stars the player earned during this play of the game.
      
          @return
              Whether or not this achieved score is a new high score for the
              player.
       */
      var isNewHiscore, s;
      log("Game Won: " + this.environment.key);
      s = this.environment.stats;
      s.winCount += 1;
      s.passed = true;
      s.lastWin = Date.now();
      if (!s.firstWin) {
        s.firstWin = s.lastWin;
      }
      s.stars = Math.max(stars, s.stars);
      isNewHiscore = s.hiscore < score;
      if (isNewHiscore) {
        s.hiscore = score;
      }
      this.storeStats();
      return isNewHiscore;
    };

    GameManager.prototype.finishGame = function() {

      /*
          External Function (used by something outside of this file)
      
          Stops the current game and uninitializes used classes.
       */
      var _ref;
      if ((_ref = this.gameState) != null) {
        _ref.stopGame();
      }

      //set editor renderer resize function to a dummy function to prevent
      //null error caused at playerCodeEditor.js line
      var tempResizeFunction = function() {
        // dummy function to swap original onResize function
      };
      if(this.codeEditor != null)
        this.codeEditor.editor.editor.renderer.onResize = tempResizeFunction;
      this.codeEditor = null;
      this.interpreter = null;
      this.visual = null;
      this.gameState = null;
      this.commandMap = null;
    };

    GameManager.prototype.addEventListeners = function() {

      /*
          Internal Function (used only by the code in this file)
      
          Sets up the event listeners the game manager responds to.
       */
      $('#compileAndRun').click(this.runStudentCode);
      $('#stopRun').click(this.resetGame);
      $('#resetState').click(this.reset);
      $('#help').click(this.helpTips);
      this.codeEditor.onStudentCodeChangeListener(this.resetGame.bind(this));
      this.codeEditor.onCommandValidation(this.commandsValid);
    };

    GameManager.prototype.commandsValid = function(valid) {

      /*
          External Function (used by something outside of this file)
          Event Function (passed in as a callback or bound to a button press)
      
          Disables the run button should the commands in the editor be
          invalid, enables the run button should they be valid.
      
          @param valid
              Whether or not the code in the code editor is valid.
       */
      if (valid) {
        $('#compileAndRun').attr('disabled', false);
        this.canRun = true;
      } else {
        $('#compileAndRun').attr('disabled', true);
        this.canRun = false;
      }
    };

    GameManager.prototype.reset = function() {

      /*
          Event Function (passed in as a callback or bound to a button press)
      
          Resets the code editor and the game.
       */
      this.environment.stats.resetCount += 1;
      this.storeStats();
      this.resetGame();
      this.resetCode();
    };

    GameManager.prototype.resetGame = function() {

      /*
          Event Function (passed in as a callback or bound to a button press)
      
          Resets the game.
       */
      this.stopStudentCode();
      this.startGame(false);
    };

    GameManager.prototype.resetCode = function() {

      /*
          Internal Function (used only by the code in this file)
      
          Resets the student's code.
       */
      this.codeEditor.resetEditor();
    };

    GameManager.prototype.runStudentCode = function() {

      /*
          Event Function (passed in as a callback or bound to a button press)
      
          Scans the code from the code editor and begins running the student's
          code.
       */
      var code, finish_cb, stdout;
      if (this.running) {
        return;
      }
      this.running = true;
      code = this.codeEditor.getStudentCode();
      $('#compileAndRun').hide();
      $('#stopRun').show();
      this.environment.stats.runCount += 1;
      this.storeStats();
      var braces = this.checkBraces(code);
      if(braces != 0)
      {
        this.compileError(braces);
        return;
      }
      if (this.environment.backEnd === 'interpreter') {
        this.codeEditor.scan();
        if (!this.canRun) {
          return;
        }
        this.interpreter.scanText(code);
        this.startGame(true);
        this.interpreter.executeCommands(this.commandMap);
      } else if (this.environment.backEnd === 'doppio') {
        this.codeEditor.scan();
        if (!this.canRun) {
          return;
        }
        stdout = function(mesg) {
          return console.log(mesg);
        };
        this.environment.codeland.doppioAPI.setOutputFunctions(stdout(stdout));
        finish_cb = function() {};
        if (!this.environment.codeland.doppioReady) {
          this.environment.codeland.waitForWrapper(this.runStudentCode);
          this.running = false;
          log('Waiting for Doppio to be compiled');
          return;
        }
        this.startGame(true);
        this.environment.codeland.doppioAPI.run(code, true, finish_cb);
        this.codeEditor.UpdateCommandsStatus(null);
      }
      return false;
    };

    GameManager.prototype.stopStudentCode = function() {

      /*
          Internal Function (used only by the code in this file)
      
          Stops running the student's code and resets the visual.
       */
      if (!this.running) {
        return;
      }
      this.environment.stats.abortCount += 1;
      this.storeStats();
      if (this.environment.backEnd === 'doppio') {
        this.environment.codeland.doppioAPI.abort(this.showRun);
      } else {
        this.showRun();
      }
      if (this.gameState != null) {
        this.gameState.cleanPrevHighlight();
      }
      return false;
    };

    GameManager.prototype.showRun = function() {

      /*
          Internal Function (used only by the code in this file)
      
          Shows the run button.
       */
      $('#stopRun').hide();
      $('#compileAndRun').show();
      this.running = false;
    };

    GameManager.prototype.gameRunFinished = function() {

      /*
          Internal Function (used only by the code in this file)
      
          Called when a run has finished, currently only re-displays
          the run button.
       */
      this.showRun();
    };

    GameManager.prototype.checkBraces = function(code) {
      /*
          Internal Function (used only by the code in this file)
      
          Used to check for matching braces. Main function
       */
       var lbraces = this.findSubstrs(code, "{");
       var rbraces = this.findSubstrs(code, "}");
       var lcoms = this.findSubstrs(code, "/*");
       var rcoms = this.findSubstrs(code, "*/");
       var bcoms = this.findSubstrs(code, "//");
       var newLines = this.findSubstrs(code, "\n");

       //First check if comments are matching
       var index = 0;

       //If different numbers of opening+closing comments, then mismatch already, but figure out which.
       //I believe this will incorrectly report a problem if there is an opening comment inside
       //another commented out block, but this should be avoided anyhow
       var maxLen = Math.min(lcoms.length, rcoms.length)
       while(index < maxLen)
       {
        if(rcoms[index] < lcoms[index])
          return "Mismatched closing comment at line " + this.findLineNum(rcoms[index], newLines) + ". Fix this by either removing it or adding a matching opening comment.";
        index += 1;
       }
       if(lcoms.length > rcoms.length)
        return "Mismatched opening comment at line " + this.findLineNum(lcoms[rcoms.length+1], newLines) + ". Fix this by either removing it or adding a matching closing comment.";
       if(rcoms.length > lcoms.length)
        return "Mismatched closing comment at line " + this.findLineNum(rcoms[lcoms.length+1], newLines) + ". Fix this by either removing it or adding a matching opening comment.";

       //New to check braces. Same as before, but now must ignore braces in comments
       var lindex = 0, rindex = 0;
       while(lindex < lbraces.length && rindex < rbraces.length)
       {
        if(this.betweenIndices(lbraces[lindex], lcoms, rcoms) || this.betweenIndices(lbraces[lindex], bcoms, newLines))
          lindex += 1;
        else if(this.betweenIndices(rbraces[rindex], lcoms, rcoms) || this.betweenIndices(rbraces[rindex], bcoms, newLines))
          rindex += 1;
        else
        {
          if(rbraces[rindex] < lbraces[lindex])
            return "Mismatched right brace at line " + this.findLineNum(rbraces[rindex], newLines) + ". Fix this by either removing it or adding a matching left brace.";
          lindex += 1;
          rindex += 1;
        }
       }
       if(lindex != lbraces.length)
        return "Mismatched left brace at line " + this.findLineNum(lbraces[lindex], newLines) + ". Fix this by either removing it or adding a matching right brace.";
       if(rindex != rbraces.length)
        return "Mismatched right brace at line " + this.findLineNum(rbraces[rindex], newLines) + ". Fix this by either removing it or adding a matching left brace.";

       return 0;
     }

    GameManager.prototype.findSubstrs = function(code, substring) {
      /*
          Internal Function (used only by the code in this file)
      
          Used to check for matching braces. Finds all the positions of the substring given.
       */
       var startIndex = 0, indices = [];
       var foundIndex = code.indexOf(substring, startIndex);
       while(foundIndex > -1)
       {
        indices.push(foundIndex);
        startIndex = foundIndex + substring.length;
        foundIndex = code.indexOf(substring, startIndex);
       }
       return indices;
     }

     GameManager.prototype.findLineNum = function(position, lines) {
      /*
          Internal Function (used only by the code in this file)
      
          Used to check for matching braces. Finds the line number
       */
       var index = 0;
       while(lines[index] < position)
       {
        index += 1;
       }
       return String(index+1);
     }

     GameManager.prototype.betweenIndices = function(position, fIndices, sIndices) {
      /*
          Internal Function (used only by the code in this file)
      
          Used to check for matching braces. Finds the line number
       */
       var fIndex = 0;
       while(fIndex < fIndices.length)
       {
        if(position > fIndices[fIndex])
        {
          sIndex = fIndex;
          //sIndex should never run out of bounds here because we verify it's correct
          //not clear how to handle this anyhow
          while(fIndices[fIndex] > sIndices[sIndex])
            sIndex += 1;
          if(position < sIndices[sIndex])
            return true;
          else
            return false;
        }
        else
          fIndex += 1;
       }
       return false;
     }

    GameManager.prototype.helpTips = function() {

      /*
          Event Function (passed in as a callback or bound to a button press)
      
          Summons the help tips cloud to display the tips associated with
          this game.
       */
      var conf, ma, title, _ref, _ref1;
      this.environment.stats.tipsCount += 1;
      this.storeStats();
      ma = (_ref = this.config) != null ? (_ref1 = _ref.code) != null ? _ref1.comments : void 0 : void 0;
      if (ma) {
        if (ma.length > 1) {
          title = ma[0];
          ma = ma.slice(1);
          ma[0] = title + '<br>' + ma[0];
        }
        conf = {
          widthpx: 600,
          mesgs: ma,
          parentTag: "body",
          xoffset: "30%",
          yoffset: "30%",
          textscaling: 0.7,
          nextgame: "none",
          gameManager: this.gameManager
        };
        window.objCloud(conf.widthpx, conf.mesgs, conf.parentTag, conf.xoffset, conf.yoffset, conf.textscaling, conf.nextgame, conf.gameManager);
      }
    };

    return GameManager;

  })();

}).call(this);
