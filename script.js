function Enviar(){
    var nome = document.getElementById("nomeid")
    var tel = document.getElementById("telid")
    var email = document.getElementById("emailid")
    var text = document.getElementById("textid")
    console.log(nome.value)
    console.log(tel.value)
    console.log(email.value)
    console.log(text.value)
    if(nome.value == ""){
        alert("Preencha seu nome!")
    }
    else if(tel.value == ""){
        alert("Preencha seu telefone para contato!")
    }
    else if(email.value == ""){
        alert("Preencha seu email!")
    }
    else if(text.value == ""){
        alert("Preencha a descrição do projeto!")
    }
    else{
        alert("Obrigado " + nome.value + ", sua mensagem foi encaminhada com sucesso e será respondida em até 24 horas.")
        //window.location.reload(false)
    }
}