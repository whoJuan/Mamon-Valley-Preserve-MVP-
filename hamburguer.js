const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active'); // Alterna la clase active
});