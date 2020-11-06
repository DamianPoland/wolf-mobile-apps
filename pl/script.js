// close & open burger
const nav = document.querySelector('.nav')
const burger = document.getElementById('burger')
const navList = document.querySelector('.nav__list')
nav.addEventListener('click', () => {
    burger.classList.contains('burgerOpen') ? burger.classList.remove('burgerOpen') : burger.classList.add('burgerOpen')
    navList.classList.contains('nav__listOpen') ? navList.classList.remove('nav__listOpen') : navList.classList.add('nav__listOpen')
})

// parallax effect
const text = document.querySelector('.home__desc') //get element
window.addEventListener('scroll', () => { //add scroll event
    let offset = window.scrollY // get Y offset
    text.style.transform = `translateY(${offset * 1}px)`; //change element style according to offset
}
)
