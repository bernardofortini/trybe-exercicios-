let saldo = 100

function somaSaldo(valor) {
    return valor + saldo;
};

function subtraiSaldo(valor){
    return saldo- valor;
};

function multiplicaValor(valor){
    return valor * saldo;
};

function divideValor(valor){
    return saldo / valor;
};

console.log(somaSaldo(300));
console.log(subtraiSaldo(30));
console.log(multiplicaValor(5));
console.log(divideValor(2));