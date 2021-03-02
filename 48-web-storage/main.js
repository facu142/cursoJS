/*
    API webStorage:
        Los dos mecanismos en el almacenamiento web son los siguientes:

            sessionStorage mantiene un área de almacenamiento separada para cada origen que está disponible mientras dure la sesión de la página (mientras el navegador esté abierto, incluyendo recargas de página y restablecimientos).

            localStorage hace lo mismo, pero persiste incluso cuando el navegador se cierre y se reabra.

        Ambos funcionan con clave:valor y tienen dos métodos fundamentales setItem() para asignar una clave:valor y getItem() que recibe como parámetro la clave de la que quieremos obtener el valor
*/

const $form = document.querySelector('#form');
const $keys = document.querySelector('#keys');
/* 
const person = {
    name: 'Facu',
    email: 'facu@gmail.com'
}
*/

$form.addEventListener('submit', (e) => {
    
    //sessionStorage.setItem('person', JSON.stringify(person));
    //sessionStorage.setItem('person', 'Facundo');
    //e.preventDefault();

    sessionStorage.setItem($form.key.value, $form.value.value );

    //$keys.innerHTML =+ `<option>${$form.key.value}</option>`;
    newKey = document.createElement('option');
    newKey.textContent = $form.key.value;
    $keys.appendChild(newKey);
    e.preventDefault();
    $form.reset();
})

$keys.addEventListener('change', () => {
    
    document.querySelector('#infoValue').textContent =
    sessionStorage.getItem($keys[$keys.selectedIndex].textContent); 
    
})

//sessionStorage.clear();
//sessionStorage.removeItem('name');