window.appendBar = (d) ->
    toggleDrawerInOut = () ->
        if $(edge).attr("src") == "img/barin.png"
            $(cont).animate({"left":"0px"})
            $(cont).animate({"left":"-10px"})
            $(edge).attr({"src":"img/barout.png"})
        else
            $(cont).animate({"left":"0px"})
            $(cont).animate({"left":"-150px"})
            $(edge).attr({"src":"img/barin.png"})
        return false

    cont = document.createElement("div")
    edge = document.createElement("img")

    ref = document.createElement("img")
    select = document.createElement("img")
    sand = document.createElement("img")
    coursera = jQuery '<img>', {
        height: "80%",
        width: "20%",
        alt: "Submit to Coursera",
        src:'img/vicflag1.png'
        title: "Submit to Coursera"
        css: {
            "position":"absolute",
            "top":"6.6%",
            "right": "5%"
        }
    }

    $(cont).css({
        "width":"200px",
        "height":'50px',
        'position':'absolute',
        'top':'0%',
        'left':'-100px',
        "z-index":"280",
        "background-color":"#003366",
        "border-top":"1px solid black",
        "border-bottom":"1px solid black"
    })

    $(edge).attr({
        "width":"30px",
        "src":"img/barin.png"
    })
    $(edge).css({
        'position':'absolute',
        'top':'-0px',
        'right':'-30px',
        'height':'50px'
    })

    $(ref).attr({
        "height":"80%",
        "width":"20%",
        "alt":"Java book",
        "src":"img/cc0/Spiral_bound_book-128px.png",
        "title":"Java book"
    })
    $(ref).css({
        "position":"absolute",
        "top":"6.6%",
        "right": "28%"
    })

    $(sand).attr({
        "height":"80%",
        "width":"20%",
        "alt":"Code Sandbox",
        "src":"img/cc-bynd/keyboard.png",
        "title":"Code sandbox"
    })
    $(sand).css({
        "position":"absolute",
        "top":"6.6%",
        "right": "50%"
    })

    $(select).attr({
        "height":"80%",
        "width":"20%",
        "alt":"Select level",
        "src":"img/cc0/treasuremap-128px.png",
        "title":"Select level"
    })
    $(select).css({
        "position":"absolute",
        "bottom":"6.6%",
        "right": "70%"
    })

    $(cont).append(ref)
    $(cont).append(select)
    $(cont).append(sand)
    $(cont).append(coursera)
    $(cont).append(edge)

    $(ref).click referencePage
    $(select).click codeland.showMap
    $(sand).click sandBoxPage

    $(d).append(cont)
    return