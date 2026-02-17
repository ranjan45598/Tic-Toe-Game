let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "R";
let gameActive = true;

function makeMove(index) {
    if (board[index] !== "" || !gameActive) return;

    board[index] = currentPlayer;
    document.getElementsByClassName("cell")[index].innerText = currentPlayer;

    if (checkWinner()) {
        document.getElementById("status").innerText = currentPlayer + " Wins!";
        gameActive = false;
        return;
    }

    if (!board.includes("")) {
        document.getElementById("status").innerText = "Draw!";
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === "R" ? "P" : "R";
    document.getElementById("status").innerText = "Player " + currentPlayer + " Turn";
}

function checkWinner() {
    const winPatterns = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ];

    return winPatterns.some(pattern => {
        return pattern.every(index => board[index] === currentPlayer);
    });
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "R";
    gameActive = true;
    document.getElementById("status").innerText = "Player R Turn";

    const cells = document.getElementsByClassName("cell");
    for (let cell of cells) {
        cell.innerText = "";
    }
}
