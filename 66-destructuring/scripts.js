/* 
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment

La destructuración es una expresión de JavaScript que hace posible la extracción de datos de arreglos u objetos
*/


const person = {
    name: 'Facundo',
    age: 18,
    email: 'facu@gmail.com'
}
/* 
const { name, age, email } = person;

console.log(name,age,email);
*/

/* 
const numbers = [1,2,3,4];

const [a,b,terceraposicion] = numbers;

console.log(terceraposicion);
*/
/* 

const printPerson = ({name : nombre}) => {
    console.log(nombre);
}

printPerson(person);
*/


const getUsers = async () => {
    const {data:users} = await axios.get('https://jsonplaceholder.typicode.com/users')
    
    console.log(users);
}


getUsers();

