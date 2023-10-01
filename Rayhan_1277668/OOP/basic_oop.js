class Human {
    constructor(name){
        this.name = name ;
        this.legs = 2 ;
        this.hands = 2 ;
    }
}

class Baby extends Human {
    constructor(name){
        super(name);    // child construtor automatic call hoise but parent hoy nai aijonno super() call kore deyahoise
        this.cute = true ;
    }
    babyFunc(){
        return ` Baby is crtying ` ;
    }
}



const babyObj = new Baby("Monti");
console.log(babyObj.hands);
console.log(babyObj.babyFunc());