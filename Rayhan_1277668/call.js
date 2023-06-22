const student = {
    fullname : function () {
        return this.firstName + " " + this.lastName;
    } ,
    address : function () {
        return this.PresentAddress + " " + this.permanentAddress ;
    }
}
    

const student1 = {
    firstName : " abdur " ,
    lastName: "Rahim"
}
const student2 = {
    firstName : " Masum " ,
    lastName: "Hossin"
}

const address = {
    PresentAddress : " agargaon , Taltola " , 
    permanentAddress : " Sonaimuri, Noakhali "
}


let x = student.fullname.call(student1) ;
let y = student.address.call(address)
console.log(y);