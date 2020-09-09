
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

function checkForWinner()
{
  var won = false;
  var numH = 0;
    for(int i=0; i<9; i++)
    {
      for(int j=0; j<9; j++)
      {
        if(board[i][j]=='H')
        numH++;
      }
    }
    if(numShips==1 && numH==1)
    {
        won = true;
    }
    if(numShips==2 && numH==3)
    {
        won = true;
    }
    if(numShips==3 && numH==6)
    {
        won = true;
    }
    if(numShips==4 && numH==10)
    {
        won = true;
    }
    if(numShips==5 && numH==15)
    {
        won = true;
    }
  return won;
}
