//// const closeBtn = document.querySelectorAll('.close');
//// const cards = document.querySelectorAll('.card');
////
//// for (let i = 0; i < closeBtn.length; i++) {
////     closeBtn[i].addEventListener('click', function(event){
////         closeBtn[i].parentElement.style.display = 'none';
////         event.target.parentElement.style.display = 'none';
////         event.preventDefault();
////         event.stopPropagation();
////     });
//// }

//// cards.forEach(function(card){
////     card.addEventListener('click', function(){
////         alert('Card active');
////     });
//// });


const container = document.querySelector('.container');

container.addEventListener('click', function(e){
    if (e.target.classList.contains('close')){
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
        e.stopPropagation();
    }
});