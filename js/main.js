// Smooth scrolling function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const navHeight = document.getElementById('navbar').offsetHeight;
        const targetPosition = section.offsetTop - navHeight;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Enhanced navbar scroll effect with throttling
let lastScrollY = window.scrollY;
let ticking = false;

function updateNavbar() {
    const navbar = document.getElementById('navbar');
    const navTitle = document.getElementById('nav-title');
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 100) {
        navbar.classList.add('scrolled');
        if (navTitle) navTitle.style.color = '#1f2937';
    } else {
        navbar.classList.remove('scrolled');
        if (navTitle) navTitle.style.color = '#1f2937';
    }
    
    // Hide/show navbar on scroll
    if (currentScrollY > lastScrollY && currentScrollY > 200) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0%)';
    }
    lastScrollY = currentScrollY;
    ticking = false;
}

function onScroll() {
    if (!ticking) {
        requestAnimationFrame(updateNavbar);
        ticking = true;
    }
}

window.addEventListener('scroll', onScroll, { passive: true });

// Enhanced intersection observer for animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -10% 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('stagger-animation')) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        }
    });
}, observerOptions);

// Modal functionality
let modal;

function showModal() {
    if (!modal) return;
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.querySelector('div').classList.remove('scale-95');
        modal.classList.add('opacity-100');
    }, 10);
    document.body.style.overflow = 'hidden';
}

function hideModal() {
    if (!modal) return;
    modal.classList.add('opacity-0');
    modal.querySelector('div').classList.add('scale-95');
    setTimeout(() => {
        modal.classList.add('hidden');
        modal.classList.remove('opacity-0');
        document.body.style.overflow = 'auto';
    }, 300);
}

// Enhanced form submission
async function handleFormSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    // Loading state
    submitBtn.innerHTML = '<span class="flex items-center justify-center"><svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Sending...</span>';
    submitBtn.disabled = true;
    
    try {
        const formData = new FormData(form);
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            // Redirect to thank you page instead of alert
            window.location.href = './thank-you.html';
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        alert('There was an issue submitting your form. Please try again or contact us directly.');
        console.error('Form submission error:', error);
    } finally {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }
}

// Check for reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// CSS-only parallax alternative (no JavaScript parallax for performance)
// The parallax effect is now handled purely through CSS transforms

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    modal = document.getElementById('form-modal');
    
    // Smooth scroll for nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });

    // Observe elements for animation
    const elementsToObserve = document.querySelectorAll('.feature-card, .metric-card, .stagger-animation, .glass-effect');
    elementsToObserve.forEach(el => {
        observer.observe(el);
    });

    // Modal event listeners
    if (modal) {
        // Close modal on background click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                hideModal();
            }
        });

        // Form submission
        const form = modal.querySelector('form');
        if (form) {
            form.addEventListener('submit', handleFormSubmit);
        }
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
            hideModal();
        }
    });

    // Add cursor pointer for interactive elements
    document.querySelectorAll('.btn-primary, .btn-secondary, .feature-card, .metric-card').forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.cursor = 'pointer';
        });
    });
});

// Expose functions globally for onclick handlers
window.showModal = showModal;
window.hideModal = hideModal;
window.scrollToSection = scrollToSection;