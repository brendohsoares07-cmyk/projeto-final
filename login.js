if(sessionStorage.getItem("idadeVerificada") !== "true"){

let nomeVisitante = prompt("Bem-vindo! Qual é o seu nome?");
let idadeVisitante = Number(prompt("Olá " + nomeVisitante + "! Quantos anos você tem?"));

if (idadeVisitante >= 12) {

    alert("Ótimo, " + nomeVisitante + "! Você tem acesso ao nosso site.");

    sessionStorage.setItem("idadeVerificada","true");

} else {

    alert("Desculpe, " + nomeVisitante + ". Você precisa ter pelo menos 17 anos para acessar este site.");

    window.location.href = "bloqueado.html";

}

}