// Tic Tac Toe Grid

const theBoard = {
    tl: '-', tm: '-', tr: '-',
    ml: '-', mm: '-', mr: '-',
    ll: '-', lm: '-', lr: '-'
}

// welcome message and directions

console.log(
`Welcome to Tic Tac Toe!
\nObject of the game: To win, get three Xs or Os in a row, column or diagonal.
\nGame play: 1. Decide who is X and who is O. 2. Take turns typing the row and colunn codes of your selected spot.
\nFor example, the code for the top-left is tl, for the mid-middle spot it is mm,
\nand for the lower-right spot, the code is lr.`
);

// printed board

printBoard = (board) =>

    console.log(
        `${Object.values(board)[0]} ${Object.values(board)[1]} ${Object.values(board)[2]}
        \n ${Object.values(board)[3]} ${Object.values(board)[4]} ${Object.values(board)[5]}
        \n ${Object.values(board)[6]} ${Object.values(board)[7]} ${Object.values(board)[8]}`
    );

printBoard(theBoard);
//win announcement and game exit



// players enter moves




//determine and announce winner
