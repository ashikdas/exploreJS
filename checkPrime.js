function isPrime(n){
    for (var i=2; i<n; i++){
        if (n % i == 0){
            return 'Not a prime Number'
        }
    }
    return 'The Number is Prime Number'
}

var result = isPrime(109);
console.log(result);