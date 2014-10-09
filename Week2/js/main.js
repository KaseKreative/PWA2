/**
 * Created by KaseTebo on 10/7/14.
 */

$(function(){

    $("body").find("label").addClass("labels");

    $(".MasterTooltip").hover(function(){

        var title = $(this).attr('title');
        $(this).data('tipText', title).removeAttr('title');
        $('<p class="tooltip"></p>')
            .text(title)
            .appendTo('body')
            .fadeIn('slow');


    }, function(){
        $(this).attr('title', $(this).data('tipText'));
        $('.tooltip').remove();

    }).mousemove(function(e){
            var mousex = e.pageX + 20;
            var mousey = e.pageY + 10;
            $('.tooltip')
                .css({top: mousey, left: mousex })
        });

    $('#tabs div').hide().eq(0).show();
    $('#tabs div:not(:first)').hide();

    $('#tabs-nav li').click(function(e){
        e.preventDefault();
        $('#tabs div').hide();

     $('#tabs-nav .current').removeClass("current");
        $(this).addClass('current');
        var clicked = $(this).find('a:first').attr('href');

        $('tabs ' + clicked).fadeIn('fast');

    }).eq(0).addClass('current');

});