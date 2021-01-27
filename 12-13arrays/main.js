/* 
Array - propiedad

    .length - devuelve el numero de posiciones que contiene el array 
*/

let numeros = [1,2,3,4,5,1]
//console.log(numeros.length);

/* 
    Array - metodos 

        Array.isArray(variable a evaluar); - devuelve true si la variable es array 

*/

//let numero = 1;
//console.log(Array.isArray(numero));  // false
//console.log(Array.isArray(numeros)); // true


/* 
        Eliminar un elemento

        .shift(); - Elimina el primer elemento del array y devuelve ese elemento 
        .pop(); - Elimina el último elemento del array y devuelve ese elemento
*/ 

//console.log(numeros);
//console.log(numeros.shift());
//console.log(numeros);
//console.log(numeros.pop());
//console.log();

/* 
        Agregar un elemento

        .push(element1,element2); - añade uno o mas elementos al final de un array y devuelve la nueva longitud
        .unshift(element1,element2); - añade uno o mas elementos al comienzo de un array y devuelve la nueva longitud
*/ 



//console.log(numeros);
//let nuevaLongitud = numeros.push(6); 
//console.log(`La nueva longitud es ${nuevaLongitud}`)
//console.log(numeros);

/* 
        .indexOf(); - Devuelve el primer indice del elemento que coincida con el valor especificado o -1 si ninguno es encontrado
        .last(element1,element2); - añade uno o mas elementos al comienzo de un array y devuelve la nueva longitud
*/ 

//console.log(numeros);
//console.log(numeros.indexOf(1));
//console.log(numeros.lastIndexOf(1));

/*
 
        .reverse() - Invierte el orden de los elementos del array.

*/

//console.log(numeros);
//console.log(numeros.reverse());

/*
 
        .join('separador') Devuelve un string con el seárador que indiquemos, por defecto son comas.

*/

//console.log(numeros);
//console.log(numeros.join('-'));

/*
        splice(a,b,items) - cambia el contenido del array eliminando elementos existentes y / o agregando nuevos elementos.
                a - indice de inicio
                b - Número de elementos (opcional)
                Items - Elementos a añadir en el caso que se añadan 
*/


//console.log(numeros);
//numeros.splice(3); // Elimina desde la posición 3 hasta el 
//console.log(numeros);

//numeros.splice(2,2); // Elimina desde la posición 2 el numero de valores que le indiquemos
//onsole.log(numeros);

//numeros.splice(2,3,10,23,65) // Si b es un valor distinto a 0, elimina el numero de valores que indiquemos en b y añade los
//valores de items a partir de la posición a
//numeros.splice(2,0,10,23,65) // Si b vale 0 ,añade los valores desde la posicion y no elimina ningun valor
//console.log(numeros);


/*
        slice(a,b) - Extrae elementos de un array desde el índice a hasta el indice b. si no existe b los hace desde a hasta el final, si no existe ni a ni b, hace una copia del original

*/
console.log(numeros);
let newNumbers = numeros.slice(2,4) // empieza en la posición 2 y extrae hasta la posicion 4 (la posición 4 no se contempla)
console.log(newNumbers);

