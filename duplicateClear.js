function duplicateClear(numbers){
    var uniqueNumbers = [];
    for(var i=0; i<numbers.length; i++){
        var element = numbers[i];
        var index = uniqueNumbers.indexOf(element);
        if(index == -1){
            uniqueNumbers.push(element);
        }
    }
    return uniqueNumbers;
}

result = duplicateClear([1,2, 3, 4, 5, 4, 7, 9, 2, 4, 6, 1, 9, 10]);
console.log(result);