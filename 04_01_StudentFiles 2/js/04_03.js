$(document).ready(function(){
//$("div div").hide();
//    $("span").mouseover(function(){
//       var i = $(this).index("span");
//        $("img").eq(i).animate({height:100}, 1000);
//    });
//        $("span").mouseout(function(){
//            var i = $(this).index("span");
//            $("img").eq(i).animate({height:.1}, 1000);
//        });
//        $("#container").mouseenter(function(e){
//            e.stopPropagation();
//            $("#images").stop(true).slideToggle(1000);
//        });
//        $("#container").mouseleave(function(e){
//            e.stopPropagation();
//            $("#images").stop(true).slideToggle(1000);
//        });
//
//});


//$('div div').hide();
//$("span").on({
//    mouseover: function(){
//        var i = $(this).index("span");
//        $("img").eq(i).animate({height:100}, 1000);
//    },
//    mouseout: function(){
//        var i = $(this).index('span');
//        $("img").eq(i).animate({height:.1}, 1000);
//    }
//});
//$('#container').on({
//    mouseenter: function(e){
//        e.stopPropagation();
//        $("#images").stop(true).slideToggle(1000);
//    },
//
//    mouseleave: function(e){
//        e.stopPropagation();
//        $("#images").stop(true).slideToggle(1000);
//    }
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
});