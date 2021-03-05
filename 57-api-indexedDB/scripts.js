//Especificación oficial: https://developer.mozilla.org/es/docs/IndexedDB-840092-dup

const indexedDB = window.indexedDB;
const form = document.querySelector('#form');
const tasks = document.querySelector('#tasks');

if (indexedDB && form) {
    let db;
    const request = indexedDB.open('taskList', 1);

    request.onsuccess = (e) => {
        db = e.target.result;
        console.log('OPEN', db);
        readData();
    }
    request.onupgradeneeded = (e) => {
        db = e.target.result;
        console.log('CREATE', db);
        const objectStore = db.createObjectStore('tasks', {
            keyPath: 'taskTitle'
        })
    }
    request.onerror = (err) => {
        console.log('ERROR', err);
    }

    const addData = (data) => {
        // Nos devuelve un objeto de tipo transacción

        const transaction = db.transaction('tasks', 'readwrite');

        // Trabajamos con el método object Store, recibe como parametro el almacen que 
        // vamos a utilizar
        const objectStore = transaction.objectStore('tasks');
        const request = objectStore.add(data);
        readData();
    }

    const readData = () => {
        const transaction = db.transaction('tasks', 'readonly');
        const objectStore = transaction.objectStore('tasks');
        const request = objectStore.openCursor();
        const fragment = document.createDocumentFragment();

        request.onsuccess = (e)  => {
            const cursor = e.target.result;
            if(cursor){
                const taskTitle = document.createElement('p')
                taskTitle.textContent = cursor.value.taskTitle;
                const taskPriority = document.createElement('p')
                taskPriority.textContent = cursor.value.taskPriority;

                fragment.appendChild(taskTitle);
                fragment.appendChild(taskPriority);
                cursor.continue()
            }else{
                tasks.textContent = '';
                tasks.appendChild(fragment);
            }
        }

    }

    form.addEventListener('submit', (e) => {

        e.preventDefault();
        const data = {
            taskTitle: e.target.task.value,
            taskPriority: e.target.priority.value
        }
        addData(data)

        console.log(data);
    })
}
