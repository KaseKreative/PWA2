/**
 * Created by KaseTebo on 10/7/14.
 */

$(function(){

    $("#wrapper").prepend("<div id='welcome'><h2 >Welcome To Our Page!</h2></div>")
        $("#welcome").css({"text-align": "center",
                          "padding": "10px 0",
                          "margin": "0 auto"});
        $("#welcome h2").addClass("headers");

        $("#bodyContent").width("560px")
            .height("200px")
            .css({
                "float": "left"
            })
            .addClass("oj");

        $("aside").width("260px")
            .height("200px")
             .css({
                "float": "right"

             })
             .addClass("oj");

        $("#thirds li:odd").hover(function(){
            $(this).toggleClass("oddLi");
        });
        $("#thirds li:even").hover(function(){
            $(this).toggleClass("evenLi");
        });

        $("#thirds li").on("click", function(){
            var number = $(this).attr("title");

            if (number == 1) {
                $("#mainBody > div").text("These are the Uruk Captains");
            } else if(number == 2){
                $("#mainBody > div").text("This is the playable Ranger");
            } else {
                $("#mainBody > div").text("These are the Uruk Warchiefs")
            }

        });
            $("<h2>Characters</h2>").insertBefore("#thirds")
                    .addClass("characters");
        });