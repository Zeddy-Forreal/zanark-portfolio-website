document.addEventListener("DOMContentLoaded", () => {

    // --- 1. Select New Side Nav Links ---
    const navLinks = document.querySelectorAll(".side-nav a");
    const sections = document.querySelectorAll("section");

    // --- 2. Scroll Reveal Animation & Dynamic Skills Tracker ---
    const reveals = document.querySelectorAll(".reveal");
    const skillSpans = document.querySelectorAll(".range span");

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            
            entry.target.classList.add("active");
            
            // Trigger skill loaders once inside view
            if(entry.target.closest('#skills')) {
                skillSpans.forEach(span => {
                    const value = span.getAttribute("data-value");
                    span.style.width = value;
                });
            }
            
            observer.unobserve(entry.target);
        });
    }, revealOptions);

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });

    // --- 3. Refined ScrollSpy Logic for Side Navigation ---
    window.addEventListener("scroll", () => {
        let currentSectionId = "";
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            // Evaluates active sector relative to view threshold
            if (window.pageYOffset >= (sectionTop - sectionHeight / 3)) {
                currentSectionId = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            const targetHref = link.getAttribute("href");
            
            if (targetHref.includes(currentSectionId)) {
                link.classList.add("active");
            }
        });
    });
});