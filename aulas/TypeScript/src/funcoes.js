"use strict";
function calculaArea(base, altura) {
    return base * altura;
}
const calculaArea2 = (base, altura) => base * altura;
function somar(...numeros) {
    // numeros.reduce()
    console.log(numeros);
}
//usando union type
function teste() {
    if (10 > 5) {
        return 'dez maior que 5';
    }
    else {
        return 5;
    }
}
const resultadoDeTeste = teste();
