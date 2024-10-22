// Class definition
class Animal {

#name;

    constructor(name,) {
        this.#name = name;
        
    }

    // Method that returns the animal's name
    Name() {
        return `Name: ${this.#name}`;
    }
    
}class fish extends Animal {
constructor(name,age,speed){
super(name)
this.speed=speed;
this.age = age;
}

getAge(){

    return `${this.age}`;

}
getSpeed(){
    return `${this.speed}`;
}


info(){
    return` ${this.Name()}, Age: ${this.age}  speed: ${this.getSpeed()} KPH`;
}
}




// Instantiate the class
const bird = new Animal('bird');
const Fish = new fish(`Fish`,1,2);

console.log(bird);
console.log(Fish);


// Display the result in the HTML element with id "Animal"
document.getElementById("Animal").innerHTML = bird.Name();
document.getElementById("Fish").innerHTML = Fish.info();
