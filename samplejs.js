var imgNum = 0;
var imgList = ["photos/1.jpg", "photos/2.jpg","photos/3.jpg"];
var danceNum = 0
var danceList = ["Boba.png", "Boba2.png"]

function bigger(x) {
	x.style.height = "200px";
	x.style.width = "300px";
}

function normaly(x) {
	x.style.height = "250px";
	x.style.width = "250px";
}

function bolden(x) {
	x.style.opacity = "1";
}

function opacify(x) {
	x.style.opacity = ".5";
}

function nextPhoto() {
 if (imgNum == 2) {
 	imgNum = 0;
 }
 else {
 	imgNum++;
 }
 document.getElementById("gallery").src=imgList[imgNum];
}

//Displays previous photos
function prevPhoto() {
	if (imgNum == 0) {
 		imgNum = 2;
	 }
 	else {
 		imgNum--;
	 }
	 document.getElementById("gallery").src=imgList[imgNum];
}

//Makes a delay in between images
function startTimer() {
	window.setInterval("nextMove()", 500)
}

//shows next boba cup dance move
function nextMove() {
	var temp = danceNum;
 	if (danceNum == 1) {
 		danceNum = 0;
 		//alert("Here1");
	 }
 	else {
 		danceNum++;
	 }
	 //alert("Here2");
 	document.getElementById("dance1").src=danceList[danceNum];
 	document.getElementById("dancealt").src=danceList[temp];
 	document.getElementById("dance2").src=danceList[danceNum];
 	//startTimer()
}