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

document.addEventListener("DOMContentLoaded", () => {
    createBoards();
});

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

  board1[0][0] = '@';
  board2[0][1] = '@';}

function clickCheck(row, col)
{
    checkForShip(row,col);
    checkForWinner();
}

function switchPlayer() {
    if(player == 1) {
        player = 2;
        drawGuessBoard(board1);
        drawPlayerBoard(board2);
        document.querySelector("#playersTurn").innerText = " It is now Player 2's turn! ";
    }
    else {
        player = 1;
        drawGuessBoard(board2);
        drawPlayerBoard(board1);
        document.querySelector("#playersTurn").innerText = " It is now Player 1's turn! ";
    }
}

function drawGuessBoard(newBoard) {
    for(var i = 0; i<9; i++){
        for(var j = 0; j<9; j++) {
            if(newBoard[i][j] == 'H')
            {
                colorShip((i+1),(j+1));
            }
            else if(newBoard[i][j] == 'M') {
                colorMiss((i+1),(j+1));          
             }
             else {
                 colorBlue((i+1), (j+1));
             }
        }
    }
}

function drawPlayerBoard(newBoard) {
    for(var i = 0; i<9; i++){
        for(var j = 0; j<9; j++) {
            if(newBoard[i][j] == '@' || newBoard[i][j] == 'H') {
                colorShip2((i+1), (j+1));
            }
            else {
                colorMiss2((i+1),(j+1));
            }
            
        }
    }
}

function colorShip(col, row){
    document.getElementById('A'+col+row).classList.remove('empty');
    document.getElementById('A'+col+row).classList.remove('miss');
    document.getElementById('A'+col+row).classList.add('red');
}

function colorMiss(col, row){
    document.getElementById('A'+col+row).classList.remove('empty');
    document.getElementById('A'+col+row).classList.remove('red');
    document.getElementById('A'+col+row).classList.add('miss');
}


function colorShip2(col, row){
    document.getElementById('B'+col+row).classList.remove('empty');
    document.getElementById('B'+col+row).classList.remove('miss');
    document.getElementById('B'+col+row).classList.add('red');
}

function colorMiss2(col, row){
    document.getElementById('B'+col+row).classList.remove('empty');
    document.getElementById('B'+col+row).classList.remove('red');
    document.getElementById('B'+col+row).classList.add('miss');
}

function colorBlue(col, row){
    document.getElementById('A'+col+row).classList.remove('red');
    document.getElementById('A'+col+row).classList.remove('miss');
    document.getElementById('A'+col+row).classList.add('empty');
}

function checkForShip(row, col)
{
    if(player == 1) {
       if(board2[row-1][col-1] == '*') {
           board2[row-1][col-1] = 'M';
           document.querySelector("#result").innerText = " MISS ";
           colorMiss(row, col);
       }
       else if(board2 == '@') {
           board2[row-1][col-1] = 'H';
           document.querySelector("#result").innerText = " HIT ";
           colorShip(row,col);
       }
       else {
        document.querySelector("#result").innerText = " You have already guessed here, please try again. ";
       }
    }
    else {
        if(board1[row-1][col-1] == '*') {
            board1[row-1][col-1] = 'M';
            document.querySelector("#result").innerText = " MISS "
            colorMiss(row,col);
        }
        else if(board1[row-1][col-1] == '@') {
            board1[row-1][col-1] = 'H'
            document.querySelector("#result").innerText = " HIT "
            colorShip(row,col);
        }
        else {
            document.querySelector("#result").innerText = " You have already guessed here, please try again. ";
        }
    }
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
      document.getElementById('ships').innerText = " Congrats! You won. Refresh to play again. "
    }
  return won;
}
