// Smooth GSAP Animations for Home Layout

// Profile card slide-in
gsap.from(".profile-card", {
    duration: 1.1,
    opacity: 0,
    x: -40,
    ease: "power3.out"
});

// Right content fade + lift
gsap.from(".content", {
    duration: 1.1,
    opacity: 0,
    y: 20,
    delay: 0.2,
    ease: "power3.out"
});

// Navbar fade-in
gsap.from(".navbar", {
    duration: 1,
    opacity: 0,
    y: -20,
    ease: "power2.out"
});

// Section animations on scroll (AOS handles most)
AOS.init({
    duration: 800,
    easing: "ease-out-quart"
});

// Smooth scroll for nav items
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
