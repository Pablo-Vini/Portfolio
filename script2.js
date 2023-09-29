const myObserver = new IntersectionObserver((entries) => {
    console.log(entries)
})

const elements = document.querySelectorAll('.hidden')


elements.forEach((element) => myObserver.observe(element))