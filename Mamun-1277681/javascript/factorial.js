// function sumOfFactorial(numbers){
//     let sum =1;
//     for (let i=numbers; i>1; i--){
//         sum*=i;
//     }
//     return sum;
// }
// const result = sumOfFactorial(9);
// console.log(result);
function sumOfFactorial(numbers){
    let sum = 1;
    for(i=1; i<numbers; i++){
        sum*=i;
    }
    return sum
    
}

const fact = sumOfFactorial(6);
console.log(fact);
function sumOfFactorial(number){
    let i = 1;
    let result = 1;
    while(i<=number){
        result+=i;
        i++
    }
    return sum;
}
const factorila =sumOfFactorial(8);
console.log(factorila);
