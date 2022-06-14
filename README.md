# Tic Tac Toe in JS

Descripton: This project is based on a game I learned in Python. Let's see if I can write a similar program, based on what I have learned, in JavaScript.

## Table of contents

- [Overview](#overview)
  - [My Code](#my-code)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

I was successful at modifying and extending the beginnings of a tic tac toe game I had learned in Chapter 5 of [*Automate the Boring Stuff with Python* by Al Sweigart.](https://automatetheboringstuff.com/2e/chapter5/)
You can [read details about that project here.](https://github.com/Faraja17/tic-tac-toe-in-python)

So, for this project, I am challenging myself to translate the game into JavaScript. 


### My Code

```javascript
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
        `#####
        \n${Object.values(board)[0]}   ${Object.values(board)[1]}   ${Object.values(board)[2]}
        \n${Object.values(board)[3]}   ${Object.values(board)[4]}   ${Object.values(board)[5]}
        \n${Object.values(board)[6]}   ${Object.values(board)[7]}   ${Object.values(board)[8]}
        \n#####`
    );

// printed board + draw alert

printDrawBoard = (board) =>

    alert(
        `${Object.values(board)[0]}   ${Object.values(board)[1]}   ${Object.values(board)[2]}
        \n${Object.values(board)[3]}   ${Object.values(board)[4]}   ${Object.values(board)[5]}
        \n${Object.values(board)[6]}   ${Object.values(board)[7]}   ${Object.values(board)[8]}
        \n It's a draw!`
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
printDrawBoard(theBoard);
```

### Links

- Live Site URL: [Play Tic Tac Toe on CodePen!](https://codepen.io/faraja17/pen/JjpwZdR?editors=1112)

## My process



### Built with

- JavaScript ES6
- 
### What I learned



### Continued development



### Useful resources

- [*Automate the Boring Stuff with Python*](https://automatetheboringstuff.com/2e/chapter5/) - by Al Sweigart, Chapter 5
 
## Author

Faraja Thompson

- [My Personal Website](https://faraja17.github.io/my-website/)
- [My Blog: Teacher to Techie](https://faraja17.github.io/)
- [Faraja Thompson, M.Ed. on LinkedIn](https://www.linkedin.com/in/faraja-thompson-m-ed-70885b8/)

## Acknowledgments

I'd like to acknowledge my son and mentor [DeForestt Thompson](https://github.com/DeForestt).  His steadfast support and encouragement keep me motivated!  Thanks for forcing me to use the command-line, Son <3 <3 <3.
