const hearts = document.querySelectorAll(".heart")
hearts.forEach(heart => heart.addEventListener("click", (e) => {
    e.preventDefault()
    heart.classList.toggle('active')
})
)

const divMenu = document.querySelectorAll('.submenu__container')
divMenu.forEach(d => d.addEventListener('click', (e) => {
    e.preventDefault()
    d.classList.toggle("active")
}))