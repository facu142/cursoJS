const $buttonImg = document.querySelector('#button-img');
const $buttonPdf = document.querySelector('#button-pdf');

// blob = binary long object

$buttonImg.addEventListener('click' , ()=> {
    fetch('dog.jpg')
    .then(res => res.blob())
    .then(img => {
        document.querySelector('#img').src= URL.createObjectURL(img)
    })
})

$buttonPdf.addEventListener('click', () => {
    fetch('demo.pdf')
    .then(res => res.blob())
    .then(pdf=> {
        document.querySelector('#pdf').href = URL.createObjectURL(pdf)
    } )
})
