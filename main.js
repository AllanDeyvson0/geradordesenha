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
}


//FUNÇÃO COPIAR SENHA
function copyPassword(){
    navigator.clipboard.writeText(novaSenha);
    alert("Senha copiada com sucesso!\nNão compartilhe com ninguém.")
}


