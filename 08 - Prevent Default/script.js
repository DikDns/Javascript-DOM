// // Select Button Close
//// const closeBtn = document.querySelectorAll('.close');
//// const container = document.querySelector('.container');


// // Close Functions
// //function closeCard () { 
// //    container.innerHTML = '';
// //};


// //closeBtn.forEach(button => button.addEventListener("click", closeCard));


//! preventDefault() method

const closeBtn = document.querySelectorAll('.close');


for (let i = 0; i < closeBtn.length; i++) {
    closeBtn[i].addEventListener('click', function(event){
        //* closeBtn[i].parentElement.style.display = 'none';
        event.target.parentElement.style.display = 'none';
        event.preventDefault();
    });
}


//! closeBtn.forEach(function(button){
//!     button.addEventListener('click', function(e){
//!         e.target.parentElement.style.display = 'none';
//!     })
//! });