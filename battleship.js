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

function hi() {
    console.log("HI");
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
    console.log("HI i am checking for ship");
    if(player == 1) {
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
  let valid = true;
  if(horizontal){
    if(9 > (x+length)){
      valid = false;
    }
    else{
      for(i = 0; i < length; i++){
        if(board == 1 && board1[x+i][y]!="*"){
          valid = false;
          break;
        }
        if(board == 2 && board2[x+i][y]!="*"){
          valid = false;
          break;
        }
      }
    }
  }else{
    if(9 > (y+length)){
      valid = false;
    }
    else{
      for(i = 0; i < length; i++){
        if(board == 1 && board1[x+i][y]!="*"){
          valid = false;
          break;
        }
        if(board == 2 && board2[x+i][y]!="*"){
          valid = false;
          break;
        }
      }
    }
  }
  return valid;
}
function createBoards(){
//This will also work, but I think might be less readable
//  let board1 = Array(9).fill().map(() => Array(9).fill("*"));
console.log("HI I am filling boards");
  for(i = 0; i < 9; i++){
    board1[i]=[];
    board2[i]=[];
    for(j = 0; j < 9; j++){
      board1[i][j]="*";
      board2[i][j]="*";
    }
  }
  board2[0][0] = '@';
}
