export function setupNavbar() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled', 'shadow');
        } else {
            navbar.classList.remove('scrolled', 'shadow');
        }
    });
}

export function getWhatsAppLink(message = "Hola, me gustaría obtener más información sobre IBF Trainers") {
    const phone = SITE_DATA?.brand?.whatsapp || '34614250687';
    const encodedMsg = encodeURIComponent(message);
    return `https://wa.me/${phone}?text=${encodedMsg}`;
}

// Make SITE_DATA available globally
import SITE_DATA from './data.js';
window.SITE_DATA = SITE_DATA;