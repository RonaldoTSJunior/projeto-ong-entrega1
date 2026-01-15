export function cadastroView() {
    return `
        <section class="hero-banner" style="
            background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1920&auto=format&fit=crop'); 
            background-size: cover; 
            background-position: center; 
            padding: 80px 0; 
            text-align: center; 
            color: white;">
            <div class="container">
                <h1 style="font-size: 2.8rem; margin-bottom: 10px; color: white;">Cadastro Completo</h1>
                <p style="font-size: 1.2rem; color: #f0f0f0;">Preencha seus dados para acessar todas as funcionalidades.</p>
            </div>
        </section>

        <section class="section-padding" style="padding: 60px 0; background-color: var(--bg-secondary);">
            <div class="container">
                <div class="card" style="max-width: 900px; margin: 0 auto; background: var(--bg-card); padding: 40px; border-radius: 15px; box-shadow: var(--shadow); border: 1px solid var(--border-color);">
                    
                    <form id="cadastro-completo">
                        <h3 style="color: var(--cor-primaria); border-bottom: 1px solid var(--border-color); padding-bottom: 10px; margin-bottom: 20px;">1. Dados Pessoais</h3>
                        
                        <div class="row" style="display: flex; flex-wrap: wrap; gap: 20px; margin-bottom: 20px;">
                            <div style="flex: 1; min-width: 300px;">
                                <label style="display: block; margin-bottom: 5px; font-weight: bold;">Nome Completo *</label>
                                <input type="text" name="nome" class="form-control w-100" required style="padding: 10px; border-radius: 5px;">
                            </div>
                            <div style="flex: 1; min-width: 300px;">
                                <label style="display: block; margin-bottom: 5px; font-weight: bold;">CPF *</label>
                                <input type="text" name="cpf" class="form-control w-100" placeholder="000.000.000-00" required style="padding: 10px; border-radius: 5px;">
                            </div>
                        </div>

                        <div class="row" style="display: flex; flex-wrap: wrap; gap: 20px; margin-bottom: 20px;">
                            <div style="flex: 1; min-width: 200px;">
                                <label style="display: block; margin-bottom: 5px; font-weight: bold;">Data de Nascimento</label>
                                <input type="date" name="nascimento" class="form-control w-100" style="padding: 10px; border-radius: 5px;">
                            </div>
                            <div style="flex: 1; min-width: 200px;">
                                <label style="display: block; margin-bottom: 5px; font-weight: bold;">Telefone / WhatsApp</label>
                                <input type="tel" name="telefone" class="form-control w-100" placeholder="(00) 00000-0000" style="padding: 10px; border-radius: 5px;">
                            </div>
                        </div>

                        <h3 style="color: var(--cor-primaria); border-bottom: 1px solid var(--border-color); padding-bottom: 10px; margin-bottom: 20px; margin-top: 30px;">2. Endereço</h3>
                        
                        <div class="row" style="display: flex; flex-wrap: wrap; gap: 20px; margin-bottom: 20px;">
                            <div style="flex: 1; min-width: 150px;">
                                <label style="display: block; margin-bottom: 5px; font-weight: bold;">CEP</label>
                                <input type="text" name="cep" class="form-control w-100" placeholder="00000-000" style="padding: 10px; border-radius: 5px;">
                            </div>
                            <div style="flex: 3; min-width: 300px;">
                                <label style="display: block; margin-bottom: 5px; font-weight: bold;">Logradouro (Rua, Av.)</label>
                                <input type="text" name="logradouro" class="form-control w-100" style="padding: 10px; border-radius: 5px;">
                            </div>
                        </div>

                        <div class="row" style="display: flex; flex-wrap: wrap; gap: 20px; margin-bottom: 20px;">
                             <div style="flex: 1; min-width: 100px;">
                                <label style="display: block; margin-bottom: 5px; font-weight: bold;">Número</label>
                                <input type="text" name="numero" class="form-control w-100" style="padding: 10px; border-radius: 5px;">
                            </div>
                            <div style="flex: 2; min-width: 200px;">
                                <label style="display: block; margin-bottom: 5px; font-weight: bold;">Bairro</label>
                                <input type="text" name="bairro" class="form-control w-100" style="padding: 10px; border-radius: 5px;">
                            </div>
                            <div style="flex: 2; min-width: 200px;">
                                <label style="display: block; margin-bottom: 5px; font-weight: bold;">Cidade / UF</label>
                                <input type="text" name="cidade" class="form-control w-100" style="padding: 10px; border-radius: 5px;">
                            </div>
                        </div>

                        <h3 style="color: var(--cor-primaria); border-bottom: 1px solid var(--border-color); padding-bottom: 10px; margin-bottom: 20px; margin-top: 30px;">3. Dados de Acesso</h3>

                        <div class="row" style="display: flex; flex-wrap: wrap; gap: 20px; margin-bottom: 20px;">
                            <div style="flex: 1; min-width: 300px;">
                                <label style="display: block; margin-bottom: 5px; font-weight: bold;">E-mail de Login *</label>
                                <input type="email" name="email" class="form-control w-100" required style="padding: 10px; border-radius: 5px;">
                            </div>
                        </div>

                        <div class="row" style="display: flex; flex-wrap: wrap; gap: 20px; margin-bottom: 20px;">
                            <div style="flex: 1; min-width: 250px;">
                                <label style="display: block; margin-bottom: 5px; font-weight: bold;">Senha *</label>
                                <input type="password" name="senha" class="form-control w-100" required style="padding: 10px; border-radius: 5px;">
                            </div>
                            <div style="flex: 1; min-width: 250px;">
                                <label style="display: block; margin-bottom: 5px; font-weight: bold;">Confirmar Senha *</label>
                                <input type="password" name="confirma_senha" class="form-control w-100" required style="padding: 10px; border-radius: 5px;">
                            </div>
                        </div>

                        <div style="margin-bottom: 30px; margin-top: 20px;">
                            <label style="display: block; margin-bottom: 5px; font-weight: bold;">Sobre você (Habilidades e Interesses)</label>
                            <textarea name="bio" rows="4" class="form-control w-100" placeholder="Conte um pouco sobre suas experiências..." style="padding: 10px; border-radius: 5px; resize: vertical;"></textarea>
                        </div>

                        <button type="submit" class="btn btn-primary" style="width: 100%; padding: 15px; font-size: 1.2rem; background-color: var(--cor-primaria); color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer;">
                            Finalizar Cadastro
                        </button>
                    </form>
                </div>
            </div>
        </section>
    `;
}