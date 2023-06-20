const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const monts = ["Jan","feb","Mar","April","May","June","July", "Aug", "sept", "Oct" , "Nov" , "Dec"];

// const d = new Date("1998-01-08") ;  get specific year result
const d = new Date() ;



console.log("Day: " + weekday[d.getDay()] );
console.log("Monts: " + monts[d.getMonth()] );
console.log("Year: " + d.getFullYear());
console.log("time: " + d.getTime());

