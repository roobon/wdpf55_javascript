let student = { fName: "Iqbal" , lName: "Hossain" , age: "22" , address: "mirpur"  };


function printProps(x) {
    for ( let item in x  ) {
        console.log( item + " " + x[item] );
        // console.log( ` ${item} : ${x [item]} \n `);
    }
}

printProps(student)