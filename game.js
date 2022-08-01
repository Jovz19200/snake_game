// we start by making a game loop (a function that keeps repeating its self hence supporting updating)
 var SNAKE_SPEED= 2;
 var lastRenderTime  = 0;

function main(currentTime){
    window.requestAnimationFrame(main);
    const secondSinceLastRender = (currentTime - lastRenderTime)/1000;
    if (secondSinceLastRender < 1/SNAKE_SPEED) return
    
        
    
    lastRenderTime=currentTime;
    console.log("RENDER");
 

    // next we need to set up a logic for the Game.
    // Two essential functions when building a game
    // update() this is function is  established to update the actions 
    // draw()  this is one responsible for showing what's updated in the update();
}
window.requestAnimationFrame(main);
 function update()
 {

 }
 function draw(){

 }