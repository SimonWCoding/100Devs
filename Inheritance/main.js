//Create a a class and extend it - Can be anything you would like it to be! 

class Animal {
    constructor(name, color){
        this.name = name
        this.color = color
    }
    speak () {
        console.log(`This ${this.name} is making a noise. Can you hear it?`)
    }
}

class cat extends Animal {
    constructor(name, color, bell){
        super (name, color)
        this.bell = bell
    }
}

let helloKitty = new cat ('kitty', 'white', true)

helloKitty.speak()
console.log(helloKitty.name)