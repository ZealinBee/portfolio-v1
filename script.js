const hamburger = document.querySelector('.hamburger')
const hamburgerSpan = document.querySelector('.hamburger-span')
const nav = document.querySelector('.nav')
const navImg = document.querySelector('.nav-img')

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active')
    nav.classList.toggle('disappear')
})

//Enable hidden nav

let lastScrollY = window.scrollY

window.addEventListener('scroll', function() {
    if(lastScrollY < window.scrollY) {
        nav.classList.add('nav-hidden')
        navImg.classList.add('nav-hidden')
        navImg.classList.add('nav-mobile-hidden')
    }else{
        nav.classList.remove('nav-hidden')
        navImg.classList.remove('nav-hidden')
        navImg.classList.remove('nav-mobile-hidden')
    }

    lastScrollY = window.scrollY
})