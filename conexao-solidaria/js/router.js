/* js/router.js */

// Importa nossos templates de "página"
import { homeTemplate } from './views/home.js';
import { projetosTemplate } from './views/projetos.js';
import { cadastroTemplate } from './views/cadastro.js';

// Importa o inicializador da validação
import { initFormValidation } from './services/validation.js';

// O "portal" onde o conteúdo será injetado
const rootElement = document.getElementById('app-root');

// Mapeamento das rotas (hashes) para os templates
const routes = {
    '/': homeTemplate,
    '/projetos': projetosTemplate,
    '/cadastro': cadastroTemplate
};

// =================================================================
// FUNÇÃO 'handleLocation' CORRIGIDA (O "Cérebro" Esperto)
// =================================================================
function handleLocation() {
    // Pega o hash completo, ex: #/projetos#ajudar
    let fullHash = window.location.hash.substring(1) || '/';

    // *** A CORREÇÃO ESTÁ AQUI ***
    // Separa a rota principal do "anchor link"
    // ex: '/projetos#ajudar' -> ['/projetos', 'ajudar']
    let pathParts = fullHash.split('#');
    let path = pathParts[0] || '/'; // A rota é a 1ª parte: '/projetos'
    let anchor = pathParts[1]; // O anchor é a 2ª parte: 'ajudar'

    // Encontra o template (usando a rota principal 'path')
    const template = routes[path] || routes['/'];
    
    // Injeta o HTML do template
    rootElement.innerHTML = template();

    // PÓS-INJEÇÃO: Se houver um anchor, rola a tela para ele
    if (anchor) {
        // Usa um setTimeout(0) para dar tempo do DOM atualizar
        setTimeout(() => {
            const anchorElement = document.getElementById(anchor);
            if (anchorElement) {
                // Rola a tela suavemente até o ID (ex: id="projetos")
                anchorElement.scrollIntoView({ behavior: 'smooth' });
            }
        }, 0);
    }

    // ATIVAÇÃO DE FUNCIONALIDADES PÓS-CARGA
    // Se a rota for '/cadastro', liga a validação (Requisito 3)
    if (path === '/cadastro') {
        initFormValidation();
    }
    
    // Atualiza qual link do menu está "ativo" (usando a rota principal 'path')
    updateNavActiveState(path);
}

// Função para atualizar o link ativo na navegação
function updateNavActiveState(path) {
    const navLinks = document.querySelectorAll('.main-nav .nav-link');
    
    navLinks.forEach(link => {
        // Pega o href do link (ex: "#/projetos")
        const linkPath = new URL(link.href).hash.substring(1).split('#')[0] || '/';

        if (linkPath === path) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Fecha o menu hambúrguer (se estiver aberto) ao navegar
    const menuToggle = document.getElementById('menu-toggle');
    if (menuToggle && menuToggle.checked) {
        menuToggle.checked = false;
    }
}

// Função principal de inicialização
export function initRouter() {
    // "Escuta" por mudanças no hash (cliques nos links)
    window.addEventListener('hashchange', handleLocation);
    
    // Carrega a rota correta quando a página é aberta pela primeira vez
    window.addEventListener('load', handleLocation);

    // Garante que o estado inicial seja carregado (caso especial de load)
    if (window.location.hash) {
        handleLocation();
    } else {
        rootElement.innerHTML = routes['/'](); // Carrega a home
        updateNavActiveState('/');
    }
}