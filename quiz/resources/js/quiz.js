const questions = [null, //! ONE QUESTION PER LINE!
"How much is 5x5-5+5-5/5?",
"How many numbers PI has?",
"What is \"mana\" used for?",
"What is the national flower of Japan?",
"What is the national animal of Australia?",
"How many days does it take for the Earth to orbit the Sun?",
"What country has the most islands in the world?",
"What is the smallest country in the world?",
"What is the capital of Canada?",
"What is the tallest(total) mountain range in the world?",
"What is the longest river in the world?",
"What is the best-selling book from the 21st century?",
"Which artist painted the ceiling of the Sistine Chapel in Rome?",
"What city do The Beatles come from?",
"How many keys does a classic piano have?",
"What was Disney's first film?",
"What is the most common surname in the U.S.?",
"How many minutes are in a week?",
"What company was initially called \"Cadabra\"?",
"What is the hottest planet in Milky Way?",

];

const answers = [null, //! FOUR OPTIONS PER LINE!
"24","0","5","None",
"Infinite", "1416", "200", "2",
"Magic", "Martial Arts", "Weapon Proficiency", "Currency",
"Cherry Blossom", "Japanese Iris", "Camellia", "Asagao",
"Red Kangaroo", "Koala", "Wombat", "Marsupials",
"365", "30", "1461", "1",
"Sweden", "Canada", "Japan", "Philippines",
"Vatican City", "Monaco", "San Marino", "Barbados",
"Ottawa", "Vancouver", "Québec", "Toronto",
"Mauna Kea", "Mount Everest", "The Andes", "Chimborazo",
"Nile", "Amazon River", "Paraná River", "Yangtze River",
"Harry Potter series", "The Hunger Games", "Fifty Shades of Gray", "The Twilight series",
"Michelangelo", "Raphael", "Caravaggio", "Leonardo da Vinci",
"Liverpool", "London", "Manchester", "Birmingham",
"88", "90", "82", "62",
"Snow White", "Pinocchio", "Dumbo", "Cinderella",
"Smith", "Johnson", "Williams", "Brown",
"10.080", "14.400", "7.680", "20.160",
"Amazon", "Meta", "Microsoft", "Apple",
"Venus", "Mars", "Mercury", "Jupiter",

];

let viewedQuestions = [];
let qLen = questions.length - 1;
let buttons = document.getElementsByTagName('button');
let scoreElement = document.getElementById('score');
let QuestionTextElement = document.getElementById('question-text');
let score = 0;

window.onload = () => {
    scoreElement.innerHTML = `Score: ${score}`;
    randomQuestion();
};

const randomQuestion = () => {
    for(let butt of buttons) {
        butt.disabled = false;
        butt.style.backgroundColor = '';
        butt.style.color = '';
    }

    let num = randomNum();
    let ansIndex = num - 1;
    QuestionTextElement.innerHTML = questions[num];
    let shuffledIndexes = shuffleIndexes();
    document.getElementById(`q1`).innerHTML = answers[ansIndex * 4 + shuffledIndexes[0]];
    document.getElementById(`q2`).innerHTML = answers[ansIndex * 4 + shuffledIndexes[1]];
    document.getElementById(`q3`).innerHTML = answers[ansIndex * 4 + shuffledIndexes[2]];
    document.getElementById(`q4`).innerHTML = answers[ansIndex * 4 + shuffledIndexes[3]];

    let i = 1;
    while(i < 5) {
        if(document.getElementById(`q${i}`).innerHTML === answers[ansIndex * 4 + 1]) {
            document.getElementById(`q${i}`).className = 'right';
        } else {
            document.getElementById(`q${i}`).className = 'wrong';
        }
        i++;
    }
};

const shuffleIndexes = () => {
    let indexes = [1, 2, 3, 4];

    for (let i = indexes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indexes[i], indexes[j]] = [indexes[j], indexes[i]];
    }

    return indexes;
};

const randomNum = () => {
    let num = Math.floor(Math.random() * qLen) + 1;

    if(viewedQuestions.length === qLen) {
        console.log("out of questions!");
        return;
    } else if(viewedQuestions.includes(num)) {
        return randomNum();
    } 

    viewedQuestions.push(num);
    return num;
};

for(let button of buttons) {
    button.addEventListener('click', () => {
        if(button.className === 'right') {
            button.style.backgroundColor = 'green';
            button.style.color = 'white';
            correctAudio();
            scoreElement.innerHTML = `Score: ${++score}`;
        } else {
            button.style.backgroundColor = 'red';
            button.style.color = 'white';
            wrongAudio();
        }

        for(let butt of buttons) {
            butt.disabled = true;
            if(butt.className === 'right') {
                butt.style.backgroundColor = 'green';
                butt.style.color = 'white';
            }
        }    

        if(viewedQuestions.length === qLen) {
            setTimeout(() => {
                window.location.replace(`no-questions.html?score=${score}&qLen=${qLen}`);
            }, 1500)
        }
        setTimeout(randomQuestion, 2000);
    });
};

const wrongAudio = () => {
    let audio = document.getElementById(`wrongAudio`);
    audio.pause();
    audio.currentTime = 0;
    audio.play();
};

const correctAudio = () => {
    let audio = document.getElementById(`correctAudio`);
    audio.pause();
    audio.currentTime = 0;
    audio.play();
};