const readline = require("readline");
const fs = require("fs");

let user = {
  name: "",
  surname: "",
  age: 0,
};

const rl = readline.createInterface({ //crea una interfaz de trabajo que nos permite utilizar la consola para recibir datos y almacenarlos
  input: process.stdin,
  output: process.stdout,
});

rl.question("¿Cuál es tu nombre? ", (name) => {
  rl.question("¿Cuál es tu apellido? ", (surname) => {
    rl.question("¿Cuál es tu edad? ", (age) => {
      let newUser = { name, surname, age };
      const jsonString = JSON.stringify(newUser); //lo guardamos en un archivo json
      fs.writeFile( "objeto.json", //la callback está dentro de las llaves. La función asíncrona es la que está antes de las llaves.
        jsonString, (err) => {
          if (err) throw err;
          fs.readFile("objeto.json", (err, data) => {
            if (err) throw err;
            let newUser = JSON.parse(data);
            console.log(`Hola ${name} ${surname}, tienes ${age} años.`)
            rl.close();
          });
        }
      );
    });
  });
});
