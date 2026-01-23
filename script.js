// ===== Sample Car Data =====
const carsData = [
    {
        id: 1,
        name: "Toyota Camry 2022",
        brand: "toyota",
        type: "sedan",
        category: "sale",
        price: 18500000,
        priceDisplay: "₦18,500,000",
        year: 2022,
        mileage: "15,000 km",
        transmission: "Automatic",
        fuel: "Petrol",
        location: "Lagos",
        featured: true,
        condition: "Foreign Used",
        color: "Silver",
        engine: "2.5L 4-Cylinder",
        image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop&auto=format",
        description: "Clean Toyota Camry SE with low mileage. Full option with leather seats, reverse camera, and Bluetooth connectivity."
    },
    {
        id: 2,
        name: "Mercedes-Benz E300 2021",
        brand: "mercedes",
        type: "luxury",
        category: "sale",
        price: 45000000,
        priceDisplay: "₦45,000,000",
        year: 2021,
        mileage: "22,000 km",
        transmission: "Automatic",
        fuel: "Petrol",
        location: "Abuja",
        featured: true,
        condition: "Foreign Used",
        color: "Black",
        engine: "2.0L Turbo",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop&auto=format",
        description: "Luxury Mercedes-Benz E300 with premium package. Panoramic sunroof, ambient lighting, and advanced safety features."
    },
    {
        id: 3,
        name: "Toyota Highlander 2020",
        brand: "toyota",
        type: "suv",
        category: "sale",
        price: 28000000,
        priceDisplay: "₦28,000,000",
        year: 2020,
        mileage: "35,000 km",
        transmission: "Automatic",
        fuel: "Petrol",
        location: "Lagos",
        featured: false,
        condition: "Foreign Used",
        color: "White",
        engine: "3.5L V6",
        image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=400&h=300&fit=crop&auto=format",
        description: "Spacious Toyota Highlander XLE with third-row seating. Perfect for families. Well maintained with full service history."
    },
    {
        id: 4,
        name: "Honda Accord 2023",
        brand: "honda",
        type: "sedan",
        category: "rent",
        price: 50000,
        priceDisplay: "₦50,000/day",
        year: 2023,
        mileage: "8,000 km",
        transmission: "Automatic",
        fuel: "Petrol",
        location: "Lagos",
        featured: true,
        condition: "Brand New",
        color: "Blue",
        engine: "1.5L Turbo",
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop&auto=format",
        description: "Brand new Honda Accord Sport for rent. Available with or without driver. Perfect for business trips and special occasions."
    },
    {
        id: 5,
        name: "Lexus RX 350 2021",
        brand: "lexus",
        type: "suv",
        category: "sale",
        price: 38000000,
        priceDisplay: "₦38,000,000",
        year: 2021,
        mileage: "28,000 km",
        transmission: "Automatic",
        fuel: "Petrol",
        location: "Port Harcourt",
        featured: false,
        condition: "Foreign Used",
        color: "Grey",
        engine: "3.5L V6",
        image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop&auto=format",
        description: "Premium Lexus RX 350 F-Sport with Mark Levinson sound system. Heads-up display and adaptive cruise control."
    },
    {
        id: 6,
        name: "BMW X5 2022",
        brand: "bmw",
        type: "luxury",
        category: "rent",
        price: 120000,
        priceDisplay: "₦120,000/day",
        year: 2022,
        mileage: "12,000 km",
        transmission: "Automatic",
        fuel: "Petrol",
        location: "Abuja",
        featured: true,
        condition: "Foreign Used",
        color: "Black",
        engine: "3.0L Turbo",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop&auto=format",
        description: "Luxury BMW X5 xDrive40i available for rent. M-Sport package with premium interior. Driver available on request."
    },
    {
        id: 7,
        name: "Hyundai Elantra 2021",
        brand: "hyundai",
        type: "sedan",
        category: "sale",
        price: 12500000,
        priceDisplay: "₦12,500,000",
        year: 2021,
        mileage: "20,000 km",
        transmission: "Automatic",
        fuel: "Petrol",
        location: "Ibadan",
        featured: false,
        condition: "Foreign Used",
        color: "Red",
        engine: "2.0L 4-Cylinder",
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop&auto=format",
        description: "Stylish Hyundai Elantra with modern design. Apple CarPlay, Android Auto, and wireless charging."
    },
    {
        id: 8,
        name: "Toyota Land Cruiser 2020",
        brand: "toyota",
        type: "suv",
        category: "sale",
        price: 65000000,
        priceDisplay: "₦65,000,000",
        year: 2020,
        mileage: "45,000 km",
        transmission: "Automatic",
        fuel: "Diesel",
        location: "Lagos",
        featured: true,
        condition: "Foreign Used",
        color: "White",
        engine: "4.5L V8 Diesel",
        image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop&auto=format",
        description: "Powerful Toyota Land Cruiser VX with bulletproof option available. Full leather interior and premium sound system."
    },
    {
        id: 9,
        name: "Toyota Prado 2022",
        brand: "toyota",
        type: "suv",
        category: "rent",
        price: 45000,
        priceDisplay: "₦45,000/day",
        year: 2022,
        mileage: "10,000 km",
        transmission: "Automatic",
        fuel: "Petrol",
        location: "Lagos",
        featured: false,
        condition: "Brand New",
        color: "Black",
        engine: "2.7L 4-Cylinder",
        image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop&auto=format",
        description: "Powerful Toyota Prado SUV perfect for off-road adventures and city driving. Reliable with advanced safety features."
    },
    {
        id: 10,
        name: "Ford Explorer 2021",
        brand: "ford",
        type: "suv",
        category: "sale",
        price: 32000000,
        priceDisplay: "₦32,000,000",
        year: 2021,
        mileage: "30,000 km",
        transmission: "Automatic",
        fuel: "Petrol",
        location: "Enugu",
        featured: false,
        condition: "Foreign Used",
        color: "Blue",
        engine: "2.3L EcoBoost",
        image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=400&h=300&fit=crop&auto=format",
        description: "American muscle SUV with powerful EcoBoost engine. Third-row seating and advanced SYNC infotainment system."
    },
    {
        id: 11,
        name: "Mercedes-Benz S-Class 2023",
        brand: "mercedes",
        type: "luxury",
        category: "rent",
        price: 200000,
        priceDisplay: "₦200,000/day",
        year: 2023,
        mileage: "5,000 km",
        transmission: "Automatic",
        fuel: "Petrol",
        location: "Lagos",
        featured: true,
        condition: "Brand New",
        color: "Black",
        engine: "3.0L Inline-6 Turbo",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop&auto=format",
        description: "Ultimate luxury sedan for VIP transport. Chauffeur service available. Executive rear seating with massage function."
    },
    {
        id: 12,
        name: "Toyota Corolla 2022",
        brand: "toyota",
        type: "sedan",
        category: "sale",
        price: 14000000,
        priceDisplay: "₦14,000,000",
        year: 2022,
        mileage: "18,000 km",
        transmission: "Automatic",
        fuel: "Petrol",
        location: "Kano",
        featured: false,
        condition: "Foreign Used",
        color: "Grey",
        engine: "1.8L 4-Cylinder",
        image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop&auto=format",
        description: "Reliable Toyota Corolla LE with excellent fuel economy. Toyota Safety Sense included. Perfect daily driver."
    }
];

// ===== DOM Elements =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const carsGrid = document.getElementById('carsGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const searchForm = document.getElementById('searchForm');
const contactForm = document.getElementById('contactForm');
const newsletterForm = document.getElementById('newsletterForm');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

// ===== State Variables =====
let displayedCars = 6;
let currentFilter = 'all';
let filteredCars = [...carsData];

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    renderCars();
    initializeEventListeners();
    initializeScrollEffects();
});

// ===== Event Listeners =====
function initializeEventListeners() {
    // Mobile Navigation
    hamburger.addEventListener('click', toggleMobileNav);

    // Filter Buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => handleFilter(btn));
    });

    // Load More Button
    loadMoreBtn.addEventListener('click', loadMoreCars);

    // Search Form
    searchForm.addEventListener('submit', handleSearch);

    // Contact Form
    contactForm.addEventListener('submit', handleContactSubmit);

    // Newsletter Form
    newsletterForm.addEventListener('submit', handleNewsletterSubmit);

    // Login Form
    loginForm.addEventListener('submit', handleLoginSubmit);

    // Register Form
    registerForm.addEventListener('submit', handleRegisterSubmit);

    // Close modals on outside click
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal.id);
            }
        });
    });

    // Navigation links - close mobile menu on click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Active nav link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
}

// ===== Mobile Navigation =====
function toggleMobileNav() {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
}

// ===== Render Cars =====
function renderCars() {
    const carsToShow = filteredCars.slice(0, displayedCars);

    carsGrid.innerHTML = carsToShow.map((car, index) => `
        <div class="car-card" style="animation-delay: ${index * 0.1}s" data-category="${car.category}" data-type="${car.type}">
            <div class="car-image">
                <img src="${car.image}" alt="${car.name}" loading="lazy" onerror="this.src='temp_image_1769120549642.webp'">
                <span class="car-badge ${car.category === 'sale' ? 'badge-sale' : 'badge-rent'}">
                    ${car.category === 'sale' ? 'For Sale' : 'For Rent'}
                </span>
                ${car.featured ? '<span class="badge-featured">Featured</span>' : ''}
            </div>
            <div class="car-details">
                <h3 class="car-title">${car.name}</h3>
                <div class="car-specs">
                    <span><i class="fas fa-calendar"></i> ${car.year}</span>
                    <span><i class="fas fa-tachometer-alt"></i> ${car.mileage}</span>
                    <span><i class="fas fa-cog"></i> ${car.transmission}</span>
                    <span><i class="fas fa-gas-pump"></i> ${car.fuel}</span>
                </div>
                <div class="car-location">
                    <i class="fas fa-map-marker-alt"></i> ${car.location}, Nigeria
                </div>
                <div class="car-footer">
                    <div class="car-price">
                        ${car.priceDisplay}
                        ${car.category === 'rent' ? '' : ''}
                    </div>
                    <div class="car-actions">
                        <button onclick="addToFavorites(${car.id})" title="Add to Favorites">
                            <i class="far fa-heart"></i>
                        </button>
                        <button onclick="viewCarDetails(${car.id})" title="View Details">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    // Update load more button visibility
    if (displayedCars >= filteredCars.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'inline-flex';
    }
}

// ===== Filter Cars =====
function handleFilter(btn) {
    // Update active button
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    currentFilter = btn.dataset.filter;
    displayedCars = 6;

    // Filter cars based on selection
    if (currentFilter === 'all') {
        filteredCars = [...carsData];
    } else if (currentFilter === 'sale' || currentFilter === 'rent') {
        filteredCars = carsData.filter(car => car.category === currentFilter);
    } else {
        filteredCars = carsData.filter(car => car.type === currentFilter);
    }

    renderCars();
}

// ===== Load More Cars =====
function loadMoreCars() {
    displayedCars += 3;
    renderCars();
}

// ===== Search Functionality =====
function handleSearch(e) {
    e.preventDefault();

    const serviceType = document.getElementById('serviceType').value;
    const carBrand = document.getElementById('carBrand').value;
    const location = document.getElementById('location').value;
    const priceRange = document.getElementById('priceRange').value;

    filteredCars = carsData.filter(car => {
        let matches = true;

        if (serviceType) {
            matches = matches && car.category === serviceType;
        }

        if (carBrand) {
            matches = matches && car.brand === carBrand;
        }

        if (location) {
            matches = matches && car.location.toLowerCase() === location.replace('-', ' ');
        }

        if (priceRange) {
            const [min, max] = priceRange.split('-').map(p => parseInt(p.replace('+', '')));
            if (max) {
                matches = matches && car.price >= min && car.price <= max;
            } else {
                matches = matches && car.price >= min;
            }
        }

        return matches;
    });

    displayedCars = 6;
    
    // Reset filter buttons
    filterBtns.forEach(btn => btn.classList.remove('active'));
    filterBtns[0].classList.add('active');

    renderCars();
    scrollToSection('cars');

    if (filteredCars.length === 0) {
        carsGrid.innerHTML = `
            <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 50px;">
                <i class="fas fa-search" style="font-size: 60px; color: #ccc; margin-bottom: 20px;"></i>
                <h3 style="color: #666; margin-bottom: 10px;">No cars found</h3>
                <p style="color: #999;">Try adjusting your search criteria</p>
                <button class="btn btn-primary" style="margin-top: 20px;" onclick="resetSearch()">Reset Search</button>
            </div>
        `;
        loadMoreBtn.style.display = 'none';
    }
}

// ===== Reset Search =====
function resetSearch() {
    document.getElementById('searchForm').reset();
    filteredCars = [...carsData];
    displayedCars = 6;
    renderCars();
}

// ===== View Car Details =====
function viewCarDetails(carId) {
    const car = carsData.find(c => c.id === carId);
    if (!car) return;

    const modalContent = document.getElementById('carModalContent');
    modalContent.innerHTML = `
        <div class="car-modal-image">
            <img src="${car.image}" alt="${car.name}" loading="lazy" onerror="this.src='temp_image_1769120549642.webp'">
        </div>
        <div class="car-modal-details">
            <span class="car-badge ${car.category === 'sale' ? 'badge-sale' : 'badge-rent'}" style="display: inline-block; margin-bottom: 15px;">
                ${car.category === 'sale' ? 'For Sale' : 'For Rent'}
            </span>
            <h2>${car.name}</h2>
            <div class="car-modal-price">${car.priceDisplay}</div>
            <div class="car-modal-specs">
                <div class="spec-item"><i class="fas fa-calendar"></i> Year: ${car.year}</div>
                <div class="spec-item"><i class="fas fa-tachometer-alt"></i> Mileage: ${car.mileage}</div>
                <div class="spec-item"><i class="fas fa-cog"></i> ${car.transmission}</div>
                <div class="spec-item"><i class="fas fa-gas-pump"></i> ${car.fuel}</div>
                <div class="spec-item"><i class="fas fa-palette"></i> Color: ${car.color}</div>
                <div class="spec-item"><i class="fas fa-engine"></i> ${car.engine}</div>
                <div class="spec-item"><i class="fas fa-check-circle"></i> ${car.condition}</div>
                <div class="spec-item"><i class="fas fa-map-marker-alt"></i> ${car.location}</div>
            </div>
            <p style="color: #666; margin-bottom: 25px; line-height: 1.7;">${car.description}</p>
            <div class="car-modal-actions">
                <a href="https://wa.me/2348012345678?text=Hi, I'm interested in the ${encodeURIComponent(car.name)} listed at ${encodeURIComponent(car.priceDisplay)}"
                   class="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-whatsapp"></i> WhatsApp
                </a>
                <a href="tel:+2348012345678" class="btn btn-outline">
                    <i class="fas fa-phone"></i> Call Now
                </a>
            </div>
        </div>
    `;

    openModal('carModal');
}

// ===== Add to Favorites =====
function addToFavorites(carId) {
    const car = carsData.find(c => c.id === carId);
    if (!car) return;

    // Get existing favorites from localStorage
    let favorites = JSON.parse(localStorage.getItem('naijaautos_favorites') || '[]');
    
    // Check if already in favorites
    const index = favorites.indexOf(carId);
    if (index > -1) {
        favorites.splice(index, 1);
        showToast('Removed from favorites', 'success');
    } else {
        favorites.push(carId);
        showToast(`${car.name} added to favorites!`, 'success');
    }

    localStorage.setItem('naijaautos_favorites', JSON.stringify(favorites));
}

// ===== Modal Functions =====
function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
    document.body.style.overflow = '';
}

function switchModal(fromModal, toModal) {
    closeModal(fromModal);
    setTimeout(() => openModal(toModal), 300);
}

// ===== Form Handlers =====
function handleContactSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Simulate form submission
    console.log('Contact form submitted:', data);
    
    showToast('Message sent successfully! We\'ll get back to you soon.', 'success');
    e.target.reset();
}

function handleNewsletterSubmit(e) {
    e.preventDefault();
    
    const email = e.target.querySelector('input[type="email"]').value;
    
    // Simulate subscription
    console.log('Newsletter subscription:', email);
    
    showToast('Successfully subscribed to our newsletter!', 'success');
    e.target.reset();
}

function handleLoginSubmit(e) {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Simulate login
    console.log('Login attempt:', { email, password });
    
    showToast('Login successful! Welcome back.', 'success');
    closeModal('loginModal');
    e.target.reset();
}

function handleRegisterSubmit(e) {
    e.preventDefault();
    
    const firstName = document.getElementById('regFirstName').value;
    const lastName = document.getElementById('regLastName').value;
    const email = document.getElementById('regEmail').value;
    const phone = document.getElementById('regPhone').value;
    const password = document.getElementById('regPassword').value;
    
    // Simulate registration
    console.log('Registration:', { firstName, lastName, email, phone, password });
    
    showToast('Account created successfully! Welcome to NaijaAutos.', 'success');
    closeModal('registerModal');
    e.target.reset();
}

// ===== Toast Notification =====
function showToast(message, type = 'success') {
    // Remove existing toast
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }

    // Create new toast
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);

    // Show toast
    setTimeout(() => toast.classList.add('show'), 100);

    // Hide toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ===== Scroll Functions =====
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const sectionTop = section.offsetTop - headerHeight;
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    }
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ===== Scroll Effects =====
function initializeScrollEffects() {
    // Header shadow on scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        }
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements
    document.querySelectorAll('.service-card, .testimonial-card, .stat-item, .feature-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ===== Format Currency =====
function formatNaira(amount) {
    return new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

// ===== Keyboard Navigation =====
document.addEventListener('keydown', (e) => {
    // Close modal on Escape key
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal.active').forEach(modal => {
            closeModal(modal.id);
        });
    }
});

// ===== Lazy Loading Images (for future use with real images) =====
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// ===== Phone Number Formatting =====
document.addEventListener('DOMContentLoaded', () => {
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    
    phoneInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            
            // Format Nigerian phone number
            if (value.startsWith('234')) {
                value = '+' + value;
            } else if (value.startsWith('0')) {
                value = '+234' + value.substring(1);
            }
            
            // Limit length
            if (value.length > 14) {
                value = value.substring(0, 14);
            }
            
            e.target.value = value;
        });
    });
});

// ===== Counter Animation for Stats =====
function animateCounters() {
    const counters = document.querySelectorAll('.stat-item h3');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace(/\D/g, ''));
        const suffix = counter.textContent.replace(/[\d,]/g, '');
        let current = 0;
        const increment = target / 50;
        const duration = 2000;
        const stepTime = duration / 50;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current).toLocaleString() + suffix;
                setTimeout(updateCounter, stepTime);
            } else {
                counter.textContent = target.toLocaleString() + suffix;
            }
        };

        // Start animation when element is in view
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                updateCounter();
                observer.disconnect();
            }
        });

        observer.observe(counter);
    });
}

// Initialize counter animation
document.addEventListener('DOMContentLoaded', animateCounters);

// ===== Service Worker Registration (for PWA - future enhancement) =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered'))
        //     .catch(error => console.log('SW registration failed'));
    });
}

console.log('NaijaAutos - Nigeria\'s Premier Car Sales & Rentals Platform');
console.log('© 2026 NaijaAutos. All Rights Reserved.');
