var marks = [45, 68, 72, 92, 51, 99, 49, 70];
var max = marks[0];
for(var i = 0; i<marks.length; i++){
    var element = marks[i];
    if(element > max){
        max = element;
    }
}
console.log(max);