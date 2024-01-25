let boxes = [];
let playerSymbol = "X";

let winner;

const mainContainer = document.querySelector(".main-container");

mainContainer.addEventListener("click", (event) => {
    console.log(event.target);
    let squares = document.querySelectorAll(".box");
    console.log(squares);

    if (event.target.innerText == "") {
        event.target.innerText = playerSymbol;
    
        if (playerSymbol == "X") {
            playerSymbol = "O";
        } else {
            playerSymbol = "X"
        }
    }

    let symbols = [];

    for (let i = 0; i < squares.length; i++) {
        symbols.push(squares[i].textContent);
    }
    console.log(symbols);
    checkWinner(symbols);
});

var sequence = [];

function checkWinner(symbols) {
    console.log(symbols);

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
        sequence.push(symbols[j]);
    }

    checkSequence(sequence);

    for (let i = 2; i < 8; i = i + 2) {
        sequence.push(symbols[j]);
    }

    checkSequence(sequence);

    document.querySelector("#player").innerText = winner;
}

function checkSequence(seq) {
    if (seq.every((symbol) => { return symbol == "X" })) {
        winner = "Winner is X";
    }

    if (seq.every((symbol) => { return symbol == "O" })) {
        winner = "winner is O";
    }

    sequence = [];
}
// for (let i = 0; i < 9; i++) {
//     let boxNum = "box-" + (i + 1).toString();

//     console.log(boxNum);

//     let clickableBox = document.getElementById(boxNum);

//     console.log(clickableBox);

    
//     clickableBox.addEventListener("click", function (event) {
//         clickableBox.textContent = playerSymbol;

//         if (playerSymbol == "X") {
//             playerSymbol = "O";
//         } else {
//             playerSymbol = "X";
//         }
//         console.log("Firing");
//     });
//     console.log(playerSymbol);
// }