//$(document).ready(function(){
//    $("img").mouseover(function(){
//        $(this).fadeTo(1000, 1);
//    });
//    $("img").mouseout(function(){
//        $(this).fadeTo(1000,.3);
//    });
//});

$(document).ready(function(){
    $("img").mouseover(function(){
        $(this).fadeTo(400, 1)
            .animate({height:200, width:200}, 400)
            .animate("margin-top","40px");
    });
    $("img").mouseout(function(){
        $(this).fadeTo(400, .3)
            .animate({height:100, width:100}, 400);
    });
});
