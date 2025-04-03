let corBalao;
let formatoBalao;

function customizacao() {
    corBalao = document.getElementById("corBalao").value;
    formatoBalao = document.getElementById("formatoBalao").value;
    const corFundo = document.getElementById("corFundo").value;

    document.body.style.backgroundColor = corFundo;
    document.querySelector(".menu-container").style.display = "none";

    iniciar();
}

function addBola() {
    var bola = document.createElement("div");
    bola.classList.add("bola", formatoBalao); // Adiciona a classe corretamente

    if (!corBalao) {
        console.warn("corBalao não está definida! Usando valor padrão.");
        corBalao = "red"; // Define um valor padrão caso esteja vazia
    }

    bola.style.left = Math.floor(Math.random() * 500) + "px";
    bola.style.top = Math.floor(Math.random() * 400) + "px";
    bola.style.backgroundColor = corBalao; // Aplica diretamente ao style

    bola.onclick = function () {
        estourar(this);
    };

    document.body.appendChild(bola);
}

function estourar(elemento) { /*SEGUNDA PARTE: Função pra Estourar*/
	document.body.removeChild(elemento); /*Remove o elementoo na tela*/
}

function iniciar() { /* De tempo em tempo executara função*/
	setInterval(addBola, 1000); /*1000 = 1 Segundo*/
}

module.exports = { customizacao, addBola, estourar, iniciar };