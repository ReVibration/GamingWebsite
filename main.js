// This checks whether the page has loaded and then add the general dom listener
// once that will be load ready the shop 
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}


// This runs javascript for the site
function ready (){
/*This runs whenever the page is refreashed. This makes it
so that a random image apears*/
window.onload = start;

function start (){
    choosePic();
    SelectAd();
}

//BACKGROUND COLOR CHANGER
const backgroundSelect = document.getElementById("backgroundChange"); // This selects the select function in the html
backgroundSelect.addEventListener("change", function(event){
    window.alert("heelo"); // This adds a event listener to change
    const selectedValue = event.target.value; // This gets the value of the selected option
    const background = document.querySelector("body"); // This selects the body of the dom
    background.style.backgroundColor = selectedValue; // This changes the background colour depandent on the selected value 
});

//FONT SIZE CHANGER
const fontSelect = document.getElementById("fontChange"); // This selects the select function in the html
fontSelect.addEventListener("change", function(event){ // This adds a event listener to change
    const selectedValue = event.target.value; // This gets the value of the selected option
    const background = document.querySelector("body"); // This selects the body of the dom
    background.style.fontSize = selectedValue; // This changes the background colour depandent on the selected value 
});

//VIDEO PLAYER
//This section declares the different dom elements to actual variables
const video = document.querySelector('.video');
const completion = document.querySelector('.orange-completion');
const btnPlayPause = document.getElementById('play-pause');
const btnStop = document.getElementById('stop');
const completionBar = document.querySelector('.orange-bar');

//This is the function that will stop the video and make it go back to the start
function stop(){
    video.pause();
    video.currentTime = 0;
    btnPlayPause.className = 'play';
}

//This function is mainly to control the style of the media controls however it also plays and pauses the video
function togglePlayPause() {
    if(video.paused){
        btnPlayPause.className = 'pause';
        video.play();
    }
    else{
        btnPlayPause.className = 'play';
        video.pause();
    }
}


// This is the control of the stop button
btnStop.onclick = function(){
    stop();
}

//This is the control of the play and pause button
btnPlayPause.onclick = function() {
    togglePlayPause();
}

//This is the section when the completion bar gets updated when time changes 
video.addEventListener('timeupdate', function(){
    const completionPos = video.currentTime / video.duration;
    completion.style.width = completionPos * 100 + "%";

    //This section resets the video once it has finshed 
    if(video.ended){
        btnPlayPause.className = "play";
    }
});

//This will allow the user to click on the progress bar to skip 
completionBar.addEventListener('click', function(e){
    var pos = e.offsetX / this.offsetWidth;
    video.currentTime = pos * video.duration;
})

//GAME GALLERIES

/*These are all of the image libraries for each game*/
const noMansSkyGallery = new Array("./Images/No Man's Sky Resources/beech.jpg","./Images/No Man's Sky Resources/Dinosaur.jpg","./Images/No Man's Sky Resources/Frieghter.jpg","./Images/No Man's Sky Resources/takeoff.jpg");
const minecraftGallery = new Array("./Images/Minecraft Resources/build anything.jpg","./Images/Minecraft Resources/fend off mobs.jpg","./Images/Minecraft Resources/sea.jpg","./Images/Minecraft Resources/village.jpg");
const overwatchGallery = new Array("./Images/Overwatch Resources/Diva.jpg","./Images/Overwatch Resources/Junkrat and Roadhog.jpg","./Images/Overwatch Resources/Kings Row.jpg","./Images/Overwatch Resources/Pharah Mercy.jpg");
const watchDogsLegionGallery = new Array("./Images/Watch Dogs Legion Resources/fightclub.jpg","./Images/Watch Dogs Legion Resources/james bond.jpg","./Images/Watch Dogs Legion Resources/Spray Paint.jpg","./Images/Watch Dogs Legion Resources/Workman.jpg"); 
const forzaHorizon4Gallery = new Array("./Images/Forza Horizon 4 Resources/City.jpg","./Images/Forza Horizon 4 Resources/dashboard.jpg","./Images/Forza Horizon 4 Resources/off-road.jpg","./Images/Forza Horizon 4 Resources/snowy.jpg");
const groundedGallery = new Array("./Images/Grounded Resources/building.jpg","./Images/Grounded Resources/orange tree.jpg","./Images/Grounded Resources/roots.jpg","./Images/Grounded Resources/spider.jpg");

/*This gets each gallery element for each game */
let NoMansSkyGalleryElement = document.getElementById("NoMansSkyGallery");
let MinecraftGalleryElement = document.getElementById("MinecraftGallery");
let OverwatchGalleryElement = document.getElementById("OverwatchGallery");
let WatchDogsLegionGalleryElement = document.getElementById("WatchDogsLegionGallery");
let ForzaHorizon4GalleryElement = document.getElementById("ForzaHorizon4Gallery");
let GroundedGalleryElement = document.getElementById("GroundedGallery");

/*This section adds an event listener to each gallery which changes
the image and they enlargers it which is togglable*/
if(NoMansSkyGalleryElement){
NoMansSkyGalleryElement.addEventListener('click', function(){
    choosePic();
    toggleEnlargement(NoMansSkyGalleryElement);
});
}

else if(MinecraftGalleryElement){
MinecraftGalleryElement.addEventListener('click', function(){
    choosePic();
    toggleEnlargement(MinecraftGalleryElement);
});
}

else if(OverwatchGalleryElement){
OverwatchGalleryElement.addEventListener('click', function(){
    choosePic();
    toggleEnlargement(OverwatchGalleryElement);
});
}

else if(WatchDogsLegionGalleryElement){
WatchDogsLegionGalleryElement.addEventListener('click', function(){
    choosePic();
    toggleEnlargement(WatchDogsLegionGalleryElement);
});
}

else if(ForzaHorizon4GalleryElement){
ForzaHorizon4GalleryElement.addEventListener('click', function(){
    choosePic();
    toggleEnlargement(ForzaHorizon4GalleryElement);
});
}

else if(GroundedGalleryElement){
GroundedGalleryElement.addEventListener('click', function(){
    choosePic();
    toggleEnlargement(GroundedGalleryElement);
});
};

/*This chooses the image for each gallery element randomly*/
function choosePic (){
    let randomNum = Math.floor(Math.random() * 4);
    if(NoMansSkyGalleryElement)
    NoMansSkyGalleryElement.src = noMansSkyGallery[randomNum];
    else if (MinecraftGalleryElement)
    MinecraftGalleryElement.src = minecraftGallery[randomNum];
    else if (OverwatchGalleryElement)
    OverwatchGalleryElement.src = overwatchGallery[randomNum];
    else if (WatchDogsLegionGalleryElement)
    WatchDogsLegionGalleryElement.src = watchDogsLegionGallery[randomNum];
    else if (ForzaHorizon4GalleryElement)
    ForzaHorizon4GalleryElement.src = forzaHorizon4Gallery[randomNum];
    else if (GroundedGalleryElement)
    GroundedGalleryElement.src = groundedGallery[randomNum];
} 

/*This section enlarges the image if the scale is 1
however if it isn't 1 it will take it back to 1*/
function toggleEnlargement (galleryElement){
    if(galleryElement.style.transform == "scale(1)"){
        galleryElement.style.transform = "scale(2)";
        galleryElement.style.transition = "transform 0.25s ease";
    }
    else{
        galleryElement.style.transform = "scale(1)";
        galleryElement.style.transition = "transform 0.25s ease";
    }
}

//ADVERTISMENT

//This section sets up the image gallery for the adverts to
//use when displaying to the screen
const advertArrayImg = new Array (
    "./Images/405165-overwatch-game-of-the-year-edition-playstation-4-front-cover.jpg",
    "./Images/518449-forza-horizon-4-windows-apps-front-cover.jpg",
    "./Images/Grounded Cover Art.jpg",
    "./Images/Minecraft Cover Art.jpg",
    "./Images/No Man's Sky Cover Art.jpg",
    "./Images/Watch Dogs Legion Cover Art.jpg"
);

//This is the links array which has the same
//index as the image gallery for the ads
const advertArrayLnk = new Array (
    "OverwatchGame.html",
    "ForzaHorizon4Game.html",
    "GroundedGame.html",
    "MinecraftGame.html",
    "NoMansSkyGame.html",
    "WatchDogsLegionGame.html"
);

//This gets the image and the link section from
// the advertisement section
const advertImage = document.getElementById('advertImage');
const advertLink = document.getElementById('advertLink');

//This functions is ran on the load of the website
//This sets the link and the image for the ad
function SelectAd() {
    const randomNumAd = Math.floor(Math.random() * advertArrayImg.length);
    advertImage.src = advertArrayImg[randomNumAd];
    advertLink.href = advertArrayLnk[randomNumAd];

};

//This section get the animated canvas
const animatedCanvas = document.querySelector("#animatedCanvas");
const animatedRenderingContext = animatedCanvas.getContext("2d");

//These are the declarations of the x position and the starting direction
let xPos = 0;
let direction = "left";

// This is the draw function what makes the animation 
function draw() {

  //This clears the area after every frame
  animatedRenderingContext.clearRect(0, 0, animatedCanvas.width, animatedCanvas.height);

  //This picks the style and the colour.
  animatedRenderingContext.fillStyle = "orange";

  //Then it creates the rectangle
  animatedRenderingContext.fillRect(xPos, 0, 50, 50);

  // This changes the direction when it hits the border 
  if (xPos === animatedCanvas.width) {
    direction = "left";
  }

  if (xPos === -50) {
    direction = "right";
  }

  if (direction === "right") {
    xPos += 1;
  }

  if (direction === "left") {
    xPos -= 1;
  }

  // Then request the animation frame and use the drawing 
  requestAnimationFrame(draw);
}

//Then draw the first frame
draw();

};
