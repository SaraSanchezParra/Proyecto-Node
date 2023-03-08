const fs = require('fs/promises');
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




async function asyncObject () {
    let user = {
        name: '',
        surname: '',
        age: 0
    };
    try{
        user.name = await read("What is your name?: " )
        user.surname = await read("What is your surname?: " )
        user.age = await read("What is your age?: " )
        await fs.writeFile("userAwait.json", JSON.stringify(user))
        const data = await fs.readFile("userAwait.json", 'utf-8')
        console.log(JSON.parse(data))
    }
    catch(error){
        console.log(error);    
    }

}

asyncObject()