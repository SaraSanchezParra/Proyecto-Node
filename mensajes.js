console.log("Mensaje1");

setTimeout (function(){
    console.log("Mensaje2")//se acaba dentro de la ejecución de l acallback
    console.log("Mensaje3")
},3000)

