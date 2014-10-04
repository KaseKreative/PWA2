/**
 * Created by KaseTebo on 8/12/14.
 */

(function($){


//    Modal

    $("#signUpButton").on("click", function(){
       $("#modalBackground").removeClass("hidden");
       $("#signUpModal").removeClass("hidden")
                        .fadeTo(800, 1);
    });

    $("#modalButton").on("click",function(){
        $("#modalBackground").addClass("hidden");
        $("#signUpModal").addClass("hidden")

    });



//    Tool Tips

    $("input").focus(function(){
        var title= $(this).attr("title");

     $("#tooltip").removeClass("hidden")
                  .html(title);
    });

    $("input").focusout(function(){
        $("#tooltip").addClass("hidden");
    })

})(jQuery);