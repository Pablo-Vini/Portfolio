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

const chk = document.getElementById('checkTema')

chk.addEventListener('change' , () => {
    document.body.classList.toggle('dark')
})
/*

const tema = document.querySelector('.checkTema')
let isLightMode = false;

checkTema.addEventListener('change' , () => {
    isLightMode = (isLightMode) ? false : true;
    changeTheme()
})

function changeTheme() {
    return (isLightMode) ? turnOnDarkMode() : turnOffDarkMode()
}

const turnOnDarkMode = () => {
    document.documentElement.style.setProperty('--background', 'var(--background-items)')
}
const turnOffDarkMode = () => {
    document.documentElement.style.setProperty('--background', '#000000')
}*/