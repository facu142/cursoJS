//DOM - Crear e insertar elementos

/* 
Crear un elemento: document.createElement(element)
Escribir texto en un elemento: element.textContent = texto
Escribir HTML en un elemento: element.innerHTML = código HTML
Añadir un elemento al DOM: parent.appendChild(element)
Fragmentos de código: document.createDocumentFragment()
*/
const title = document.querySelector('#title');
const daySelect = document.querySelector('#day-select');
const dayList = document.querySelector('#day-list')

const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

title.innerHTML = '31- <span>Crear e insertar elementos<span>'

const fragment = document.createDocumentFragment()

for (day of days) {
    const itemList = document.createElement('li');
    itemList.textContent = day;
    fragment.appendChild(itemList)
}

dayList.appendChild(fragment);

const fragment2 = document.createDocumentFragment()


for(day of days){
    const selectOption = document.createElement('option')
    selectOption.setAttribute('value' , day.toLowerCase());
    selectOption.textContent = day;
    fragment2.appendChild(selectOption);
}

daySelect.appendChild(fragment2);