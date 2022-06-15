const fs = require('fs');

module.exports = () =>{
    const arrayOfFiles = fs.readdir(__dirname, 'utf8', (err, files) => {

            if (err){
                console.log(err);
            }
            else {
                const output = files.join(' ');
                console.log(output);
                return output;
        }
    });
    return arrayOfFiles;
}