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



async function readConsoleAwait (callback){
let user = {
    name: '',
    surname: '',
    age: 0
};
try{
    user.name = await read("What is your name?: " );
    user.surname = await read("What is your surname?: " );
    user.age = await read("What is your age?: " );
    callback(user)
}
catch(error){
    console.log(error)
}

}



module.exports= {readConsoleAwait}