const $button = document.querySelector('#button');
const $list = document.querySelector('#list');

$button.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
        .then(res => res.json())
        .then(res => {

            console.log(res);
            const fragment = document.createDocumentFragment();
            for (const item of res) {
                const li = document.createElement('li');
                li.textContent = item.name
                fragment.appendChild(li)
            }
            $list.appendChild(fragment);
        })

});





