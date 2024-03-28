"use strict";
const Multiplicacao = (valor1, valor2) => {
    return valor1 * valor2;
};
function Saudacoes(nome) {
    return 'Olá ' + nome;
}
const multiplica = Multiplicacao(2, 2);
console.log(multiplica);
const ola = Saudacoes('Guilherme');
console.log(ola);
