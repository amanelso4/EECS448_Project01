var winner = false;
var player = 1;
var board1 = [];
var board2 = [];
var numShips = 0;

var horizontal = true;
var placing = true;
var placingNum = 1;

/* * = empty
    M = Miss
    H = Hit
    @ = Ship
*/


function numShipFunction(num){
    document.getElementById('ships').innerHTML = 'Place your ' + placingNum + '-length ship.';
    numShips = num;

    for(var i = 1; i < 6; i++){
        document.getElementById(i + "Ship").remove();
    }
};

function toggleDirection() {
    horizontal = !horizontal;

    let place_dir = "";
    if (horizontal) {
        place_dir = "Horizontally";
    } else {
        place_dir = "Vertically";
    }
    document.getElementById('toggleDir').innerHTML = 'Placing ' + place_dir;
}


//length: length of the ship
//horizontal: true if the boat is being placed horizontally
function placeShip(row,col,board,length,horizontal){
  if(checkPlacement(row,col,board,length,horizontal)){
    for(i = 0; i < length; i++){
        if(horizontal){
            board[row][col+i]=length;
        }else{
            board[row+i][col]=length;
        }
    }
    drawPlayerBoard(board);
    return true;
  } else {
      return false;
  }
}
function checkPlacement(row,col,board,length,horizontal){
  let valid = true;
  if(horizontal){
    if(9 < (col+length)){
      valid = false;
    }
    else{
      for(let i = 0; i < length; i++){
        if(board[row][col+i]!="*"){
          valid = false;
          break;
        }
      }
    }
  }else{
    if(9 < (row+length)){
      valid = false;
    }
    else{
      for(let i = 0; i < length; i++){
        if(board[row+i][col]!="*"){
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


function setup() {
    createBoards();
}


function clickCheck(col, row)
{
    col--;  // Account for 1-indexing in HTML code
    row--;
    console.log(row, col);
    if (placing) {
        if (numShips == 0) {
            return;
        }
        if (placingNum <= numShips) {
            if (placeShip(row, col, getBoard(), placingNum, horizontal)) {
                placingNum++;
            }
        }
        if (placingNum > numShips) {
            if (player == 1) {
                placingNum = 1;
                player = 2;
            } else {
                placing = false;
            }
        }
        if (placing) {
            document.getElementById('ships').innerHTML = 'Place your ' + placingNum + '-length ship.';
        } else {
            document.getElementById('ships').innerHTML = 'CHOOSE WHERE TO SHOOT.';
        }
    } else {
        checkForShip(row,col);
    }
}

function getBoard() {
    if(player == 1) {
        return board1;
    }
    else {
        return board2;
    }
}

function switchPlayer() {
    if(player == 1) {
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
                document.querySelector("cell"+(j+1)+(i+1)).innerText = newBoard[i][j];
            }
            else {
                document.querySelector("cell"+(j+1)+(i+1)).innerText = '*';            }
        }
    }
}

function colorCell(row, col) {
    row++; // Account for HTML 1-indexing
    col++;
    document.getElementById('cell'+col+row).classList.remove('empty');
    document.getElementById('cell'+col+row).classList.add('red');
}

function drawPlayerBoard(newBoard) {
    num = 1;
    for(var i = 0; i<9; i++){
        for(var j = 0; j<9; j++) {
            coord = newBoard[i][j];
            if (coord != "*") {
                colorCell(i, j);
            }
            coord = document.getElementById("guessBoard" + (j+1) + (i+1));
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


document.addEventListener("DOMContentLoaded", () => {
    setup();
    // document.addEventListener("resize", draw_screen);
    // window.onresize = draw_screen;
});