const indexedDB = window.indexedDB

if(indexedDB){
    let db;
    const request = indexedDB.open('taskList' , 1 ); 

    request.onsuccess = () => {
        db = request.result;
        console.log('OPEN' , db);
    }

    // el metodo onupgradeneeded pregunta si existe 
    request.onupgradeneeded = () => {
        db = request.result;
        console.log('Create' , db);
        const objectStorage = db.createObjectStore('tasks')
    }
    request.onerror = (error) => {
        console.log('Error' , error);
    }
}