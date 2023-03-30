let numerosJogador = [24, 21, 13, 42, 7, 58];



let numero1 = Math.floor(Math.random() *60);
let numero2 = Math.floor(Math.random() *60);
let numero3 = Math.floor(Math.random() *60);
let numero4 = Math.floor(Math.random() *60);
let numero5 = Math.floor(Math.random() *60);
let numero6 = Math.floor(Math.random() *60);


let numerosSorteados = [numero1, numero2, numero3, numero4, numero5, numero6];

let contadorAcertos = 0;
for (let index = 0; index < numerosSorteados.length ; index += 1 ){
    
    for (let index02 = 0; index02 < numerosJogador.length ; index02 += 1 ){
     
        if (numerosSorteados[index] === numerosJogador[index02] ){
                contadorAcertos += 1;
        }
    }

}
console.log ("Numeros Ecolhidos: " + numerosJogador);
console.log ("Numeros Sorteados: " + numerosSorteados);
console.log ("Numero de Acertos: " + contadorAcertos);

