// GSAP Intro Animation for Hero Section
gsap.from(".hero h1", {
    duration: 1.2,
    opacity: 0,
    y: 30,
    ease: "power3.out"
});

gsap.from(".hero h2", {
    duration: 1.4,
    opacity: 0,
    y: 20,
    delay: 0.2,
    ease: "power3.out"
});

gsap.from(".hero-buttons .btn", {
    duration: 1,
    opacity: 0,
    y: 15,
    stagger: 0.15,
    delay: 0.4,
    ease: "power2.out"
});

