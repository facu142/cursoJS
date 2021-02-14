  
/* 
Atributos
    element.getAttribute('attribute')               // Devuelve el atributo
    element.setAttribute('attribute', value)        // Asigna valor al atrinbuto
Clases
    element.classList.add('class','class',...)      // Añadir clases 
    element.classList.remove('class','class',...)   // Eliminar clases
    element.classList.contains('class')             // Devuelve true o false si tiene la clase o no 
    element.classList.replace('oldClass', newClass) // Sustituye una clase por otra
    
    element.classList.toggle('class'[,force])       // Si tiene la clase se la quita y si no la tiene se la asigna    
atributos directos
    id
    value
*/


const title = document.querySelector('#title');
const nombre = document.querySelector('#name');
 


nombre.setAttribute('type', 'radio')
console.log(nombre.getAttribute('type'));

title.classList.add('main-title', 'other-title')
title.classList.remove('main-title', 'other-title')


//console.log(title);

console.log(title.classList.contains('title'));

console.log(title.classList.contains('main-title'));

title.classList.replace('title', 'main-title');
console.log(title);
