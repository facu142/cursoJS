/** 
let a = Number(prompt('número a'));

let b = Number(prompt('numero b'));

let c = Number(prompt('numero c'));

let resultado = document.querySelector('#resultado');


if (a <= b && a <= c) {
    if (b < c) {
        resultado.textContent = `El orden de los números es ${a},${b},${c} `;
    } else {
        resultado.textContent = `El orden de los números es ${a},${c},${b} `;
    }
} else if (b <= a && b <= c) {
    if (a < c) {
        resultado.textContent = `El orden de los números es ${b},${a},${c} `;
    } else {
        resultado.textContent = `El orden de los números es ${b},${c},${a} `;
    }
} else if (c <= a && c <= b) {
    if (a < b) {
        resultado.textContent = `El orden de los números es ${c},${a},${b} `;
    } else {
        resultado.textContent = `El orden de los números es ${c},${b},${a} `;
    }
}
*/