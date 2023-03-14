function tabuada() {
    let numero = document.getElementById("tabuada");
    let tabuada = document.getElementById("seltab");
    if (numero.value.length == 0) {
        alert("[ERRO] digite um numero");
    } else {
        let Numero = Number(numero.value);
        let contador = 1;
        tabuada.innerHTML = "";
        while (contador <= 10) {
            let item = document.createElement("option");
            item.text = `${Numero} X ${contador} = ${Numero * contador}`;
            item.value = (`tab${contador}`);
            tabuada.appendChild(item);
            contador++;
        }
    }
}
