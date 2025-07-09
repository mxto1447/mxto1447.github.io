document.addEventListener('DOMContentLoaded', function() {
    // --- LÓGICA PARA MENÚ MÓVIL ---
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = navToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    // --- LÓGICA PARA ANIMACIÓN AL HACER SCROLL ---
    const animatedElements = document.querySelectorAll('.fade-in-element');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    animatedElements.forEach(el => observer.observe(el));

    // --- LÓGICA PARA TABS EN PÁGINA "INSTITUCIÓN" ---
    const tabsContainer = document.querySelector('.tabs-container');
    if (tabsContainer) {
        const tabButtons = tabsContainer.querySelectorAll('.tab-button');
        const tabContents = document.querySelectorAll('.tab-content');

        tabsContainer.addEventListener('click', (e) => {
            const clicked = e.target.closest('.tab-button');
            if (!clicked) return;

            tabButtons.forEach(tab => tab.classList.remove('active'));
            clicked.classList.add('active');

            const targetContent = document.querySelector(`#${clicked.dataset.target}`);
            tabContents.forEach(content => content.classList.remove('active'));
            targetContent.classList.add('active');
        });
    }
});