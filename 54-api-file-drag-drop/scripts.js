const fileInput = document.querySelector('#file');
const dropZone = document.querySelector('#drop-zone');


dropZone.addEventListener('click' , () => {
    fileInput.click()
})
    
dropZone.addEventListener('dragover', (e)=>{
    e.preventDefault();
    dropZone.classList.add('drop-zone--active');
})
 
dropZone.addEventListener('dragleave', (e)=>{
    e.preventDefault();
    dropZone.classList.remove('drop-zone--active');
}) 

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    console.log(e);
    fileInput.files = e.dataTransfer.files;
})

fileInput.addEventListener('change' , () => {
    console.log(fileInput.files);
})