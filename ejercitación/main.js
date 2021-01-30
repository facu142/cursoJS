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

let numeros = [13,22,42,11,65];
let pares = [];
let impares = [];

for(let i=0 ; i < numeros.length ; i++ ){
    resultado = numeros[i] * Math.ceil(Math.random() * 10);

    if (resultado % 2 === 0 ){
        pares.push(resultado);
    }


}



