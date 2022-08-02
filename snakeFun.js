import { getInputDirections } from "./input.js";

export var SNAKE_SPEED= 4;
 // creating the snake body inside the gameboard;
 // how we are going to represent our snake {using x and y position since we are using grid method}
 const snakeBody = [{x: 11, y: 11} ];
 let segmentNumber = 0;
export function update(){
    // we want to make our snake moves
   const inputDirections = getInputDirections(); // inputing the controls for movement
   addSegments();
   for (var i = snakeBody.length-2; i>= 0; i--){
    snakeBody[i+1]= { ...snakeBody[i] };// making another object of duplicate known as snakebody
  }
    snakeBody[0].x += inputDirections.x;
    snakeBody[0].y += inputDirections.y;
}
export function checkSnakeHead(){
    return snakeBody[0];
}

export function snakeIntersect(){
      return onSnake(snakeBody[0], {ignoreHead: true});
}
 

 

export function draw(gameBoard){
    
    snakeBody.forEach(segment => {
    const snakeElement =  document.createElement('div');
    snakeElement.style.gridRowStart=  segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    
    snakeElement.classList.add('snake');
    gameBoard.appendChild(snakeElement);
    })
}

export function onSnake(position , {ignoreHead = false} = {}){ // function to see when snake is on the food
    return snakeBody.some((segment,index) =>{
        if(ignoreHead && index === 0) return false
        return equalPosition(segment,position);
    })
}
 function equalPosition (pos1,pos2){
    return pos1.x === pos2.x && pos1.y === pos2.y ;
 }

export function expandSnake(amount){
     return segmentNumber += amount;
}
 
function addSegments(){
    for(let i=0 ; i<segmentNumber; i++ )
    {
        snakeBody[snakeBody.length]= {...snakeBody[snakeBody-1]}
    } // why snakeBody[snakeBody.length-1]?
    
    // we have to stop the segment number to make it move 
     segmentNumber = 0;
}