
/* 
Eventos de ratón:
    click - cuando pulsamos el botón izquierdo del ratón
    dblclick - cuando pulsamos dos veces seguidas el botón izquierdo del ratón
    mouseenter - cuando entramos en la zona que tiene el evento
    mouseleave - cuando salimos de la zona que tiene el evento
    mousedown - cuando pulsamos el boton izquierdo del ratón
    mouseup - cuando soltamos el boton izquierdo del ratón
    mousemove - cuando movemos el ratón
Eventos de teclado:
    keydown - cuando pulsamos una tecla
    keyup - cuando soltamos una tecla
    keypress - cuando pulsamos una tecla y no la soltamos
*/

const $button = document.querySelector('#button');
const $box = document.querySelector('#box');

/*  
$button.addEventListener('click', () => {
    console.log('click');
})
*/


$button.addEventListener('dblclick', () =>{
    console.log('hiciste doble click');
})

$box.addEventListener('mouseenter', ()=> {
    $box.classList.replace('red','green')
})

$box.addEventListener('mouseleave', () => {
    $box.classList.replace('green', 'red')
})

$box.addEventListener('mousedown', () => {
    console.log('has pulsado el boton izquierdo en la caja');
})

$box.addEventListener('mouseup', () =>{
    console.log('has soltado el boton izquierdo en la caja');
})

$box.addEventListener('mousemove', () => {
    console.log('Estas moviendo el mouse en la caja');
})

const $input = document.querySelector('#input');

$input.addEventListener('keydown', () =>{
    console.log('Has pulsado una tecla');
})
$input.addEventListener('keyup', () =>{
    console.log('Has soltado una tecla');
})
$input.addEventListener('keypress', () =>{
    console.log('Estas pulsando una tecla');
})

