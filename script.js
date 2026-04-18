// ===========================
// WHYTE AUTOS - Complete JavaScript
// Based on NAIRAXI Functionality
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initSearchBar();
    initDropdowns();
    initFormValidation();
    initSmoothScroll();
    initTimeDropdown();
    initVehicleDropdown();
    setMinDate();
});

// ===========================
// MOBILE MENU
// ===========================
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const mainNav = document.getElementById('mainNav');

    if (!hamburger || !mobileMenu) return;

    hamburger.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
        mainNav.classList.toggle('active');
    });

    // Close when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            hamburger.classList.remove('active');
            mainNav.classList.remove('active');
        });
    });

    // Close when clicking outside
    document.addEventListener('click', function(event) {
        if (!hamburger.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.classList.remove('active');
            hamburger.classList.remove('active');
            mainNav.classList.remove('active');
        }
    });
}

// ===========================
// SEARCH BAR
// ===========================
function initSearchBar() {
    const searchToggle = document.querySelector('.search-toggle');
    const searchBar = document.getElementById('searchBar');

    if (!searchToggle || !searchBar) return;

    searchToggle.addEventListener('click', function(e) {
        e.preventDefault();
        searchBar.classList.toggle('active');
        const input = searchBar.querySelector('input');
        if (searchBar.classList.contains('active') && input) {
            setTimeout(() => input.focus(), 300);
        }
    });

    // Close on Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            searchBar.classList.remove('active');
        }
    });

    // Close when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchBar.contains(e.target) && !searchToggle.contains(e.target)) {
            searchBar.classList.remove('active');
        }
    });

    // Search form submission
    const searchForm = searchBar.querySelector('form') || searchBar;
    const searchInput = searchBar.querySelector('input');
    const searchBtn = searchBar.querySelector('button');

    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', function() {
            performSearch(searchInput.value);
        });
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch(this.value);
            }
        });
    }
}

function performSearch(query) {
    if (query.trim()) {
        // You can implement actual search functionality here
        console.log('Searching for:', query);
        // For now, just scroll to vehicles or show message
        const vehiclesSection = document.getElementById('vehicles');
        if (vehiclesSection) {
            vehiclesSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

// ===========================
// DROPDOWN MENUS (Mobile Support)
// ===========================
function initDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown');

    if (window.innerWidth <= 768) {
        dropdowns.forEach(dropdown => {
            const toggle = dropdown.querySelector('.dropdown-toggle');
            const menu = dropdown.querySelector('.dropdown-menu');

            if (toggle && menu) {
                toggle.addEventListener('click', function(e) {
                    e.preventDefault();

                    // Close other dropdowns
                    dropdowns.forEach(other => {
                        if (other !== dropdown) {
                            const otherMenu = other.querySelector('.dropdown-menu');
                            if (otherMenu) {
                                otherMenu.style.display = 'none';
                            }
                        }
                    });

                    // Toggle current
                    if (menu.style.display === 'block') {
                        menu.style.display = 'none';
                    } else {
                        menu.style.display = 'block';
                        menu.style.position = 'static';
                        menu.style.opacity = '1';
                        menu.style.visibility = 'visible';
                        menu.style.transform = 'translateY(0)';
                        menu.style.boxShadow = 'none';
                        menu.style.border = 'none';
                        menu.style.borderRadius = '0';
                        menu.style.padding = '0';
                    }
                });
            }
        });
    }

    // Close dropdowns on outside click
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            dropdowns.forEach(dropdown => {
                const menu = dropdown.querySelector('.dropdown-menu');
                if (menu && window.innerWidth <= 768) {
                    menu.style.display = '';
                    menu.style.position = '';
                    menu.style.opacity = '';
                    menu.style.visibility = '';
                    menu.style.transform = '';
                    menu.style.boxShadow = '';
                    menu.style.border = '';
                    menu.style.borderRadius = '';
                    menu.style.padding = '';
                }
            });
        }
    });
}

// ===========================
// TIME DROPDOWN POPULATION
// ===========================
function initTimeDropdown() {
    const timeSelect = document.getElementById('pickupTime');
    if (!timeSelect) return;

    // Clear existing options except the placeholder
    timeSelect.innerHTML = '<option value="">Select time</option>';

    for (let hour = 0; hour < 24; hour++) {
        for (let minute = 0; minute < 60; minute += 30) {
            const time = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
            const period = hour < 12 ? 'AM' : 'PM';
            const displayHour = hour % 12 || 12;
            const displayTime = `${displayHour}:${String(minute).padStart(2, '0')} ${period}`;

            const option = document.createElement('option');
            option.value = time;
            option.textContent = displayTime;
            timeSelect.appendChild(option);
        }
    }
}

// ===========================
// VEHICLE DROPDOWN POPULATION
// ===========================
function initVehicleDropdown() {
    const vehicleSelect = document.getElementById('vehicleType');
    if (!vehicleSelect) return;

    const vehicles = [
        'Mercedes S-Class',
        'Mercedes V-Class',
        'Mercedes Sprinter',
        'Mercedes G-Class',
        'Mercedes E-Class',
        'Lexus LX Series',
        'Toyota Land Cruiser',
        'Toyota Prado Series',
        'Range Rover Velar',
        'Range Rover Sport',
        'Range Rover Autobiography',
        'Cadillac Escalade V-Series'
    ];

    // Clear existing options
    vehicleSelect.innerHTML = '<option value="">Select vehicle</option>';

    vehicles.forEach(vehicle => {
        const option = document.createElement('option');
        option.value = vehicle.toLowerCase().replace(/\s+/g, '-');
        option.textContent = `${vehicle} Hire`;
        vehicleSelect.appendChild(option);
    });
}

// ===========================
// SET MIN DATE TO TODAY
// ===========================
function setMinDate() {
    const dateInput = document.getElementById('pickupDate');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }
}

// ===========================
// FORM VALIDATION
// ===========================
function initFormValidation() {
    const form = document.getElementById('bookingForm');
    if (!form) return;

    // Real-time validation
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });

        input.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                validateField(this);
            }
        });
    });

    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        let isValid = true;
        const requiredFields = form.querySelectorAll('[required]');

        requiredFields.forEach(field => {
            if (!validateField(field)) {
                isValid = false;
            }
        });

        if (isValid) {
            showNotification('success', 'Your booking request has been submitted successfully! Our team will contact you shortly.');
            form.reset();
        } else {
            showNotification('error', 'Please fill in all required fields correctly.');
        }
    });
}

function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';

    // Remove previous error
    removeError(field);

    // Required check
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'This field is required';
    }

    // Specific validation
    if (value && isValid) {
        switch (field.type) {
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    isValid = false;
                    errorMessage = 'Please enter a valid email address';
                }
                break;

            case 'tel':
                const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
                if (!phoneRegex.test(value)) {
                    isValid = false;
                    errorMessage = 'Please enter a valid phone number';
                }
                break;

            case 'number':
                const num = parseInt(value);
                if (field.name === 'age' && (num < 18 || num > 100)) {
                    isValid = false;
                    errorMessage = 'You must be between 18 and 100 years';
                }
                if (field.name === 'quantity' && num < 1) {
                    isValid = false;
                    errorMessage = 'Minimum quantity is 1';
                }
                break;

            case 'date':
                const selectedDate = new Date(value);
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                if (selectedDate < today) {
                    isValid = false;
                    errorMessage = 'Pickup date cannot be in the past';
                }
                break;
        }
    }

    if (!isValid) {
        showError(field, errorMessage);
    }

    return isValid;
}

function showError(field, message) {
    field.classList.add('error');
    field.style.borderColor = '#e94560';

    const errorElement = document.createElement('span');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    errorElement.style.cssText = `
        color: #e94560;
        font-size: 0.8rem;
        margin-top: 0.25rem;
        display: block;
    `;

    field.parentNode.appendChild(errorElement);
}

function removeError(field) {
    field.classList.remove('error');
    field.style.borderColor = '';

    const parent = field.parentNode;
    const existingError = parent.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
}

// ===========================
// NOTIFICATION SYSTEM
// ===========================
function showNotification(type, message) {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">&times;</button>
        </div>
    `;

    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        max-width: 400px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? '#4CAF50' : '#f44336'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;

    const content = notification.querySelector('.notification-content');
    content.style.cssText = `
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    `;

    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        margin-left: auto;
        opacity: 0.8;
        padding: 0;
        line-height: 1;
    `;

    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Add animation keyframes
const animationStyles = document.createElement('style');
animationStyles.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    .form-group input.error,
    .form-group select.error,
    .form-group textarea.error {
        border-color: #e94560 !important;
    }
    .error-message {
        color: #e94560;
        font-size: 0.8rem;
        margin-top: 0.25rem;
        display: block;
    }
`;
document.head.appendChild(animationStyles);

// ===========================
// SMOOTH SCROLL
// ===========================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Skip empty or dropdown toggles
            if (!href || href === '#' || this.classList.contains('dropdown-toggle')) {
                return;
            }

            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===========================
// SCROLL ANIMATIONS
// ===========================
function initScrollAnimation() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.service-card, .vehicle-card, .option-card, .description-text, .stat-box');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    const animateStyle = document.createElement('style');
    animateStyle.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(animateStyle);
}

// Initialize scroll animation
initScrollAnimation();

// ===========================
// UTILITY FUNCTIONS
// ===========================
function debounce(func, wait = 100) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Header shadow on scroll
window.addEventListener('scroll', throttle(function() {
    const header = document.querySelector('.header');
    if (header) {
        if (window.pageYOffset > 50) {
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    }
}, 100));

// Console branding
console.log('%c🚗 WHYTE AUTOS - Luxury Car Rentals', 'color: #d4af37; font-size: 20px; font-weight: bold;');
console.log('%cPremium chauffeur services across Nigeria', 'color: #ffffff; font-size: 14px;');
