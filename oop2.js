class Human {
    constructor(name, age, height, weight){
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
    }
    speak(){
        console.log("I'm a human and I'm " + this.age + " years old")
    }
}
class Student extends Human{
    super(name, age, height, weight, major){
        this.major = major;
    }
    speak(){
        console.log("I'm studying and I'm " + this.age + " years old");
    }
}

var human1 = new Human("Kari", 22, 189, 89)
var human2 = new Student("Karri", 23, 195, 100, "history")

human1.speak();
human2.speak();

console.log(human1);
console.log(human2);
