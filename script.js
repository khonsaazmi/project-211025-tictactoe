// Tic Tac Toe

const cells = document.querySelectorAll(".cell"); // Mengubah 'cells' menjadi 'cell'
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");

// Possible winning combinations
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Game variables
let options = ["", "", "", "", "", "", "", "", ""]; // Array to hold the state of the board
let currentPlayer = "X";
let running = false; // Game state

initializeGame(); // To begin the game

function initializeGame() {
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    restartBtn.addEventListener("click", restartGame);
    statusText.textContent = `${currentPlayer}'s turn`;
    running = true;
}

function cellClicked() {
    const cellIndex = this.getAttribute("cellIndex");

    if (options[cellIndex] != "" || !running) {
        return;
    }

    updateCell(this, cellIndex);
    changePlayer();
    checkWinner();
}

function updateCell(cell, index) {
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}

function changePlayer() {
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statusText.textContent = `${currentPlayer}'s turn`;
}

function checkWinner() { }

function restartGame() { }

