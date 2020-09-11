var winner = false;
var player = 1;
var board1 = [];
var board2 = [];
var numShips = 0;

<<<<<<< Updated upstream
=======
var waitForSwitch=false;
var horizontal = true;
var placing = true;
var placingNum = 1;

>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
function switchPlayer() {
    if(player = 1) {
        player = 2;
        drawGuessBoard(board1);
        drawPlayerBoard(board2);
=======
function numShipFunction(num){
    document.getElementById('ships').innerHTML = 'Place your ' + placingNum + '-length ship.';
    numShips = num;
    document.getElementById("numShips").remove();
    for(var i = 1; i < 6; i++){
        document.getElementById(i + "Ship").remove();
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    checkForShip(row,col);
    checkForWinner(row,ship);
=======
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
            if (player == 1) {
                placingNum = 1;
                waitForSwitch=true;
            } else {
                placing = false;
                waitForSwitch=true;
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
  document.getElementById('switch').style.visibility='visible';
}
function hideBoards(){
  document.getElementsByClassName('grid-container boardA')[0].style.visibility = 'hidden';
  document.getElementsByClassName('grid-container boardB')[0].style.visibility = 'hidden';
  document.getElementById('switch').style.visibility='hidden';
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
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
        if(board2[row-1][col-1] == '*') {
            board2[row-1][col-1] = 'M';
            document.querySelector("#result").innerText = " MISS "
=======
        if(board1[row-1][col-1] == '*') {
            board1[row-1][col-1] = 'M';
            document.querySelector("#result").innerText = " MISS ";
            colorMiss(row,col);
        }
        else if(board1[row-1][col-1].startsWith('@')) {
            board1[row-1][col-1] = 'H';
            document.querySelector("#result").innerText = " HIT ";
            colorShip(row,col);
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
  return won;
}
=======
    if(won)
    {
      document.getElementById('ships').innerText = " Congrats! Player" + player + " won! Refresh to play again. "
      hideBoards();
      document.getElementById('ready').style.visibility='hidden';
    }
  return won;
}


document.addEventListener("DOMContentLoaded", () => {
    setup();
    // document.addEventListener("resize", draw_screen);
    // window.onresize = draw_screen;
});
>>>>>>> Stashed changes
