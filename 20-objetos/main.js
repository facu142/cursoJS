const persona = {
    nombre : 'Juan',
    edad : 26,
    hijos : ['Laura', 'Diego','Rosa','Tomás']
}

/* 

for(const key in persona){
    console.log(key);
}

for(const key in persona){
    console.log(persona[key]);
}

*/


// Imprimir los nombres de los hijos

// Funciona el for of porque hace referencia a un array y no al objeto

/* 
for (const hijo of persona.hijos){
    console.log(hijo);
}
*/

console.log(`Hola, ${persona.nombre}. Tienes ${persona.edad} años y tus hijos se llaman ${persona.hijos.join(',  ')}`);
