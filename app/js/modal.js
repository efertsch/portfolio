var portfolioItems = document.querySelector('.portfolio__items');

portfolioItems.addEventListener('click', function(e){

    var modalToggle = e.target.closest('.portfolio__item-link');
    
    if (! modalToggle ) return

    var modal = modalToggle.parentNode.nextElementSibling;
    var closeButton = modal.querySelector('.menu-close');
    

    function openModal(){
        modal.classList.add('is-open');
        modal.style.animation = 'modalIn 1000ms forwards'
    }

    function closeModal(){
        modal.removeEventListener('click', closeModal)
    }

    closeButton.addEventListener('click', function() {
        modal.classList.remove('is-open')
        modal.style.animation = 'modalOut 500ms forwards'
      })

    openModal();

    
});

//When a user clicks on the screen 
    //Get the closest portfolio item 
    //Grab the modal that is a sibling of that portfolio item and open it (animate)
    //Close the modal when the close icon is clicked (animate)
    //close the modal if the user hits the escape key 
