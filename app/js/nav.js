
var openMenuButton = document.querySelector('.menu-button');
var closeMenuButton = document.querySelector('.menu-close');
var menuLinks = document.querySelectorAll('.navigation__link');


function addBodyClass(className){
    document.body.classList.add(className);
}

function removeBodyClass(className){
    document.body.classList.remove(className);
}

function openNav(button, className){
    button.addEventListener("click", function() {
        addBodyClass(className);
    });
}
function closeNav(button, className){
    button.addEventListener("click", function() {
        removeBodyClass(className);
    });
}
function toggleNav(){
    openNav(openMenuButton, "open-nav");
    closeNav(closeMenuButton, "open-nav");
}

function closeNavOnScroll(links, className){
    links.forEach(function(link){
       link.addEventListener("click", function() {
            removeBodyClass(className);
        });
    })
}



toggleNav();
closeNavOnScroll(menuLinks, "open-nav");