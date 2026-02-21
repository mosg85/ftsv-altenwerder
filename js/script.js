// Mobile Menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Cookie Banner
document.addEventListener('DOMContentLoaded', function() {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptAllBtn = document.getElementById('cookie-accept-all');
    const acceptEssentialBtn = document.getElementById('cookie-accept-essential');
    const settingsBtn = document.getElementById('cookie-settings');

    // Prüfen, ob bereits eine Einwilligung vorliegt
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
        // Banner nach kurzer Verzögerung einblenden
        setTimeout(() => {
            cookieBanner.classList.add('show');
        }, 500);
    }

    // "Alle akzeptieren"
    acceptAllBtn.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'all');
        cookieBanner.classList.remove('show');
        // Hier können später Funktionen zum Laden von Drittanbietern eingefügt werden
        console.log('Alle Cookies akzeptiert');
    });

    // "Nur notwendige"
    acceptEssentialBtn.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'essential');
        cookieBanner.classList.remove('show');
        console.log('Nur notwendige Cookies akzeptiert');
    });

    // "Einstellungen" - hier könnte ein Modal geöffnet werden
    settingsBtn.addEventListener('click', () => {
        alert('Cookie-Einstellungen: Hier können später individuelle Präferenzen gesetzt werden. (Funktion folgt)');
    });
});
