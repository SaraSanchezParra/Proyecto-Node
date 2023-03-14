const express = require('express');
const app = express();


app.get('/', function (request, response){
    console.log('Petición recibida del cliente')
    console.log(request.url);
    console.log(request.method);
    console.log(request.headers["user-agent"]);
    response.status(200).json({ok: true, message: "Recibido!"});

});


app.get('/bye', function (request, response){
    response.status(200).json({ok: true, message: "Adios!"})
})

app.listen(4000);




