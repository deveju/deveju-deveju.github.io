let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let resultTxt = document.getElementById('result');

let choices = ['ROCK', 'PAPER', 'SCISSORS'];

const randomChoice = () => {
    return choices[Math.floor(Math.random() * 3)];
};

const choice = (player, computer) => {
    if(player === computer) {
        return `<div style="color: white; font-size: 5vh; text-align: center;">${player} X <span style="color: #ab6b24">${computer}</span><br><span style="color: yellow; font-size: 7vh; text-align: center;">DRAW</span></div>`;
    } else if(
        (player === 'ROCK' && computer === 'SCISSORS') ||
        (player === 'PAPER' && computer === 'ROCK') ||
        (player === 'SCISSORS' && computer === 'PAPER') )
        { return `<div style="color: white; font-size: 5vh; text-align: center;">${player} X <span style="color: #ab6b24">${computer}</span><br><span style="color: green; font-size: 7vh; text-align: center;">WIN</span></div>`; } else 
        { return `<div style="color: white; font-size: 5vh; text-align: center;">${player} X <span style="color: #ab6b24">${computer}</span><br><span style="color: red; font-size: 7vh; text-align: center;">LOSE</span></div>`; }
};

const whoWon = (player) => {
    let computer = randomChoice();
    return choice(player, computer);
};

let interval;
rock.addEventListener('click', () => {
    resultTxt.innerHTML = 'thinking...';
    clearInterval(interval);
    interval = setTimeout(() => {
        resultTxt.innerHTML = whoWon('ROCK')
    }, 1000);
});

paper.addEventListener('click', () => {
    resultTxt.innerHTML = 'thinking...';
    clearInterval(interval);
    interval = setTimeout(() => {
        resultTxt.innerHTML = whoWon('PAPER')
    }, 1000);
});

scissors.addEventListener('click', () => {
    resultTxt.innerHTML = 'thinking...';
    clearInterval(interval);
    interval = setTimeout(() => {
        resultTxt.innerHTML = whoWon('SCISSORS')
    }, 1000);
});