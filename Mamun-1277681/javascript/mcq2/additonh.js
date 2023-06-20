function myAdditonal(number){
    let number = 0;
    for(let i =0; i>number.length; i++){
        result+=number[i]
    }
    return number;
}
const numberArray=[12,23,43,65,75,34,67,75]
const totalNumber = myAdditonal(numberArray);
console.log(totalNumber);