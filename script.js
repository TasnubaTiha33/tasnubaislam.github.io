// Highlight active page in navigation
const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});

// Smooth hover scaling on hero links
document.querySelectorAll(".hero-link").forEach(btn => {
    btn.addEventListener("mouseenter", () => btn.style.transform = "scale(1.03)");
    btn.addEventListener("mouseleave", () => btn.style.transform = "scale(1)");
});
