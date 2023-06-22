function Mysum(...numbers){
    let sum = 0 ;
    for ( let number of numbers ) {
        sum += number ;
        console.log(sum);
    }
    return sum ;
}

Mysum ( 50, 20 , 50, 100 )
