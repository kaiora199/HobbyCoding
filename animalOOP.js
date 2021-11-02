class Animal {
    constructor(type, height, weight){
        this.type = type;
        this.height = height;
        this.weight = weight;
    }
    stomachContents = ["shit"];
    eat(food){
        this.stomachContents += food;
        console.log("Yum that's some tasty " + food)
    }
    sleep(time){
        console.log("I'll sleep for " + time + " hours")
    }
    move(length){
        console.log("I've just moved " + length + " meters")
    }
}

class Human extends Animal{
    super(type, height, weight, name, profession){
        this.name = name;
        this.profession = profession;
    }
}
class Driver extends Human{
    super(type, height, weight, name, profession, drivingSpeed, occupied){
        this.drivingSpeed = drivingSpeed;
        this.occupied = occupied;
    }
    driveCar(){
        console.log("Broom broom")
    }
}
