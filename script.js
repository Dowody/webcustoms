const toggle = document.querySelector(".moon");
const bodyy = document.querySelector(".dark");

toggle.addEventListener("click", () => {
    bodyy.classList.toggle("dark");
});

const toggleButton = document.getElementsByClassName('hamb')[0]
const navbarLinks = document.getElementsByClassName('navlinks')[0]

navbarLinks.classList.remove('active')

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
});

