
/*

    #NodeJS readfile method

        The readfile method is used to asynchronously read the data from a file. It is a method of node js file system module. Asynchronously reading file content enables the non-blocking operation in Node.
    
    Syntax:
        fs.readFile( file_path, encoding, callback_function )
        fs.readFile('Demo.txt', 'utf8', function (err, data)


    Parameters:

        The method accepts three parameters as mentioned above and described below:  

        • file_path: It holds the file’s name to read or the entire path if stored at   another location.
        • encoding: It holds the encoding of the file. Its default value is ‘utf8’.
        • callback_function: A callback function is called after reading the file. It takes two parameters:
            err: If any error occurred.
            data: Contents of the file.
            Return Value:

        It returns the contents/data stored in file or error if any.

        ERROR HANDLING\

    Error Handling
        When using fs.readFile(), it’s important to handle errors properly to prevent crashes and ensure graceful error recovery. Common errors include file not found, insufficient permissions, and I/O errors. You can handle errors by checking the err parameter passed to the callback function. If err is truthy, an error occurred during the reading process, and you should handle it accordingly.  
        
        fs.readFile("example.txt", "utf8", (err, data) => {
        if (err) {
            if (err.code === "ENOENT") {
                console.error("File not found:", err.path);
            } else {
                console.error("Error reading file:", err);
            }
            return;
        }
        console.log("File content:", data);
});
 */






const fs = require('fs')
fs.readFile('../writeFile/output.txt', 'utf-8',(err ,result)=>{
    if(err){
        console.log("Error",err);
        
    }else{
        console.log(result)
    }
});