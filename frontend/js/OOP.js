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