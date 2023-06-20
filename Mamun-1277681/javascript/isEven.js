function isEven(number){
const remainder = number%2;
if(remainder===0){
    return true
}
else{
    return false
}
}
const myNumbeIsEven=isEven(351);
console.log(myNumbeIsEven)