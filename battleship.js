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

/**
 * Perform gameplay actions on a given row, col pair.
 * @param {number} row - The row to update.
 * @param {number} col - The col to update.
 */
function click(row, col) 
{
    checkForShip(row,col);
    checkForWinner(row,ship);
}

var row = '';
var col = '';
/**
 * Check if a ship is located at a given row, col pair.
 * @param {number} row - The row to check.
 * @param {number} col - The col to check.
 */
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
