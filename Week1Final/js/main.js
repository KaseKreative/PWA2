/**
 * Created by KaseTebo on 6/6/14.
 */

    $('#login a').click(function() {
//        alert("Sign In Please");
        $('#loginModal')
            .css("display", "block")
            .animate({opacity:"1"});
        $('#ModalBackground')
            .css("display", "block")
            .animate({opacity:"1"});
    });

    $('#loginModalButton').click(function(){
       $('#loginModal')
           .css("display", "none");
        $('#ModalBackground')
            .css("display", "none");
    });


    $("#LoginX").click(function(){
        $('#loginModal')
            .css("display", "none");
        $('#ModalBackground')
            .css("display", "none");
    });

//$('+').click(function(){
//    $("#consoleDiv").clone().append("#consoleDiv");
//
//});