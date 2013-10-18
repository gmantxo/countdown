var changeColors = function() {
	$('body').css('backgroundColor','#'+Math.floor(Math.random()*16777215).toString(16));
	$('body').css('color','#'+Math.floor(Math.random()*16777215).toString(16));
}
setInterval(changeColors, 5001);
changeColors();