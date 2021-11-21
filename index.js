const express = require("express");
const fs = require("fs");

const app = express();
const PORT=3001;

let tempfilename = "" + new Date();
tempfilename = tempfilename.replaceAll(":","_").split(" ");

//Creating FileName and content
const filename = tempfilename[1] + "" + tempfilename[2] + "" + tempfilename[3] + "-" + tempfilename[4] + ".txt";
const content = tempfilename[5] + "" + tempfilename[6] + "" + tempfilename[7] + "" + tempfilename[8];

//Writing a new file
app.get("/create", (req, res) => {
    fs.writeFile(filename, content, function(err) {
        if(err){
            console.log(err.message);
        } 
    })
    res.send("File Created");
});

app.get("/getfiles", (req, res) => {
    fs.readdir(".", (err, files) => {
        if(err){
            console.log(err.message);
        } else {
            res.send(files);
        }
    })
});

app.listen(PORT, () => {
    console.log("Server Started")
})
