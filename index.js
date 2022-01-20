const nav = document.querySelector('.nav-links')
const burger = document.querySelector('.burger')
const navbar= document.querySelector('nav')

burger.addEventListener("click", ()=>{
    nav.classList.toggle("nav-active")
    burger.classList.toggle("toggle")
})

window.addEventListener("scroll", ()=>{

    const navbar = document.querySelector("nav")
  
    navbar.classList.toggle("sticky",window.scrollY>0)
})