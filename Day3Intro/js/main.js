/**
 * Created by KaseTebo on 8/11/14.
 */

(function($){

//
//$("ul.topnav > li").css({"border": "3px double red",
//                         "border-radius": "20px",
//                         "padding": "10px"});

//----------------------------------------------------

//$("label + input").css({"color":"blue"})
//                  .val("Labeled!");

//----------------------------------------------------


//$("#myDiv").css({"border": "3px solid red"});


//----------------------------------------------------


//$("div").css({"border":"9px solid red"});



//----------------------------------------------------


//$("td:eq(2)").css({"color":"red"});



//----------------------------------------------------


//$("td:lt(4)").css({"backgroundColor": "yellow"});
//$("td:lt(-2)").css({"color": "red"});


//----------------------------------------------------



//$("td:parent").fadeTo(1500, 0.3);



//----------------------------------------------------


//$("td:empty")
//    .text("Was empty!")
//    .css({"background": "rgb(255,220,200)"});


//----------------------------------------------------


//var hiddenElements = $("body").find(":hidden").not("script");
//$("span:first").text("Found " + hiddenElements.length + " hidden elements total.");
//$( "div:hidden" ).show(3000);
//$( "span:last" ).text("Found " + $( "input:hidden" ).length + " hidden inputs.");



//----------------------------------------------------


//$( "div:visible" ).click(function() {
//    $( this ).css( "background", "yellow" );
//});
//$( "button" ).click(function() {
//    $( "div:hidden" ).show( "fast" );
//});




//----------------------------------------------------

//$("input[name*='man']").val("has man in it!");


//----------------------------------------------------

//$("input[name$='letter']").val("a letter");


//----------------------------------------------------


//$("button:only-of-type").text("Alone")
//                        .css({"border": "2px blue solid"});


//----------------------------------------------------

//$("ul li:nth-child(2)").append("<span> - 2nd!</span>");


//----------------------------------------------------

//$("input:enabled").val("this is it");

//----------------------------------------------------

//var countChecked = function() {
//    var n = $("input:checked").length;
//    $("div").text( n + (n === 1 ? " is" : " are") + " checked!" );
//};
//countChecked();
//$("input[type=checkbox]").on("click", countChecked);


//----------------------------------------------------

$("p").click(function() {
    var htmlString = $(this).html();
    $(this).text(htmlString);
});


//----------------------------------------------------




//----------------------------------------------------



//----------------------------------------------------




//----------------------------------------------------



$("input[type='checkbox']").on("click", function(){
    if($(this) == ":checked"){
            $("input[type='checkbox']").append("<p>Blah!</p>");
    } else {

    }

});



})(jQuery);