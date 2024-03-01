let ch = "_0123456789aáàãâbcdeéíîióôúûfghjklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!;@#$%¨&*?(:)'\"/,-.[<+>]~`{}=^ ";
let ch2 = "wz!@Tst#$67áS8Re9xya+ZI_b;c%¨uîúP&nQqr*(op^iû)'m4HUvXG\"/,2-é3J5BVà.O[:EA]íóôL=~`{WKâ} 0ãCF1dMY?>fg<DNhjkl";
let enc = document.getElementById("encrypt");
let encAns = document.getElementById("encrypt-ans");
let dec = document.getElementById("decrypt");
let decAns = document.getElementById("decrypt-ans");

const encrypt = () => {
    if(enc.value != '') {
        console.log(`Encrypting...`);
        let input = enc.value; 
        let ans = '';
        for(let i = 0; i<input.length;i++) {
            for(let j = 0; j < ch.length;j++) {
                if(input[i] == ch[j]) {
                    ans += ch2[j];
                }
            }
        }
        encAns.innerHTML = `ENCRYPT: <span style="color: red;">${input}</span> ➤ <span style="color: rgb(0,255,0,1);">${ans}</span>`;
    } else {
        encAns.innerHTML = '';
    }
};

const decrypt = () => {
    if(dec.value != '') {
        console.log(`Decrypting...`);
        let input = dec.value;
        let ans = '';
        for(let i = 0; i<input.length;i++) {
            for(let j = 0; j < ch.length;j++) {
                if(input[i] == ch2[j]) {
                    ans += ch[j];
                }
            }
        }
        decAns.innerHTML = `DECRYPT: <span style="color: red;">${input}</span> ➤ <span style="color: rgb(0,255,0,1);">${ans}</span>`;
    } else {
        decAns.innerHTML = '';
    }
};

document.getElementById("do-it").addEventListener("click", encrypt);
document.getElementById("do-it").addEventListener("click", decrypt);