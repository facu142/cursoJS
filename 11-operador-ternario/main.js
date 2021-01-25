
let numero = Number(prompt('Ingrese un número'));

// Caso una sentencia 

/** 
(numero % 2 == 0 ) ? console.log(`${numero} es par`) : console.log(`${numero} es impar`) ;
*/

// Caso varias sentencias 

(numero % 2 == 0 ) ? 
    (

    console.log('es par'),
    console.log('es par 2')
    ) 
    :
    (
    console.log('es impar'),
    console.log('es impar 2')    
    )