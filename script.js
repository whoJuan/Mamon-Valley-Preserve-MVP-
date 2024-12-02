document.addEventListener("DOMContentLoaded", function() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar_1').innerHTML = data;
            activateHamburger();
        });

    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });
});

function activateHamburger() {
    const hamburger = document.querySelector(".hamburger");
    const navbar = document.getElementById("navbar");
    const closeNavbar = document.getElementById("close-navbar");

    hamburger.addEventListener("click", function() {
        navbar.classList.toggle("active");
        closeNavbar.style.display = navbar.classList.contains("active") ? 'block' : 'none';
    });

    closeNavbar.addEventListener("click", function() {
        navbar.classList.remove("active");
        closeNavbar.style.display = 'none';
    });
}