const fs = require('fs');

module.exports = (fileName)=>{
    fs.readFile(fileName, 'utf8', (err, fileContents)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(fileContents);
        }
    })
}

