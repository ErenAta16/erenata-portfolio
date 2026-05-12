/* ============================================================
   Eren Ata — Portfolio scripts
   ============================================================ */

(() => {
    'use strict';

    // ---- Nav scroll state ----
    const nav = document.getElementById('nav');
    let lastY = 0;
    const onScroll = () => {
        const y = window.scrollY;
        if (y > 40) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
        lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // ---- Mobile menu ----
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');
    toggle?.addEventListener('click', () => {
        toggle.classList.toggle('open');
        links.classList.toggle('open');
    });
    links?.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            toggle.classList.remove('open');
            links.classList.remove('open');
        });
    });

    // ---- Reveal on scroll ----
    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add('in');
                    io.unobserve(e.target);
                }
            });
        }, { rootMargin: '-8% 0px', threshold: 0.08 });

        document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    } else {
        document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
    }

    // ---- Smooth anchor (with nav offset) ----
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', (e) => {
            const id = a.getAttribute('href');
            if (id === '#' || id.length < 2) return;
            const target = document.querySelector(id);
            if (!target) return;
            e.preventDefault();
            const navH = nav.offsetHeight;
            const top = target.getBoundingClientRect().top + window.scrollY - navH + 1;
            window.scrollTo({ top, behavior: 'smooth' });
        });
    });

    // ---- Console signature ----
    if (typeof console !== 'undefined') {
        console.log(
            '%c Eren Ata ',
            'background:#E07A3C;color:#0F0E0D;padding:6px 10px;font-family:monospace;font-weight:600;letter-spacing:0.1em;'
        );
        console.log('%cInterested? erena6466@gmail.com', 'color:#9A9189;font-family:monospace;');
    }
})();
