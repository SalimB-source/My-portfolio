// =====================================
// SALIM BENMOKHTAR PORTFOLIO
// JavaScript Interactivity & Features
// =====================================

document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initPortfolioFilters();
    initScrollAnimations();
    initParallax();
    initFormSubmission();
});

// ========== MOBILE MENU ==========
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (!hamburger) return;

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// ========== PORTFOLIO FILTERS ==========
function initPortfolioFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Filter items
            const filter = this.getAttribute('data-filter');
            portfolioItems.forEach(item => {
                if (filter === 'all') {
                    item.style.display = 'block';
                    item.classList.add('fade-up');
                } else {
                    if (item.getAttribute('data-category') === filter) {
                        item.style.display = 'block';
                        item.classList.add('fade-up');
                    } else {
                        item.style.display = 'none';
                    }
                }
            });
        });
    });
}

// ========== SCROLL ANIMATIONS ==========
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-up');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all animatable elements
    document.querySelectorAll('.fade-up, .service-card, .about-block').forEach(el => {
        observer.observe(el);
    });
}

// ========== PARALLAX EFFECT ==========
function initParallax() {
    window.addEventListener('scroll', function() {
        const parallaxElements = document.querySelectorAll('[data-parallax]');
        
        parallaxElements.forEach(element => {
            const scrollPosition = window.pageYOffset;
            const parallaxValue = element.getAttribute('data-parallax');
            element.style.transform = `translateY(${scrollPosition * parallaxValue}px)`;
        });
    });
}

// ========== FORM SUBMISSION ==========
function initFormSubmission() {
    const contactForm = document.querySelector('.contact-form');
    
    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;

        // Validate
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }

        // Here you would typically send data to a server
        console.log('Form submitted:', { name, email, message });

        // Show success message
        alert('Thank you for your message! I\'ll get back to you soon.');
        
        // Reset form
        this.reset();
    });
}

// ========== SMOOTH SCROLLING ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ========== ACTIVE NAV LINK ON SCROLL ==========
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ========== SKILL BAR ANIMATION ==========
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.style.width;
                entry.target.style.width = '0';
                setTimeout(() => {
                    entry.target.style.width = width;
                }, 100);
                observer.unobserve(entry.target);
            }
        });
    });

    skillBars.forEach(bar => observer.observe(bar));
}

// Call skill bar animation
setTimeout(animateSkillBars, 500);

// ========== SCROLL TO TOP BUTTON ==========
function initScrollToTop() {
    const scrollTop = document.querySelector('.scroll-top');
    
    if (!scrollTop) return;

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTop.style.display = 'block';
        } else {
            scrollTop.style.display = 'none';
        }
    });

    scrollTop.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

initScrollToTop();

// ========== PRELOAD IMAGES ==========
function preloadImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        const src = img.src;
        const preloadImg = new Image();
        preloadImg.src = src;
    });
}

preloadImages();

// ========== CONSOLE WELCOME MESSAGE ==========
console.log('%c🎨 Salim Benmokhtar - Creative Portfolio', 'font-size: 20px; color: #ff6b6b; font-weight: bold;');
console.log('%cBuilt with HTML, CSS & JavaScript', 'font-size: 14px; color: #4e54c8;');
console.log('%cReady to impress! ✨', 'font-size: 14px; color: #00b894;');
