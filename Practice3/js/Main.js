/**
 * Created by KaseTebo on 6/5/14.
 */
//$(document).ready(function(){
//$("#terms").on("click", function(){
//    console.log("clicked");
//    if ($("#terms").prop("checked") == true){
//        $("#pDiv").fadeIn(200);
//    } else if ($("#terms").prop("checked") == false) {
//        $("#pDiv").fadeOut(200);
//        console.log("else")
//    }
//})
//});


$(document).ready(function(){

    $('tr:even ').mouseover(function(){
        $(this).addClass("even");
    });

    $('tr:even').mouseleave(function(){
        $(this).removeClass("even");
    });

    $('tr:odd').mouseover(function(){
        $(this).addClass("odd");
    });

    $('tr:odd ').mouseleave(function(){
        $(this).removeClass("odd");
    });
});