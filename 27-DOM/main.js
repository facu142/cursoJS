/* 
    document.getElementById('id') - Acceder a un elemento a través de su id

    document | element .querySelector('selectorCSS') - Accede al primer elemento que coincida con el selector CSS

    document | element .querySelectorAll('selectorCSS') - Accede a todos los elementos que coincidan con el selector CSS, devuelve un nodeList
*/
/* 
    const title = document.getElementById('title');

    title.textContent = 'hola mundo'

*/
/*
    const paragraph = document.querySelector('.paragraph')

    console.log(paragraph);

*/

/* 
    const span = document.querySelector('#title').querySelector('span');

    console.log(span);
*/

const paragraphs = document.querySelectorAll('.paragraph');

const paragraphsSpreadOperator = [...document.querySelectorAll('.paragraph')]; 

paragraphsSpreadOperator.map(p => p.style.color = 'green')

const paragraphsArray = Array.from(document.querySelectorAll('.paragraph'));

paragraphsArray.map(p => p.style.color = 'red');