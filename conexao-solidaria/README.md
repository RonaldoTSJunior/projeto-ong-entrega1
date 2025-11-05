# Projeto Front-End: Plataforma Conexão Solidária

Este é o projeto final da disciplina de Desenvolvimento Front-End, um SPA (Single Page Application) completo para a "Conexão Solidária", uma plataforma fictícia de gerenciamento para ONGs.

O projeto foi construído de forma incremental ao longo de 4 entregas, aplicando conceitos de HTML5, CSS3, JavaScript (ES6+), Acessibilidade (WCAG 2.1) e práticas profissionais de versionamento (Git) e otimização.

**Status do Projeto:** `v1.0.0` (Concluído)

---

## 🚀 Funcionalidades Principais

* **Arquitetura SPA:** Navegação dinâmica sem recarregamento de página (usando Roteamento por Hash).
* **Templates JS:** O conteúdo das páginas (Home, Projetos, Cadastro) é gerado dinamicamente via JavaScript.
* **Design Responsivo:** Layout "mobile-first" que se adapta a tablets e desktops usando um sistema de grid customizado, Flexbox e CSS Grid.
* **Modo Escuro Acessível:** Toggle para alternar entre temas claro e escuro, com preferência salva no Local Storage.
* **Validação Avançada:** Formulário de cadastro com validação de consistência de dados em tempo real via JavaScript.
* **Persistência de Dados:** O formulário de cadastro salva o progresso do usuário no Local Storage.
* **Acessibilidade (WCAG 2.1 AA):**
    * Navegação completa por teclado.
    * Suporte a leitores de tela (ARIA roles, semântica).
    * Contraste de cores 4.5:1 (mínimo) validado.
    * Alto contraste via Modo Escuro.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído do zero ("vanilla") sem o uso de frameworks/bibliotecas externas (como React ou Vue), focando nos fundamentos da web.

* **HTML5:** Estrutura semântica (`<main>`, `<nav>`, `<aside>`, ARIA roles).
* **CSS3:**
    * Variáveis CSS (Custom Properties) para o Design System.
    * Flexbox e CSS Grid para layouts complexos.
    * Media Queries para responsividade.
* **JavaScript (ES6+):**
    * Manipulação do DOM.
    * Módulos (Import/Export).
    * Eventos (click, input, blur, hashchange).
    * Roteamento (SPA).
    * Local Storage.
* **Git & GitHub:**
    * Estratégia GitFlow (branches `main`, `develop`, `feature/*`).
    * Commits Semânticos.
    * Pull Requests e Releases (v1.0.0).
* **Otimização:**
    * Minificação de CSS e JS (simulada em `style.min.css` e `app.min.js`).
    * Compressão de imagens (requisito).

---

## 📁 Estrutura do Repositório (Código Fonte)

O projeto é organizado de forma modular e escalável:

* `/index.html`: A "casca" principal do SPA.
* `/README.md`: Esta documentação.
* `/imagens/`: Contém os assets visuais (logos, banners).
* `/css/`: Contém todos os estilos CSS, divididos em:
    * `/base/` (Reset, Variáveis, Dark Mode, Globais)
    * `/components/` (Botões, Cards, Forms, Navegação)
    * `/layout/` (Grid, Estrutura Header/Footer)
    * `/pages/` (Estilos de páginas específicas)
    * `style.min.css` (Arquivo de produção minificado)
* `/js/`: Contém todo o código JavaScript (ES6 Modules), dividido em:
    * `/services/` (Lógica de negócio, ex: Validação)
    * `/views/` (Templates JS de cada página: home.js, projetos.js, cadastro.js)
    * `app.js` (Entrypoint principal)
    * `router.js` (O cérebro do SPA)
    * `theme-toggle.js` (Lógica do Dark Mode)
    * `app.min.js` (Arquivo de produção minificado)

---

## 🚀 Como Executar

Por ser um projeto "vanilla" (HTML, CSS, JS puros), ele **não requer um servidor de build** (como Node.js).

No entanto, por usar Módulos JavaScript (ESM - `import`/`export`), ele **precisa** ser executado a partir de um servidor web local (devido à política de segurança CORS do navegador).

1.  Clone o repositório:
    ```bash
    git clone https://github.com/[SEU_USUARIO]/projeto-ong-entrega1.git
    ```

2.  Entre na pasta:
    ```bash
    cd projeto-ong-entrega1
    ```

3.  Inicie um servidor local:
    A forma mais fácil é usar a extensão **"Live Server"** do VS Code (clique com o botão direito no `index.html` e selecione "Open with Live Server").

    *Alternativa (via terminal, se você tiver Python):*
    ```bash
    python -m http.server
    ```

    *...ou (se você tiver Node.js instalado):*
    ```bash
    npx http-server
    ```

4.  Abra o navegador e acesse `http://localhost:8080` (ou a porta indicada pelo seu servidor).