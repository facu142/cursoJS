// POST CON FETCH
/* 
$button.addEventListener('click', () => {
    const newPost = {
        title: 'a new post',
        body:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        userId: 1
    }
     
   fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(newPost),
    headers: {
        'Content-type': 'application/json'
    }
}).then(res => res.json())
.then(data => console.log(data) )

})
*/


// POST CON AXIOS

const $button = document.querySelector('#button');

$button.addEventListener('click', (e) => {
    axios({
        method: 'post',
        url:'https://jsonplaceholder.typicode.com/posts',
        data:{
            title: 'a new post',
            body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            userId : '1'
        }
    }).then(res => console.log(res.data))
    .catch(err => console.log(err))
})
