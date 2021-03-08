const $alert = document.querySelector('#alert');

addEventListener('online', (e) => {
    setAlert(1);
})

addEventListener('offline', (e) => {
    setAlert(0);
})

const setAlert = (status) => {
    $alert.classList.remove('alert--online');
    $alert.classList.remove('alert--offline');

    status === 0 ? 
    setTimeout(() => {
        $alert.textContent = 'Vaya, parece que no tienes internet';
        $alert.classList.add('alert--offline');
    }, 100) : 
    setTimeout(() => {
        $alert.textContent = 'Conexión establecida';
        $alert.classList.add('alert--online');
    }, 100); 
}