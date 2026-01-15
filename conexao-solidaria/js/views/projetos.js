export function projetosView() {
    return `
        <section class="hero-banner" style="
            background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1920&auto=format&fit=crop'); 
            background-size: cover; 
            background-position: center; 
            padding: 120px 0; 
            text-align: center; 
            color: white;">
            <div class="container">
                <h1 style="font-size: 3rem; margin-bottom: 15px; color: white;">Nossas Iniciativas</h1>
                <p style="font-size: 1.2rem; color: #f0f0f0;">Projetos ativos precisando da sua ajuda agora.</p>
            </div>
        </section>

        <section class="section-padding" style="padding: 60px 0; background-color: var(--bg-page);">
            <div class="container">
                <div class="row" style="display: flex; flex-wrap: wrap; gap: 30px; justify-content: center;">
                    
                    <div class="card-projeto" style="flex: 1 1 300px; background-color: var(--bg-card); border: 1px solid var(--border-color); border-radius: 12px; overflow: hidden; box-shadow: var(--shadow);">
                        <div style="height: 220px; background-image: url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop'); background-size: cover; background-position: center;"></div>
                        <div style="padding: 25px;">
                            <span style="background: var(--cor-primaria); color: white; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; text-transform: uppercase;">Educação</span>
                            <h3 style="color: var(--text-main); margin: 15px 0 10px;">Inclusão Digital</h3>
                            <p style="color: var(--text-secondary); margin-bottom: 20px;">Levando programação e robótica para escolas públicas da periferia.</p>
                            <a href="#/cadastro" class="btn btn-primary" style="display: inline-block; background: var(--cor-primaria); color: white; padding: 8px 20px; text-decoration: none; border-radius: 5px;">Participar</a>
                        </div>
                    </div>

                    <div class="card-projeto" style="flex: 1 1 300px; background-color: var(--bg-card); border: 1px solid var(--border-color); border-radius: 12px; overflow: hidden; box-shadow: var(--shadow);">
                        <div style="height: 220px; background-image: url('https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=800&auto=format&fit=crop'); background-size: cover; background-position: center;"></div>
                        <div style="padding: 25px;">
                            <span style="background: #198754; color: white; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; text-transform: uppercase;">Alimentação</span>
                            <h3 style="color: var(--text-main); margin: 15px 0 10px;">Prato Cheio</h3>
                            <p style="color: var(--text-secondary); margin-bottom: 20px;">Combate à fome com distribuição de cestas agroecológicas.</p>
                            <a href="#/cadastro" class="btn btn-primary" style="display: inline-block; background: var(--cor-primaria); color: white; padding: 8px 20px; text-decoration: none; border-radius: 5px;">Participar</a>
                        </div>
                    </div>

                    <div class="card-projeto" style="flex: 1 1 300px; background-color: var(--bg-card); border: 1px solid var(--border-color); border-radius: 12px; overflow: hidden; box-shadow: var(--shadow);">
                        <div style="height: 220px; background-image: url('https://images.unsplash.com/photo-1542601906990-b4d3fb7d5fa5?q=80&w=800&auto=format&fit=crop'); background-size: cover; background-position: center;"></div>
                        <div style="padding: 25px;">
                            <span style="background: #0d6efd; color: white; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; text-transform: uppercase;">Meio Ambiente</span>
                            <h3 style="color: var(--text-main); margin: 15px 0 10px;">Cidade Verde</h3>
                            <p style="color: var(--text-secondary); margin-bottom: 20px;">Revitalização de praças e plantio de árvores nativas.</p>
                            <a href="#/cadastro" class="btn btn-primary" style="display: inline-block; background: var(--cor-primaria); color: white; padding: 8px 20px; text-decoration: none; border-radius: 5px;">Participar</a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    `;
}