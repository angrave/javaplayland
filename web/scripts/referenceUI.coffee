window.InitFloat =  () ->
	backFade = document.createElement("div")
	refContainer = document.createElement("div")

	$(backFade).css({width:'100%',height:'100%',position:'absolute','z-index':'300','background-color':'#000000','opacity':'.5'})
	$(refContainer).css({width:'90%',height:'90%',left:'5%',top:'5%',position:'absolute','z-index':'301','background-color':'#FFFFFF'})

	$("body").prepend(backFade)
	$("body").prepend(refContainer)