
//! Button Maker 
// Select main tag
const sectionButton = document.querySelector('.section-button');

// Construct Button
const newButton1 = document.createElement('button');
newButton1.setAttribute('type', 'button');
newButton1.setAttribute('name', 'button');
newButton1.setAttribute('class', 'button');
newButton1.setAttribute('id', 'button1');
newButton1.appendChild(document.createTextNode('Warna Favorit'));

// Deploy Button to the Main page
sectionButton.appendChild(newButton1);



//! Background Changer
// Select button and Body
const btn1 = document.querySelector('#button1');
const selectedBody = document.body;
btn1.addEventListener('click', function(){
    selectedBody.style.backgroundColor = "cyan";
});






// ! New Buttons
// Construct Button
const newButton2 = document.createElement('button');
newButton2.setAttribute('type', 'button');
newButton2.setAttribute('name', 'button');
newButton2.setAttribute('class', 'button');
newButton2.setAttribute('id', 'button2');
newButton2.appendChild(document.createTextNode('Acak Warna'));

// Deploy Button to the Main page
sectionButton.appendChild(newButton2);



//! Background Changer
// Select button 2
const btn2 = document.querySelector('#button2');
btn2.addEventListener('click', function(){
    selectedBody.style.backgroundColor = 'rgb(' + Math.round(Math.random() * 255 + 1) + ',' + Math.round(Math.random() * 255 + 1) + ',' +Math.round(Math.random() * 255 + 1) + ')'
});






//! Slider Colors
const sliderRed = document.querySelector('input[name=sliderRed]');
const sliderGreen = document.querySelector('input[name=sliderGreen]');
const sliderBlue = document.querySelector('input[name=sliderBlue]');

sliderRed.addEventListener('input', function(){
    const r = sliderRed.value;
    const g = sliderGreen.value;
    const b = sliderBlue.value;

    selectedBody.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
});

sliderGreen.addEventListener('input', function(){
    const r = sliderRed.value;
    const g = sliderGreen.value;
    const b = sliderBlue.value;

    selectedBody.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
});

sliderBlue.addEventListener('input', function(){
    const r = sliderRed.value;
    const g = sliderGreen.value;
    const b = sliderBlue.value;

    selectedBody.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
});











//! Change colors on mouse move
const title = document.querySelector('h1');

selectedBody.addEventListener('mousemove', function(event){
    const xPos = Math.round((event.clientX / window.innerWidth) * 256);
    const yPos = Math.round((event.clientY / window.innerHeight) * 256);

    title.style.color = 'rgb(' + xPos + ',' + yPos + ',150)'

}); 