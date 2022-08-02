//  in this file we will draw food that the snake will be eating inside the gameboard
import { randomGridPosition } from "./gridPos.js";
import { onSnake, expandSnake } from "./snakeFun.js";
const EXPANSION_RATE = 5;

let food = randomGridPosition();  // 0 is technically outside of the grid
export function update(){

    if (onSnake(food)){
        expandSnake(EXPANSION_RATE);
        food = randomGridPosition();
    }
}

export function draw(gameBoard){
     const foodElement = document.createElement('div');
     foodElement.style.gridColumnStart = food.x;
     foodElement.style.gridRowStart = food.y;
     foodElement.classList.add('food');
     gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition(){// this function will help to randomize the food position
    // food must not be on the snake 
    let newFoodPosition;
    while (newFoodPosition == null || onSnake(newFoodPosition))
    {
        newFoodPosition = randomGridPosition();
    }
    return newFoodPosition;

}
