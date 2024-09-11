let header = document.getElementById("titulo")

function escuro() {
    document.querySelector(".fundo").style.backgroundColor="black";
    document.querySelector(".fundo").style.color= "gray";
    header.innerHTML="Testando Modo Escuro"

}

function daltonico() {
    document.querySelector(".fundo").style.backgroundColor="pink";
    document.querySelector(".fundo").style.color= "lime";
    header.innerHTML="Testando Modo Daltonico"

}
function normal() {
    document.querySelector(".fundo").style.backgroundColor="bisque";
    document.querySelector(".fundo").style.color="rgb(69,4,4)";
     header.innerHTML="Testando mudanças de cor de fundo Body, a cor da fonte e a imagem na página"

}

function baixaVisao() {
    document.querySelector("h1").style.fontSize="65px"
    document.querySelector(".text, .text2").style.fontSize="50px"
    header.innerHTML="Modo Baixa Visão"

}
