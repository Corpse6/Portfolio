const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navlinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
