var portfolioItems = document.querySelector('.portfolio__items');

portfolioItems.addEventListener('click', function(e){
    e.preventDefault();
    portfolioItem = e.target
    console.log(portfolioItem)
    // console.log(portfolioItem.closest('.portfolio__item-link'))

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
