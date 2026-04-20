import SITE_DATA from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    renderAbout();
    renderServices();
    renderTrainers();
    renderLocation();
    setupNavbarScroll();
    setupWhatsApp();
}

/**
 * --- About Section ---
 */
function renderAbout() {
    const subtitle = document.getElementById('about-subtitle');
    const content = document.getElementById('about-content');
    
    // Only render if empty to avoid overriding hardcoded fallback
    if (subtitle && !subtitle.textContent.trim()) {
        subtitle.textContent = SITE_DATA.sections.about.subtitle;
    }
    if (content && !content.textContent.trim()) {
        content.textContent = SITE_DATA.sections.about.content;
    }
}

/**
 * --- Services Section ---
 */
function renderServices() {
    const servicesGrid = document.getElementById('services-grid');
    if (!servicesGrid || servicesGrid.children.length > 0) return;

    servicesGrid.innerHTML = SITE_DATA.sections.services.map(service => `
        <div class="col-6">
            <div class="info-block h-100 p-3 p-md-4">
                <i class="bi ${service.icon}"></i>
                <h4 class="brand-font h5">${service.title}</h4>
                <p class="small text-secondary mb-0 d-none d-md-block">${service.description}</p>
            </div>
        </div>
    `).join('');
}

/**
 * --- Trainers Section ---
 */
function renderTrainers() {
    const trainersGrid = document.getElementById('trainers-grid');
    if (!trainersGrid || trainersGrid.children.length > 0) return;

    trainersGrid.innerHTML = SITE_DATA.sections.trainers.map(trainer => `
        <div class="col-md-6 col-lg-3">
            <div class="trainer-card">
                <div class="trainer-img-wrapper">
                    <img src="${trainer.image}" alt="${trainer.name}" loading="lazy">
                </div>
                <div class="trainer-info">
                    <p class="role">${trainer.role}</p>
                    <h3 class="brand-font">${trainer.name}</h3>
                    <p class="small text-secondary mb-3">${trainer.specialty}</p>
                    <p class="small text-light">${trainer.bio}</p>
                </div>
            </div>
        </div>
    `).join('');
}

/**
 * --- Location Section ---
 */
function renderLocation() {
    const locationText = document.getElementById('location-text');
    if (locationText) {
        locationText.textContent = SITE_DATA.sections.location.address;
    }
}

/**
 * --- UI Effects ---
 */
function setupNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled', 'shadow');
        } else {
            navbar.classList.remove('scrolled', 'shadow');
        }
    });
}

function setupWhatsApp() {
    const waBtn = document.getElementById('wa-btn');
    if (waBtn) {
        waBtn.href = `https://wa.me/${SITE_DATA.brand.whatsapp}`;
    }
}
