
    function getTable(N) {
        var table = [];
        for (var i= 1; i<=10; i++){
            table.push(N*i);
        }
        return table;
    }
    
    result = getTable(9);
    for(var j= 0; j<result.length; j++){
        console.log(result[j]);
    }
    