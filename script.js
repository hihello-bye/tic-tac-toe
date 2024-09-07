let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

let currentPlayer = 'x'
const cells = document.querySelectorAll('.cell');

function displayBoard() {
    cells.forEach(cell => {
        const row = cell.getAttribute('data-row');
        const col = cell.getAttribute('data-col');
        cell.textContent = board[row][col];
    })
}

function cellClick() {
    const row = event.target.getAttribute('data-row');
    const col = event.target.getAttribute('data-col');

    if (board[row][col] === '') {
        board[row][col] = currentPlayer;
        displayBoard();

        if (checkWin()) {
            setTimeout(() => alert(`Player ${currentPlayer} wins!`), 10);
            return;
        }

        if (checkDraw()) {
            setTimeout(() => alert('No winner'), 10);
            return;
        }

        switchPlayer();
    } else {
        alert('No space here, try again')
    }
}

function switchPlayer() {
    currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
}

function checkWin() {
    for(let i = 0; i < 3; i++) {
         
        if (
            (board[i][0] === currentPlayer && board[i][1] === currentPlayer && board[i][2] === currentPlayer) ||
            (board[0][i] === currentPlayer && board[1][i] === currentPlayer && board[2][i] === currentPlayer) 
        ) {
            return true;
        }
    }

    if ( 
        (board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer) || 
        (board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer)
    ) {
        return true;
    }
    return false;
}

function checkDraw() {
    return board.flat().every(cell => cell !== '');
}

function resetBoard() {
    board = [
        ['','',''],
        ['','',''],
        ['','','']
    ];
    currentPlayer = 'x';
    displayBoard();
}

cells.forEach(cell => {
    cell.addEventListener('click', cellClick);
})

document.getElementById('restartButton').addEventListener('click', resetBoard);
displayBoard();