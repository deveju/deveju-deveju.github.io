let drawingSide = 960;
let side = drawingSide / document.getElementById('pixels-select').value;
let amount = document.getElementById('pixels-select').value;
let bgColor = document.getElementById('bgcolor').value;
let square = amount * amount;

window.onload = () => {
    clear();
};

//############################### ELEMENTS ###############################\\

for (let i = 1; i <= square; i++) {
    let div = document.createElement('div');
    div.className = 'pixel';
    div.style.height = `${side}px`;
    div.style.width = `${side}px`
    div.id = `${i}`;
    document.getElementById('drawing').appendChild(div);
}

//############################### PAINT ###############################\\

document.getElementById('drawing').addEventListener('mousedown', (event) => {
    if (event.target.classList.contains('pixel')) {
        const mouseButton = event.button;
        changeColor(event.target, mouseButton);
    }
    event.preventDefault(); 
});

document.getElementById('drawing').addEventListener('contextmenu', (event) => {
    if (event.target.classList.contains('pixel')) {
        const mouseButton = 2; 
        changeColor(event.target, mouseButton);
    }
    event.preventDefault(); 
});

//############################### COLOR ###############################\\

const changeColor = (pixel, mouseButton) => {
    let color = document.getElementById('color').value;
    let color2 = document.getElementById('color2').value;
    if (mouseButton === 0) {
        pixel.style.backgroundColor = color;
    } else if (mouseButton === 2) {
        pixel.style.backgroundColor = color2;
    }
};

//############################### CLEAR ###############################\\

const clear = () => { 
    console.log('clear');
    for(let x of document.getElementById('drawing').getElementsByTagName('div')) {
        x.style.backgroundColor = bgColor;
    }
};

document.getElementById('clear').addEventListener('click', clear);

//############################### RELOAD ###############################\\

document.getElementById('pixels-select').addEventListener('change', () => {
    location.reload();
});

document.getElementById('bgcolor').addEventListener('change', () => {
    bgColor = document.getElementById('bgcolor').value;
    clear();
})