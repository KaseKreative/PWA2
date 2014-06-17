/**
 * Created by KaseTebo on 6/17/14.
 */



$("button").click(function(){
    $.getJson("Database.json", function(obj){
        $.each(obj, function(key, value){
            $("ul").append("<li>" + value.course + "</li>");
        });
    });
});