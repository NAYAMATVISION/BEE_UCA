// object oriented javascript
var obj1 = {
   name : "John",
   age : 30,
   email : "john@example.com"
};

// object literals ? 
// object literals are a way to create objects in JavaScript using a simple syntax. 
// //They allow you to define properties and methods for an object in a concise way.

// object function -> var obj1 = object.create();
//what is oject function ?
// The Object function is a built-in constructor in JavaScript that is used to create objects.

function foo(){
    console.log("foo function");
}
// foo.prototype()

// javascript ka ye feature hai ki jb bhi hm koi function create krein toh vo by default uska prototype store krta hai.
// prototye is useful for inheritance in javascript.
// __proto__ is a property of an object that points to the prototype of its constructor function. 
// It allows objects to inherit properties and methods from their constructor's prototype.

var obj2 = Object.create(obj1); // new object is created with obj1 as its prototype.

// object using assign
//var obj3 = Object.assign(source, target);
// The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object.

var obj3 = Object.assign({}, obj1);
// it doesnt create new object but copies the properties of obj1 to obj3.

const student1 = {
   name : "John",
   age : 30,
   email : "john@example.com"
};

const student2 = {
   name : "Jane",
   age : 25,
   email : "jane@example.com"
};

// function createStudent(name, age, email , mark, totalMarks){
//    return {
//        name : name,
//        age : age,
//        email : email,
//        percentage : function (mark, totalMarks) {
//         return (mark / totalMarks  * 100);
//        }
//    };
// }

const student3 = createStudent("Jack", 20, "jack@example.com", 90, 200);

// here whenever we are creating a new student object we are creating a new percentage function for each object which is not memory efficient.
// As for every student percentage defination will be same 

// constructor function 
// it is used to create different objects with same properties and methods.
// this do not copy the properties and methods of the constructor function to the new object but it creates a new object with the same properties and methods.
// this keyword is used to refer to the current object. it can never refer to the function itself. it can only refer to the object that is created by the constructor function.


function createStudent(name, age, email , marks,){

   this.name = name;
   this.age = age;
   this.email = email;
   this.marks = marks;
}

const student1 = new createStudent();
// for this instance means for student1 student1 and this keyword will have same reference but for student2 student2 and this keyword will have same reference.
// in JS 2 empty objects are not equal
// createStudent.prototype === student1.__proto__   // true
