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
function placeShips(){

}
//x: x position
//y: y position
//length: length of the ship
//horizontal: true if the boat is being placed horizontally
function placeShip(x,y,board,length,horizontal){
  if(checkPlacement(x,y,board,length,horizontal)){
    if(horizontal){
      for(i = 0; i < length; i++){ 
      }
    }else{

    }
  }
}

      

function click(row, col) 
{
    checkForShip(row,col);
    checkForWinner(row,ship);
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
    num = 1;
    let coord = document.getElementById("guessBoard"+num);
    for(var i = 0; i<9; i++){
        for(var j = 0; j<9; j++) {
            if(newBoard[i][j] != '@')
            {
                coord = newBoard[i][j]
            }
            else {
                coord = '*';
            }
            num ++;
            coord = document.getElementById("guessBoard" + num);
        }
    }
}

function drawPlayerBoard(newBoard) {
    num = 1;
    let coord = document.getElementById("playerBoard"+num);
    for(var i = 0; i<9; i++){
        for(var j = 0; j<9; j++) {
            coord = newBoard[i][j]
            num ++;
            coord = document.getElementById("playerBoard" + num);
        }
    }
}

var row = '';
var col = '';
function checkForShip(row, col)
{
    console.log("HI i am checking for ship");    if(player == 1) {
       if(board2[row-1][col-1] == '*') {
           board2[row-1][col-1] = 'M';
           document.querySelector("#result").innerText = " MISS "
       }
       else {
           board2[row-1][col-1] = 'H'
           document.querySelector("#result").innerText = " HIT "
       }
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
    }
}

function checkPlacement(x,y,board,length,horizontal){
}

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
  for(i = 0; i < 9; i++){
    board1[i]=[];
    board2[i]=[];
    for(j = 0; j < 9; j++){
      board1[i][j]="*";
      board2[i][j]="*";
    }
  }
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
        if(board1[i][j]=='H') //will need to be updated to work for either board
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
