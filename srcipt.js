// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth scrolling for CTA button
document.querySelector('.cta-button').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#booking').scrollIntoView({
        behavior: 'smooth'
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);
// Animate all elements with class "animate-on-scroll" including footer
document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

// Form input interactions
const form = document.querySelector('form');
const inputs = form.querySelectorAll('input, select, textarea');

inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
    });

    input.addEventListener('blur', () => {
        if (!input.value) {
            input.parentElement.classList.remove('focused');
        }
    });
});

// Time slot click interaction
document.querySelectorAll('.slot.available').forEach(slot => {
    slot.addEventListener('click', () => {
        document.querySelectorAll('.slot.selected').forEach(s => {
            s.classList.remove('selected');
        });

        slot.classList.add('selected');

        const timeSelect = document.getElementById('time');
        const timeValue = slot.textContent.trim();

        const timeMap = {
            '09:00 AM': '09:00',
            '10:00 AM': '10:00',
            '11:00 AM': '11:00',
            '12:00 PM': '12:00',
            '02:00 PM': '14:00',
            '03:00 PM': '15:00',
            '04:00 PM': '16:00',
            '05:00 PM': '17:00'
        };

        if (timeMap[timeValue]) {
            timeSelect.value = timeMap[timeValue];
        }
    });
});

// Add selected slot style dynamically
const style = document.createElement('style');
style.textContent = `
    .slot.selected {
        background-color: #0066ff !important;
        color: white !important;
        transform: scale(1.05);
        box-shadow: 0 4px 12px rgba(0,102,255,0.3);
    }
`;
document.head.appendChild(style);

// Set today's date as minimum in date input
const dateInput = document.getElementById('date');
const today = new Date().toISOString().split('T')[0];
dateInput.min = today;

