/* js/app.js */
import { initRouter } from './router.js';
import { initThemeToggle } from './theme-toggle.js'; // <-- LINHA NOVA

// Espera o DOM estar pronto
document.addEventListener('DOMContentLoaded', () => {
    initRouter();       // Inicializa o roteador (SPA)
    initThemeToggle();  // Inicializa o toggle de Dark Mode (E-IV)
});