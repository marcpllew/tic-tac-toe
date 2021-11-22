let turnCount = 0;
let player1 = '0';
let player2 = 'X';

function clickedBoxes(event) {
    turnCount = turnCount + 1; // <= this means turnout will incrememnt by 1 per click because this is inside the onClick function

    if (turnCount % 2 == 0) {
        event.target.innerText = player2; // <=  use event.target to target the specific HTML element the user clicked
    } else {
        event.target.innerText = player1;
    }
    let boxes = document.querySelectorAll('.box');
    console.log(boxes);
    let board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ];
    for (i = 0; i < boxes.length; i++) {
        // console.log(boxes[i].dataset.row);
        board[boxes[i].dataset.row][boxes[i].dataset.column] =
            boxes[i].textContent;
    }
    console.log(board);

    if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        console.log('winner');
        // alert('winner');
    } else if (board[0][0] === board[0][1] && board[0][1] === board[0][2]) {
        console.log('winner');
        // alert('winner');
    } else if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        console.log('winner');
        // alert('winner');
    } else if (board[1][0] === board[1][1] && board[1][1] === board[1][2]) {
        console.log('winner');
        // alert('winner');
    } else if (board[2][0] === board[2][1] && board[2][1] === board[2][2]) {
        console.log('winner');
        // alert('winner');
    } else if (board[0][0] === board[1][0] && board[1][0] === board[2][0]) {
        console.log('winner');
        // alert('winner');
    } else if (board[0][1] === board[1][1] && board[1][1] === board[2][1]) {
        console.log('winner');
        // alert('winner');
    } else if (board[0][2] === board[1][2] && board[1][2] === board[2][2]) {
        console.log('winner');
        // alert('winner');
    } else {
        alert('There is no Winner!');
    }
}
