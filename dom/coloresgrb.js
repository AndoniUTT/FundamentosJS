const body = document.querySelector('body');
const red = document.querySelector('#red');
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');
const ba = document.querySelector('#ba');

function setColor(){
    const redVal = red.value;
    const greenVal = green.value;
    const blueVal = blue.value;
    const baVal = ba.value /100;
    const rgbaColor = `rgb( ${redVal}, ${greenVal}, ${blueVal}, ${baVal})`
    body.style.background = rgbaColor;
}

setColor;

red.addEventListener('input', setColor);
green.addEventListener('input', setColor);
blue.addEventListener('input', setColor);
ba.addEventListener('input', setColor);