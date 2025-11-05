/* js/services/validation.js */

// Chave para salvar nossos dados no Local Storage
const STORAGE_KEY = 'ongFormData';

// ===============================================
// FUNÇÕES DE ERRO (Requisito 3)
// ===============================================

// Função para mostrar a mensagem de erro
function showError(inputElement, message) {
    hideError(inputElement);
    const errorDiv = document.createElement('div');
    errorDiv.className = 'form-error-message';
    errorDiv.textContent = message;
    inputElement.insertAdjacentElement('afterend', errorDiv);
    inputElement.classList.add('is-invalid');
}

// Função para esconder a mensagem de erro
function hideError(inputElement) {
    const errorDiv = inputElement.nextElementSibling;
    if (errorDiv && errorDiv.classList.contains('form-error-message')) {
        errorDiv.remove();
    }
    inputElement.classList.remove('is-invalid');
}

// ===============================================
// FUNÇÕES DO LOCAL STORAGE (O "Extra")
// ===============================================

// Salva os dados do formulário no Local Storage
function saveFormToStorage(form) {
    // Pega todos os dados do formulário
    const formData = new FormData(form);
    // Converte para um objeto simples (ex: {nome: "Fulano", email: "..."})
    const data = Object.fromEntries(formData.entries());
    
    // Salva o objeto como texto JSON no storage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// Carrega os dados do Local Storage para o formulário
function loadFormFromStorage(form) {
    // Pega os dados salvos
    const savedData = localStorage.getItem(STORAGE_KEY);
    
    if (savedData) {
        const data = JSON.parse(savedData);
        
        // Itera por cada campo salvo (ex: "nome", "email")
        for (const key in data) {
            // Verifica se o formulário REALMENTE tem esse campo
            if (form.elements[key]) {
                // Preenche o campo com o valor salvo
                form.elements[key].value = data[key];
            }
        }
    }
}


// ===============================================
// FUNÇÃO DE INICIALIZAÇÃO (O "Play")
// ===============================================

export function initFormValidation() {
    const form = document.getElementById('main-form');
    if (!form) return; 

    // *** ETAPA EXTRA 1: Carrega os dados salvos ASSIM que a página abre ***
    loadFormFromStorage(form);

    // *** ETAPA EXTRA 2: Salva os dados A CADA vez que o usuário digita algo ***
    form.addEventListener('input', () => {
        saveFormToStorage(form);
    });

    // --- Início da Validação (Requisito 3) ---
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const cpfInput = document.getElementById('cpf');

    // Validação do NOME (em tempo real)
    nomeInput.addEventListener('input', () => {
        if (nomeInput.value.trim().length < 3) {
            showError(nomeInput, 'O nome deve ter pelo menos 3 caracteres.');
        } else {
            hideError(nomeInput);
        }
    });

    // Validação do EMAIL (quando o usuário "sai" do campo)
    emailInput.addEventListener('blur', () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.length > 0 && !emailRegex.test(emailInput.value)) {
            showError(emailInput, 'Por favor, insira um e-mail válido.');
        } else {
            hideError(emailInput);
        }
    });
    
    // Validação de CONSISTÊNCIA DO CPF
    cpfInput.addEventListener('blur', () => {
        if (cpfInput.value.length === 0) {
             hideError(cpfInput);
             return;
        }
        
        const cpfLimpo = cpfInput.value.replace(/[.\-]/g, '');
        
        if (cpfLimpo.length !== 11) {
            showError(cpfInput, 'O CPF deve ter 11 dígitos.');
        } 
        else if (cpfLimpo === '00000000000' || cpfLimpo === '11111111111' || cpfLimpo === '22222222222') {
            showError(cpfInput, 'Este CPF é inválido (dígitos repetidos).');
        }
        else {
            hideError(cpfInput);
        }
    });

    // Manipulador de ENVIO (Submit)
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio real

        // Força a validação de todos os campos
        nomeInput.dispatchEvent(new Event('input'));
        emailInput.dispatchEvent(new Event('blur'));
        cpfInput.dispatchEvent(new Event('blur'));
        
        // Verifica se há inputs que falharam na validação HTML5 nativa
        const invalidNative = form.querySelector(':invalid');
        
        // Verifica se há erros da nossa validação JS
        const errorsJS = form.querySelectorAll('.form-error-message');
        
        if (errorsJS.length > 0 || invalidNative) {
            alert('Por favor, corrija os erros no formulário.');
        } else {
            // SUCESSO!
            alert('Cadastro enviado com sucesso! (Simulação)');
            
            // *** ETAPA EXTRA 3: Limpa o storage após o sucesso ***
            localStorage.removeItem(STORAGE_KEY);
            
            // Limpa o formulário
            form.reset();
            
            // Redireciona para a Home (boa prática de SPA)
            window.location.hash = '#/';
        }
    });
}