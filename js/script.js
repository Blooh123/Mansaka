// ============================================
// MANSAKA HERITAGE WEBSITE - JAVASCRIPT
// ============================================

// DOM Elements
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');
const faqQuestions = document.querySelectorAll('.faq-question');
const contactForm = document.getElementById('contactForm');
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

// ============================================
// NAVIGATION - DROPDOWN APPROACH (No Hamburger)
// ============================================

// Toggle nav dropdown on smaller screens
const navContainer = document.querySelector('.nav-menu');
if (navContainer) {
    // Simple responsive nav - items wrap naturally
    // No hamburger, just responsive design
}

// ============================================
// ACTIVE NAV LINK ON SCROLL
// ============================================

window.addEventListener('scroll', () => {
    let current = '';
    
    // Get current page from URL
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Update active nav link
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || 
            (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Set active link on page load
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || 
            (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// ============================================
// GALLERY FILTER
// ============================================

if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filterValue = btn.getAttribute('data-filter');
            
            // Filter gallery items
            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-filter') === filterValue) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// ============================================
// FAQ ACCORDION
// ============================================

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        
        // Close all other FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem && item.classList.contains('active')) {
                item.classList.remove('active');
            }
        });
        
        // Toggle current FAQ item
        faqItem.classList.toggle('active');
    });
});

// ============================================
// CONTACT FORM HANDLING
// ============================================

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value || 'Not provided',
            subject: document.getElementById('subject').value,
            organization: document.getElementById('organization').value || 'Not provided',
            message: document.getElementById('message').value,
            subscribe: document.getElementById('subscribe').checked
        };
        
        // Log form data (in real implementation, send to server)
        console.log('Form submitted:', formData);
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
}

// ============================================
// SMOOTH SCROLLING
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// TOUCH-FRIENDLY NAV LINKS (tap vs swipe)
// Ensures small taps on horizontally scrolling nav trigger navigation
// while swipes still scroll the menu.
// ============================================
if (navLinks && navLinks.length) {
    navLinks.forEach(link => {
        let touchStartX = 0;
        let touchStartY = 0;
        let touchMoved = false;

        link.addEventListener('touchstart', function (e) {
            touchMoved = false;
            const t = e.touches && e.touches[0];
            if (t) {
                touchStartX = t.clientX;
                touchStartY = t.clientY;
            }
        }, {passive: true});

        link.addEventListener('touchmove', function (e) {
            const t = e.touches && e.touches[0];
            if (!t) return;
            const dx = Math.abs(t.clientX - touchStartX);
            const dy = Math.abs(t.clientY - touchStartY);
            // Consider it a move if horizontal movement exceeds 8px
            if (dx > 8 || dy > 8) touchMoved = true;
        }, {passive: true});

        link.addEventListener('touchend', function (e) {
            // If it wasn't a move (a tap), follow the link programmatically
            if (!touchMoved) {
                const href = link.getAttribute('href');
                if (href && href.trim() !== '') {
                    // Allow normal navigation for external links
                    // If the nav is within a collapsed menu, close it then navigate
                    const navbar = document.querySelector('.navbar');
                    if (navbar && navbar.classList.contains('nav-open')) {
                        navbar.classList.remove('nav-open');
                        const toggle = navbar.querySelector('.nav-toggle');
                        if (toggle) toggle.classList.remove('open');
                        if (toggle) toggle.setAttribute('aria-expanded', 'false');
                    }
                    window.location.href = href;
                }
            }
        });
    });
}

// Nav toggle button handling
const navToggle = document.querySelectorAll('.nav-toggle');
navToggle.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const navbar = btn.closest('.navbar');
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!expanded));
        btn.classList.toggle('open', !expanded);
        if (navbar) navbar.classList.toggle('nav-open', !expanded);
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    const openNav = document.querySelector('.navbar.nav-open');
    if (!openNav) return;
    if (e.target.closest('.navbar')) return; // click inside
    openNav.classList.remove('nav-open');
    const toggle = openNav.querySelector('.nav-toggle');
    if (toggle) {
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
    }
});

// ============================================
// SCROLL ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.content-section, .gallery-item, .card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});

// ============================================
// LANGUAGE TABS
// ============================================

if (document.querySelectorAll('.language-tabs').length > 0) {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    if (tabContents.length > 0) {
        // Set first tab as active
        tabContents[0].classList.add('active');
    }
    
    // Only if tab buttons exist
    if (tabButtons.length > 0) {
        tabButtons.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                // Remove active class from all tabs
                tabContents.forEach(content => content.classList.remove('active'));
                tabButtons.forEach(button => button.classList.remove('active'));
                
                // Add active class to clicked tab
                tabContents[index].classList.add('active');
                btn.classList.add('active');
            });
        });
    }
}

// Manual tab switching for language page
document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    if (tabContents.length > 0) {
        // Show first tab by default
        tabContents.forEach((content, index) => {
            if (index === 0) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });
    }
});

// ============================================
// SCROLL TO TOP BUTTON
// ============================================

// Scroll-to-top button is defined in HTML with id="scrollToTop"; we'll reference it later.

// ============================================
// FORM VALIDATION
// ============================================

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

if (contactForm) {
    const emailInput = document.getElementById('email');
    
    if (emailInput) {
        emailInput.addEventListener('blur', () => {
            if (emailInput.value && !validateEmail(emailInput.value)) {
                emailInput.style.borderColor = '#c41c3b';
            } else {
                emailInput.style.borderColor = '';
            }
        });
    }
}

// ============================================
// IMAGE LAZY LOADING
// ============================================

if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ============================================
// RESPONSIVE VIDEO EMBEDS
// ============================================

const iframes = document.querySelectorAll('iframe[src*="youtube.com"]');
iframes.forEach(iframe => {
    // If the iframe is already inside a `.video-container` or responsive wrapper, skip wrapping
    if (iframe.closest('.video-container') || iframe.closest('.responsive-embed')) return;

    const container = document.createElement('div');
    container.className = 'responsive-embed';
    container.style.cssText = 'position: relative; width: 100%; padding-bottom: 56.25%;';
    iframe.style.cssText = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%;';
    iframe.parentNode.insertBefore(container, iframe);
    container.appendChild(iframe);
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Get current page name
function getCurrentPage() {
    return window.location.pathname.split('/').pop() || 'index.html';
}

// Log page view (for analytics)
function logPageView() {
    console.log('Page loaded:', getCurrentPage());
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    logPageView();
    
    // Add subtle animation to cards on load
    document.querySelectorAll('.card, .card-item, .highlight-card, .info-card').forEach((card, index) => {
        card.style.animation = `fadeInUp 0.5s ease ${index * 0.1}s forwards`;
        card.style.opacity = '0';
    });
});

// ============================================
// SCROLL TO TOP BUTTON
// ============================================

const scrollToTopBtn = document.getElementById('scrollToTop');

// Show button when user scrolls down
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

// Scroll to top when button is clicked
if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// CONSOLE MESSAGE
// ============================================

console.log('%c Welcome to Mansaka Heritage Website ', 'background: #8b4513; color: #b8860b; font-size: 16px; font-weight: bold; padding: 10px;');
console.log('%c Dedicated to preserving indigenous culture ', 'background: #b8860b; color: #8b4513; font-size: 12px; padding: 5px;');
