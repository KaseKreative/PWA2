/**
 * Created by KaseTebo on 6/6/14.
 */
    var counter = 0;
(function($) {

    var plus = document.getElementById("add");
    var listSelection = document.getElementById("console");
    var append = document.getElementById("append");
    var save = document.querySelector("#save");
    var fullName = document.querySelector("#name");

    var titleSelector = document.querySelector("#dashTitle");



//    console.log($(fullName).val().length);

    //    Form Requirements


    $(document).ready(function(){

        $(save).on().mousedown(function(){

           var name = $(fullName).val();
            console.log(name);
//           if ($(fullName).val().change((function(){
                if ($(fullName).val().length > 0){
                    $(titleSelector).replaceWith("<h1 id='GuestName'>Welcome, " + name+"</h1>")
                            .css(["display"], ["block"]);

                }
            return false;
 })});

    $(plus).click(function () {
        counter += 1;
        if (counter < 4) {
            $(listSelection).clone()
                .appendTo(append);
        }
    });


    $("#login a").click(function () {
        $('#loginModal')
            .css("display", "block")
            .animate({opacity: "1"});
        $('#ModalBackground')
            .css("display", "block")
            .animate({opacity: "1"});
    });


    $('#loginModalButton').click(function () {
        $('#loginModal')
            .css("display", "none");
        $('#ModalBackground')
            .css("display", "none");
    });


    $("#LoginX").click(function () {
        $('#loginModal')
            .css("display", "none");
        $('#ModalBackground')
            .css("display", "none");
    });




    $("#tabs").change(function(){
        var activeTab = $(".modTab:checked").val();

        console.log(activeTab);

        if(activeTab == 1){
            $(".modularContent").css("display", "none");
            $(".modularContent[value='1']").css("display", "block");
        } else if (activeTab == 2){
            $(".modularContent").css("display", "none");
            $(".modularContent[value='2']").css("display", "block");
        } else if (activeTab == 3){
            $(".modularContent").css("display", "none");
            $(".modularContent[value='3']").css("display", "block");
        }

    });





//    console.log($(fullName).val());
//    console.log($(fullName).val().length);

})(jQuery);
