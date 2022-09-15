// scroll head

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})

window.addEventListener("scroll", function(){
    var totop = document.querySelector(".btn__scroll__top");
    totop.classList.toggle("btn__scroll__top__active", window.scrollY > 0)
})

$('#btn__scroll__top').click(function() {
    $('body,html').animate({
        scrollTop : 0
    }, 500);
});


// burger

let burger = document.querySelector('.header__burger');
let header__nav = document.querySelector('.header__nav');

burger.onclick = function(){
    burger.classList.toggle('active__burger');
    header__nav.classList.toggle('nav__active');
}

header__list.onclick = function () {
    header__list.classList.remove('active');
}