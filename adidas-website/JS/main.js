// Main JavaScript file

// DOM Elements
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const header = document.querySelector('.header');
const currentYearElements = document.querySelectorAll('#current-year');

// Toggle mobile menu
if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
}

// Header scroll effect
function handleScroll() {
    if (window.scrollY > 10) {
        header.style.boxShadow = 'var(--shadow-md)';
        header.style.padding = '0.5rem 0';
    } else {
        header.style.boxShadow = 'var(--shadow-sm)';
        header.style.padding = '0';
    }
}

window.addEventListener('scroll', handleScroll);

// Set current year in footer
if (currentYearElements.length > 0) {
    const currentYear = new Date().getFullYear();
    currentYearElements.forEach(element => {
        element.textContent = currentYear;
    });
}

// Login form handling
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // In a real app, you would send this data to a server
        console.log('Login attempt:', { email, password });
        
        // For demo purposes, show an alert
        alert('Login functionality would be implemented in a real application.');
    });

    // Add this to your main.js file

// Handle mobile dropdown toggles
document.addEventListener('DOMContentLoaded', function() {
    // Only apply this on mobile
    if (window.innerWidth <= 768) {
        const navItems = document.querySelectorAll('.nav-item');
        
        navItems.forEach(item => {
            const link = item.querySelector('.nav-link');
            const dropdown = item.querySelector('.dropdown-menu');
            
            // Skip if there's no dropdown
            if (!dropdown) return;
            
            // Create a toggle button
            const toggleBtn = document.createElement('button');
            toggleBtn.className = 'dropdown-toggle';
            toggleBtn.innerHTML = '+';
            toggleBtn.setAttribute('aria-label', 'Toggle dropdown');
            
            // Insert the toggle button after the link
            link.parentNode.insertBefore(toggleBtn, link.nextSibling);
            
            // Add click event to toggle button
            toggleBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                // Toggle active class
                item.classList.toggle('dropdown-active');
                
                // Update toggle button text
                toggleBtn.innerHTML = item.classList.contains('dropdown-active') ? '−' : '+';
            });
        });
    }
});
}