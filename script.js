// Video player
var video;
window.onload = function() {
	video = document.getElementById("videoPlayer");
};
function play() {
    video.play();
		document.getElementById("play").style.display = "none";
		document.getElementById("vidbrwn").style.display = "none";
		document.getElementById("pause").style.display = "flex";
}
function stop() {
    video.pause();
    video.currentTime = 0;
}
function smotra() {
		document.getElementById("vidbrwn").style.display = "flex";
		video.pause();
		document.getElementById("pause").style.display = "none";
		document.getElementById("play").style.display = "flex";
}
//search
function ShowHideContent(spoiler, search) {
	if (spoiler.style.display === 'none') {
			spoiler.style.display = "block";
			search.style.marginRight = '5px';
	} else {
		spoiler.style.display = "none";
		search.style.marginRight = '105px';
	}
}
// Spoiler cat and arrow
function newshowhide (arrow,text) {
	if (text.style.display === 'none') {
	text.style.display = "block";
	arrow.style.transform = "rotate(45deg)";
 } else {
	 text.style.display = "none";
 	arrow.style.transform = "rotate(0deg)";
 }
}
// zoom
function zoom(spoiler) {
		spoiler.style.transform = "scale(1.2)";
		spoiler.style.position = "relative";
		spoiler.style.zIndex = "1";
}
function zoomoff(spoiler) {
	spoiler.style.transform = "";
	spoiler.style.position = "";
	spoiler.style.zIndex = "";
}
