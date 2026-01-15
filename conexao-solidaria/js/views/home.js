export function homeView() {
    return `
        <section class="hero-banner" style="
            background: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=1920&auto=format&fit=crop'); 
            background-size: cover; 
            background-position: center; 
            background-attachment: fixed;
            padding: 140px 0 100px; 
            text-align: center; 
            color: white;">
            <div class="container">
                <h1 style="font-size: 3.5rem; margin-bottom: 20px; font-weight: 700;">Conectando Propósitos</h1>
                <p style="font-size: 1.4rem; max-width: 800px; margin: 0 auto 40px; color: #e0e0e0;">
                    A plataforma mais completa para gestão de voluntariado e impacto social do Brasil.
                </p>
                <div style="display: flex; justify-content: center; gap: 15px;">
                    <a href="#/cadastro" class="btn btn-primary" style="padding: 15px 40px; font-size: 1.1rem; border-radius: 50px;">Seja Voluntário</a>
                    <a href="#/projetos" class="btn" style="padding: 15px 40px; font-size: 1.1rem; background: transparent; border: 2px solid white; color: white; border-radius: 50px;">Conhecer Projetos</a>
                </div>
            </div>
        </section>

        <section style="padding-bottom: 60px; background-color: var(--bg-secondary);">
            <div class="container">
                <div class="stats-container">
                    <div class="card" style="padding: 30px; text-align: center; background: var(--bg-card); border-radius: 12px; box-shadow: var(--shadow);">
                        <div style="font-size: 3rem; color: var(--cor-primaria); font-weight: bold;">1.5k+</div>
                        <div style="color: var(--text-secondary); text-transform: uppercase; letter-spacing: 1px; font-size: 0.9rem;">Voluntários Ativos</div>
                    </div>
                    <div class="card" style="padding: 30px; text-align: center; background: var(--bg-card); border-radius: 12px; box-shadow: var(--shadow);">
                        <div style="font-size: 3rem; color: #198754; font-weight: bold;">120</div>
                        <div style="color: var(--text-secondary); text-transform: uppercase; letter-spacing: 1px; font-size: 0.9rem;">Projetos Realizados</div>
                    </div>
                    <div class="card" style="padding: 30px; text-align: center; background: var(--bg-card); border-radius: 12px; box-shadow: var(--shadow);">
                        <div style="font-size: 3rem; color: #dc3545; font-weight: bold;">50k</div>
                        <div style="color: var(--text-secondary); text-transform: uppercase; letter-spacing: 1px; font-size: 0.9rem;">Horas Doadas</div>
                    </div>
                    <div class="card" style="padding: 30px; text-align: center; background: var(--bg-card); border-radius: 12px; box-shadow: var(--shadow);">
                        <div style="font-size: 3rem; color: #fd7e14; font-weight: bold;">R$ 2mi</div>
                        <div style="color: var(--text-secondary); text-transform: uppercase; letter-spacing: 1px; font-size: 0.9rem;">Recursos Gerados</div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section-padding" style="padding: 80px 0; background-color: var(--bg-page);">
            <div class="container">
                <div class="row" style="display: flex; flex-wrap: wrap; gap: 40px;">
                    <div class="col-lg-7" style="flex: 2; min-width: 300px;">
                        <h2 style="color: var(--cor-primaria); margin-bottom: 20px;">Nossa Missão</h2>
                        <p style="font-size: 1.1rem; line-height: 1.8; color: var(--text-main); margin-bottom: 20px;">
                            Não somos apenas um site. Somos um ecossistema que une tecnologia e empatia. 
                            Através da nossa plataforma, ONGs ganham visibilidade e voluntários encontram propósito.
                        </p>
                        <p style="font-size: 1.1rem; line-height: 1.8; color: var(--text-main);">
                            Oferecemos ferramentas de gestão, relatórios de impacto e certificados automatizados para todos os participantes.
                        </p>
                    </div>
                    <div class="col-lg-4" style="flex: 1; min-width: 300px;">
                         <div style="background: var(--bg-secondary); padding: 30px; border-radius: 15px; border: 1px solid var(--border-color);">
                            <h3 style="margin-bottom: 20px;">Últimas Notícias</h3>
                            <ul style="list-style: none; padding: 0;">
                                <li style="margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid var(--border-color);">
                                    <strong>Nova parceria com Google</strong><br>
                                    <small style="color: var(--text-secondary);">Há 2 dias</small>
                                </li>
                                <li style="margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid var(--border-color);">
                                    <strong>Recorde de doações no Sul</strong><br>
                                    <small style="color: var(--text-secondary);">Há 1 semana</small>
                                </li>
                                <li>
                                    <strong>App Mobile em breve!</strong><br>
                                    <small style="color: var(--text-secondary);">Fique ligado</small>
                                </li>
                            </ul>
                         </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}