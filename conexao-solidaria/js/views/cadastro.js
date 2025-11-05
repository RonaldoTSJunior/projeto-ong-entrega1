/* js/views/cadastro.js */

export function cadastroTemplate() {
    return `
        <section class="page-header" style="background-image: url('imagens/imagem-cadastro.jpg');">
            <div class="container">
                <h1>Participe (Cadastro de Voluntários e Doadores)</h1>
            </div>
        </section>

        <section class="section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-8 mx-auto">
                        
                        <p class="text-center lead-text">Preencha o formulário abaixo para começar sua jornada conosco. Campos marcados com * são obrigatórios.</p>

                        <form id="main-form" action="#" method="post">

                            <fieldset>
                                <legend>Dados Pessoais</legend>

                                <div class="form-group">
                                    <div>
                                        <label for="nome">Nome Completo *</label>
                                        <input type="text" id="nome" name="nome_completo" required minlength="3" placeholder="Seu nome completo">
                                        </div>
                                </div>
                                
                                <div class="form-group grid-2">
                                    <div>
                                        <label for="email">E-mail *</label>
                                        <input type="email" id="email" name="email" required placeholder="seu@email.com">
                                    </div>
                                    <div>
                                        <label for="nascimento">Data de Nascimento *</label>
                                        <input type="date" id="nascimento" name="data_nascimento" required>
                                    </div>
                                </div>

                                <div class="form-group grid-2">
                                    <div>
                                        <label for="cpf">CPF *</label>
                                        <input type="text" id="cpf" name="cpf" pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}" placeholder="123.456.789-00" title="Digite no formato XXX.XXX.XXX-XX" required>
                                    </div>
                                    <div>
                                        <label for="telefone">Telefone *</label>
                                        <input type="tel" id="telefone" name="telefone" pattern="\\(\\d{2}\\) \\d{4,5}-\\d{4}" placeholder="(11) 98765-4321" title="Digite no formato (XX) XXXXX-XXXX" required>
                                    </div>
                                </div>
                            </fieldset>

                            <fieldset>
                                <legend>Endereço</legend>
                                
                                <div class="form-group grid-2">
                                    <div>
                                        <label for="cep">CEP *</label>
                                        <input type="text" id="cep" name="cep" pattern="\\d{5}-\\d{3}" placeholder="12345-000" title="Digite no formato XXXXX-XXX" required>
                                    </div>
                                    <div>
                                        <label for="endereco">Endereço (Rua, N°) *</label>
                                        <input type="text" id="endereco" name="endereco" required placeholder="Ex: Rua da Esperança, 123">
                                    </div>
                                </div>

                                <div class="form-group grid-2">
                                    <div>
                                        <label for="cidade">Cidade *</label>
                                        <input type="text" id="cidade" name="cidade" required placeholder="São Paulo">
                                    </div>
                                    <div>
                                        <label for="estado">Estado *</label>
                                        <select id="estado" name="estado" required>
                                            <option value="">Selecione...</option>
                                            <option value="SP">São Paulo</option>
                                            <option value="RJ">Rio de Janeiro</option>
                                            <option value="MG">Minas Gerais</option>
                                        </select>
                                    </div>
                                </div>
                            </fieldset>
                            
                            <div class="form-actions">
                                <button type="submit" class="btn btn-primary">Enviar Cadastro</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    `;
}