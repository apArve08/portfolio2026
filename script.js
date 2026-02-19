/**
 * Portfolio JavaScript
 *
 * Organized into modules for easy maintenance:
 * - Theme: Dark/light mode toggle
 * - Navigation: Mobile menu & active link highlighting
 * - Modal: Project popup functionality
 * - Animations: Scroll reveal & typed text effects
 */

// =============================================================================
// DOM Elements
// =============================================================================
const DOM = {
    // Header & Navigation
    header: document.querySelector('.header'),
    menuBtn: document.querySelector('#menu-btn'),
    navbar: document.querySelector('.navbar'),
    navLinks: document.querySelectorAll('.navbar a'),

    // Theme
    themeIcon: document.querySelector('#theme-icon'),
    body: document.body,

    // Sections
    sections: document.querySelectorAll('section'),

    // Modal
    popup: document.getElementById('project-popup'),
    popupTitle: document.getElementById('popup-title'),
    popupDesc: document.getElementById('popup-desc'),
    popupImg: document.getElementById('popup-img'),

    // Typed text
    typedTextSpan: document.querySelector('.typing-text span'),

    // Reveal elements
    revealElements: document.querySelectorAll(
        '.heading, .home-content, .home-img, .services-container, ' +
        '.project-box, .contact form, .about-img, .about-text, ' +
        '.timeline-content'
    )
};

// =============================================================================
// Configuration
// =============================================================================
const CONFIG = {
    // Typed text settings
    typedText: {
        phrases: ['Frontend Developer', 'Minimalist Specialist', 'Problem Solver'],
        typingDelay: 100,
        erasingDelay: 100,
        newTextDelay: 2000
    },

    // Scroll settings
    scroll: {
        headerOffset: 150,
        revealOffset: 100,
        stickyOffset: 100
    },

    // Storage keys
    storage: {
        theme: 'theme'
    }
};

// =============================================================================
// Theme Module
// =============================================================================
const Theme = {
    init() {
        this.loadSavedTheme();
        this.bindEvents();
    },

    loadSavedTheme() {
        const savedTheme = localStorage.getItem(CONFIG.storage.theme);
        if (savedTheme === 'dark') {
            DOM.body.classList.add('dark-mode');
            DOM.themeIcon.classList.replace('fa-moon', 'fa-sun');
        }
    },

    toggle() {
        DOM.body.classList.toggle('dark-mode');
        const isDark = DOM.body.classList.contains('dark-mode');

        if (isDark) {
            DOM.themeIcon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem(CONFIG.storage.theme, 'dark');
        } else {
            DOM.themeIcon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem(CONFIG.storage.theme, 'light');
        }
    },

    bindEvents() {
        DOM.themeIcon.addEventListener('click', () => this.toggle());
    }
};

// =============================================================================
// Navigation Module
// =============================================================================
const Navigation = {
    init() {
        this.bindEvents();
    },

    toggleMobileMenu() {
        DOM.menuBtn.classList.toggle('fa-times');
        DOM.navbar.classList.toggle('active');
    },

    closeMobileMenu() {
        DOM.menuBtn.classList.remove('fa-times');
        DOM.navbar.classList.remove('active');
    },

    updateActiveLink() {
        const scrollY = window.scrollY;

        DOM.sections.forEach(section => {
            const sectionTop = section.offsetTop - CONFIG.scroll.headerOffset;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                DOM.navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    },

    updateStickyHeader() {
        DOM.header.classList.toggle('sticky', window.scrollY > CONFIG.scroll.stickyOffset);
    },

    bindEvents() {
        DOM.menuBtn.addEventListener('click', () => this.toggleMobileMenu());

        // Close menu when clicking a nav link
        DOM.navLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMobileMenu());
        });
    }
};

// =============================================================================
// Modal Module
// =============================================================================
const Modal = {
    init() {
        this.bindEvents();
    },

    open(title, description, imageSrc) {
        DOM.popupTitle.textContent = title;
        DOM.popupDesc.textContent = description;
        DOM.popupImg.src = imageSrc;
        DOM.popupImg.alt = title;

        DOM.popup.style.display = 'flex';
        DOM.body.style.overflow = 'hidden';
    },

    close() {
        DOM.popup.style.display = 'none';
        DOM.body.style.overflow = 'auto';
    },

    bindEvents() {
        // Close on backdrop click
        DOM.popup.addEventListener('click', (e) => {
            if (e.target === DOM.popup) {
                this.close();
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && DOM.popup.style.display === 'flex') {
                this.close();
            }
        });
    }
};

// Global functions for HTML onclick attributes
function openPopup(title, desc, imgSrc) {
    Modal.open(title, desc, imgSrc);
}

function closePopup() {
    Modal.close();
}

// =============================================================================
// Animations Module
// =============================================================================
const Animations = {
    typedState: {
        textIndex: 0,
        charIndex: 0
    },

    init() {
        this.initScrollReveal();
        this.initTypedText();
        this.bindEvents();
    },

    // Scroll Reveal
    initScrollReveal() {
        DOM.revealElements.forEach(el => {
            el.classList.add('reveal');
        });
        this.checkReveal();
    },

    checkReveal() {
        const windowHeight = window.innerHeight;

        DOM.revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;

            if (elementTop < windowHeight - CONFIG.scroll.revealOffset) {
                el.classList.add('active');
            }
        });
    },

    // Typed Text Effect
    initTypedText() {
        if (!DOM.typedTextSpan) return;

        const { newTextDelay } = CONFIG.typedText;
        setTimeout(() => this.type(), newTextDelay + 250);
    },

    type() {
        const { phrases, typingDelay, newTextDelay } = CONFIG.typedText;
        const { textIndex, charIndex } = this.typedState;
        const currentPhrase = phrases[textIndex];

        if (charIndex < currentPhrase.length) {
            DOM.typedTextSpan.textContent += currentPhrase.charAt(charIndex);
            this.typedState.charIndex++;
            setTimeout(() => this.type(), typingDelay);
        } else {
            setTimeout(() => this.erase(), newTextDelay);
        }
    },

    erase() {
        const { phrases, erasingDelay, typingDelay } = CONFIG.typedText;
        const { charIndex } = this.typedState;

        if (charIndex > 0) {
            DOM.typedTextSpan.textContent = phrases[this.typedState.textIndex].substring(0, charIndex - 1);
            this.typedState.charIndex--;
            setTimeout(() => this.erase(), erasingDelay);
        } else {
            this.typedState.textIndex++;
            if (this.typedState.textIndex >= phrases.length) {
                this.typedState.textIndex = 0;
            }
            setTimeout(() => this.type(), typingDelay + 1100);
        }
    },

    bindEvents() {
        // Debounced scroll handler
        let scrollTimeout;
        window.addEventListener('scroll', () => {
            if (scrollTimeout) {
                window.cancelAnimationFrame(scrollTimeout);
            }
            scrollTimeout = window.requestAnimationFrame(() => {
                this.checkReveal();
            });
        });
    }
};

// =============================================================================
// Scroll Handler (combined for performance)
// =============================================================================
const ScrollHandler = {
    init() {
        this.bindEvents();
    },

    handleScroll() {
        Navigation.updateActiveLink();
        Navigation.updateStickyHeader();
        Navigation.closeMobileMenu();
    },

    bindEvents() {
        let ticking = false;

        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    this.handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }
};

// =============================================================================
// Keyboard Accessibility
// =============================================================================
const Accessibility = {
    init() {
        this.setupProjectCards();
    },

    setupProjectCards() {
        // Allow project cards to be activated with Enter/Space keys
        const projectBoxes = document.querySelectorAll('.project-box');
        projectBoxes.forEach(box => {
            box.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    box.click();
                }
            });
        });
    }
};

// =============================================================================
// Initialize
// =============================================================================
document.addEventListener('DOMContentLoaded', () => {
    Theme.init();
    Navigation.init();
    Modal.init();
    Animations.init();
    ScrollHandler.init();
    Accessibility.init();
});
