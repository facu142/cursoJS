/*
    Spread Operator (operador de expansión)

    Su sintaxis es ...

*/

/* 
const numbers = [-12,44,12,55,62,32]

console.log(...numbers);
*/


    //Enviar elementos en un array a una función
/* 
    const addNumbers = (a,b,c) => {
        console.log(a+b+c);
    }

    const numbersToAdd = [1,4,5];

    addNumbers(...numbersToAdd); 
*/
    //Añadir un array a otro array
/* 
        let users = ['javier','david', 'rosa' , 'juan', 'marcedes'];

        let newUsers = ['facundo', 'jaime', 'laura']

        users.push(...newUsers)

        console.log(users);
*/

    //Copiar arrays
/* 
        let arr1 = [1, 2, 3, 4];

        let arr2 = [...arr1];

        console.log(arr2);
*/


//Concatenar arrays
/* 
    let arr1 = [1, 2, 3, 4];

    let arr2 = [6,7,8];

    arrayConcatenado = [...arr1,...arr2];

    console.log(arrayConcatenado);
*/

// Enviar un número indefinido de argumentos a una función (parámetros REST)
/* 
        const parametrosRest = (...numbers) => {
            console.log(numbers);
        }

        parametrosRest(1,2,3,4,5);
*/
//librería math
 

        const numbers = [11,22,2,3,57,109,29,3,2];
        console.log(Math.max(...numbers));


// Eliminar elementos duplicados 

console.log(...new Set(numbers));

