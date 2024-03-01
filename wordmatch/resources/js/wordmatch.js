let wordLength = document.getElementById("len").value;

class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
        this.length = 0;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!(char in node.children)) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
            node.length++; 
        }
        node.isEndOfWord = true;
    }

    searchPatterns(pattern, len) { 
        const results = [];
        this._searchPatternsRecursive(this.root, pattern, "", len, results);
        return results;
    }

    _searchPatternsRecursive(node, pattern, currentWord, len, results) {
        if (!pattern) {
            if (node.isEndOfWord && currentWord.length === len) { 
                results.push(currentWord);
            }
            for (let childChar in node.children) {
                this._searchPatternsRecursive(node.children[childChar], "", currentWord + childChar, len, results);
            }
        } else {
            const firstChar = pattern[0];
            const remainingPattern = pattern.slice(1);
            if (firstChar === "_") {
                for (let childChar in node.children) {
                    this._searchPatternsRecursive(node.children[childChar], remainingPattern, currentWord + childChar, len, results);
                }
            } else if (firstChar in node.children) {
                this._searchPatternsRecursive(node.children[firstChar], remainingPattern, currentWord + firstChar, len, results);
            }
        }
    }
}

async function fetchWords() {
    const response = await fetch('https://raw.githubusercontent.com/dwyl/english-words/master/words.txt');
    const text = await response.text();
    return text.split('\n').map(word => word.trim());
}

async function findMatchingWords() {
    const pattern = document.getElementById("patternInput").value.trim(); 
    const len = parseInt(document.getElementById("len").value); 
    if (!pattern) {

        return;
    }
    const trie = new Trie();
    const words = await fetchWords();
    words.forEach(word => trie.insert(word));

    const matches = trie.searchPatterns(pattern, len); 
    const matchesDiv = document.getElementById("matches");
    matchesDiv.innerHTML = "";
    matches.forEach(match => {
        const matchNode = document.createElement("div");
        matchNode.textContent = match;
        matchesDiv.appendChild(matchNode);
    });
}


