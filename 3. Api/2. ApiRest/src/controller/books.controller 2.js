const Book = require('../models/book');

let book = null;
let book1 = new Book ( "El señor de los anillos", "Tapa dura", " J.R.R. Tolkien", 29, "https://upload.wikimedia.org/wikipedia/commons/7/7d/El_Se%C3%B1or_de_los_Anillos_lectura.jpg", 33, 24);
let book2 = new Book ( "Los renglones torcidos de Dios", "Tapa blanda", "Torcuato Luca de Tena", 15, "https://m.media-amazon.com/images/I/513FJOfUW2L._SX324_BO1,204,203,200_.jpg", 5, 28);
let book3 = new Book ( "La revuelta de las putas", "Tapa dura", " Amelia Tiganus", 19, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ81PzbsMEcCQTwsx1KAoNOiIFNsBsD3BXt0Q&usqp=CAU", 35, 232);
let books = [book1, book2, book3];


function getStart(request, response) {
    let respuesta = {error: true, codigo: 200, mensaje: 'Beginning point'};
    response.send(respuesta);
}

// Si se encuentra el libro, se devuelven los datos del libro.
// Sino, se devuelve un mensaje de error. Utilizo request.query.id para obtener el valor del id

//if (id === "5") {
    //const book = books.find(function(book) {
      //return book.id_book === id;
    // })

function getBook(request, response) {
  let id = request.query.id;
  let bookFound = books.find((book) => book.id_book == id);
  let respuesta;

  if (books.length != 0 && (!id || bookFound != undefined)) {
    if (bookFound != undefined) {
      respuesta = { error: false, codigo: 200, data: bookFound };
    } else {
      respuesta = { error: false, codigo: 200, data: books };
    }
  } else {
    respuesta = { error: true, codigo: 200, mensaje: "No books found" };
  }
  response.send(respuesta);
}


function getAllBooks(request, response) {
    let respuesta;
    if (books) {
        respuesta = {error: false, codigo: 200, data: books};
    } else {
        respuesta = {error: true, codigo: 200, mensaje: "Books have not been found"};
    }
    response.send(respuesta);
}

function postBook(request, response) {
    let respuesta;
    if (book === null) {
        book = new Book(request.body.title,
                        request.body.type,
                        request.body.author,
                        request.body.price,
                        request.body.photo,
                        request.body.id_book,
                        request.body.id_user);
        respuesta = {error: false, code: 200, mensaje: 'New book added', data: book};

    }else {
        respuesta = {error: true, code: 200, mensaje: 'The book already exists'};
    }
    books.push(book)
    response.send(respuesta);
}


function putBook(request, response) {
    let respuesta; //la respuesta del cliente
    let index = books.findIndex(function(book) { //esta variable la utilizamos para encontrar la posición del libro y alamacenarla. Recibe la callback function(book)
        return book.id_book == request.body.id_book; //El id_book tiene que ser igual al que se escribe en postman. Si se encuentra, index almacena el índice de la posición del libro encontrado. Si no, index es igual a -1.
    });

    if (index != -1) { //si index es distinto de -1, significa que se ha econtrado el libro y se modifican los datos con el nuevo que le hemos pasado.
            books[index].title = request.body.title;
            books[index].type = request.body.type;
            books[index].author = request.body.author;
            books[index].price = request.body.price;
            books[index].photo = request.body.photo;
            books[index].id_user = request.body.id_user;
        respuesta = {error: false, code: 200, message: 'The book has been edited', data: books[index]}; //enviamos la información del libro modificado.
    }
    else if (index == -1) {//el libro no existe
        respuesta = {error: true, code: 200, mensaje: 'The book does not exist', data: books
        };
    }
    else {
        respuesta = {//si la longitud del array es igual a 0, no hay libros en la lista.
            error: true, code: 200, mensaje: 'There are no books available'
        };
    }

    response.send(respuesta);
}


function deleteBook(request, response) {
    let respuesta;
    let index = books.findIndex(function(book) { //busca el índice del libro que coincide con el id_book que escribimos como request
        return book.id_book == request.body.id_book; //El id_book tiene que ser igual al que se escribe en postman. Si se encuentra, index almacena el índice de la posición del libro encontrado. Si no, index es igual a -1.
    }); //si se encuentra el libro, finindex devuelve el índice en el array, si no devuelve -1

    if (index != -1){ //si es diferente a -1, significa que se encuentra el libro
        books.splice(index, 1);//elimina el libro del array
        respuesta   = {error: false, codigo: 200, mensaje: 'Book deleted', data: books};
    }
    else//no se encuentra el libro
        respuesta   = {error: true, codigo: 200, mensaje: 'The book does not exist',data: books};

    response.send(respuesta);
};

module.exports = {getStart, getBook, postBook, putBook, deleteBook, getAllBooks};