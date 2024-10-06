/*
Node fs.appendFile() Function

    The fs.appendFile() method is used to asynchronously append the given data to a file. A new file is created if it does not exist. The options parameter can be used to modify the behavior of the operation.

Syntax:

fs.appendFile( path, data[, options], callback )
 fs.appendFile("../writeFile/filename.txt", "\nWorld", (err)

Parameters:

This method accepts four parameters as mentioned above and described below:

    path: It is a String, Buffer, URL or number that denotes the source filename or file descriptor that will be appended to.

    data: It is a String or Buffer that denotes the data that has to be appended.

    options: It is an string or an object that can be used to specify optional parameters that will affect the output. It has three optional parameters:
    encoding: It is a string which specifies the encoding of the file. The default value is ‘utf8’.

    mode: It is an integer which specifies the file mode. The default value is ‘0o666’.

    flag: It is a string which specifies the flag used while appending to the file. The default value is ‘a’.

    callback: It is a function that would be called when the method is executed.
    err: It is an error that would be thrown if the method fails.

*/




// Node.js program to demonstrate the 
// fs.appendFile() method 

// Import the filesystem module 
const fs = require('fs');






fs.appendFile("../writeFile/filename.txt", "\nWorld", (err) => {
    if (err) {
        console.log(err);
    }
    else {
        // Get the file contents after the append operation 
        console.log("File Contents append: successfully ")
         

    }
});


// Get the file contents before the append operation 
console.log("\nFile Contents of file before append:",
    fs.readFileSync("../writeFile/filename.txt", "utf8"));

fs.appendFile("../writeFile/filename.txt", "\nWorld", (err) => {
    if (err) {
        console.log(err);
    }
    else {
        // Get the file contents after the append operation 
        console.log("File Contents of file after append:",
            fs.readFileSync("../writeFile/filename.txt", "utf8"));

    }
});
