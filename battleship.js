var winner = false;
var player = 1;
var board1 = [];
var board2 = [];
var numShips = 0;

/* * = empty
    M = Miss
    H = Hit
    @ = Ship
*/

//length: length of the ship
//horizontal: true if the boat is being placed horizontally
function placeShip(row,col,board,length,horizontal){
  if(checkPlacement(row,col,board,length,horizontal)){
    for(i = 0; i < length; i++){
      if(board == 1){
        if(horizontal){
          board1[row][col+i]=length;
        }else{
          board1[row+i][col]=length;
        }
      }
      else{
        if(horizontal){
          board2[row][col+i]=length;
        }else{
          board2[row+i][col]=length;
        }
      }
    }
  }
}
function checkPlacement(row,col,board,length,horizontal){
  let valid = true;
  if(horizontal){
    if(9 < (col+length)){
      valid = false;
    }
    else{
      for(i = 0; i < length; i++){
        if(board == 1 && board1[row+i][col]!="*"){
          valid = false;
          break;
        }
        if(board == 2 && board2[row+i][col]!="*"){
          valid = false;
          break;
        }
      }
    }
  }else{
    if(9 > (row+length)){
      valid = false;
    }
    else{
      for(i = 0; i < length; i++){
        if(board == 1 && board1[row+i][col]!="*"){
          valid = false;
          break;
        }
        if(board == 2 && board2[row+i][col]!="*"){
          valid = false;
          break;
        }
      }
    }
  }
  return valid;
}

function createBoards(){
    console.log("the boards were created");
  for(i = 0; i < 9; i++){
    board1[i]=[];
    board2[i]=[];
    for(j = 0; j < 9; j++){
      board1[i][j]="*";
      board2[i][j]="*";
    }
  }
}

function clickCheck(row, col)
{
    checkForShip(row,col);
   // checkForWinner(row,ship);
}

function switchPlayer() {
    if(player = 1) {
        player = 2;
        drawGuessBoard(board1);
        drawPlayerBoard(board2);
    }
    else {
        player = 1;
        drawGuessBoard(board2);
        drawPlayerBoard(board1);
    }
}

function drawGuessBoard(newBoard) {
    console.log("drawGuessBoard got called");
    for(var i = 0; i<9; i++){
        for(var j = 0; j<9; j++) {
            if(newBoard[i][j] != '@')
            {
                document.querySelector("cell"+(i+1)+(j+1)).innerText = newBoard [i][j];
            }
            else {
                document.querySelector("cell"+(i+1)+(j+1)).innerText = '*';            }
        }
    }
}

function drawPlayerBoard(newBoard) {
    num = 1;
    let coord = document.getElementById("playerBoard"+1+1);
    for(var i = 0; i<9; i++){
        for(var j = 0; j<9; j++) {
            coord = newBoard[i][j]
            coord = document.getElementById("guessBoard" + (i+1) + (j+1));
        }
    }
}


var row = '';
var col = '';
function checkForShip(row, col)
{
    if(player == 1) {
       if(board2[row-1][col-1] == '*') {
           board2[row-1][col-1] = 'M';
           document.getElementById('cell'+col+row).innerHTML = " MISS "
       }
       else {
           board2[row-1][col-1] = 'H'
           document.getElementById('cell'+col+row).innerHTML = " HIT "
       }
    }
    else {
        if(board2[row-1][col-1] == '*') {
            board2[row-1][col-1] = 'M';
            document.getElementById('cell'+col+row).innerHTML = " MISS "
        }
        else {
            board2[row-1][col-1] = 'H'
            document.getElementById('cell'+col+row).innerHTML = " HIT "
        }
    }
drawGuessBoard(board1);
}

function checkForWinner()
{
  var won = false;
  var numH = 0;
    for(var i=0; i<9; i++)
    {
      for(var j=0; j<9; j++)
      {
        if(player == 1)
        {
          if(board1[i][j]=='H')
          {
            numH++;
          }
        }
        if(player == 2)
        {
          if(board2[i][j]=='H')
          {
            numH++;
          }
        }
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
    if(won)
    {
      document.querySelector("#ships").innerText = " Congrats! You won. Refresh to play again. "
    }
  return won;
}
