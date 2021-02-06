/* 
Arrays - Métodos II

    .from(iterable) - Convierte en array el elemento iterable

    .sort([callback]) - Ordena los elementos de un array alfabéticamente(valor Unicode), si le pasamos un callback los ordena en función del algoritmo que le pasemos.

    .forEach(callback(currentValue, [index])) - ejecuta la función indicada una vez por cada elemento del array.

    .some(callback) - Comprueba si al menos un elemento del array cumple la condición

    .every(callback) - Comprueba si todos los elementos del array cumplen la condición

    .map(callback) - Transforma todos los elementos del array y devuelve un nuevo array

    .filter(callback) - Filtra todos los elementos del array que cumplan la condición y devuelve un nuevo array

    .reduce(callback) - Reduce todos los elementos del array a un único valor
*/

/** 
    // FROM

        let word = 'hola mundo';

        console.log(Array.from(word));
        console.log(word.split(''));

*/

/** 
    // SORT


        let numbers = [100,12,33,8];
        let letters = ['x','z','s','r','a'];


        console.log(letters.sort());
        console.log(numbers.sort((a,b) => a-b )); 

*/

/* 
    // FOREACH

        const numbers = [12,44,11,44,98];

        numbers.forEach((number) => console.log(number));
        numbers.forEach((number,index) => {
            console.log(`${number} está en la posición ${index}`);
        })

*/
/* 
    // SOME / EVERY

        const lenguajes = ['HTML', 'CSS', 'JavaScript', 'PHP']

        console.log(lenguajes.some(lenguaje => lenguaje.length > 10 ));
        console.log(lenguajes.every(lenguaje => lenguaje.length > 2 ));
*/


/*
    // MAP

        const numbers = [12,44,11,44,98];

        const dobleDeNumbers =(numbers.map((numero) => numero * 2)); 

        console.log(dobleDeNumbers);
*/


/*
    // FILTER

        const numbers = [12, 44, 11, 44, 98];

        const mayoresDe40 = numbers.filter((numero) => numero > 40)  

        console.log(mayoresDe40);

*/

/* 
    // REDUCE    
        const numbers = [1, 5, 4, 8, 2];

        console.log(numbers.reduce((a,b) =>a+b));

*/
/* 
const users = [
    {
        name: 'user1',
        online: true
    },
    {
        name: 'user2',
        online: false
    },
    {
        name: 'user3',
        online: true
    },
    {
        name: 'user4',
        online: false
    },
    {
        name: 'user5',
        online: false
    },
    {
        name: 'user6',
        online: true
    },
]



    const usuariosOnline = users.reduce((contador,user) => {
        if (user.online ){
            contador++;
        }
        return contador;
    },0);

    console.log(`Hay ${usuariosOnline} usuarios conectados`);

*/
