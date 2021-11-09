// document.querySelector() -> element

const p4 = document.querySelector('#b p');

p4.style.color = 'salmon';
p4.style.fontSize = '33px';

const li2 = document.querySelector('#b li:nth-child(2)');

li2.style.backgroundColor = 'lightblue';


// document.querySelectorAll();

const p = document.querySelectorAll('p');
for(let i = 0; i < p.length; i++)
{
    p[i].style.backgroundColor = 'lightgreen';
}

// Bisa di spesifik kan lagi pencarian Selection nya!

const sectionB = document.getElementById('b');
const p4Baru = sectionB.getElementsByTagName('p');
p4Baru[0].style.backgroundColor = 'red';