window.appendBar = (d) ->

  $("#acelne").remove()
  cssData=findConfig('scripts/config/menuBar.json')


  toggleDrawerInOut = () ->
    if $(edge).attr("src") == "img/interface/barin.png" #Lavanya
      $(cont).animate({"left":"0px"})
      $(cont).animate({"left":"-10px"})
      $(edge).attr({"src":"img/interface/barout.png"})
    else
      $(cont).animate({"left":"0px"})
      $(cont).animate({"left":"-150px"})
      $(edge).attr({"src":"img/interface/barin.png"})
    return false


  cont = makeDiv(null,cssData["cont"])
  edge=makeImgElem(cssData["edgeAttr"],cssData["edgeCSS"])
  ref=makeImgElem(cssData["refAttr"],cssData["refCSS"])
  select=makeImgElem(cssData["selectAttr"],cssData["selectCSS"])
  sand=makeImgElem(cssData["sandAttr"],cssData["sandCSS"])


  $(cont).append(ref)
  $(cont).append(select)
  $(cont).append(sand)
  $(cont).append(edge)

  $(ref).click referencePage
  $(select).click codeland.showMap
  $(sand).click sandBoxPage

  $(toggleDrawerInOut)
  $(d).append(cont)
  