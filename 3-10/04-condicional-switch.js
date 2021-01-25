/**

// Sintaxis simple

switch(evaluación) {

    case n:
    //codigo
    break;

    case n2:
    //codigo
    break;

    default:
    //código    
}




Sintaxis Múltiple
switch(evaluación) {
    case n1:
    case n2:
    case n3:
    case n4:
        //código
    break;
    case n5:
    case n6:
        //código
    break;
    default:
         //código
} 

*/

let num = 2;

switch(num){
    case 1 : console.log('num tiene el valor 1');
    break;
    case 2 : console.log('num tiene el valor 2');
    break;
    default: console.log('num no vale ni 1 ni 2');      
}

switch(num){
    case 1:
    case 3:
    case 5:
    console.log(`${num} es impar`);
    break;

    case 2:
    case 4:
    case 6:    
    console.log(`${num} es par`);
    break;
}
