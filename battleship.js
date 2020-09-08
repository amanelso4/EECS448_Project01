

var winner = false;
var player = 1;
var board1 = [[]];
var board2 = [[]];
var numShips = 0;

/* * = empty
    M = Miss
    H = Hit
    @ = Ship
*/

function click(row, col) 
{
    checkForShip(row,col);
    checkForWinner(row,ship);
}

function switchPlayer() {
    /*  
    calls drawBoard
    sets player variable to one or two
    */
}

function drawBoard(newBoard) {
    /*  
    switch what board is being displayed based on parameter
    */
}

var row = '';
var col = '';
function checkForShip(row, col)
{
    if(player == 1) {
       if(board2[row-1][col-1] == '*') {
           board2[row-1][col-1] = 'M';
           document.querySelector("#result").innerText = " MISS "
       }
       else {
           board2[row-1][col-1] = 'H'
           document.querySelector("#result").innerText = " HIT "
       }
       player = 2;
    }
    else {
        if(board2[row-1][col-1] == '*') {
            board2[row-1][col-1] = 'M';
            document.querySelector("#result").innerText = " MISS "
        }
        else {
            board2[row-1][col-1] = 'H'
            document.querySelector("#result").innerText = " HIT "
        }
        player = 1;
    }
}




