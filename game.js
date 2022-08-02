// we start by making a game loop (a function that keeps repeating its self hence supporting updating)
 
import {update as updateSnake, draw as drawSnake, SNAKE_SPEED} from  './snakeFun.js'
import {draw as drawFood , update as updateFood} from './food.js'
import {checkSnakeHead , snakeIntersect } from './snakeFun.js'
import {outsideGrid} from './gridPos.js'



const gameBoard = document.getElementById('gameBoard');

 var lastRenderTime  = 0;
 let gameOver = false;
function main(currentTime){
    if(gameOver){
        if(confirm("You Lost :) \n Press OK to restart")){
            window.location = '/';
        }
        return
    }
    window.requestAnimationFrame(main);
    const secondSinceLastRender = (currentTime - lastRenderTime)/1000;
    if (secondSinceLastRender < 1/SNAKE_SPEED) return
    
        
    
    lastRenderTime=currentTime;
    
 
     update();
     draw();
    // next we need to set up a logic for the Game.
    // Two essential functions when building a game
    // update() this is function is  established to update the actions 
    // draw()  this is one responsible for showing what's updated in the update();
}
window.requestAnimationFrame(main);
 function update()
 {
     updateSnake();
     updateFood();
     checkForDeath();
     
 }
 function draw(){
    gameBoard.innerHTML="";// helps the snake leave the last part blank after going.
    drawSnake(gameBoard);
    drawFood(gameBoard);
 }
 function checkForDeath(){
    gameOver = outsideGrid(checkSnakeHead()) || snakeIntersect();
 }