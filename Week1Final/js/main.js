/**
 * Created by KaseTebo on 6/6/14.
 */
var counter = 0;
var plus = document.getElementById("add");
var listSelection = document.getElementById("console");
var append = document.getElementById("append");
var save = document.querySelector("#save");
var fullName = document.querySelector("#name");
var usersName = document.querySelector("#UserTitle");
var Name = fullName.value;

(function(){

$(document).ready(function() {

console.log(Name);




    $(plus).click(function(){
        counter += 1;
        if( counter < 4){
        $(listSelection).clone()
            .appendTo(append);
        }
    });
});



    //    Form Requirements
        $(save).click(function(){
        if ($(Name).value().length > 0) {
            alert(boo);
            $("#save").prop("disabled", false);
            $('#dashTitle').css("display", "block")
                .animate({opacity: "1"});
           $("#name").innerHTML = ('<span>'+Name+'</span>');

        } else {
            $("#save").prop("disabled", true);
        }
    });


    $("#login a").click(function() {
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

})();

