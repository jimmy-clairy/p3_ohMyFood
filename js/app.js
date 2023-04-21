console.log('OhmyFood');

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