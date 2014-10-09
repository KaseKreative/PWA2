
//When you click on an id the scrollbar scrolls to the next id
$("li a").click(function(e){
	event.preventDefault();
	
	var id = $(this).attr("href");
	//offset gets the current coordinates of the first element, or set the coordinates of every element, 
	//in the set of matched elements, relative to the document.
	var divPosition = $(id).offset().top;
	
	
	//animate performs a custom animation of a set of CSS properties.
	$("html, body").animate({scrollTop: divPosition});
});