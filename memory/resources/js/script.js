let cardNum = 33;
let generatedNums = [];
let rightID = [];

window.onload = () => {
    setTimeout(flipped, 2000);
    setInterval(() => {
        if(document.getElementsByClassName('card-img flipped').length === 0) {
            console.log('win');
            window.location.replace = 'win.html';
        }
    }, 5000);
};

const randomNum = () => {
    let num = Math.floor(Math.random() * 33) + 1;
    if(generatedNums.includes(num)) {
        return randomNum();
    }
    generatedNums.push(num);
    return num;
};

const createCards = () => {
    console.log('creating');
    for(let i = 1; i <= cardNum; i++) {
        let num = randomNum();
        let div = document.createElement('div');
        div.className = 'card';
        div.id = `c${i}`;
        div.innerHTML = i;
        let img = document.createElement('img');
        img.src = `resources/img/img${num}.jpg`;
        img.id = `i${i}`;
        img.className = 'card-img';
        div.appendChild(img);
        document.getElementById('board').appendChild(div);
    }

    generatedNums = [];
    for(let i = cardNum + 1; i <= cardNum * 2; i++) {
        let num = randomNum();
        let div = document.createElement('div');
        div.className = 'card';
        div.id = `c${i}`;
        div.innerHTML = i;
        let img = document.createElement('img');
        img.src = `resources/img/img${num}.jpg`;
        img.id = `i${i}`;
        img.className = 'card-img';
        div.appendChild(img);
        document.getElementById('board').appendChild(div);
    }
};

const flipped = () => {
    console.log('flipping');
    let cards = document.getElementsByClassName('card-img');
    for(let card of cards) {
        if(rightID.includes(card.id)) {

        } else {
            card.className = 'card-img flipped';
        }
    }
};

createCards();

let imgBefore = null;
let imgBeforeID = null;
let count = 0;

for(let j = 1; j <= cardNum * 2; j++) {
    let img = document.getElementById(`i${j}`);
    img.addEventListener('click', () => {
        if(count < 2) {
            img.className = 'card-img';
        }
        count++;
        if(count === 1) {
            imgBefore = img.src;
            imgBeforeID = img.id;
        }
        if(count === 2) {
            setTimeout(() => {
                count = 0;
                flipped();
            }, 1000);
        }

        if(imgBefore === img.src && imgBefore !== null && imgBeforeID !== img.id && imgBefore !== null) {
            console.log("RIGHT");
            rightID.push(img.id);
            rightID.push(imgBeforeID);
            imgBefore = null;
            imgBeforeID = null;
        } else if(img.src !== imgBefore && imgBeforeID !== img.id && imgBefore !== null) {
            console.log('WRONG');
            imgBefore = null;
            imgBeforeID = null;
        }
    });
};