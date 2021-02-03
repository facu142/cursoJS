class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad

        this.datos = `Me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`
    }

    saludar() {
        return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años`
    }

}

/* 
const juan = new Persona('Juan', 'García',25);

const marta = new Persona('Marta', 'García', 32);

console.log(juan.saludar());
console.log(marta.saludar());

*/

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

class Libro {
    constructor(titulo, autor, anio, genero) {
        this.titulo = titulo
        this.autor = autor
        this.anio = anio
        this.genero = genero
    }

    mostrarInformacionLibro() {
        return `El libro se llama ${this.titulo}, escrito por ${this.autor} en el año ${this.anio} y pertenece al género ${this.genero} `
    }

}


let libros = [];
let autoresLibros = [];
let aniosLibros = [];
let generosLibros = [];

const CANTIDAD_LIBROS = 1

for(let i = 0 ; i < CANTIDAD_LIBROS ;i++){

    const nombreLibro = prompt(`Ingrese el nombre del libro #${i+1}`);
    libros.push(nombreLibro);

    const autorLibro = prompt(`Ingrese el autor del libro #${i+1}`);
    autoresLibros.push(autorLibro);
    const anioLibro = prompt(`Ingrese el año del libro #${i+1}`)
    
    if (validarAnioLibro(Number(anioLibro)) == ''){
        aniosLibros.push(anioLibro);
    }else{
        console.log('nose');
    }
    const generoLibro = prompt(`Ingrese el género del libro #${i+1}`)
    generosLibros.push(generoLibro);

}

function validarNombreLibro(nombreLibro){
    if (nombreLibro.length == 0){
        return 'El campo nombre del libro no puede estar vacío'
    }else{
        return '';
    }
}

function validarAutorLibro(autorLibro){
    if(autorLibro.length === '' ){
        return 'El campo autor libro no puede estar vacío'
    }else{
        return '';
    }
}

function validarGeneroLibro(generoLibro){
    if (generoLibro === ''){
        return 'El campo género libro no puede estar vacío'
    }else{
        return '';
    }
}

function validarAnioLibro(anioLibro){
    const hoy = new Date();
    const anioActual = hoy.getFullYear();

    if(!/^[1-9]{4}$/.test(anioLibro)) {
        return 'El campo año del libro deben ser solo números'
    }else if(anioLibro > anioActual ){
        return 'El año del libro no debe ser superior al año actual'
    }
    return '';
}