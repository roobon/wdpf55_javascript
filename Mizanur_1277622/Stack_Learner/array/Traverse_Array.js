const arr = [1, 2, 3, 4, 5];
const n = arr[3];
const m = arr[2];
const x = 1;
const y = 0;
// console.log(m, n, arr[x], arr[y],arr[x] + arr[y], arr[x + y +1]);
//Calling array
// for (let i=0; i<arr.length; i++){
//     console.log(arr[i]) //test array output
// }

//array sum
let sum =0;
for (let i = 0; i<arr.length; i++){
    sum = sum + arr[i]
}
console.log(sum) //sum calculate

console.log(sum/ arr.length)
