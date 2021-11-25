let turnCount = 0;
let player1 = '0';
let player2 = 'X';
const statusDisplay = document.querySelector('.game--status');

let board = [
    // nested array to layout (virtual board) game board, every element in array is representative of a box
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
];

function clickedBoxes(event) {
    if (event.target.innerText !== '') {
        return;
    } // when this condition is met continue through program, if not terminate the rest of code, preventing clicked button from being pushed again.

    console.log(event.target.innerText);

    turnCount = turnCount + 1; // <= this means turnCout variable will incrememnt by 1 per click as this is inside the onClick function

    if (turnCount % 2 == 0) {
        // if statement is determaning what character  each player is inputting into each box based on it being odd or even.
        // checking for even numbers
        event.target.innerText = player2; // accesing the event property  and targeting the specific HTML Element player 2 has clicked, when box has been clicked
    } else {
        event.target.innerText = player1; //same as above for player 1
    }
    let boxes = document.querySelectorAll('.box'); //returns all 'box'class elements in HTML
    // console.log(boxes);

    // console.log(board);
    for (i = 0; i < boxes.length; i++) {
        // looping through boxes
        // console.log(boxes[i].dataset.row);
        board[boxes[i].dataset.row][boxes[i].dataset.column] =
            boxes[i].textContent;
        // will return all the contents of 'boxes'. dataset is accesing the content of row and column, and populating the board array
    }
    console.log(board);
    if (
        board[1][1] !== '' &&
        board[0][0] === board[1][1] &&
        board[1][1] === board[2][2]
    ) {
        console.log('winner');
        alert('You Win!');
    } else if (
        board[0][1] !== '' &&
        board[0][0] === board[0][1] &&
        board[0][1] === board[0][2]
    ) {
        console.log('winner');
        alert('You Win!');
    } else if (
        board[1][1] !== '' &&
        board[0][2] === board[1][1] &&
        board[1][1] === board[2][0]
    ) {
        console.log('winner');
        alert('You Win!');
    } else if (
        board[1][1] !== '' &&
        board[1][0] === board[1][1] &&
        board[1][1] === board[1][2]
    ) {
        console.log('winner');
        alert('You Win!');
    } else if (
        board[2][1] !== '' &&
        board[2][0] === board[2][1] &&
        board[2][1] === board[2][2]
    ) {
        console.log('winner');
        alert('You Win!');
    } else if (
        board[1][0] !== '' &&
        board[0][0] === board[1][0] &&
        board[1][0] === board[2][0]
    ) {
        console.log('winner');
        alert('You Win!');
    } else if (
        board[1][1] !== '' &&
        board[0][1] === board[1][1] &&
        board[1][1] === board[2][1]
    ) {
        console.log('winner');
        alert('You Win!');
    } else if (
        board[1][2] !== '' &&
        board[0][2] === board[1][2] &&
        board[1][2] === board[2][2]
    ) {
        console.log('winner');
        alert('You Win!');
    } else if (turnCount >= 9) {
        console.log('Game Over! Try Again');
        alert('Game Over! Try Again');
    }
}
//creat a function, loop through boxes reset turncount:

function restartGame() {
    // reset turcount to 0, reset board back to empty board
    //reset the textcontent on each box element in the DOM(page)
    turnCount = 0;
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ];

    let boxes = document.querySelectorAll('.box'); //returns all 'box' elements in HTML
    // console.log(boxes);

    // console.log(board);
    for (i = 0; i < boxes.length; i++) {
        boxes[i].textContent = '';
    }
}
