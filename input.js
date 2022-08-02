// this file is created to match the keyboard arrows and the program
let inputDirections = {x: 0 , y: 0}

// we have to put the variable to prevent moving from left to right and from up to down as it can't happen in the snake game
let lastInputDirection = {x: 0, y: 0}
window.addEventListener('keydown', e =>{

    switch(e.key){
        case "ArrowUp":

            if (lastInputDirection.y !== 0) break;
            // if you press UpArrow or DownArrow while the snake is in y direction it will ignore and continue
            inputDirections={ x: 0, y: -1};
            break;

        case "ArrowDown":

            if (lastInputDirection.y !== 0) break;
            inputDirections={ x: 0, y: 1};
            break;

        case "ArrowRight":
             //// if you press RightArrow or LeftArrow while the snake is in x direction it will ignore and continue   
            if (lastInputDirection.x !== 0) break;
            inputDirections={ x: 1 , y: 0};
            break; 

        case "ArrowLeft":

            if (lastInputDirection.x !== 0) break;
            inputDirections={ x: -1 , y: 0};
            break;                   
    }

})

export function getInputDirections(){
    lastInputDirection = inputDirections;
    return inputDirections;
}
