/**
 * Created by KaseTebo on 6/5/14.
 */
$("#paragraph").click(function(){
    $("#paragraph").hide();
});

$(document).ready(function(){
    $("#message").fadeIn(6000).css("color", "red");
});

$(document).ready(function(){
//    alert("Document Is Ready");
});

$(window).load(function(){
//    alert("Loaded");
});

$("input[type='button']").click(function(){
    $("input[id='clickme']")
        .css("background", "purple")
        .css("border-radius", "20px")
        .css("border", "4px solid black")
        .css("color", "white")
//        .fadeOut(5000)
        .val("Loser!");
//        .fadeIn(6000);
});

$(document).ready(function(){
    $("form")
        .append('<label for="blah">Username: </label>')
        .append('<input type="text" id="blah">');
});

$("td").mouseover(function(){

   $("td").css("background", "blue");
});