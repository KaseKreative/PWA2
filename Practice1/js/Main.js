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
    alert("Document Is Ready");
});

$(window).load(function(){
    alert("Loaded");
});