const fs = require('fs/promises');

async function writeAndReadAwait (path, object){
    try{
        await fs.writeFile(path, JSON.stringify(object))
        const data = await fs.readFile(path, 'utf-8')
        console.log(JSON.parse(data))
    }
    catch(error){
        console.log(error)

    }
}


module.exports= {writeAndReadAwait}