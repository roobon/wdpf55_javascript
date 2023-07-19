class Person {
    constructor(name, age, district){
        this.name = name
        this.age = age
        this.district = district
    }
    showPerson(){
        return `Hi! I'm ${this.name}. Age- ${this.age}. I'm from ${this.district}.`
    }
}
class PersonSkill extends Person{
    constructor(skill){
        super()
        this.skill = skill
    }
    showSkill(){
        return this.showPerson() + `I'm expert on ${this.skill}`
    }
}



const person = new Person("Mizanur Rahman", 25, "Narayanganj", "Web Development")

