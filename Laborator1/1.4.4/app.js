function getFibonacci(n){
    if(!(typeof n === "number")) {return "not allowed";}
    if( n < 1 || n > 10) { return "not allowed";}

    var fibonacci = [];

    for(var i = 1 ; i <= n ; i++){
        fibonacci[i-1] = calculateFibonnaci(i);
    }
    
    return fibonacci;
}

function calculateFibonnaci(n){
    if( n == 0 || n == 1 ) return n;
    return calculateFibonnaci(n-1) + calculateFibonnaci(n-2);
}