const fs = require('fs/promises');

function writeAndRead (path, object){
    fs.writeFile(path, JSON.stringify(object))
    .then( () =>{
        return fs.readFile(path, object)
    })
    .then( data => {
        console.log(JSON.parse(data));
    })
    .catch(err => {
        console.log(err);
    })
}
module.exports = {writeAndRead}