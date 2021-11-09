
// innerHTML =
const judul = document.getElementById('judul');
judul.innerHTML = '<i>Judul Miring</i>';

// style.<propertyCSS> =
const sectionB = document.querySelector('section#b');
sectionB.style.backgroundColor = 'lightgreen';

// element.setAttribute(); // getAttribute(); // removeAttribute();
const a = document.getElementsByTagName('a')[0];
a.setAttribute('href', 'https://github.com');

// element.classList \\ .add(); .remove(); .toggle(); .item(); .contains(); .replace();
const p2 = document.querySelector('.p2');
p2.classList.add('biru', 'latar');