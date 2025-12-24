// Interactive Portfolio Script

document.addEventListener('DOMContentLoaded', () => {

    // 1. Scroll Reveal Animation
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Observe all cards and section headers
    const animatedElements = document.querySelectorAll('.bento-card, .section-header, .hero-content, .hero-title, .hero-subtitle');
    animatedElements.forEach((el, index) => {
        el.style.transitionDelay = `${index % 3 * 0.1}s`;
        observer.observe(el);
    });

    // 2. Navbar Active State
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= (sectionTop - 300)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current) && current !== '') {
                link.classList.add('active');
            }
        });
    });

    // Console Easter Egg
    console.log("%c Vedang Avaghade | Builder & Storyteller. ", "background: #2563EB; color: #fff; padding: 10px; border-radius: 4px; font-weight:bold;");
});
