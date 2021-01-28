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

let numero = Number(prompt('Ingrese un numero entero mayor que 1'));

let divisores = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function calcularSiEsPrimo(numero,divisores){

    if (numero > 1) {

        for (let i = 0; i < divisores.length; i++){
            if(numero % divisores[i] == 0 ){
                return console.log(`${numero} es primo`);
            }else if (numero % divisores !== 0 ){
                return console.log(`${numero} no es primo`);
            }
        }
    }
}
    
calcularSiEsPrimo(numero,divisores);



