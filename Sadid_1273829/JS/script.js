// alert('This is an alert from external JS.');

let names = "Mamun";
let age = 25;
console.log(`My name is ${names}. I'm ${age} years old.`);

    function fun(){
        let x = 117;

        if (x == 0 ) {
            `0 is not allowed.`
        } else if (x == 1) {
            `1 is a prime number`
        }
        else if (x == 2) {
            `2 is a prime number`
        } else{
            for(i=2; i<x; i++){
                if (x%i==0) {
                    return `${x} is not a prime number.`
                }
            }
            return `${x} is a prime number.`
        }
    }
    console.log(fun())


// js pop()

const fruits = ["Mango","Banana", "Orange", "Apple", "Goava", "Grape"]
fruits.pop();
