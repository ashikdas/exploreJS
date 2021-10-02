function woodCalculator(chair, table, couch){
    var wood = 0;
    wood = wood + (chair * 1) + (table * 3) + ( couch * 5);
    return wood;
    
}


var result = woodCalculator(5, 7, 2);
console.log("Wood needed", result, " quebec feet");