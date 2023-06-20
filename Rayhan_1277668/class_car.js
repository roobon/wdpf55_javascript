class car {
    constructor(name , year) {
        this.name  = name ;
        this.year = year ;
    }
    age() {
        const date = new Date() ;
        const carDate = date.getFullYear() - this.year ;
        return carDate ;
    }
}

// =====================================


const car1 = new car( "Toyota" , 1975 );

const car2 = new car("BMW" , 1980 ) ;

console.log(car1.name + " " + car2.name);
console.log(car1.year + " " + car2.year);
console.log(car1.age() + " " + car2.age());

