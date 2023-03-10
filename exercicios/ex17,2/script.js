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
        resultado.innerHTML = "erro";
    } else {
        resultado.innerHTML = `Contando:<br>`;
        let ini = Number(inicio.value);
        let FIM = Number(fim.value);
        let pass = Number(passo.value);
        for (let c = ini; c <= FIM; c += pass) {
            resultado.innerHTML += `${c} 👉`;
        }
        resultado.innerHTML += `🏁`;
    }
}
