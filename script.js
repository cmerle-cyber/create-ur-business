const images = document.querySelectorAll(".grid img")

window.addEventListener("scroll", () => {

images.forEach(img => {

const position = img.getBoundingClientRect().top
const screen = window.innerHeight

if(position < screen - 100){
img.style.opacity = 1
img.style.transform = "translateY(0)"
}

})

})