var portfolioItems = document.querySelector('.portfolio__items');

portfolioItems.addEventListener('click', function(e){
    e.preventDefault();
    portfolioItem = e.target.closest('.portfolio__item');
    figCaption = portfolioItem.querySelector('.portfolio__caption');
    modalLink = figCaption.querySelector('.portfolio__item-link');
    
    if (! modalLink ) return

    var modal = portfolioItem.querySelector('.portfolio__modal');
    var closeButton = modal.querySelector('.menu-close');

    function openModal(){
        modal.classList.add('is-open');
        modal.animate([
            // keyframes
            { transform: 'translatey(-300px)' }, 
            { transform: 'translatey(0px)' }
          ], { 
            // timing options
            duration: 500,
            iterations: 1
          });
    }

    openModal();

    function modalClose(){
        modal.classList.remove('is-open');
        // modal.removeEventListener('animationend', modalClose())
    }

    
    






    // console.log(portfolioItem.querySelector('.portfolio__item--link'))
    // closestFigCaption = portfolioItem.closest("figcaption");
    // console.log(closestFigCaption.closest('.portfolio__item--link'));

    // modalToggle = e.target.lastElementChild;
    // console.log(modalToggle);
    // if (! modalToggle) return
    
    // modal = modalToggle.parentNode.nextElementSibling;
    
});

//When a user clicks on the screen 
    //Get the closest portfolio item 
    //Grab the modal that is a sibling of that portfolio item and open it (animate)
    //Close the modal when the close icon is clicked (animate)
    //close the modal if the user hits the escape key 


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