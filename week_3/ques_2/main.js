// Step 1: Create the worker
const worker = new Worker("worker.js");

// Step 2: Tell the worker to start 
worker.postMessage("Start");

// Step 3: Receive data from the worker
worker.onmessage = function(event) {

    const usersDiv = document.getElementById("users");

    const users = event.data;

    // Step 4: Check if worker sent an error
    if (users.error) {
        //console.error(users.error);

        usersDiv.innerHTML = "Users not found";

        return;
    }
    usersDiv.innerHtml = ""

    //console.log("Users List");

    // Step 5: Print every user
    users.forEach(user => {

        //console.log(`${user.firstName} ${user.lastName} - Active`);
        usersDiv.innerHTML += `<p>${user.firstName} ${user.lastName} - Active</p>`

    });

};

worker.onerror = function(error){

    console.error(error.message);

};