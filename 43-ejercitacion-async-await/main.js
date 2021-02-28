const $button = document.querySelector('#button');
const $input = document.querySelector('#id');


const getInfo = async (id) => {
    try {
        const user = await getUser(id);
        return user;
    } catch (error) {
        console.log(error);
    }
}
/* 
const createOptions = () => {
    const users = fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => {
        console.log(json);
        console.log(Object.keys(json)); 
    })
}
createOptions();
*/

const getUser = async (id) => {
    const user = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => json.find(user => user.id === id))
        
        if (!user) {
        throw new Error(`No existe un usuario con id ${id}`);
    } else {
        return user
    }
}

$button.addEventListener('click', (e) => {
    const id = Number($input.value);
    getInfo(id)
        .then(res => console.log(res));
    e.preventDefault();
})
