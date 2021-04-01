var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

window.addEventListener("load", function(){
	video = document.querySelector("#player1")
	volume = document.querySelector("#volume")
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	volume.innerHTML="100%"
 	video.play()
	document.querySelector("#volume").innerHTML=video.volume *100 +"%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
 	video.pause()
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate/.95;
	console.log("New speed is "+video.playbackRate );
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *=.95;
	console.log("New speed is "+video.playbackRate );
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Video for 15 seconds");
	video.currentTime += 15;
	if (video.currentTime >= video.duration){
		video.currentTime = 0;
		video.play();
	}
	console.log(video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("mute video");
	if(video.muted==true){
		video.muted=false;
		this.innerHTML = "Mute"
	}
	else{
		video.muted=true;
		this.innerHTML = "Unmute"
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log("Changing volume" )
	console.log(this.value)
	video.volume = this.value / 100
	document.querySelector("#volume").innerHTML=video.volume *100 +"%"
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Changing CSS")
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Removing CSS")
 	video.classList.remove("oldSchool")
});
