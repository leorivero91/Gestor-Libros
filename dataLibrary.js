"use strict";
exports.__esModule = true;
var fs = require("fs");
var readlineSync = require('readline-sync');
var Book = /** @class */ (function () {
    function Book(pTitle, pAuthor, pYear, pISBN) {
        this.title = pTitle;
        this.author = pAuthor;
        this.yearEd = pYear;
        this.ISBN = pISBN;
    }
    //metodos
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.setTitle = function (pTitle) {
        this.title = pTitle;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.setAuthor = function (pAuthor) {
        this.author = pAuthor;
    };
    Book.prototype.getYearEd = function () {
        return this.yearEd;
    };
    Book.prototype.setYearEd = function (pYear) {
        this.yearEd = pYear;
    };
    Book.prototype.getISBN = function () {
        return this.ISBN;
    };
    Book.prototype.setISBN = function (pISBN) {
        this.ISBN = pISBN;
    };
    return Book;
}());
//Instanciar libros
var book1 = new Book('Los dias de la Revolución', 'Eduardo Sacheri', 2022, 9789877389258);
var book2 = new Book('El poder de las palabras', 'Mariano Sigman', 2022, 9789877950465);
var book3 = new Book('El principito', 'Antoine De Saint-Exupéry', 2016, 9789500299114);
var book4 = new Book('El poder del ahora', 'Eckhart Tolle', 2015, 9789877250992);
//Arreglo libros
var listBooks = [book1, book2, book3, book4];
//Gestor de Libros
var BookLibrary = /** @class */ (function () {
    function BookLibrary(pNameLibrary, pListBook) {
        this.nameLibrary = pNameLibrary;
        this.listbook = pListBook;
    }
    //añadir nuevo libro
    BookLibrary.prototype.addNewBook = function (pBook) {
        this.listbook.push(pBook);
        console.log("Se ha añadido el libro" + pBook.getTitle() + "del Autor" + pBook.getAuthor());
    };
    //eliminar un libro
    BookLibrary.prototype.deleteBook = function (pBook) {
        for (var i = 0; i < this.listbook.length; i++) {
            if (pBook == listBooks[i]) {
                this.listbook.splice(i, 1);
                console.log("Se eliminó el libro: " + pBook);
            }
            else {
                console.log("No se encontró el libro que desea eliminar");
            }
        }
    };
    //modificar datos de un libro
    BookLibrary.prototype.modifyBook = function (pTitle, pAuthor, pYear, pISBN) {
        for (var i = 0; i < this.listbook.length; i++) {
            if (pTitle === this.listbook[i].getTitle()) {
                this.listbook[i].setTitle(pTitle);
                this.listbook[i].setAuthor(pAuthor);
                this.listbook[i].setYearEd(pYear);
                this.listbook[i].setISBN(pISBN);
                console.log("Se Modificó el libro " + this.listbook[i].getTitle());
                return this.listbook[i];
            }
        }
    };
    //buscar libro
    BookLibrary.prototype.findBook = function (pBook) {
        for (var i = 0; i < this.listbook.length; i++) {
            if (pBook.getTitle() === this.listbook[i].getTitle()) {
            }
        }
        console.log('El libro se llama' + pBook.getTitle() + 'del Autor' + pBook.getAuthor() + 'del año' + pBook.getYearEd());
    };
    return BookLibrary;
}());
//leer libros de txt
var fileName = 'libros/libros.txt';
var fileContent = fs.readFileSync('libros/libros.txt', 'utf8');
//crear nuevo gestor
var newBookLibrary = new BookLibrary('NewLibrary', listBooks);
//crear nuevo libro
var book5 = new Book('El camino del artista', 'Julia Cameron', 2019, 9789877352306);
//insertar el nuevo libro
newBookLibrary.addNewBook(book5);
console.log(listBooks);
newBookLibrary.findBook(book4);
newBookLibrary.deleteBook(book5);
console.log(listBooks);
console.log(fileContent);
