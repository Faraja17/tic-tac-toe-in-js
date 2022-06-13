// Tic Tac Toe Grid

const theBoard = {
    tl: '-', tm: '-', tr: '-',
    ml: '-', mm: '-', mr: '-',
    ll: '-', lm: '-', lr: '-'
}

// welcome message and directions

alert(
`Welcome to Tic Tac Toe!
\nObject of the game: To win, get three Xs or Os in a row, column, or diagonal.
\nGame play: 1. Decide who is X and who is O. 2. Take turns typing the row and colunn codes of your selected spot.
\nFor example, the code for the top-left is tl, for the mid-middle spot it is mm, and for the lower-right spot, the code is lr.`
);

// printed board

printBoard = (board) =>

    alert(
        `${Object.values(board)[0]} ${Object.values(board)[1]} ${Object.values(board)[2]}
        \n${Object.values(board)[3]} ${Object.values(board)[4]} ${Object.values(board)[5]}
        \n${Object.values(board)[6]} ${Object.values(board)[7]} ${Object.values(board)[8]}`
    );

//win announcement and game exit

winMessage = () => {
    printBoard(theBoard);
    alert(`${turn} wins!`);
    exit();
}

// function winner(Object.keys) {
//     firstLetterCount = 0;
//     secondLetterCount = 0;

//     if ((Object.keys(theBoard)[0] === move[0]) && (theBoard[k] === turn)) {
//         firstLetterCount+=1;
//     }
//     if (firstLetterCount === 3) {
//         winMessage();
//     }
// }


// players enter moves

    let turn = 'X';

    for (let i = 0; i < 9; i++) {
        printBoard(theBoard);
        move = prompt(`${turn}, it is your turn. Select a spot.`);
        theBoard[move] = `${turn}`;
        
        //determine and announce winner

        // theBoard.forEach(winner(Object.keys));

        if (turn === 'X') {
            turn = 'O';
        } else {
            turn = 'X';
        }
    }
printBoard(theBoard);
alert(`It is a draw!
\n `);




