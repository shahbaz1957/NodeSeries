/*

The main difference between writeFileSync and writeFile in Node.js is synchronous vs asynchronous behavior:

1. fs.writeFileSync (Synchronous)

	•	Blocking: The execution of the program pauses (or blocks) until the file writing is completed. It doesn’t return control back to the program until the file operation finishes.
	•	No Callback: Since it is synchronous, there’s no need for a callback to handle the result. Any errors or results are handled through exceptions (try-catch block).
	•	Use Case: Suitable for tasks where you need to ensure the file is written before moving forward, typically in scripts or simple tasks.

EX-1	
	const fs = require('fs');
	fs.writeFileSync('filename.txt', 'Hello, World!');

EX-2
	const fs = require('fs');

	try {
		fs.writeFileSync('output.txt', 'This is written synchronously');
		console.log("File written successfully");
	} catch (err) {
		console.error("Error:", err);
	}

		console.log("This line will be logged after the file operation");

	In this example, the file writing operation happens first, and only after the file is written, the rest of the code continues to execute.	



	2. fs.writeFile (Asynchronous)

	•	Non-blocking: This method is asynchronous and doesn’t block the rest of the code from executing. The file writing happens in the background, and the code continues to run.
	•	Callback Required: Since it is asynchronous, a callback is required to handle success or errors after the file operation is completed.
	•	Use Case: Ideal when working with larger applications or servers where you don’t want file operations to block the program’s execution.

	EX-1

	const fs = require('fs');
	fs.writeFile('filename.txt', 'Hello, World!', (err) => {
		if (err) throw err;
	console.log('File written successfully');
	});

	EX-2

	const fs = require('fs');

	fs.writeFile('output.txt', 'This is written asynchronously', (err) => {
	if (err) {
		console.error("Error:", err);
	} else {
		console.log("File written successfully");
	}
	});

	console.log("This line will be logged before the file operation completes");


	In this example, the code doesn’t wait for the file writing to complete. The program continues running, and the line "This line will be logged before the file operation completes" will be logged before the file writing is done.



Node JS fs.writeFile() Method

fs.writeFile() method is used to asynchronously write the specified data to a file. By default, the file would be replaced if it exists. The ‘options’ parameter can be used to modify the functionality of the method.

Syntax:

fs.writeFile( file, data, options, callback )
Parameters:

This method accepts four parameters as mentioned above and described below:

file: It is a string, Buffer, URL or file description integer that denotes the path of the file where it has to be written. Using a file descriptor will make it behave similar to fs.write() method.

data: It is a string, Buffer, TypedArray or DataView that will be written to the file.

options: It is an string or object that can be used to specify optional parameters that will affect the output. It has three optional parameter:
encoding: It is a string value that specifies the encoding of the file. The default value is ‘utf8’.

mode: It is an integer value that specifies the file mode. The default value is 0o666.

flag: It is a string value that specifies the flag used while writing to the file. The default value is ‘w’.

callback: It is the function that would be called when the method is executed.
err: It is an error that would be thrown if the operation fails.
 */



///// Node.js program to demonstrate the
//// fs.writeFile() method

// Import the filesystem module

/// EXAMPLE-1
const fs = require('fs');

let data = "This is a file containing a collection of books.";

fs.writeFile("books.txt", data, (err) => {
    if (err)
        console.log(err);
    else {
        console.log("File written successfully\n");
        console.log("The written has the following contents:");
        console.log(fs.readFileSync("books.txt", "utf8"));
    }
});




/// EXAMPLE -2 
// Node.js program to demonstrate the
// fs.writeFile() method

// Import the filesystem module

// const fs = require('fs');
let data1 = "This is a file containing a collection of movies.";

fs.writeFile("movies.txt", data1,
{
	encoding: "utf8",
	flag: "w",
	mode: 0o666
},
(err) => {
	if (err)
	console.log(err);
	else {
	console.log("File written successfully\n");
	console.log("The written has the following contents:");
	console.log(fs.readFileSync("movies.txt", "utf8"));
	}
});




///// Node.js program to demonstrate the
// fs.writeFileSync() method

// EX-1

fs.writeFileSync('filename.txt', 'Hello, World!');

// EX-2
// const fs = require('fs');

try {
  fs.writeFileSync('output.txt', 'This is written synchronously');
  console.log("File written successfully");
} catch (err) {
  console.error("Error:", err);
}

console.log("This line will be logged after the file operation");