(function() {
  window.gameSelector = (function() {
    var config, cont;

    cont = null;

    config = null;
	
	/**
	* creates the outer container for the game selector at div
	* @param div to place the game selector
	* @param dis whether or not to display full data in text or image
	*/
    function gameSelector(div, dis) {
      var game_selection_div;
      this.div = div;
      this.dis = dis;
      $("#acelne").remove();
      game_selection_div = document.createElement("div");
      $(game_selection_div).attr("id", "gameSelection");
      this.div.append(game_selection_div);
      return;
    }

	/**
	* builds the block representing each game
	* @param count the number in the series the game is
	* @param game the game to be played
	* @param desc the title of the game
	* @param player the current player
	* @param canPlay not used?
	* @param codeland the object representing all the games
	*/
    gameSelector.prototype.buildDiv = function(accordionTab, count, game, desc, player, canPlay, codeland) {
      var img, level_span, src;
      level_span = document.createElement("span");
      $(level_span).attr("id", "select" + game);
      $(level_span).attr("class", "select" + count + " level-item");
      $(accordionTab).append(level_span);
      $(level_span).click(function() {
        return codeland.startGame(game);
      });
      if ((player != null ? player.passed : void 0) === true) {
        $(level_span).prepend("<span class='ui-icon ui-icon-check ui-inline-check'></span>");
      }

      return $(level_span).append("<font color=\"white\">" + count + ": " + desc.title + "</font>");
      
    };

	/**
	* if canPlay is true, attaches animation of woman walking to con, otherwise, attaches static image
	* @param con the container to attach the img
	* @param canPlay whether or not game is playable
	*/
    gameSelector.prototype.buildAn = function(con, canPlay) {
      var images, problem, tmp2;
      tmp2 = makeImgElem(null, config["tmp2CSS"]);
      $(con).append(tmp2);
      images = config["images"];
      problem = function() {
        if ($(tmp2).attr("src") === images["womanFrontA"]) {
          return $(tmp2).attr("src", images["womanFrontB"]);
        } else {
          return $(tmp2).attr("src", images["womanFrontA"]);
        }
      };
      if (canPlay) {
        return setInterval(problem, 450);
      } else {
        return $(tmp2).attr("src", images["womanFrontA"]);
      }
    };

	/**
	* creates a div to hold the player's current score and attaches it to con
	* @param con the container to attach the score to
	* @param player the current player
	*/
    gameSelector.prototype.buildScore = function(con, player) {
      var es, ns, tmp, tmp1, tmp2, tmp3, _i, _j, _ref, _ref1;
      tmp = makeDiv(null, config["tmpBuildScoreCSS"]);
      $(con).append(tmp);
      tmp1 = $('<p></p>');
      tmp2 = $('<p></p>');
      tmp3 = $('<p></p>');
      $(tmp).append(tmp1);
      $(tmp).append(tmp2);
      $(tmp).append(tmp3);
      if ((player != null ? player.passed : void 0) === true) {
        $(tmp1).text("Status:  Complete");
      } else {
        $(tmp1).text("Status:  Incomplete");
      }
      $(tmp2).text("Hi-Score: " + (player != null ? player.hiscore : 0));
      if (this.dis) {
        $(tmp3).text("Stars: " + (player != null ? player.stars : void 0));
      } else {
        for (ns = _i = 1, _ref = player != null ? player.stars : void 0; _i <= _ref; ns = _i += 1) {
          $(tmp).append("<img src='img/interface/star.png' width='20%' height='20%'></img>");
        }
        for (es = _j = _ref1 = player != null ? player.stars : void 0; _j < 3; es = _j += 1) {
          $(tmp).append("<img src='img/interface/stare.png' width='20%' height='20%'></img>");
        }
      }
    };
	/**
	* attaches a description to a given container
	* @param con the container
	* @param desc the description to attach
	*/
    gameSelector.prototype.buildInfo = function(con, desc) {
      var tmp, tmp1, tmp2;
      tmp = makeDiv(null, cssData["tmpBuildInfoCSS"]);
      $(con).append(tmp);
      tmp1 = $('<p></p>');
      tmp2 = $('<p></p>');
      $(tmp).append(tmp1);
      $(tmp).append(tmp2);
      $(tmp1).text("Name:  " + desc.name);
      return $(tmp2).text("Description:  " + desc.description);
    };
	
	/**
	* returns click handler to start the game if it can be played, otherwise returns empty div
	* @param con container to attach handler
	* @param cp whether or not game can be played
	* @param codeland class that holds games
	* @param game game to be played
	*/
    gameSelector.prototype.canPlay = function(con, cp, codeland, game) {
      var over, ovr;
      if (cp) {
        return $(con).click(function() {
          return codeland.startGame(game);
        });
      } else {
        over = makeDiv(null, cssData["tmpOverCSS"]);
        ovr = $('<div></div>');
        return $(con).prepend(ovr);
      }
    };

    return gameSelector;

  })();

}).call(this);
