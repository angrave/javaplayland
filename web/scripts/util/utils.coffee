#This file contains miscalleneous utility files.

#Synchronously loads the config file
findConfig=(loc)->
  cssData=null
  $.ajax
    url: loc,
    dataType: 'json',
    async: false,
    success: (data)->
      cssData=data
    error:(jqXHR,st,err)->
      console.log("Error loading:"+err)
  return cssData

#Synchronously loads text file
getTextFile=(loc)->
  textData=null
  $.ajax
    url: loc,
    dataType: 'text',
    async: false,
    success: (data)->
      textData=data
    error:(jqXHR,st,err)->
      console.log("Error loading:"+err)
  return textData

#Play audio
playAudio = (name) ->
  sound = document.createElement("video")
  $(sound).attr({"src":"audio/"+name,"autoplay":"true"})
  return



window.playAudio=playAudio
window.findConfig=findConfig
window.getTextFile=getTextFile