// imagem dinamica ordenada pela hora
function carregar() {
    var msg = document.getElementById("msg");
    var img = document.getElementById("imagen");
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} Horas`;

    if (hora >= 0 && hora <= 12) {
        //Bom Dia
        img.src = "imagens/dia.jpg";

        document.body.style.background = "#fceabb";
    } else if (hora >= 12 && hora <= 18) {
        // Boa Tarde
        img.src = "imagens/tarde.jpg";
        document.body.style.background = "#f8b500";
    } else {
        // Boa Noite
        img.src = "imagens/noite.jpg";
        document.body.style.background = "#232526";
    }
}
