var portfolioItems = document.querySelector('.portfolio__items');

portfolioItems.addEventListener('click', function(e){

    var modalToggle = e.target.closest('.portfolio__item-button');
    
    if (! modalToggle ) return

    var modal = modalToggle.parentNode.nextElementSibling;
    var closeButton = modal.querySelector('.menu-close');
    var backdrop = document.querySelector('#modal-backdrop');

    

   function openModal(){
        modal.classList.add('is-open');
        backdrop.style.display = 'block';
    }

    function closeModal(){
        modal.removeEventListener('click', closeModal)
    }

    closeButton.addEventListener('click', function() {
        modal.classList.remove('is-open')
        backdrop.style.display = 'none';
      })

    openModal(); 
});


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