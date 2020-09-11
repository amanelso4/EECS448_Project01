var winner = false;
var player = 1;
var board1 = [];
var board2 = [];
var numShips = 0;

var waitForSwitch=false;
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
    document.getElementById("numShips").remove();
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
            board[row][col+i]="@"+length;
        }else{
            board[row+i][col]="@"+length;
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


function clickCheck(board_num, col, row)
{
    console.log(board_num, row, col);
    if (placing && !waitForSwitch) {
        if (numShips == 0 || board_num !== 2) {
            // Have not selected number of ships or clicked wrong board
            return;
        }
        if (placingNum <= numShips) {
            if (placeShip(row-1, col-1, getBoard(), placingNum, horizontal)) {
                placingNum++;
            }
        }
        if (placingNum > numShips) {
          document.getElementById('ready').style.display='none';
            if (player == 1) {
                placingNum = 1;
                waitForSwitch=true;
            } else {
                placing = false;
                waitForSwitch=true;
                document.getElementById('toggleDir').style.visibility='hidden';
            }
        }
        if (placing) {
            document.getElementById('ships').innerHTML = 'Place your ' + placingNum + '-length ship.';
        } else {
            document.getElementById('ships').innerHTML = 'CHOOSE WHERE TO SHOOT.';
        }
    } else if (board_num == 1 &&!waitForSwitch) {
        checkForShip(row,col);
        waitForSwitch=true;
        document.getElementById('ready').style.display='none';
    }
}

function getBoard(num=NaN) {
    if (isNaN(num)) {
        num = player;
    }
    if(num === 1) {
        return board1;
    }
    else {
        return board2;
    }
}

function switchPlayer() {
  if(waitForSwitch){
    if(player == 1) {
        player = 2;
        hideBoards();
        drawGuessBoard(board1);
        drawPlayerBoard(board2);
        document.querySelector("#playersTurn").innerText = " It is now Player 2's turn! ";
    }
    else {
        player = 1;
        hideBoards();
        drawGuessBoard(board2);
        drawPlayerBoard(board1);
        document.querySelector("#playersTurn").innerText = " It is now Player 1's turn! ";
    }
    waitForSwitch=false;
    document.getElementById('ready').style.display='inline-block';
    document.querySelector("#result").innerText = "  ";
  }
  else{
    document.querySelector("#result").innerText = " You have not finished your turn! ";
  }
  checkForWinner();
}
function drawBoards(){
  document.getElementsByClassName('grid-container boardA')[0].style.visibility = 'visible';
  document.getElementsByClassName('grid-container boardB')[0].style.visibility = 'visible';
  document.getElementById('switch').style.display='inline-block';
  document.getElementById('ready').style.display='none';
}
function hideBoards(){
  document.getElementsByClassName('grid-container boardA')[0].style.visibility = 'hidden';
  document.getElementsByClassName('grid-container boardB')[0].style.visibility = 'hidden';
  document.getElementById('switch').style.display='none';
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

function colorCell(row, col) {
    row++; // Account for HTML 1-indexing
    col++;
    document.getElementById('cell'+col+row).classList.remove('empty');
    document.getElementById('cell'+col+row).classList.add('red');
}

function drawPlayerBoard(newBoard) {
    for(var i = 0; i<9; i++){
        for(var j = 0; j<9; j++) {
            if(newBoard[i][j].startsWith('@') || newBoard[i][j] == 'H') {
                colorShip2((i+1), (j+1));
            }
            else if(newBoard[i][j] == 'M') {
                colorMiss2((i+1),(j+1));
             }
             else {
                 colorBlue2((i+1), (j+1));
             }

        }
    }
}

function colorShip(row, col){
    document.getElementById('A'+col+row).classList.remove('empty');
    document.getElementById('A'+col+row).classList.remove('miss');
    document.getElementById('A'+col+row).classList.add('red');
}

function colorMiss(row, col){
    document.getElementById('A'+col+row).classList.remove('empty');
    document.getElementById('A'+col+row).classList.remove('red');
    document.getElementById('A'+col+row).classList.add('miss');
}


function colorShip2(row, col){
    document.getElementById('B'+col+row).classList.remove('empty');
    document.getElementById('B'+col+row).classList.remove('miss');
    document.getElementById('B'+col+row).classList.add('red');
}

function colorMiss2(row, col){
    document.getElementById('B'+col+row).classList.remove('empty');
    document.getElementById('B'+col+row).classList.remove('red');
    document.getElementById('B'+col+row).classList.add('miss');
}

function colorBlue(row, col){
    document.getElementById('A'+col+row).classList.remove('red');
    document.getElementById('A'+col+row).classList.remove('miss');
    document.getElementById('A'+col+row).classList.add('empty');
}
function colorBlue2(row, col){
    document.getElementById('B'+col+row).classList.remove('red');
    document.getElementById('B'+col+row).classList.remove('miss');
    document.getElementById('B'+col+row).classList.add('empty');
}

function checkForShip(row, col)
{
    if(player == 1) {
       if(board2[row-1][col-1] == '*') {
           board2[row-1][col-1] = 'M';
           document.querySelector("#result").innerText = " MISS ";
           colorMiss(row, col);
       }
       else if(board2[row-1][col-1].startsWith('@')) {
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
            document.querySelector("#result").innerText = " MISS ";
            colorMiss(row,col);
        }
        else if(board1[row-1][col-1].startsWith('@')) {
            board1[row-1][col-1] = 'H';
            document.querySelector("#result").innerText = " HIT ";
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
      document.getElementById('ships').innerText = " Congrats! Player" + player + " won! Refresh to play again. "
      hideBoards();
      document.getElementById('ready').style.display='none';
    }
  return won;
}


document.addEventListener("DOMContentLoaded", () => {
    setup();
    // document.addEventListener("resize", draw_screen);
    // window.onresize = draw_screen;
});
