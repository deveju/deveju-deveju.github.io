let audios = ['rizz', 'wow', 'rojão', 'ele gosta', 'chega', 'pare', 'que isso meu filho, calma',
            'zzzzz','ta fudido quando eu lhe pegar', 'IIIIIIIHHHHHHHHHÁÁÁÁÁÁÁÁÁÁ', 'sax romântico',
            'lobo pidão', 'atumalaca', 'desconectado discord', 'de novo nãoooo'];

for(let i = 1; i <= 15; i++) {
    document.getElementById(`butt${i}`).addEventListener('click', () => {
        let audio = document.getElementById(`aud${i}`);
        audio.pause();
        audio.currentTime = 0;
        audio.play();

        let d = new Date();
        console.log(`${d.toLocaleTimeString()} - ${audios[i-1]}`);
    });
}

document.addEventListener('keydown', () => {
    if(event.key === 'x') {
        let audios = document.getElementsByClassName('aud');
        for(let audio of audios) {
            audio.pause();
        }
        console.log('%c>> Áudios pausados!', 'background-color: white; color: black');
    }
});
