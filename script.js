// HAMBURGER MOBILE

const toggleButton = document.getElementsByClassName('hamb')[0]
const navbarLinks = document.getElementsByClassName('navlinks')[0]



navbarLinks.classList.remove('active')

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
});


scrollbars.init(document.querySelector("#my-scrollbar"));



