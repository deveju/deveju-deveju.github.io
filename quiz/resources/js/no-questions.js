window.onload = () => {
    const params = new URLSearchParams(window.location.search);
    const score = params.get('score');
    const qLen = params.get('qLen');
    document.getElementById('total-score').innerHTML = `${score}/${qLen}`;
};