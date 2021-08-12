const hamburger = document.querySelector("#hamburger")
const navbar = document.querySelector("#navbar")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("show")
  navbar.classList.toggle("show")
})

window.addEventListener("scroll", () => {
  navbar.classList.remove("show")
  
})


