/* Toggle Icon Navbar */
let menuIcon = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

/* Theme Toggle */
let themeIcon = document.querySelector('#theme-icon');
let body = document.body;

// Check local storage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
}

themeIcon.onclick = () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    }
}

// Cursor Hover Effect on links and buttons
/* Remove custom cursor logic as per request */

/* Project Popup Logic */
function openPopup(title, desc, imgSrc) {
    const popup = document.getElementById('project-popup');
    document.getElementById('popup-title').innerText = title;
    document.getElementById('popup-desc').innerText = desc;
    document.getElementById('popup-img').src = imgSrc;

    popup.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Disable scroll
}

function closePopup() {
    const popup = document.getElementById('project-popup');
    popup.style.display = 'none';
    document.body.style.overflow = 'auto'; // Enable scroll
}

// Close popup if clicking outside content
window.onclick = function (event) {
    const popup = document.getElementById('project-popup');
    if (event.target == popup) {
        closePopup();
    }
}

/* Scroll Sections Active Link */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /* Sticky Navbar */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* Remove toggle icon and navbar when click navbar link */
    menuIcon.classList.remove('fa-times');
    navbar.classList.remove('active');
};

/* Scroll Reveal */
const scrollReveal = () => {
    const reveals = document.querySelectorAll('.heading, .home-content, .home-img, .services-container, .project-box, .contact form, .about-img, .about-text');

    reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('active');
            reveal.style.opacity = "1";
            reveal.style.transform = "translateY(0)";
            reveal.style.transition = "0.8s ease"; // Slightly smoother
        }
    });
}

// Initial styles for reveals
document.querySelectorAll('.heading, .home-content, .home-img, .services-container, .project-box, .contact form, .about-img, .about-text').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)"; // Smaller movement for minimalism
});

window.addEventListener('scroll', scrollReveal);
// Trigger once on load
scrollReveal();

/* Typed Text Effect */
const typedTextSpan = document.querySelector('.typing-text span');
const cursorSpan = document.querySelector('.typing-text');

// Only run if elements exist (simple safety check)
if (typedTextSpan) {
    const textArray = ["Frontend Developer", "Minimalist Specialist", "Problem Solver"];
    const typingDelay = 100;
    const erasingDelay = 100;
    const newTextDelay = 2000;
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 1100);
        }
    }

    document.addEventListener("DOMContentLoaded", function () {
        if (textArray.length) setTimeout(type, newTextDelay + 250);
    });
}
