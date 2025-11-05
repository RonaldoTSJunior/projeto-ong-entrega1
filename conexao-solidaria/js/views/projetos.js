/* js/views/projetos.js */

// Nossos dados dos projetos (poderia vir de uma API no futuro)
const projetosData = [
    {
        id: 1,
        titulo: "Educação para o Futuro",
        descricao: "Aulas de reforço escolar e oficinas de tecnologia para crianças e adolescentes.",
        imagem: "imagens/imagem-projetos.jpg", // Usando nossas imagens locais
        tags: [
            { texto: "Educação", classe: "badge-primary" },
            { texto: "Tecnologia", classe: "badge-secondary" }
        ]
    },
    {
        id: 2,
        titulo: "Prato Cheio",
        descricao: "Distribuição de refeições diárias para pessoas em situação de vulnerabilidade.",
        imagem: "imagens/imagem-cadastro.jpg",
        tags: [
            { texto: "Alimentação", classe: "badge-secondary" }
        ]
    },
    {
        id: 3,
        titulo: "Saúde na Comunidade",
        descricao: "Atendimentos médicos e odontológicos gratuitos para a população local.",
        imagem: "imagens/banner-home.jpg",
        tags: [
            { texto: "Saúde", classe: "badge-primary" }
        ]
    }
];

// Função "Template JS" para gerar UM card
function criarCard(projeto) {
    // Mapeia o array de tags em HTML de tags
    const tagsHtml = projeto.tags.map(tag => 
        `<span class="badge ${tag.classe}">${tag.texto}</span>`
    ).join(' '); // .join() junta o array de strings

    return `
        <div class="col-12 col-md-6 col-lg-4">
            <article class="card">
                <img src="${projeto.imagem}" alt="${projeto.titulo}" class="card-image">
                <div class="card-content">
                    <h3>${projeto.titulo}</h3>
                    <p>${projeto.descricao}</p>
                    <p>${tagsHtml}</p>
                </div>
                <div class="card-footer">
                    <a href="#" class="btn btn-secondary">Saiba Mais</a>
                </div>
            </article>
        </div>
    `;
}

// Função principal que retorna o HTML da página de projetos
export function projetosTemplate() {
    // Gera todos os cards primeiro
    const cardsHtml = projetosData.map(criarCard).join('');

    // Retorna o HTML da página completa
    return `
        <section class="page-header" style="background-image: url('imagens/imagem-projetos.jpg');">
            <div class="container">
                <h1>Nossos Projetos e Formas de Ajudar</h1>
            </div>
        </section>

        <section id="projetos" class="section-padding">
            <div class="container">
                <h2 class="text-center">Projetos em Andamento</h2>
                <div class="row">
                    ${cardsHtml} </div>
            </div>
        </section>
        
        <section id="ajudar" class="section-padding section-light">
            <div class="container">
                <h2 class="text-center">Como Ajudar</h2>
                <div class="row">
                    <div class="col-12 col-md-6">
                        <h3>Seja Voluntário</h3>
                        <p>Temos vagas abertas para diversas áreas! Seu tempo e talento fazem a diferença.</p>
                        <a href="#/cadastro" class="btn btn-primary">Preencher Cadastro</a>
                    </div>
                    <div class="col-12 col-md-6">
                        <h3>Faça uma Doação</h3>
                        <p>Sua doação se transforma em comida, livros e saúde para quem precisa.</p>
                        <p><strong>PIX (CNPJ): 12.345.678/0001-99</strong></p>
                    </div>
                </div>
            </div>
        </section>
    `;
}