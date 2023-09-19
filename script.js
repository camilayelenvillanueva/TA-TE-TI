let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameOver = false;

function makeMove(index) {
    if (board[index] === "" && !gameOver) {
        board[index] = currentPlayer;
        document.getElementsByClassName('cell')[index].textContent = currentPlayer;
        
        if (checkWinner()) {
            document.getElementById('message').textContent = `¡Jugador ${currentPlayer} gana!`;
            gameOver = true;
        } else if (board.every(cell => cell !== "")) {
            document.getElementById('message').textContent = "¡Empate!";
            gameOver = true;
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Horizontales
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Verticales
        [0, 4, 8], [2, 4, 6]              // Diagonales
    ];
    
    for (const combination of winningCombinations) {
        if (board[combination[0]] !== "" && 
            board[combination[0]] === board[combination[1]] &&
            board[combination[1]] === board[combination[2]]) {
            return true;
        }
    }
    
    return false;
}

function restartGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameOver = false;
    document.getElementById('message').textContent = "";
    
    const cells = document.getElementsByClassName('cell');
    for (const cell of cells) {
        cell.textContent = "";
    }
}
