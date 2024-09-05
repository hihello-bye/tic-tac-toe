let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

let currentPlayer = 'x'

function displayBoard() {
    console.clear();
    board.forEach(row => {
        console.log(row.join(' | '));
    });
    console.log('\n');
}

function playerMove() {
    let row, col;

    while(true) {
        row = parseInt(prompt(`Player ${currentPlayer}, enter row (0, 1, or 2):`), 10);
        col = parseInt(prompt(`Player ${currentPlayer}, enter column (0, 1, or 2):`), 10);

        if (row >= 0 && row <= 2 && col >= 0 && col <= 2) {
            if (board[row][col] === '') {
                board[row][col] = currentPlayer;
                displayBoard();
                break;
            } else {
                console.log('No space there, try another.')
            } 
        } else {
            console.log('Invalid input, please enter a number between 0 and 2.') 
         }
    }
    displayBoard()
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
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === '') {
                return false;
            }
        }
    }
    return true;
}

function gameLoop() {
    for (let i = 0; i < 9; i++) {
        playerMove();

        if (checkWin()) {
            console.log(`Player ${currentPlayer} wins!`);
            return;
        }

        if (checkDraw()) {
            console.log(`No winner`);
            return;
        }
        switchPlayer();
    }
}

displayBoard();
gameLoop();