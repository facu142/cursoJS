/* 
    //Ejercicio 1

        let nombre = prompt('Ingresá tu nombre');
        let edad = Number(prompt('Ingresá tu edad'));

        console.log(`hola ${nombre} tienes ${edad} años y el año que viene tendrás ${edad +1} años`);

*/



/* 

    //    Ejercicio 2 

        alert('Este programa calcula el área de triangulos, rectángulos y círculos, por favor ingrese una de las siguientes palabras: triangulo, rectangulo o circulo')

        let figura = prompt('ingrese triangulo, rectangulo o circulo ').trim().toLowerCase();

        if (figura == 'triangulo') {
            let base = Number(prompt('ingrese la base del triangulo'));
            let altura = Number(prompt('ingrese la altura del triangulo'));
            console.log(calcularAreaTriángulo(base, altura));
        } else if (figura == 'rectangulo') {
            let base = Number(prompt('ingrese la base del rectángulo'));
            let altura = Number(prompt('ingrese la altura del rectángulo'));
            console.log(calcularAreaRectangulo(base, altura));
        } else if (figura == 'circulo') {
            let radio = Number(prompt('ingrese el radio del circulo'));
            console.log(calcularAreaCirculo(radio));    
        }else{
            console.log('No te entendí');
        }

        function calcularAreaTriángulo(base, altura) {
            return base * altura / 2;
        }

        function calcularAreaRectangulo(base, altura) {
            return base * altura;
        }

        function calcularAreaCirculo(radio) {
            return Math.PI * Math.pow(radio, 2)
        }

*/

/* 
    // Ejercicio 3     

        let numeroMaximo = Number(prompt('Por favor ingrese un número del 1 al 100'))

        if(numeroMaximo <= 100){
            for (let i = 1; i <= numeroMaximo; i++){
                if (i % 2 === 0 ){
                    console.log(`${i} es par`);
                }else if(i % 2 != 0 ){
                    console.log(`${i} es inpar`);
                } 
            }
        }

*/

/* 
    // Ejercicio 4

        let numero = Number(prompt('Ingrese un numero entero mayor que 1'));

        let divisores = [2, 3, 4, 5, 6, 7, 8, 9]

        function calcularSiEsPrimo(numero,divisores){

            if (numero > 1) {

                for (let i = 0; i < divisores.length; i++){
                    let respuesta; 
                    if (numero % divisores[i] === 0 ){
                        respuesta = `${numero} no es número primo`
                    }else{
                        respuesta = `${numero} es número primo`
                    }
                return console.log(respuesta);
                }
            }
        }
            
        calcularSiEsPrimo(numero,divisores);

*/

/*     
    
    //Ejercicio 5    

        let numero = Number(prompt('Ingrese un numero del 1 al 100'));

        function calcularFactorial(numero) {

            let resultado = 1;

            for (let i = numero; i > 0;i--){
                resultado *= i
            }
            console.log(`el factorial de ${numero} es ${resultado}`);
        }

        calcularFactorial(numero)

*/

/* 
    //Ejercicio 6
    
        let serieDeNumeros = [];
        let total = 0
        let contador = 0
        do {
            let numero = Number(prompt('ingrese un número menor a 50'));
            total += numero;
            contador ++
            if (total>=50){
                console.log(`El total es ${total} luego de ${contador} números ingresados`);
            }
        } while (total < 50);

*/

/*  
    //Ejercicio 7

        const numeros = [13,22,42,11,65];
        let pares = [];
        let inpares = [];

        for(let i=0 ; i < numeros.length ; i++ ){
            
            let numeroAleatorio =  generarNumeroAleatorio();

            resultado = numeros[i] * numeroAleatorio

            console.log(`El resultado de ${numeros[i]} * ${numeroAleatorio} es ${resultado}`);

            if (resultado % 2 === 0 ){
                pares.push(resultado);
            }else if(resultado % 2 !== 0){
                inpares.push(resultado);
            }

        }

        console.log(`Los resultados pares son ${pares}`);
        console.log(`Los resultados inpares son ${inpares}`);

        function generarNumeroAleatorio(){
            return Math.ceil(Math.random() * 10);
        }

*/

/* 
    //Ejercicio 8

        const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

        const dni = Number(prompt('Ingresá tu dni'));

        digitosDni = dni.toString().length;

        if (dni > 0 && digitosDni <= 8) {

            let indice = dni % 23;
            
            console.log(`El numero correspondiente al ${dni} es ${letras[indice]}`);

        } else if (digitosDni >= 8) {
            console.log(`El numero ingresado no puede superar los 8 digitos`);
        }

*/

/* 
    // Ejercicio 9

        const palabra = prompt('Por favor ingrese una palabra');

        const allVowels = ['a','e','i','o','u'];

        function contarVocales( str ){
            let contadorVocales = 0;

            for (let i of str.toLowerCase()){
                if (allVowels.includes(i)){
                    contadorVocales++
                }
            }
            console.log(`El texto ingresado es ${str}`);
            console.log(`La cantidad de vocales en el texto es ${contadorVocales}`);

        }

        contarVocales(palabra);

*/

/* 
    Ejercicio 10    


        let colores = ['azul', 'amarillo', 'rojo', 'verde', 'rosa']

        const color = prompt('Por favor introduce un color').toLowerCase();


        function  verificarColor(color){

            
            for (let i = 0; i < colores.length; i++) {

                if (color === colores[i]) {
                    
                    return console.log(`El color ${color} se encuentra en el array`); 
                }
            
            }

            return console.log(`El color ${color} no se encuentra en el array`);
        }

        verificarColor(color);

*/


