/*
Objeto window - Es el objeto global, de él descienden todos los objetos
    alert()
    prompt()
    confirm()
*/

/* 
addEventListener('click', (e)=> {
    console.log(e);
})

if(confirm('acepta?')){
    console.log('El usuario acepto');
}else{
    console.log('El usuario no acepto');
}
*/

/* Objeto console - Es el objeto que contiene la consola del navegador
    https://developer.mozilla.org/es/docs/Web/API/Console
    console.log()
    console.dir()
    console.error()
    console.table()
*/
/* 
const persona = {
    nombre: 'facundo',
    apellido: 'Montenegro',
    email: 'facu@gmail.com'
}

console.log(persona);

console.table(persona);

const numeros = [1,2,3,4,5,6];

console.table(numeros);
*/

/* Objeto location - Es el objeto que contiene la barra de direcciones
    https://developer.mozilla.org/es/docs/Web/API/Location
    location.href
    location.protocol
    location.host
    location.pathname
    location.hash
    location.reload()
*/
/* 
console.log(location.href);
console.log(location.protocol);
console.log(location.host);
console.log(location.pathname);
console.log(location.hash);

//location.reload()
//location.href = 'https://github.com/DorianDesings/js2018/commit/d514a3907e4dac7f23a2d6052d988f72db2543af';
*/
/* Objeto history
    https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador
    back()  pagina anterior
    forward() Pagina siguiente
    go(n|-n)  si el n es positivo avanza la cantidad n de paginas y si es negativo retrocede
    length    devuelve la cantidad de paginas que tenemos en el historial esta sesión
*/

    //history.back();
    //history.forward();
    //history.go(2);
    //console.log(history.length);

/* Objeto date
    https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Date
    https://www.w3schools.com/jsref/jsref_obj_date.asp
*/

    /* 
    const date = new Date

    console.log(date.getDate());
    */

/*
Timers
    Timeout: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
    setTimeout(()=>{code}, delay-in-miliseconds) - Hace que se ejecute la función despues de delay. Si lo referenciamos mediante una variable/constante podemos pararlo con clearTimeout(referencia)
    Interval: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
    setInterval(()=>{code}, delay-in-miliseconds) - Hace que se ejecute la función cada delay milisegundos. Si lo referenciamos mediante una variable/constante podemos pararlo con clearInterval(referencia)
*/

const $botonAceptar = document.querySelector('#aceptar');

const saludar = () => {
    console.log('Hola');
}
/*
$botonAceptar.addEventListener('click', ()=>{
    setTimeout(()=> {
        saludar();
    },2000)
})
*/

// Parar la ejecución de un timeout
// Declarar el timeout como una variable
// Ejecutar la función clearTimeout();
/* 
const timeout = setTimeout(() => {
    console.log('hola');
},3000)

$botonAceptar.addEventListener('click', () => {
    clearTimeout(timeout);
    console.log('Se detuvo el timeout');
})
*/


let contador = 0;

const interval = setInterval(() => {
    console.log(contador);
    contador++
}, 2000);

$botonAceptar.addEventListener('click', ()=>{
    clearInterval(interval);
    console.log('Se detuvo la ejecución de los saludos');
})
