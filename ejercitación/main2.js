/* 
Crea una clase Libro
La clase libro tendrá título, autor, año y género.
Crea un método que devuelva toda la información del libro
Pide 3 libros y guárdalos en un array
Los libros se introducirán al arrancar el programa pidiendo los datos con prompt.
Validar que los campos no se introduzcan vacíos
Validar que el año sea un número y que tenga 4 dígitos
Validar que el género sea: aventuras, terror o fantasía
Crea una función que muestre todos los libros
Crea una función que muestre los autores ordenados alfabéticamente
Crea una función que pida un género y muestre la información de los libros que pertenezcan a ese género usando un el método que devuelve la información
*/

class Book {
    constructor(title, author, year, gender) {
        this.title = title
        this.author = author
        this.year = year
        this.gender = gender
    }

    bookInfo() {
        return `El libro ${this.title} es un libro de ${this.gender} escrito por ${this.author} en el año ${this.year}`
    }

    getAuthor(){ 
        return this.author;
    }

    getGender(){
        return this.gender
    }
}

let books = [];

CANTIDAD_DE_LIBROS = 2

while (books.length < CANTIDAD_DE_LIBROS) {

    let title = prompt(`Por favor ingrese el título del libro #${books.length + 1}`)
    let author = prompt(`Por favor ingrese el autor del libro #${books.length + 1}`)
    let year = prompt(`Por favor ingrese el año del libro #${books.length + 1}`)
    let gender = prompt(`Por favor ingrese el género del libro #${books.length + 1} (aventura , terror o fantasia)`)

    if (title !== '' &&
        author !== '' &&
        !isNaN(year) &&
        year.length == 4 &&
        (gender == 'aventura' || 'terror' || 'fantasia')) {
        books.push(new Book(title, author, year, gender))
    }

}
 
const showAllBooks = () => {
    console.log(books);
}

const showAuthors = () => {

    let authors = [];

    for (const book of books) {
        authors.push(book.getAuthor());
    }

    console.log(authors.sort());
}

const showGender = () => {

    const gender = prompt('Ingrese el género a buscar')

    for (const book of books) {
        if (book.getGender() === gender){
            console.log(book.bookInfo());
        }
    }

}

showAuthors();
showGender();


