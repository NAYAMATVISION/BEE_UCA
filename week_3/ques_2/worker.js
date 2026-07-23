onmessage = async function() {

    try {

        // Step 1: Fetch users
        const response = await fetch("https://dummyjson.com/users"); // browser creates an HTTP GET request

        // Step 2: Check response
        if (!response.ok) {
            throw new Error("Failed to fetch users.");
        }

        // Step 3: Convert JSON
        const data = await response.json(); // await means it waits for the server to respond 

        // Step 4: Check empty array
        if (!data.users || data.users.length === 0) {
            throw new Error("No users returned.");
        }

        // Step 5: Send only the users array
        postMessage(data.users);

    }

    catch(error){

        postMessage({
            error: error.message
        });

    }

};