function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById("txtano");
    var res = document.getElementById("res");
    if (fano.value.lenght <= 1900 || fano.value > ano) {
        alert("[ERRO] verifique os dados e tente novamente");
    } else {
        var fsex = document.getElementsByName("radsex");
        var idade = ano - Number(fano.value);
        var genero_masculino = document.getElementById("Masculino");
        var genero_Feminino = document.getElementById("Feminino");
        var img = document.createElement("img");
        img.setAttribute("id", "foto");
    }
    if (genero_masculino.checked) {
        genero = "homem";
        if (idade >= 0 && idade < 5) {
            // bebe
            img.setAttribute("src", "imagens/babyboy.jpg");
        } else if (idade < 10) {
            // criança
            img.setAttribute("src", "imagens/kidboy.jpg");
        } else if (idade < 22) {
            // jovem
            img.setAttribute("src", "imagens/youngboy.jpg");
        } else if (idade < 50) {
            // adulto
            img.setAttribute("src", "imagens/man.jpg");
        } else {
            // idoso
            img.setAttribute("src", "imagens/oldman.jpg");
        }
    } else if (genero_Feminino.checked) {
        genero = "mulher";
        if (idade >= 0 && idade < 5) {
            // bebe
            img.setAttribute("src", "imagens/babygirl.jpg");
        } else if (idade < 10) {
            // criança
            img.setAttribute("src", "imagens/kidgirl.jpg");
        } else if (idade < 21) {
            // jovem
            img.setAttribute("src", "imagens/younggirl.jpg");
        } else if (idade < 50) {
            // adulto
            img.setAttribute("src", "imagens/woman.jpg");
        } else {
            // idoso
            img.setAttribute("src", "imagens/oldwoman.jpg");
        }
    }
    res.style.textAlign = "center";
    res.innerHTML = `detectamos que voce e ${genero} com ${idade} de idade`;
    res.appendChild(img);
}
