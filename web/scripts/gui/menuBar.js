(function() {
  window.appendBar = function(menu_section) {
    var menu_list_items, headline, title, text_book, sand_box, carousel;
	
    // the list of icon buttons and progress carousel on the top menu bar
    menu_list_items = document.createElement("ul");
    $(menu_list_items).attr({
        "class":"menu_div"
    });

    // Code Moo headline
    headline = document.createElement("li");
    $(headline).attr({
        "class":"menu_headline",
    });
    $(headline).append("<span class='cursiveHeadline' style='margin-left=0px'>CodeMoo Java</span>")

    // game selection button
    title = document.createElement("li");
    $(title).attr({
        "class":"menu_title menu_item",
    });
    $(title).append("<img src='img/menubar/list1.png' height='80%' padding-top: 10%;></png>")
    $(title).click(codeland.showMap);

    // reference book button
    text_book = document.createElement("li");
    $(text_book).attr({
        "class":"menu_text_book menu_item"
    });
    $(text_book).append("<img src='img/menubar/books19.png' height='80%' padding-top: 10%;></png>")
    $(text_book).click(referencePage);

    // sand box button
    sand_box = document.createElement("li");
    $(sand_box).attr({
        "class":"menu_text_book menu_item"
    });
    $(sand_box).append("<img src='img/menubar/beach11.png' height='80%' padding-top: 10%;></png>")
    $(sand_box).click(sandBoxPage);

    //creating the carousel for 
    carousel = document.createElement("div");
    $(carousel).attr({
        "id":"progress_carousel",
        "class": "carousel slide",
        "data-ride":"carousel",        
    });

    carousel_inner = document.createElement("div");
    $(carousel_inner).attr({
        "class":"carousel-inner",
        "role":"listbox",
    });

    $(carousel_inner).append("<div id = 'pb1' class='item active progress'><span></span><div class='progress-bar progress-bar-striped active' role='progressbar' aria-valuemin='0' aria-valuemax='100' ></div></div>");
    $(carousel_inner).append("<div id = 'pb2' class='item progress'><span></span><div class='progress-bar progress-bar-striped active' role='progressbar' aria-valuemin='0' aria-valuemax='100' ></div></div>");
    $(carousel_inner).append("<div id = 'pb3' class='item progress'><span></span><div class='progress-bar progress-bar-striped active' role='progressbar' aria-valuemin='0' aria-valuemax='100' ></div></div>");
    $(carousel_inner).append("<div id = 'pb4' class='item progress'><span></span><div class='progress-bar progress-bar-striped active' role='progressbar' aria-valuemin='0' aria-valuemax='100' ></div></div>");



    left_control = document.createElement("a");
    $(left_control).attr({
        "class":"left carousel-control",
        "href":"#progress_carousel",
        "role":"button",
        "data-slide":"prev"       
    });
    $(left_control).append("<span class='glyphicon glyphicon-chevron-left' aria-hidden='true'></span>");

    right_control = document.createElement("a");
    $(right_control).attr({
        "class":"right carousel-control",
        "href":"#progress_carousel",
        "role":"button",
        "data-slide":"next"       
    });
    $(right_control).append("<span class='glyphicon glyphicon-chevron-right' aria-hidden='true'></span>");

    $(carousel).append(carousel_inner);
    $(carousel).append(left_control);
    $(carousel).append(right_control);


    // appending all menu list items
    $(menu_list_items).append(headline);
    $(menu_list_items).append(title);
    $(menu_list_items).append(text_book);
    $(menu_list_items).append(sand_box);
    $(menu_list_items).append(carousel);

    $(menu_section).prepend(menu_list_items);

    //recalculate completion percentage
    window.codeland.calculateProgress();

    return;
  };

}).call(this);
