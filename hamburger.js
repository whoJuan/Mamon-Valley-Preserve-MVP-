document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const navbar = document.getElementById("navbar");
    const closeNavbar = document.getElementById("close-navbar");

    hamburger.addEventListener("click", function() {
        navbar.classList.toggle("active");
        closeNavbar.style.display = navbar.classList.contains("active") ? 'block' : 'none'; // Muestra la imagen al abrir
    });

    closeNavbar.addEventListener("click", function() {
        navbar.classList.remove("active"); // Oculta el menú
        closeNavbar.style.display = 'none'; // Oculta la imagen de cerrar
    });
});