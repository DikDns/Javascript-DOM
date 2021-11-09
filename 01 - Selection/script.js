// DOM Selection
// document.getElementById() -> element
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = '#ccc';
judul.innerHTML = 'Andika Eka Kurnia';

// document.getElementByTagName() -> HTMLCollections
const p = document.getElementsByTagName('p');
for (let i = 0; i < p.length; i++)
{
    p[i].style.backgroundColor = 'cyan';
}

const h1 = document.getElementsByTagName('h1')[0];

h1.style.fontSize = '50px';

// document.getElementByClassName() -> HTMLCollections

const p1 = document.getElementsByClassName("p1")[0];

p1.innerHTML = 'Ini diubah dari Js.';