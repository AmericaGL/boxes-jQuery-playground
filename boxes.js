$(document).ready(function() {
	//1.Find the secretBox on the page. Set the background color to white. Add an h1 tag that says, "secret box!" 
	    console.log( "hello world" );
	    $("#secretBox").css("background","white").append("<h1>secretbox</h1>");
	//2.Find all child divs of the first row. Set the class for each div to boxType3.    
	    $("#row1 > div").addClass("boxType3");
	//3. Make the last box in the last row disappear. (Hint, look into the dispaly style.  Also, you should only get back one element from your selector.).    
	    $("#row4").find("div:last").removeClass("boxType1 box");
	//4. Change all red boxes to white.
		$(".boxType1").css("background", "white");
	//Get the first two divs in the second row. Take away all styling from the divs.
		$("#row2").find("div:first").removeClass().next().removeClass();
	//Get all divs inside the container that are not row divs and are not the secret box div. Set the width of the divs to 2 pixels.
		// $('.box').not('').css('width', '2px');
		//div:not(nth-child(2))
		// append("<h1>secretbox</h1>")

	//Add an on click handler to the container div. Console log the x and y position of the click.
	$('#container').click(function(e) {
	  console.log('('+e.pageX+','+e.pageY+')');
	  });


	//Add links inside all red box divs that take the user to galvanize. Then add an on click handler that alerts the user that you can never leave the page. 
	//Make sure the user won't leave the page after the alert! */
	$('.boxType1').append('<a href="http://www.galvanize.com">Galvanize</a>').css('position,relative');
	$('a').click(function(e) {
	    //preventDefault...terrible
	     e.preventDefault();
	     alert('You cannot leave the page!');
	});

	// //For all box divs, add a click handler that adds an image of a cute puppy to the box. 
	// //If the image is clicked again, remove the cute puppy. */
	// //am i missing a variable? or variables?
	//the question mark is a shortcut 
	//if (url == "")
    //load("1");
	//else
    //load(url);
	var currentPic;
	var newPic;
	$('.box').click(function(e) { 
	  // console.log("I've been clicked!");
	  console.log(e);
	  currentPic = $(this).css('background-image');	
	  $(this).css('background-image', currentPic === 'none' ? 'url(cute-puppy.jpeg)' : 'none');
	 });
	//Write a click handler on the conatainer div. 
	// The click handler should turn the container background 
	// to black and the background of the original div that was 
	// clicked to white. If the user original div that was clicked
	//  happened to be the container div, change the background of 
	//  he container div to lime green. You should not use any 
	//  selectors for this exercise. You can do it completely 
	//  with what is given to you in the event callback.
	$('#container').
});
