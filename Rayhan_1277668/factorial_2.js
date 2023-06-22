function factorial (x){
    if ( x <= 1 ) return 1 ;
    return x * factorial(x-1) ; // recursive
}

console.log(factorial(4));