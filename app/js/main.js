// import jump from 'jump.js'

// jump('#about', {
//     duration: 1000,
//     offset: 0,
//     callback: undefined,
//     easing: easeInOutQuad,
//     a11y: false
//   })

const menuButton = document.querySelector('.menu-button');
const menuClose = document.querySelector('.menu-close');


menuButton.addEventListener("click", function(){
    document.body.classList.add("open-nav");
});
menuClose.addEventListener("click", function(){
    document.body.classList.remove("open-nav");
});




