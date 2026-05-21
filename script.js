// ============================================
// Portfolio JavaScript - Muhammad Zubair
// ============================================

// ============================================
// Portfolio JavaScript - Muhammad Zubair (UPDATED)
// ============================================

document.addEventListener('DOMContentLoaded', function() {

    lucide.createIcons();
    gsap.registerPlugin(ScrollTrigger);

    initParticles();
    initTypewriter();
    initHeroAnimations();
    initNavbar();
    initMobileMenu();
    initScrollAnimations();
    initSkillBars();
    initProjectFilter();
    initBackToTop();
    initActiveNavLink();
    initProfileImage();
    initStatCounter();

    // ✅ NEW: PAGE SYSTEM FIX
    initPageNavigation();
});


// ============================================
// PAGE NAVIGATION SYSTEM (FIXED)
// ============================================
function initPageNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    function showSection(id) {
        sections.forEach(section => {

            // HOME = show everything
            if (id === 'home') {
                section.style.display = 'block';
            } 
            // other pages = show only matching section
            else {
                if (section.id === id) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            }
        });

        // refresh animations after display change
        ScrollTrigger.refresh();
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const target = link.getAttribute('href').replace('#', '');

            e.preventDefault();

            // active class update
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            showSection(target);

            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // default: home
    showSection('home');
}


// ============================================
// Particle Canvas Background
// ============================================
function initParticles() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;
    let isVisible = true;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resize();
    window.addEventListener('resize', resize);

    class Particle {
        constructor() { this.reset(); }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.3;
            this.speedY = (Math.random() - 0.5) * 0.3;
            this.opacity = Math.random() * 0.5 + 0.1;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(99, 102, 241, ${this.opacity})`;
            ctx.fill();
        }
    }

    const particleCount = window.innerWidth < 768 ? 25 : 50;
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 120) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(99, 102, 241, ${0.1 * (1 - distance / 120)})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        if (!isVisible) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            p.update();
            p.draw();
        });

        drawConnections();
        animationId = requestAnimationFrame(animate);
    }

    document.addEventListener('visibilitychange', () => {
        isVisible = !document.hidden;
        if (isVisible) animate();
        else cancelAnimationFrame(animationId);
    });

    animate();
}


// ============================================
// (BAQI SAARI TUMHARI ORIGINAL FUNCTIONS SAME RAHEN GI)
// ============================================
// initTypewriter, initHeroAnimations, initNavbar ...
// initScrollAnimations, initSkillBars ... (NO CHANGE)
// ============================================
// Particle Canvas
// ============================================
function initParticles() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;
    let isVisible = true;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resize();
    window.addEventListener('resize', resize);

    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.3;
            this.speedY = (Math.random() - 0.5) * 0.3;
            this.opacity = Math.random() * 0.5 + 0.1;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(99, 102, 241, ${this.opacity})`;
            ctx.fill();
        }
    }

    // Create particles (limited for performance)
    const particleCount = window.innerWidth < 768 ? 25 : 50;
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 120) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(99, 102, 241, ${0.1 * (1 - distance / 120)})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        if (!isVisible) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        drawConnections();
        animationId = requestAnimationFrame(animate);
    }

    // Visibility check for performance
    document.addEventListener('visibilitychange', () => {
        isVisible = !document.hidden;
        if (isVisible) animate();
        else cancelAnimationFrame(animationId);
    });

    animate();
}

// ============================================
// Typewriter Effect
// ============================================
function initTypewriter() {
    const typewriter = document.getElementById('typewriter');
    if (!typewriter) return;

    const phrases = [
        'responsive websites',
        'interactive UIs',
        'clean code',
        'modern web apps'
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            typewriter.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typewriter.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500; // Pause before new phrase
        }

        setTimeout(type, typingSpeed);
    }

    // Start after hero animations
    setTimeout(type, 1500);
}

// ============================================
// Hero Animations
// ============================================
function initHeroAnimations() {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.to('.hero-greeting', { opacity: 1, y: 0, duration: 0.8 })
      .to('.title-line:first-child', { opacity: 1, y: 0, duration: 0.8 }, '-=0.4')
      .to('.title-line.accent', { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
      .to('.hero-role', { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
      .to('.hero-description', { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')
      .to('.hero-cta', { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')
      .to('.hero-stats', { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')
      .to('.hero-image', { opacity: 1, scale: 1, duration: 1, ease: 'back.out(1.4)' }, '-=1.2');
}

// ============================================
// Navbar
// ============================================
function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    }, { passive: true });
}

// ============================================
// Mobile Menu
// ============================================
function initMobileMenu() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const closeBtn = document.getElementById('mobileMenuClose');
    const overlay = document.getElementById('mobileMenuOverlay');
    const links = document.querySelectorAll('.mobile-nav-link');

    if (!menuBtn || !overlay) return;

    function openMenu() {
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    menuBtn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);

    links.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeMenu();
    });

    // Close on escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('active')) {
            closeMenu();
        }
    });
}

// ============================================
// Scroll Animations
// ============================================
function initScrollAnimations() {
    // Timeline items
    gsap.utils.toArray('.timeline-item').forEach((item, i) => {
        gsap.to(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 1,
            x: 0,
            duration: 0.6,
            delay: i * 0.15,
            ease: 'power2.out'
        });
    });

    // Project cards
    gsap.utils.toArray('.project-card').forEach((card, i) => {
        gsap.to(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            },
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: i * 0.08,
            ease: 'power2.out'
        });
    });

    // About cards
    gsap.utils.toArray('.about-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 30,
            duration: 0.6,
            delay: i * 0.15,
            ease: 'power2.out'
        });
    });

    // Skill categories
    gsap.utils.toArray('.skill-category').forEach((cat, i) => {
        gsap.from(cat, {
            scrollTrigger: {
                trigger: cat,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 30,
            duration: 0.6,
            delay: i * 0.1,
            ease: 'power2.out'
        });
    });

    // Contact cards
    gsap.utils.toArray('.contact-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 30,
            duration: 0.5,
            delay: i * 0.08,
            ease: 'power2.out'
        });
    });

    // Section headers
    gsap.utils.toArray('.section-header').forEach(header => {
        gsap.from(header, {
            scrollTrigger: {
                trigger: header,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 30,
            duration: 0.6,
            ease: 'power2.out'
        });
    });
}

// ============================================
// Skill Bars Animation
// ============================================
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');

    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');

        ScrollTrigger.create({
            trigger: bar,
            start: 'top 90%',
            onEnter: () => {
                gsap.to(bar, {
                    width: width + '%',
                    duration: 1.5,
                    ease: 'power2.out'
                });
            },
            once: true
        });
    });
}

// ============================================
// Project Filter
// ============================================
function initProjectFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');

                if (filter === 'all' || category === filter) {
                    card.classList.remove('hidden');
                    gsap.fromTo(card, 
                        { opacity: 0, y: 20 },
                        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
                    );
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}

// ============================================
// Back to Top
// ============================================
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    if (!backToTop) return;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }, { passive: true });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ============================================
// Active Nav Link
// ============================================
function initActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }, { passive: true });
}

// ============================================
// Profile Image Handler
// ============================================
function initProfileImage() {
    const img = document.getElementById('profileImg');
    const placeholder = document.getElementById('imagePlaceholder');

    if (!img || !placeholder) return;

    img.addEventListener('load', () => {
        img.classList.add('loaded');
        placeholder.classList.add('hidden');
    });

    img.addEventListener('error', () => {
        img.classList.remove('loaded');
        placeholder.classList.remove('hidden');
    });

    // Check if image already loaded (cached)
    if (img.complete && img.naturalWidth > 0) {
        img.classList.add('loaded');
        placeholder.classList.add('hidden');
    }
}

// ============================================
// Stat Counter Animation
// ============================================
function initStatCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');

    statNumbers.forEach(stat => {
        const target = parseFloat(stat.getAttribute('data-count'));
        const isDecimal = target % 1 !== 0;

        ScrollTrigger.create({
            trigger: stat,
            start: 'top 90%',
            onEnter: () => {
                gsap.to(stat, {
                    innerHTML: target,
                    duration: 2,
                    ease: 'power2.out',
                    snap: isDecimal ? { innerHTML: 0.01 } : { innerHTML: 1 },
                    onUpdate: function() {
                        if (isDecimal) {
                            stat.innerHTML = parseFloat(stat.innerHTML).toFixed(2);
                        } else {
                            stat.innerHTML = Math.round(parseFloat(stat.innerHTML));
                        }
                    }
                });
            },
            once: true
        });
    });
}


