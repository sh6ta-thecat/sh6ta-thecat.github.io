  // === MOBILE MENU ===
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Cerrar menú al hacer clic en un enlace
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });

        // === SMOOTH SCROLL ===
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // === FORMULARIO ===
        const form = document.querySelector('.contact-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('.btn');
            const original = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            btn.disabled = true;

            setTimeout(() => {
                btn.innerHTML = '✅ ¡Mensaje enviado!';
                btn.style.background = '#10b981';
                form.reset();

                setTimeout(() => {
                    btn.innerHTML = original;
                    btn.style.background = '';
                    btn.disabled = false;
                }, 2500);
            }, 1500);
        });

        // === ANIMACIÓN DE BARRAS ===
        const progressBars = document.querySelectorAll('.progress');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.width = entry.target.style.width;
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        progressBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0%';
            observer.observe(bar);
            // Animación al cargar
            setTimeout(() => {
                bar.style.width = width;
            }, 300);
        });

        console.log('🐱 sh6ta_thecat — "Hoy tamales, mañana limón"');
