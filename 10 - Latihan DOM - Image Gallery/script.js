const container = document.querySelector('.container');
const jumbo = document.querySelector('.img-jumbo');


container.addEventListener('click', function (e){
    if (e.target.classList.contains('img-thumb')){
        jumbo.src = e.target.src;
        e.preventDefault();
        e.stopPropagation();
    }

});