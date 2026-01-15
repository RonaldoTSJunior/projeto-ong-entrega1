import { homeView } from './views/home.js';
import { projetosView } from './views/projetos.js';
import { cadastroView } from './views/cadastro.js';

const routes = {
    '/': homeView,
    '/projetos': projetosView,
    '/cadastro': cadastroView
};

function router() {
    const appRoot = document.getElementById('app-root');
    const path = window.location.hash.slice(1) || '/';
    const view = routes[path] || routes['/'];
    
    // Injeta o HTML
    appRoot.innerHTML = view();
    
    // Rola para o topo
    window.scrollTo(0, 0);

    // Atualiza menu
    updateMenu(path);
}

function updateMenu(path) {
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href').replace('#', '');
        // Se o path for vazio ou /, ativa o Home
        const isHome = (path === '/' || path === '') && (href === '/');
        const isMatch = href === path;

        if (isMatch || isHome) {
            link.style.color = 'var(--cor-primaria)';
            link.style.fontWeight = 'bold';
            link.style.borderBottom = '2px solid var(--cor-primaria)';
        } else {
            link.style.color = 'var(--text-main)';
            link.style.fontWeight = 'normal';
            link.style.borderBottom = 'none';
        }
    });
}

function initTheme() {
    const toggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (toggle) toggle.checked = true;
    }

    if (toggle) {
        toggle.addEventListener('change', () => {
            if (toggle.checked) {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
            }
        });
    }
}

// Inicialização
window.addEventListener('hashchange', router);
window.addEventListener('load', () => {
    router();
    initTheme();
});