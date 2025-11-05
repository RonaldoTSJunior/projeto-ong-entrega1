/* js/views/home.js */

// Exporta uma função que retorna o HTML da página inicial
export function homeTemplate() {
    return `
        <section class="hero-banner">
            <div class="container">
                <h1>Conectando boas ações, transformando vidas</h1>
            </div>
        </section>

        <section class="section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-8">
                        <section aria-labelledby="sobre-titulo">
                            <h2 id="sobre-titulo">Sobre a Conexão Solidária</h2>
            
                            <p>Fundada em 2023, a Conexão Solidária nasceu do sonho de usar a tecnologia para criar pontes diretas entre quem quer ajudar e quem precisa de apoio imediato, encurtando distâncias e burocracias.</p>

                            <h3>Nossa Missão</h3>
                            <p>Conectar pessoas, recursos e oportunidades de forma transparente e eficiente, promovendo o desenvolvimento social e combatendo a desigualdade, com foco na educação e segurança alimentar.</p>

                            <h3>Nossa Visão</h3>
                            <p>Ser a principal referência no Brasil como plataforma de voluntariado e doação, reconhecida pela inovação tecnológica, transparência total e pelo impacto real na vida das pessoas.</p>

                            <h3>Nossos Valores</h3>
                            <ul>
                                <li><strong>Transparência:</strong> Prestação de contas aberta.</li>
                                <li><strong>Empatia:</strong> Colocar-se no lugar do outro.</li>
                                <li><strong>Agilidade:</strong> Respostas rápidas às necessidades sociais.</li>
                                <li><strong>Conexão:</strong> União de esforços para gerar transformação.</li>
                                <li><strong>Inovação:</strong> Tecnologia como ferramenta de impacto social.</li>
                            </ul>
                        </section>
                    </div>

                    <div class="col-12 col-lg-4">
                        <aside class="sidebar-box">
                            <section aria-labelledby="contato-titulo">
                                <h3 id="contato-titulo">Informações de Contato</h3>
                                <address>
                                    Rua da Esperança, 123 - Centro<br>
                                    São Paulo - SP<br>
                                    CEP: 01000-000<br>
                                    Email: <a href="mailto:contato@conexaosolidaria.org">contato@conexaosolidaria.org</a>
                                </address>
                            </section>
                        </aside>
                    </div>
                </div>
            </div>
        </section>
    `;
}