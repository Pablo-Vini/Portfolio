const translations = {
    en: {
        menu: "Sobre Mim"
    }
}

const imagens = ["astronauta", "estrelas", "galaxia1", "galaxia2", "galaxia3"]


const chk = document.getElementById("chk")
const header = document.getElementById("pag-ini")
const body = document.querySelector('body')
const textosobremim = document.getElementById('textosobremim')
const menu = document.getElementById('menu')
const sobremim = document.getElementById('sobremim')
const tecnologias = document.getElementById('tecnologias')
const divtecnologia = document.getElementById('div-tecnologia')
const projetos = document.getElementById('projetos')


chk.addEventListener('change', () =>{
    chk.classList.toggle('dark');
    header.classList.toggle('dark');
    body.classList.toggle('dark');
    textosobremim.classList.toggle('dark');
    menu.classList.toggle('dark');
    sobremim.classList.toggle('dark');
    tecnologias.classList.toggle('dark');
    divtecnologia.classList.toggle('dark');
    projetos.classList.toggle('dark');
    for (let i = 0; i < imagens.length; i++) {
        document.getElementById(imagens[i]).setAttribute("style", "visibility: hidden;"); 
    }
})