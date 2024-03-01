let score = 0;
let misses = 0;
let seconds = 60;

window.onload = () => {
    starTimer();
};

const starTimer = () => {
    if(seconds >= 0) {
        document.getElementById('time').innerHTML = `Time: ${seconds}s`;
        seconds--;
        setTimeout(starTimer, 1000);
    } else {
        displayScore();
    }
};

const displayScore = () => {
    document.getElementById('blank').style.display = 'block';
    document.getElementById('finalScore').innerHTML = `Score: ${score}<br> Misses: ${misses}<br> Final Score: ${Math.round((score / 60) * 100) / 100}/sec`;
    document.getElementById('finalScore').style.display = 'block';
    setTimeout( () => {
        window.location.replace('dead.html');
    }, 10000);
};

const hitAudio = () => {
    let audio = document.getElementById('hit');
    audio.pause();
    audio.currentTime = 0;
    audio.play();
};

const missAudio = () => {
    let audio = document.getElementById('miss');
    audio.pause();
    audio.currentTime = 0;
    audio.play();
};

const deadAudio = () => {
    let audio = document.getElementById('dead');
    audio.pause();
    audio.currentTime = 0;
    audio.play();
};

const randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

document.getElementById('redzone').addEventListener('click', () => {
    document.getElementById('score').innerHTML = `Score: ${--score}<br> Misses: ${++misses}`;
    missAudio();
    if(score < 0) {
        deadAudio();
        setTimeout( () => {
            window.location.replace('dead.html');
        }, 1000);
    }
});

const setPos = () => {
    let window = document.querySelector('.targets');
    let columnW = window.offsetWidth / 6;
    let column = randomNum(1, 6);
    let leftPos = columnW * column - columnW / 2;
    let topPos = randomNum(450, window.offsetHeight);

    let button = document.createElement('button');
    button.className = 'circle';
    button.id = 'targ';

    button.style.left = leftPos + 'px';
    button.style.top = topPos + 'px';

    window.appendChild(button);

    button.addEventListener('click', () => {
        document.getElementById('score').innerHTML = `Score: ${++score}<br> Misses: ${misses}`;
        window.removeChild(button);
        setPos();
        hitAudio();
    });
};

setPos();