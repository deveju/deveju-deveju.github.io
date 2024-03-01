document.addEventListener('keydown', () => {
    if(event.key === '' || event.key === '') {
        console.log("ESC pressed!");
        window.location.href = '../index/index.html';
    }
});