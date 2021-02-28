
const $button = document.querySelector('#button');
const $list = document.querySelector('#list');


$button.addEventListener('click', (e) => {
    axios({
        method:'GET',
        url:'https://jsonplaceholder.typicode.com/users'
    })
    .then(res => {
        const fragment = document.createDocumentFragment();
        for(const userInfo of res.data){
            const li = document.createElement('li');
            li.textContent = userInfo.name;            
            fragment.appendChild(li);
        }
        $list.appendChild(fragment);

    }).catch(err => console.log(err))
        
})
