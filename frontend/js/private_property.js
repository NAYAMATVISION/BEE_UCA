class ConstructStudent{

    marks;
    percentage;

    constructor(name, age, email, marks){
        this.name = name;
        this.age = age;
        this.email = email;
        this.marks = marks;  // not rleveant for a private property 
    }

    percentage = () => {
        return (this.marks / 500) * 100;
    }

    setPercentage(){
        this.percentage = this.marks / 100;
    }

    percentage(){
        return this.percentage;
    }
}
// we dont bind private properties with this keyword because it is not accessible outside the class. 
// it is only accessible inside the class. we can access private properties using getter and setter methods.

// why do we need private properties?
// private properties are used to encapsulate the data and methods of a class. 
// it is used to hide the implementation details of a class from the outside world.
//this.#marks at runtime it says it is not accessiblae

