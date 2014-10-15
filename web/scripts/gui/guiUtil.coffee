makeDiv=(at="none",cData="none")->
  nDiv=$('<div></div>')
  if(at !="none")
    nDiv.attr(at)
  if(cData!="none")
    nDiv.css(cData)
  return nDiv



makeImgElem=(attrData,cssData)->


  nImg=$('<img></img>')
  if(cssData!="none")
    nImg.css(cssData)
  if(attrData!="none")
    nImg.attr(attrData)


  return nImg



window.makeImgElem=makeImgElem
window.makeDiv=makeDiv
