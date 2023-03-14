function contar() {
    let inicio = document.getElementById("inicio");
    let fim = document.getElementById("fim");
    let passo = document.getElementById("passo");
    var resultado = document.getElementById("resultado");
    if (
        inicio.value.length == 0 ||
        fim.value.length == 0 ||
        passo.value.length == 0
    ) {
        resultado.innerHTML = "[erro] impossivel contar";
    } else {
        resultado.innerHTML = `Contando:<br>`;
        let ini = Number(inicio.value);
        let FIM = Number(fim.value);
        let pass = Number(passo.value);
        if (pass <= 0) {
            resultado.innerHTML = "passo invalido considerando passo 1: <br>";
            pass = 1;
        }
        if (ini < FIM) {
            // crescente
            for (let c = ini; c <= FIM; c += pass) {
                resultado.innerHTML += `${c} 👉`;
            }
        } else {
            // decrescente
            for (let c = ini; c >= FIM; c -= pass) {
                resultado.innerHTML += `${c} 👉`;
            }
        }
        resultado.innerHTML += `🏁`;
    }
}
