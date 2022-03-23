
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");

let emailOk = false;
let assuntoOK = false;

function displayAbout() {
    alert('Em breve novidades!');
}

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail");
    let regex = /^[A-Za-z0-9.]{1,32}@[a-z0-9]{1,16}(\.[A-Za-z]+)*$/;

    if(email.value.match(regex)){
        txtEmail.innerHTML="Email Válido";
        txtEmail.style.color="#0bcf05";
        emailOk=true;
    } else {
        txtEmail.innerHTML="Email Inválido"
        txtEmail.style.color="#f21e1e"; 
        emailOk=false;
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto");

    if(assunto.value.length == 0){
        txtAssunto.innerHTML="Insira uma mensagem";
        txtAssunto.style.color="#f21e1e";
        txtAssunto.style.display="block";
        assuntoOK=false;
    } else {
        txtAssunto.style.display="none";
        assuntoOK=true;
    }
}

function enviar() {
    let user = email.value.substring(0, email.value.indexOf('@'));

    if(emailOk==true && assuntoOK==true){
        alert("Obrigado pelo contato, " + user);
    } else if(emailOk==true && assuntoOK==false) {
        alert("Erro no envio: Insira uma mensagem");
    } else if(emailOk==false && assuntoOK==true) {
        alert("Erro no envio: Endereço de email inválido")
    } else if(emailOk==false && assuntoOK==false){
        alert("Preencha o formulário corretamente antes de enviar...")
    }
}

