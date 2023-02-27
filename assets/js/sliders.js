$(document).ready(function(){
    
    $(".discription__slider").slick({
        slidesToShow: 1,    //сколько картинок в одном показе
        slidesToScroll: 1,    //Сколько картинок перелистывается за раз 
        centerPadding: '60px',   
        variableWidth: true,  
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        focusOnSelect: true,
    });
    $(".slider__img").slick({
        slidesToShow: 1,    //сколько картинок в одном показе
        slidesToScroll: 1,    //Сколько картинок перелистывается за раз 
        centerPadding: '60px',   
        infinite: true,
        dots: true,
        focusOnSelect: true,
        fade: true,
    });
    $(".slider__info").slick({
        dots: false,
        slidesToShow: 1,    //сколько картинок в одном показе
        slidesToScroll: 1,    //Сколько картинок перелистывается за раз 
        centerPadding: '60px',   
        infinite: true,
        autoplay: true,
        asNavFor: '.slider__img',
        focusOnSelect: true,
        dots: true,
        focusOnSelect: true,
        fade: true,
    });
});
