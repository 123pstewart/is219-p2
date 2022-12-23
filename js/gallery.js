// requestAnim shim layer by Paul Irish
    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              window.mozRequestAnimationFrame    || 
              window.oRequestAnimationFrame      || 
              window.msRequestAnimationFrame     || 
              function(/* function */ callback, /* DOMElement */ element){
                window.setTimeout(callback, 1000 / 60);
              };
    })();
  

// example code from mr doob : http://mrdoob.com/lab/javascript/requestanimationframe/

animate();

var mLastFrameTime = 0;
var mWaitTime = 5000; //time in ms
function animate() {
    requestAnimFrame( animate );
	var currentTime = new Date().getTime();
	if (mLastFrameTime === 0) {
		mLastFrameTime = currentTime;
	}

	if ((currentTime - mLastFrameTime) > mWaitTime) {
		swapPhoto();
		mLastFrameTime = currentTime;
	}
}

/************* DO NOT TOUCH CODE ABOVE THIS LINE ***************/

function swapPhoto() {
	{
		document.slide3.src = mImages[0];
		if(k < path3.length - 1){ k++;} else {k = 0;}
		setTimeout("swapPhoto()",2000);
	 }
	console.log('swap photo');
}

var mImages = []
mImages[0]= "http://placehold.it/518x389?text=index+0";
mImages[1]= "http://placehold.it/518x389?text=index+1";
mImages[2]= "http://placehold.it/518x389?text=index+2";

// Counter for the mImages array
var mCurrentIndex = 0;
// Create an empty object
const output = {};

// Iterate over the objects in the array
// I've destructured the name and amount from
// the object (documentation below)
for (const { date, description } of mImages) {

  // If the output object doesn't have a property
  // key that matches the current object's name
  // create it by assigning it zero
  output[] ??= 0;

  // Then increase its amount
  output[] += amount;
}

console.log(output);

// XMLHttpRequest variable
var mRequest = new XMLHttpRequest();

mRequest.onreadystatechange= function() {
	  if (this.readyState == 4 && this.status == 200) {
	   mJson= JSON.parse(mRequest.responseText)
	  }
	};
	mRequest.open("GET", mUrl, true);
	mRequest.send();


// Array holding GalleryImage objects (see below).
var mImages = [];

// Holds the retrived JSON information
var mJson;

// URL for the JSON to load by default
// Some options for you are: images.json, images.short.json; you will need to create your own extra.json later
var mUrl = '../images.json';


//You can optionally use the following function as your event callback for loading the source of Images from your json data (for HTMLImageObject).
//@param A GalleryImage object. Use this method for an event handler for loading a gallery Image object (optional).
function makeGalleryImageOnloadCallback(galleryImage) {
	return function(e) {
		galleryImage.img = e.target;
		mImages.push(galleryImage);
	}
}

$(document).ready( function() {
	
	// This initially hides the photos' metadata information
	$('.details').eq(0).hide();
	
});

window.addEventListener('load', function() {
	
	console.log('window loaded');

}, false);

function GalleryImage() {
	this.location ="";
	this.description = "red";
	this.date = "";
	this.img= "";
	//implement me as an object to hold the following data about an image:
	//1. location where photo was taken
	//2. description of photo
	//3. the date when the photo was taken
	//4. either a String (src URL) or an an HTMLImageObject (bitmap of the photo. https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement)
}