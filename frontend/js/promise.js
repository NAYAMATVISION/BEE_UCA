// Promise is a constructor function


// promise has 2 properties resolve and reject.
// resolve is used to resolve the promise and reject is used to reject the promise.

//state of promise is pending, fulfilled and rejected.
// pending means the promise is not yet resolved or rejected.
// fulfilled means the promise is resolved and rejected means the promise is rejected.

// promise has 3 methods then, catch and finally.
// then is used to handle the resolved promise and catch is used to handle the rejected promise.
// finally is used to execute the code after the promise is resolved or rejected.

const callbackfnc = () => {
    console.log("inside callback function");
}

const promise = new Promise(callbackfnc);
// execute the callback function individually and return the value of the callback function to the promise object.
// return a promise object with the value of the callback function.

// all about promise 
// promise is a constructor function that is used to handle asynchronous operations in javascript.
// how asynchronous operations are handled in javascript is by using callback functions. 
// but callback functions have some drawbacks like callback hell and inversion of control. to overcome these drawbacks promise is introduced in javascript.

// when callback function invokes initially it returns a promise object with the state of pending. 
// when the callback function is executed it returns a promise object with the state of fulfilled or rejected.
//  if the callback function is executed successfully it returns a promise object with the state of fulfilled 
// and if the callback function is not executed successfully it returns a promise object with the state of rejected.

// method chaining 
