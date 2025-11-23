// 1. GESTION DU CODE PIN
function checkPin() {
    const correctPin = "1418"; 
    const userPin = document.getElementById("pin-input").value;
    const errorMsg = document.getElementById("error-msg");
    const loginOverlay = document.getElementById("login-overlay");
    const mainContent = document.getElementById("main-content");

    if (userPin === correctPin) {
        loginOverlay.style.opacity = "0";
        setTimeout(() => {
            loginOverlay.style.display = "none";
            mainContent.style.display = "block";
        }, 500);
    } else {
        errorMsg.style.display = "block";
        document.querySelector('.login-box').animate([
            { transform: 'translateX(0)' },
            { transform: 'translateX(-10px)' },
            { transform: 'translateX(10px)' },
            { transform: 'translateX(0)' }
        ], { duration: 300 });
    }
}

// Touche Entrée pour valider
document.getElementById("pin-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        checkPin();
    }
});

// 2. MENU MOBILE (HAMBURGER)
const mobileMenu = document.getElementById("mobile-menu");
const navList = document.querySelector(".nav-list");

mobileMenu.addEventListener("click", () => {
    navList.classList.toggle("active");
});

// 3. GESTION DU MODE SOMBRE (NOUVEAU)
const themeBtn = document.getElementById("theme-toggle");
const themeIcon = themeBtn.querySelector("i");
const body = document.body;

// Vérifie si l'utilisateur a déjà choisi un thème avant
const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
}

themeBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    
    if (body.classList.contains("dark-mode")) {
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
        localStorage.setItem("portfolio-theme", "dark");
    } else {
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
        localStorage.setItem("portfolio-theme", "light");
    }

});
