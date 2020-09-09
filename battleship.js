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
}
