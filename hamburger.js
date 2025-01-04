document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navbar = document.getElementById("navbar");
    const closeNavbar = document.getElementById("close-navbar");

    hamburger.addEventListener("click", () => {
        navMenu.classList.add("active");
        hamburger.style.display = "none";
        closeNavbar.style.display = "block";
    });

    closeNavbar.addEventListener("click", () => {
        navMenu.classList.remove("active");
        hamburger.style.display = "block";
        closeNavbar.style.display = "none";
    });
});

    document.addEventListener("click", function (event) {
        if (!navbar.contains(event.target) && !hamburger.contains(event.target)) {
            navbar.classList.remove("active");
            closeNavbar.style.display = "none";
        }
    });
});
