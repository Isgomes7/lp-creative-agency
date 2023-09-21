jQuery(document).ready(function($){
    $('.item-faq').click(function() {
        $(this).toggleClass('open');
        $(this).next().toggleClass('open');
    });
    $('.menu').click(function(){
        $(this).prev().addClass('active');
        $('.overlay').addClass('active');
    });
    $('.close').click(function(){
        $(this).parent().removeClass('active');
        $('.overlay').removeClass('active');
    });
});