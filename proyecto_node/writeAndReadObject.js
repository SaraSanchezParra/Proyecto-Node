const fs = require("fs");
const path = require("path");


function writeAndRead(path, obj){
//la callback está dentro de las llaves. La función asíncrona es la que está antes de las llaves.
    fs.writeFile( path, JSON.stringify(obj), (err) => { //para que me lo cree en JSON
        if (err) throw err;

        fs.readFile(path, (err, data) => {
            if (err) throw err;
            console.log(JSON.parse(data));//lo vuelvo a convertir en objeto para que sea legible para nosotros
            process.exit();
        });
    });
}

module.exports = {writeAndRead}
// writeAndRead("./objeto.json", {name:"Amber",surname:"Garcia",age:"34"})
