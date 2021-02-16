 
const $form = document.querySelector('#form');
const $input = document.querySelector('input');
const $button = document.querySelector('#button');
const $link = document.querySelector('#link');

$input.addEventListener('keyup', (e) => {
    console.log(e);
})

$button.addEventListener('click' , (e) => {
    e.preventDefault();
    $input.value = 'click'
})

$link.addEventListener('click' , (e) =>{
    e.preventDefault();
    $button.click();
})
/* 
const gallery = document.querySelector('#gallery')

gallery.addEventListener('click', (e) => {
    e.target.classList.add('red');
})
*/

