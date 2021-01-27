/* Bucles */

/* 
    Indeterminados - No sabemos el número de veces que se va a ejecutar el código
    Bucle while
    while(condición){
        //código a ejecutar
    }    
    Bucle do...while
    do{
        //código a ejecutar
    }while(condición)
*/
/**
 

        let contraseña = '';

            while (contraseña != '123'){
                contraseña = prompt('Ingrese la contraseña');
            }

        console.log('bienvenido');    

    */

/* 
    pass = '';

    do{
        pass = prompt('ingrese la contraseña')
    }while(pass != 'hola')

    console.log('fin del bucle');

*/

/* 
    Determinados
    bucle for
    Su sintaxis se compone de 3 partes
        Iniciación de variable
        Número de vueltas
        Incremento o decremento
    for(let i=0;i<=10;i++){
        Código a ejecutar
    }
*/

/* 
let numeros = [23,12,42,51,74,26,21];

for (let i = 0; i < numeros.length; i++) {
    console.log(`numeros vale ${numeros[i]} en la posición ${i} `);
}
*/



    let nombres = ['Facundo','José','Fabricio'];

    for (let nombre of nombres){
        console.log(nombre);
    } 


    for (let index in nombres){
        console.log(index);
    }

    
