let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

function displayBoard() {
    console.clear();
    board.forEach(row => {
        console.log(row.join(' | '));
    });
    console.log('\n');
}

let currentPlayer = 'x'

function playerMove() {
    let row, col;

    while(true) {
        row = parseInt(prompt(`Player ${currentPlayer}, enter row (0, 1, or 2):`), 10);
        col = parseInt(prompt(`Player ${currentPlayer}, enter column (0, 1, or 2):`), 10);

        if (row >= 0 && row <= 2 && col >= 0 && col <= 2) {
            if (board[row][col] === '') {
                board[row][col] = currentPlayer;
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

displayBoard();
playerMove();