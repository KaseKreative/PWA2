/**
 * Created by KaseTebo on 10/9/14.
 */

$(function(){

   $("#login p").on("click", function(){
       $("#login-form").slideToggle(300);
       $(this).toggleClass("close");
   })

});