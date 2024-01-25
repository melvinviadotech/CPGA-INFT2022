let boxes = [];
let playerSymbol = "X";

let winner;

const mainContainer = document.querySelector(".main-container");
const message = document.querySelector("#player");

mainContainer.addEventListener("click", (event) => {
    let squares = document.querySelectorAll(".box");

    if (winner != undefined || message.innerText == "Draw") {
        for (let i = 0; i < squares.length; i++) {
            squares[i].textContent = "";
        }

        message.innerText = "";
        winner = undefined;
    } else {
        if (event.target.innerText == "") {
            event.target.innerText = playerSymbol;
        
            if (playerSymbol == "X") {
                playerSymbol = "O";
            } else {
                playerSymbol = "X"
            }
    
            let symbols = [];
    
            for (let i = 0; i < squares.length; i++) {
                symbols.push(squares[i].textContent);
            }

            if (symbols.every((symbol) => { return symbol != ""})) {
                message.innerText = "Draw";
            } else {
                checkWinner(symbols);
            }
        }
    }
});

var sequence = [];

function checkWinner(symbols) {
    for (let i = 0; i < 3; i++) {
        for (let j = i; j <= 8; j = j + 3) {
            sequence.push(symbols[j]);
        }

        checkSequence(sequence);

        for (let j = (i * 3); j <= (i * 3 + 2); j++) {
            sequence.push(symbols[j]);
        }

        checkSequence(sequence);
    }

    for (let i = 0; i <= 8; i = i + 4) {
        sequence.push(symbols[i]);
    }

    checkSequence(sequence);

    for (let i = 2; i < 8; i = i + 2) {
        sequence.push(symbols[i]);
    }

    checkSequence(sequence);

    
}

function checkSequence(seq) {
    if (seq.every((symbol) => { return symbol == "X" })) {
        winner = "X WINS";
    }

    if (seq.every((symbol) => { return symbol == "O" })) {
        winner = "O WINS";
    }

    if (winner != undefined) {
        message.innerText = winner;
    }

    sequence = [];
}