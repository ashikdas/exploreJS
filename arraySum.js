function getArraySun(numbers){
    var sum = 0;
    for (var i =0; i< numbers.length; i++){
        sum = sum + numbers[i];
    }
    return sum;
}

var numbers = [1,2,3,5,4,96, 23, 52, 91, 98,51];
var result = getArraySun(numbers);
console.log(result);