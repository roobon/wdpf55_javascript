function findMax() {
    // var max = -Infinity ;  ( for negative value )
    var max = -1 ;
    for ( let i = 0 ; i< arguments.length; i++ ){
        if ( arguments[i] > max ) {
            max = arguments[i] ;
        }
    }
    return max ;
}


console.log(findMax( 70,60,20, 10,));
