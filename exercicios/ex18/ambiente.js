// variaveis compostas
let num = [5, 8, 2, 9, 3];
// acrescenta valores a um array
num.push(7);
num.push(4);
num.push(1);
num.push(6);
// ordena os numeros
num.sort();
// num.length informa quantos elementos tem em um array
console.log(num);
console.log(`O vetor tem ${num.length} posições`);
console.log(`O primeiro valor do vetor e ${num[0]}`);

///////////////////////////////////////////////////////////////////////////////////////////////////

let pos = num.indexOf(8);
if (pos == -1) {
    console.log("O valor não foi encontrado");
} else {
    console.log(`O valor 8 esta na posição ${pos}`);
}
