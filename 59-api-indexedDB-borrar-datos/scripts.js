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
        const transaction = db.transaction(['tasks'], 'readwrite');
        const objectStore = transaction.objectStore('tasks');
        const request = objectStore.add(data);
        readData();
    }

    const getData = (key) => {
        const transaction = db.transaction(['tasks'] , 'readwrite');
        const objectStore = transaction.objectStore('tasks');
        const request = objectStore.get(key);
        
        request.onsuccess = () => {
            form.task.value = request.result.taskTitle;
            form.priority.value = request.result.taskPriority;
            form.button.dataset.action = 'update'; 
            form.button.textContent = 'Update task'
        }
    }

    const delateData = (key) => {
        const transaction = db.transaction(['tasks'], 'readwrite');
        const objectStore = transaction.objectStore('tasks');
        const request = objectStore.delete(key)
        request.onsuccess = () => {
            readData()
        }

    }

    const updateData = (data) => {
        const transaction = db.transaction(['tasks'], 'readwrite');
        const objectStore = transaction.objectStore('tasks');
        const request = objectStore.put(data);
        request.onsuccess = () => {
            form.button.dataset.action = 'add';
            form.button.textContent = 'Add task'
            readData();
        }
    }

    const readData = () => {
        const transaction = db.transaction(['tasks'], 'readonly');
        const objectStore = transaction.objectStore('tasks');
        const request = objectStore.openCursor();
        const fragment = document.createDocumentFragment();

        request.onsuccess = (e)  => {
            const cursor = e.target.result;
            if(cursor){
                const taskTitle = document.createElement('p')
                taskTitle.textContent = cursor.value.taskTitle;
                fragment.appendChild(taskTitle);

                const taskPriority = document.createElement('p')
                taskPriority.textContent = cursor.value.taskPriority;
                fragment.appendChild(taskPriority);

                const taskUpdate = document.createElement('button');
                taskUpdate.dataset.type = 'update';
                taskUpdate.dataset.key = cursor.key;
                taskUpdate.textContent = 'Update';
                fragment.appendChild(taskUpdate);

                const taskDelate = document.createElement('button');
                taskDelate.dataset.type = 'delate';
                taskDelate.dataset.key = cursor.key;
                taskDelate.textContent = 'Delate';
                fragment.appendChild(taskDelate);

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
        
        if(e.target.button.dataset.action == 'add'){
            addData(data);
        }else if (e.target.button.dataset.action == 'update'){
            updateData(data);
        }
        form.reset();   
    })

    tasks.addEventListener('click', (e) => {
        if(e.target.dataset.type == 'update'){
            getData(e.target.dataset.key);
        }else if(e.target.dataset.type == 'delate'){
            delateData(e.target.dataset.key);
        }
    })

}
