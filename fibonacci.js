function fibonacci(n){
    var fibo = [0, 1];

    for(var i=2; i<=n; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
        // console.log(fibo[i]);
    }
    return fibo;
}


console.log(fibonacci(10));