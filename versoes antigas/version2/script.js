const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.hidden')


elements.forEach((element) => myObserver.observe(element))



function Enviar(){
    var nome = document.getElementById("nomeid")
    var fone = document.getElementById("foneid")
    var msg = document.getElementById("msgid")

    if(nome.value != ""){
        alert("Obrigado " + nome.value + ", sua mensagem foi encaminhada com sucesso.")
        window.location.reload(true)
    }
}

// MUDANÇA DE TEMA

document.addEventListener('DOMContentLoaded', () => {
    const darkModeStorage = localStorage.getItem('dark-mode')
    const html = document.querySelector('html')
    const inputDarkMode = document.getElementById('input-dark-mode')

    

    inputDarkMode.addEventListener('change', () => {
      if(inputDarkMode.checked){
        html.setAttribute("dark", "true")
        localStorage.setItem('dark-mode', true)
      }else{
        html.removeAttribute("dark")
        localStorage.removeItem('dark-mode')
      }
    })

  })



/*
const chk = document.getElementById('checkTema')

chk.addEventListener('change' , () => {
    document.body.classList.toggle('dark')
})
*/