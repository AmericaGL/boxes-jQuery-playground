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
// append("<h1>secretbox</h1>")
});

