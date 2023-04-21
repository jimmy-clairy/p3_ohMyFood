// If media 
if (window.matchMedia("(min-width: 800px)").matches) {
    const heart = document.querySelectorAll('.heart')
    heart.forEach(h => h.addEventListener('click', (e) => {
        e.preventDefault()
        h.classList.toggle('active')
    }))

    const divMenu = document.querySelectorAll('.submenu__container')
    divMenu.forEach(d => d.addEventListener('click', (e) => {
        e.preventDefault()
        d.classList.toggle('active')
    }))

} else {
    const heart = document.querySelectorAll('.heart')
    heart.forEach(h => h.addEventListener('touchstart', (e) => {
        e.preventDefault()
        h.classList.toggle('active')
    }))

    const divMenu = document.querySelectorAll('.submenu__container')
    divMenu.forEach(d => d.addEventListener('touchstart', (e) => {
        e.preventDefault()
        d.classList.toggle('active')
    }))
}