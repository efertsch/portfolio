var portfolioItems = document.querySelector('.portfolio__items');

portfolioItems.addEventListener('click', function(e){

    var modalToggle = e.target.closest('.portfolio__item-link');
    
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
