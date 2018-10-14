var portfolioItems = document.querySelector('.portfolio__items');

portfolioItems.addEventListener('click', function(e){

    var modalToggle = e.target.closest('.portfolio__item-button');
    
    if (! modalToggle ) return

    var modal = modalToggle.parentNode.nextElementSibling;
    var closeButton = modal.querySelector('.menu-close');
    var closeButtonBottom = modal.querySelector('.menu-close2');
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

    closeButtonBottom.addEventListener('click', function() {
        modal.classList.remove('is-open')
        backdrop.style.display = 'none';
    })

    openModal(); 
});
