/**
 * Created by KaseTebo on 10/7/14.
 */

$(function(){

    $("#wrapper").prepend("<div id='welcome'><h2 >Welcome To Our Page!</h2></div>")
        $("#welcome").css({"text-align": "center",
                          "padding": "10px 0",
                          "margin": "0 auto"});
        $("#welcome h2").addClass("headers");

        $("#bodyContent").width("600px")
            .height("200px")
            .css({
                "float": "left"
            })
            .addClass("oj");

        $("aside").width("300px")
            .height("200px")
             .css({
                "float": "right"

             })
             .addClass("oj")
});