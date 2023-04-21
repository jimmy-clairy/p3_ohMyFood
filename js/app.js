const heart = document.querySelectorAll('.heart')
heart.forEach(h => h.addEventListener('click', (e) => {
    e.preventDefault()
    if (window.innerWidth > 1000) {
        h.classList.toggle('active')
    }
}))

const divMenu = document.querySelectorAll('.submenu__container')
divMenu.forEach(d => d.addEventListener('click', (e) => {
    e.preventDefault()
    if (window.innerWidth > 1000) {
        d.classList.toggle('active')
    }
}))
