let turnCount = 0;
let player1 = '0';
let player2 = 'X';
let board = [
    // nested array to layout game board
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
        // checking for even numbers
        event.target.innerText = player2; // accesing the event property  and targeting the specific HTML Element player 2 has clicked
    } else {
        event.target.innerText = player1; //same as above for player 1
    }
    let boxes = document.querySelectorAll('.box'); //returns all 'box' elements in HTML
    // console.log(boxes);

    // console.log(board);
    for (i = 0; i < boxes.length; i++) {
        // looping through boxes
        // console.log(boxes[i].dataset.row);
        board[boxes[i].dataset.row][boxes[i].dataset.column] =
            boxes[i].textContent; // Dont understand this bit? Is this populating all my data-row, data-column elemnts from HTML into the board array above
        // will return all the contents of 'boxes'
    }

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
        alert('Game Over! Try Again!');
    }
}
//creat a function, loop through boxes reset turncount:

function restartGame() {
    // reset turcount to 0, reset board back to empty board
    //reset the textcontent on each box element in the DOM(page)
    turnCount = 0;
    board = [
        // nested array to layout game board
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
