//RELACIONANDO ELEMENTOS
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");
let containerPassword = document.querySelector("#container-password");

//VARIÁVEIS PARA LÓGICA
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#";
let novaSenha = "";

//LIGA O TAMANHO DE CARACTERES COM O "RANGE" DO HTML
sizePassword.innerHTML = sliderElement.value;
sliderElement.oninput = function(){
    sizePassword.innerHTML = this.value
}

//FUNÇÃO GERAR SENHA
function generatePassword(){
    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n))
    }
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;

    //RETORNANDO ÍCONE DE BI-COPY
    let svgIcon = document.getElementById("icon-svg");
    svgIcon.innerHTML = '<path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>';
    svgIcon.classList.remove("bi-check2");
    svgIcon.classList.add("bi-copy");
}


//FUNÇÃO COPIAR SENHA
function copyPassword(){
    navigator.clipboard.writeText(novaSenha);
    alert("Senha copiada ✔ \nNão compartilhe com ninguém!")

    //SUBSTITUIR ÍCONE PARA CHECK
    let svgIcon = document.getElementById("icon-svg");
    svgIcon.innerHTML = '<path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>';
    svgIcon.classList.remove("bi-copy");
    svgIcon.classList.add("bi-check2");

    //TEMPO DE 3 SEGUNDOS
    setTimeout(function() {
        svgIcon.innerHTML = '<path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>';
        svgIcon.classList.remove("bi-check2");
        svgIcon.classList.add("bi-copy");
    }, 3000);
}


