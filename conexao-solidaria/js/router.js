import { homeView } from './views/home.js';
import { projetosView } from './views/projetos.js';
import { cadastroView } from './views/cadastro.js';
import { initFormValidation } from './services/validation.js';

const routes = {
    '/': homeView,
    '/projetos': projetosView,
    '/cadastro': cadastroView
};

export function initRouter() {
    const appRoot = document.getElementById('app-root');

    function handleLocation() {
        const path = window.location.hash.slice(1) || '/';
        // Remove a barra final se houver (ex: /projetos/ -> /projetos)
        const cleanPath = path.length > 1 && path.endsWith('/') ? path.slice(0, -1) : path;
        
        const viewFunction = routes[cleanPath] || routes['/'];
        
        // Injeta o HTML completo da view
        appRoot.innerHTML = viewFunction();

        // Se for a página de cadastro, inicia a validação
        if (cleanPath === '/cadastro') {
            // Pequeno delay para garantir que o DOM existe
            setTimeout(() => {
                if (typeof initFormValidation === 'function') initFormValidation();
            }, 100);
        }

        updateActiveMenu(cleanPath);
    }

    window.addEventListener('hashchange', handleLocation);
    handleLocation(); // Carrega a primeira vez
}

function updateActiveMenu(path) {
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href').replace('#', '');
        if (href === path) {
            link.classList.add('active');
            // Força a cor ativa via JS caso o CSS falhe
            link.style.color = 'var(--cor-primaria, #0d6efd)';
            link.style.fontWeight = 'bold';
        } else {
            link.classList.remove('active');
            link.style.color = '';
            link.style.fontWeight = '';
        }
    });
}