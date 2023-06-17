let x = function ( a, b, c ) {
    if ( a > b && a > c ) {
        return a + '  is biggest' ;
    } else if ( b > a && b > c ) {
        return b + "  is biggest" ;
    } else {
        return c + "  is biggest"
    }
    
}

let output= x ( 10 , 20 , 30) ;

console.log(output);





