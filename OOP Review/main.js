class Constractor {
    constructor (name, role){
        this._name = name
        this._role = role
    }
    get name() {
        return this._name
    }
    get role() {
        return this._role
    }
    sayHello (){
        console.log(`Hello, my name is ${this._name} and I'm on the ${this._role}
        team!`)
    }
}

class Front extends Constractor {
    constructor(name,role,tech){
        super (name,role)
        this._tech = tech
    }
    get tech(){
        return this._tech
    }
    sayHello(){
        console.log(`Hello, I am ${this._name} and I work on the Front-end!`)
    }
}

class Back extends Constractor {
    constructor(name,role,tech){
        super (name,role)
        this._tech = tech
    }
    get tech(){
        return this._tech
    }
    sayHello(){
        console.log(`Hello, I am ${this._name} and I work on the Back-end!`)
    }
}

let simon = new Front('Simon', 'Front-end', 'JavaScript')
let leon = new Back('Leon', 'Back-end', 'Node')

let agencyList = [simon,leon]

for (person of agencyList){
    person.sayHello()
} 

