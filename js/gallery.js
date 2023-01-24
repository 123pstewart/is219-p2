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
	if(mCurrentIndex >= mImages.length)
	{
		mCurrentIndex = 0;
	}
	if(mCurrentIndex < 0)
	{
		mCurrentIndex = mImages.length-1;
	}
	
		document.getElementById('photo').src = mImages[mCurrentIndex].img;
		var loc = document.getElementsByClassName('location');
		loc[0].innerHTML = "Location: " + mImages[mCurrentIndex].location;
		var des = document.getElementsByClassName('description');
		des[0].innerHTML = "Description: " + mImages[mCurrentIndex].description;
		var dt = document.getElementsByClassName('date');
		dt[0].innerHTML = "Date: " + mImages[mCurrentIndex].date;

		mLastFrameTime = 0;
		mCurrentIndex += 1;
}

function toggleDetails()
	{
		if($(".moreIndicator").hasClass("rot90"))
		{
			$( ".moreIndicator" ).removeClass("rot90");
			$(".moreIndicator").addClass("rot270");
		}
		else {
			$( ".moreIndicator" ).removeClass("rot270");
			$(".moreIndicator").addClass("rot90");
		}
		$( ".details").slideToggle( "slow", "linear");
	}


var mImages = [];
// mImages[0]= "http://placehold.it/518x389?text=index+0";
// mImages[1]= "http://placehold.it/518x389?text=index+1";
// mImages[2]= "http://placehold.it/518x389?text=index+2";

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
 // output[] ??= 0;

  // Then increase its amount
  //output[] += amount;
}

console.log(output);

// // XMLHttpRequest variable
// var mRequest = new XMLHttpRequest();



var mCurrentIndex = 0;
// Array holding GalleryImage objects (see below).
var mRequest = new XMLHttpRequest();

// Holds the retrived JSON information
var mJson;

var mUrl;
// URL for the JSON to load by default
// Some options for you are: images.json, images.short.json; you will need to create your own extra.json later
function fetchJSON()
{
	mRequest.onreadystatechange= function() {
		if (this.readyState == 4 && this.status == 200) {
		 mJson= JSON.parse(mRequest.responseText)
		}
	  };
	  mRequest.open("GET", mUrl, true);
	  mRequest.send();
}

//You can optionally use the following function as your event callback for loading the source of Images from your json data (for HTMLImageObject).
//@param A GalleryImage object. Use this method for an event handler for loading a gallery Image object (optional).
function makeGalleryImageOnloadCallback(galleryImage) {
	return function(e) {
		galleryImage.img = e.target;
		mImages.push(galleryImage);
	}
}


function iterateJSON(mJson)
{
	for( x = 0; x < mJson.images.length; x++)
	{
		mImages[x] = new GalleryImage();
		mImages[x].location = mJson.images[x].imgLocation;
		mImages[x].description = mJson.images[x].description;
		mImages[x].date = mJson.images[x].date;
		mImages[x].img = mJson.images[x].imgPath;
	}
}
$(document).ready( function() {
	$('#nextPhoto').position({
		my: "right bottom",
		at: "right bottom",
		of: "#nav",
	});
	
});


  const urlParams = new URLSearchParams(window.location.search);

  for (const [key, value] of urlParams) {
	console.log(`${key}:${value}`);
	mUrl = value;
  }
  if(mUrl == undefined)
(
	mUrl = 'images.json'
)
fetchJSON();

window.addEventListener('load', function() {
	
	console.log('window loaded');

}, false);

function GalleryImage() {
	var location;
	var description;
	var date;
	var img;
	//implement me as an object to hold the following data about an image:
	//1. location where photo was taken
	//2. description of photo
	//3. the date when the photo was taken
	//4. either a String (src URL) or an an HTMLImageObject (bitmap of the photo. https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement)
}