/**
 * Created by KaseTebo on 6/12/14.
 */

//(function($){
//    var allPanels = $('.accordion > dd').hide();
//
//    $('.accordion > dt > a').click(function(){
//       allPanels.slideUp();
//        $(this).parent().next().slideDown();
//        return false;
//    });
//
//})(jQuery);

//$('.masterTooltip').hover(function(){
//
//    var title = $(this).attr('title');
//    $(this).data('tipText', title).removeAttr('title');
//    $('<p class="tooltip"></p>')
//        .text(title)
//        .appendTo('body')
//        .fadeIn('slow');
//
//}, function(){
//       $(this).attr('title', $(this).data('tipText'));
//       $('.tooltip').remove();
//}).mousemove( function(e){
//        var mousex = e.pageX + 20;
//        var mousey = e.pageY + 10;
//        $('.tooltip')
//            .css({top: mousey, left: mousex})
//    });

(function($){

$('.projectsbtn').on('click', function(e){
    e.preventDefault();
    window.location.assign("projects.html");
});

$('#tabs').hide().eq(0).show();
$('#tabs p:not(:first)').hide();

$('#tabs-nav li').click(function(e){
    e.preventDefault();
    $('#tabs p').hide();

    $('#tabs-nav .current').removeClass("current");
        $(this).addClass('current');
    var clicked = $(this).find('a:first').attr('href');

    $('#tabs' + clicked).fadeIn('fast');
}).eq(0).addClass('current');

});