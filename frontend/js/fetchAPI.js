// fetch API -> provides an interface for fetching (sending/receiving) resources across the network. 
// It is a modern replacement for XMLHttpRequest and provides a more powerful and flexible feature set.
// it uses request and response objects to handle network requests and responses, making it easier to work with asynchronous operations and handle errors.
// let promise = fetch(url , [options]);

// it returns a Promise that resolves to the Response object representing the response to the request.

let promise = fetch("https://cat-fact.herokuapp.com/facts");

