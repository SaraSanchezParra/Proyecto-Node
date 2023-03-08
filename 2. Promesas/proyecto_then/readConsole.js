const readline = require("readline");

function read (pregunta) {
    const question = new Promise ((resolve, reject) => {
        const rl= readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(pregunta, (respuesta) => {
            resolve(respuesta);
            rl.close();
        });
    });
    return question;
}





function readConsole(callback){
    let user = {
    name: '',
    surname: '',
    age: 0
    };

read("What is your name?: ")
.then((name) => {
    user.name = name;
    return read ("What is your surname?: ")
})
.then((surname) => {
    user.surname = surname;
    return read ("What is your age?: ")
})
.then((age) => {
    user.age = age;
    callback(user)
})
.catch(err => {
    console.log(err);
})


}


// readConsole(console.log)

module.exports= {readConsole}