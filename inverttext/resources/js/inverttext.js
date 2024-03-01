const invertText = () => {
    let text = document.getElementById("text").value;
    let ans = "";
    for(let z = text.length - 1;z >= 0;z--) {
        ans += text[z];
    }
    document.getElementById("res").innerHTML = ans;
};

const copyText = () => {
    var copyText = document.getElementById("res");

    const textToCopy = copyText.textContent;

    let interval;
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            document.getElementById("copy").innerHTML = "Copied the text!";
            interval = setInterval(() => {
                document.getElementById("copy").innerHTML = "";
                clearInterval(interval);
            }, 2000);
        })
        .catch(err => {
            console.error('Could not copy text: ', err);
            alert("Failed to copy text. Please try again.");
        });
};

document.getElementById("text").addEventListener("change", invertText);