/* js/theme-toggle.js */

// Chave do Local Storage
const THEME_KEY = 'ongThemePreference';

// Função que aplica o tema (dark/light)
function applyTheme(theme) {
    if (theme === 'dark') {
        // Adiciona a classe na tag <html> para o CSS pegar
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
}

// Função que "liga" o botão de toggle
export function initThemeToggle() {
    const toggleButton = document.getElementById('theme-toggle');
    if (!toggleButton) return;

    // 1. Verifica se o usuário JÁ TEM uma preferência salva
    const savedTheme = localStorage.getItem(THEME_KEY);
    
    // 2. Verifica a preferência do Sistema Operacional (SO)
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    let currentTheme = 'light'; // Padrão

    if (savedTheme) {
        currentTheme = savedTheme; // Preferência salva é prioridade
    } else if (prefersDark) {
        currentTheme = 'dark'; // Preferência do SO é a 2ª
    }

    // Aplica o tema que foi decidido
    applyTheme(currentTheme);
    // Sincroniza o "checked" do botão
    if (currentTheme === 'dark') {
        toggleButton.checked = true;
    }

    // 3. "Escuta" o clique no botão
    toggleButton.addEventListener('change', () => {
        const newTheme = toggleButton.checked ? 'dark' : 'light';
        applyTheme(newTheme);
        // Salva a escolha do usuário no Local Storage
        localStorage.setItem(THEME_KEY, newTheme);
    });
}