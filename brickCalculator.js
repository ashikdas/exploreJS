function brickCalculator(floor){
    var brick = 0;
    if(floor > 20){
        brick = brick + (floor-20)* 10* 1000;
        brick = brick + 10* 12* 1000;
        brick = brick + 10 * 15 * 1000;
        return brick;
    }
    else if (floor > 10 && floor <= 20){
        brick = brick + (floor-10)* 12* 1000;
        brick = brick + 10* 15* 1000;
        return brick;
    }
    else if (floor <= 10){
        brick = brick + floor * 15 * 1000;
        return brick;
    }
    else{
        return "Your input is WRONG"
    }
    
}

var result = brickCalculator(7);
console.log("Number of Brick needed is: ", result);