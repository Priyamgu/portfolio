// MOBILE MENU TOGGLE
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Close menu when clicking on a link
const navLinks = navMenu.querySelectorAll("a");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        navMenu.classList.remove("active");
    });
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
    if (!e.target.closest("nav")) {
        menuToggle.classList.remove("active");
        navMenu.classList.remove("active");
    }
});

// VIDEO CARD 3D EFFECT (disabled on touch devices for better performance)
const isTouchDevice = () => {
    return (('ontouchstart' in window) ||
            (navigator.maxTouchPoints > 0) ||
            (navigator.msMaxTouchPoints > 0));
};

if (!isTouchDevice()) {
    const cards = document.querySelectorAll(".video-card");

    cards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            let x = e.offsetX;
            let y = e.offsetY;

            let rotateY = (x - card.clientWidth / 2) / 15;
            let rotateX = -(y - card.clientHeight / 2) / 15;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
        });
    });
}
