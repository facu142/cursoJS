const $fileInput = document.querySelector('#file');
const $progress = document.querySelector('#progress');

const root = document.documentElement;

$fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    
    
    fileReader.addEventListener('progress', (e) => {
       console.log(e.loaded * 100 / e.total);
    })
    fileReader.addEventListener('loadend', (e) => {
        console.log('END');
    })
    

    fileReader.addEventListener('progress', (e) => {
        root.style.setProperty('--bar-width' , (e.loaded * 100 / e.total) + '%' ); 
    })
})
