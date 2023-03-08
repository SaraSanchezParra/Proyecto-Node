
    const readline = require("readline");
   
    const rl = readline.createInterface({ //crea una interfaz de trabajo que nos permite utilizar la consola para recibir datos y almacenarlos
        input: process.stdin,
        output: process.stdout,
      });
   //question tiene dos parámetros. El que va a imprimir por consola y lo que va a recibir de consola (input, output). Name se ejecuta dentro de una callback, para que se ejecute después.

function readConsole (callback){
    rl.question("¿Cuál es tu nombre?", (name) =>{
        rl.question("¿Cuál es tu apellido?", (surname) =>{
            rl.question("¿Cuál es tu edad?", (age) =>{
                let newUser = { name, surname, age};
                console.log(newUser)
                return callback(newUser)
                
            })
        })
    })        
}
module.exports={readConsole}
// readConsole((newUser))