const indexedDB = window.indexedDB;
const form = document.querySelector('#form');

if (indexedDB && form) {
    let db;
    const request = indexedDB.open('taskList', 1);

    request.onsuccess = (e) => {
        db = e.target.result;
        console.log('OPEN', db);
    }
    request.onupgradeneeded = (e) => {
        db = e.target.result;
        console.log('CREATE', db);
        const objectStore = db.createObjectStore('tasks', {
            keyPath: 'taskTitle'
        })
    }
    request.onerror = (err) => {
        console.log('ERROR', err );
    }

    const addData = (data) => {
        // Nos devuelve un objeto de tipo transacción

        const transaction = db.transaction('tasks', 'readwrite');

        // Trabajamos con el método object Store, recibe como parametro el almacen que 
        // vamos a utilizar
        const objectStore = transaction.objectStore('tasks');
        const request = objectStore.add(data);
    }

    form.addEventListener('submit' , (e) => {
        
        e.preventDefault();
        const data = {
            taskTitle: e.target.task.value, 
            taskPriority : e.target.priority.value
        }
        addData(data)
    
        console.log(data);
    })
}

