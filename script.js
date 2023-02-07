/*
function Enviar(){
    var nome = document.getElementById("nomeid")
    var fone = document.getElementById("foneid")
    var email = document.getElementById("emailid")
    var msg = document.getElementById("msgid")

    if(nome.value != ""){
        alert("Obrigado " + nome.value + ", seus dados foram encaminhados com sucesso.")
        window.location.reload(true)
    }
}
*/

window.sr = ScrollReveal({reset: true});

sr.reveal('.texto', {duration: 3000});
sr.reveal('.titulo_conhecimento', {
    rotate: {x:100, y:0, z:0},
    duration: 2000
});
sr.reveal('.tecnologia', {
    rotate: {x:0, y:100, z:200},
    duration: 2500
});
sr.reveal('.texto2', {
    duration: 2500
});