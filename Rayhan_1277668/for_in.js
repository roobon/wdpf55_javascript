let person = {
    name:'Addur Rahim', 
    age:25 , 
    address: 'agargaon, Taltola',
    phone: 155555555 ,
    email: "abdur@rahim.com"
}

let output = "" ;

for (let x in person) {
    output += person[x] + "  " ;
    // output = output + person[x] + "  " ;  
}

// console.log(output);

let number = 5 ;
for ( let x = 0 ; x <= number; x++ ) {
    console.log(x);
}