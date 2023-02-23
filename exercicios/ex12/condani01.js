var idade = 64;
console.log(`voce tem ${idade} anos.`);
if (idade < 16) {
    console.log(`você não vota`);
} else if (idade < 18 || idade > 64) {
    console.log(`seu voto opcional`);
} else if (idade >= 18) {
    console.log(`seu voto obrigatorio`);
}
