const p3 = document.querySelector('.p3');
p3.onclick = function ()
{
    p3.style.backgroundColor = 'lightblue';
};


const p4 = document.querySelector('#b p');
p4.addEventListener('click', function()
{
    const ul = document.querySelector('#b ul');
    const liBaru = document.createElement('li');
    liBaru.appendChild(document.createTextNode('Item Baru dr Js.'));
    ul.appendChild(liBaru);
});