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

displayBoard();