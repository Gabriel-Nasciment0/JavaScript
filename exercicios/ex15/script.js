function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById("txtano");
    var res = document.querySelector("div#res");
    if (fano.Value.length == 0 || fano.Value > ano) {
        window.alert("[ERRO] verifique os dados e tente novamente");
    } else {
        window.alert("tudo ok");
    }
}
