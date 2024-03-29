
const $button = document.querySelector('#button');
/* 
$button.addEventListener('click', () => {

    let xhr;

    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest;
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }

    xhr.open('GET','https://jsonplaceholder.typicode.com/users');

    xhr.addEventListener('load', (data) => {
        const dataJSON = JSON.parse(data.target.response);
        
        for(const userInfo of dataJSON){
            const list = document.querySelector('#list');
            const $li = document.createElement('li');
            $li.textContent = `${userInfo.id} - ${userInfo.name}` ;
            list.appendChild($li);
        }
    })

    xhr.send();
});

*/

$button.addEventListener('click', () => {
    let xhr;

    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest;
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

    xhr.addEventListener('load', (data) => {
        const dataJSON = JSON.parse(data.target.response);
        console.log(dataJSON);
        for(const userInfo of dataJSON){
            const li = document.createElement('li');
            li.textContent = `${userInfo.name} lives in ${userInfo.address.city}`;
            const $list = document.querySelector('#list');
            $list.appendChild(li);
        }

    })

    xhr.send();
})
