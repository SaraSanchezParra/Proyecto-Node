const Book = require('../models/book');



let book = null;

function getStart(request, response){
    let respuesta = {error: true, codigo: 200, mensaje: 'Beginning point'};
}

function getBook(request, response){
    let respuesta;
    if (book != null)
    respuesta = {error: false, codigo: 200, data: book};
    else
    respuesta = {error: true, codigo: 200, mensaje: "The book does not exist"}

    response.send(respuesta);
}

function postBook(request, response){
    let respuesta;
    console.log(request.body)
    if (book === null){
        book = new Book(request.body.title,
                        request.body.author,
                        request.body.price,
                        request.body.photo,
                        request.body.id_book,
                        request.body.id_user)
        respuesta = {error: false, codigo:200,
                    mensaje: 'New book added', data: book};
    }
    else
        respuesta = {error: true, codigo:200,
                    mensaje: 'The book already exists'};

    response.send(respuesta)
}

function putBook(request, response)
{
    let respuesta
    if (book !=  null)
    {
        book.title    = request.body.title;
        book.type     = request.body.type,
        book.author   = request.body.author;
        book.price    = request.body.price,
        book.photo    = request.body.photo,
        book.id_book  = request.body.id_book,
        book.id_user  = request.body.id_user

        respuesta           = {error: false, codigo: 200,
                                mensaje: 'The book has been modified',data: book};
    }
    else
        respuesta = {error: true, codigo: 200,
                        mensaje: 'The book does not exist',data: book};

    response.send(respuesta);
};

function deleteBook(request, response)
{
    let respuesta
    if (book != null)
    {
        book        = null;
        respuesta   = {error: false, codigo: 200,
                        mensaje: 'Book deleted',data: book};
    }
    else
        respuesta   = {error: true, codigo: 200,
                        mensaje: 'The book does not exist',data: book};

    response.send(respuesta);
};

module.exports = {getStart, getBook, postBook, putBook, deleteBook};