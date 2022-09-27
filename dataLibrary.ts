import * as fs from "fs";
let readlineSync = require('readline-sync');
class Book{
    private title:string;
    private author: string;
    private yearEd: number;
    private ISBN: number;
   

   constructor(pTitle: string,pAuthor:string,pYear:number,pISBN:number){
    this.title=pTitle;
    this.author=pAuthor;
    this.yearEd=pYear;
    this.ISBN=pISBN;
 }

 //metodos
 public getTitle():string{
   return this.title;
 }
 public setTitle(pTitle:string):void{
   this.title=pTitle;
 }
 public getAuthor():string{
   return this.author;
 }
 public setAuthor(pAuthor:string):void{
   this.author=pAuthor;
 }
 public getYearEd():number{
   return this.yearEd;
 }
 public setYearEd(pYear:number):void{
   this.yearEd=pYear;
 }
 public getISBN():number {
   return this.ISBN;
}
 public setISBN(pISBN:number): void{
   this.ISBN= pISBN;
 }
}

//Instanciar libros
 
let book1 = new Book('Los dias de la Revolución','Eduardo Sacheri',2022,9789877389258);
let book2 = new Book('El poder de las palabras','Mariano Sigman',2022,9789877950465);
let book3 = new Book('El principito','Antoine De Saint-Exupéry',2016,9789500299114);
let book4 = new Book('El poder del ahora','Eckhart Tolle',2015,9789877250992);

//Arreglo libros
let listBooks : Book[] = [book1,book2,book3,book4];
 
 //Gestor de Libros
 class BookLibrary{
   private nameLibrary : string;
   private listbook:Book[];
  
   constructor (pNameLibrary:string,pListBook:Book[]){
      this.nameLibrary=pNameLibrary;
      this.listbook=pListBook;
    }
 //añadir nuevo libro
public addNewBook(pBook:Book):void{
   this.listbook.push(pBook);
 console.log("Se ha añadido el libro"+pBook.getTitle()+"del Autor"+pBook.getAuthor());
}
//eliminar un libro
public deleteBook(pBook: Book): void {
   for (let i = 0; i < this.listbook.length; i++) {
       if (pBook==listBooks[i]) {
           this.listbook.splice(i, 1,);
           console.log("Se eliminó el libro: " + pBook)
       } else {
           console.log("No se encontró el libro que desea eliminar")
       }
   }
}
//modificar datos de un libro
public modifyBook(pTitle:string,pAuthor:string,pYear:number,pISBN:number){
   for(let i=0;i<this.listbook.length;i++){
      if(pTitle ===this.listbook[i].getTitle()){
         this.listbook[i].setTitle(pTitle);
         this.listbook[i].setAuthor(pAuthor);
         this.listbook[i].setYearEd(pYear);
         this.listbook[i].setISBN(pISBN);
         console.log("Se Modificó el libro " + this.listbook[i].getTitle());
         return this.listbook[i];
      }
   }
}

//buscar libro
public findBook(pBook:Book):void{
   for (let i = 0; i < this.listbook.length; i++) {
       if (pBook.getTitle() === this.listbook[i].getTitle()){
         }
      }
   console.log('El libro se llama'+pBook.getTitle()+'del Autor'+pBook.getAuthor()+'del año'+pBook.getYearEd());
 }
}

//leer libros de txt
const fileName: string = 'libros/libros.txt';
let fileContent = fs.readFileSync('libros/libros.txt', 'utf8');

//crear nuevo gestor
let newBookLibrary = new BookLibrary('NewLibrary',listBooks);

//crear nuevo libro
let book5 = new Book('El camino del artista' ,'Julia Cameron' ,2019 ,9789877352306);
//insertar el nuevo libro
newBookLibrary.addNewBook(book5);
console.log(listBooks);
newBookLibrary.findBook(book4);
newBookLibrary.deleteBook(book5);
console.log(listBooks);
console.log(fileContent);


