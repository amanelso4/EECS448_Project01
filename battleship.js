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
  for(i = 0; i < 9; i++){
    board1[i]=[];
    board2[i]=[];
    for(j = 0; j < 9; j++){
      board1[i][j]="*";
      board2[i][j]="*";
    }
  }
}
