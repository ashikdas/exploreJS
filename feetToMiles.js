function feetToMile(feet){
    var mile = feet/ 5280;
    return mile;
}
var result = feetToMile(50000);
console.log("Feet to Mile is: ", result , "miles");