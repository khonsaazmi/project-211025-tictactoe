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

// Initialize the game
function initializeGame() {
    cells.forEach(cell => cell.addEventListener("click", cellClicked)); // Add click event to each cell
    restartBtn.addEventListener("click", restartGame); // Add click event to restart button
    statusText.textContent = `${currentPlayer}'s turn`; // Display current player's turn
    running = true; // Set game as running
}

// Handle cell click event
function cellClicked() {
    const cellIndex = this.getAttribute("cellIndex"); // Get the index of the clicked cell

    // If the cell is already filled or the game is not running, do nothing
    if (options[cellIndex] != "" || !running) {
        return;
    }

    // Update the cell and game state
    updateCell(this, cellIndex); // Update the clicked cell
    checkWinner(); // Check if there's a winner
}

// Update the clicked cell with the current player's symbol
function updateCell(cell, index) {
    options[index] = currentPlayer; // Update the game state array
    cell.textContent = currentPlayer;  // Display the current player's symbol in the cell
}

// Switch to the other player
function changePlayer() {
    currentPlayer = (currentPlayer == "X") ? "O" : "X"; // Toggle between players
    statusText.textContent = `${currentPlayer}'s turn`; // Update the status text
}

// Check for a winner or a draw
function checkWinner() {
    let roundWon = false; // Flag to check if the round is won

    // Check each possible winning condition
    for (let i = 0; i < winConditions.length; i++) { // Loop through all winning conditions
        const condition = winConditions[i]; // Get the current winning condition
        const cellA = options[condition[0]]; // Get the values of the cells in the winning condition
        const cellB = options[condition[1]]; // Get the values of the cells in the winning condition
        const cellC = options[condition[2]]; // Get the values of the cells in the winning condition

        if (cellA == "" || cellB == "" || cellC == "") {
            continue; // Skip if any cell in the winning condition is empty
        }
        if (cellA == cellB && cellB == cellC) {
            roundWon = true; // Set flag if a winning condition is met
            break; // Exit the loop
        }
    }

    if (roundWon) {
        statusText.textContent = `${currentPlayer} wins!`; // Announce the winner
        running = false; // Stop the game
    }
    else if (!options.includes("")) {
        statusText.textContent = "It's a draw!"; // Announce a draw
        running = false; // Stop the game   
    }
    else {
        changePlayer(); // Continue the game by switching players
    }
}

// Restart the game
function restartGame() {
    currentPlayer = "X"; // Reset to player X
    options = ["", "", "", "", "", "", "", "", ""]; // Clear the game state
    statusText.textContent = `${currentPlayer}'s turn`; // Update the status text
    cells.forEach(cell => cell.textContent = ""); // Clear all cells at the display
    running = true; // Set game as running
}

