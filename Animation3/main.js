/**
 * Created by KaseTebo on 10/14/14.
 */

$(function(){

   var dropDown = (".dropdown");
   var subMenu = (".subMenu");



    $(dropDown).on("click", function(){
       console.log();

    });

    $("#scroll").scroll(function(){
        $(this).append("<h2>You Have Scrolled</h2>");
    })

    $("#CTA").mouseover(function(){
        $(this).css({"background": "pink",
                     "color": "white"})
    }).mouseout(function(){
              $(this).css({"background": "purple",
                           "color": "black"})

        })

    $("#photo").on("click", function(){
        $("#elephant").slideToggle()
    });
});