const produtos = [

{
nome:"BANCO MINIMALISTA",
preco:"R$80",
imagem:"img/bcm.jpg",
imagemProjeto:"img/bcmp.jpg",
descricao:"Um banco compacto e versátil, perfeito para complementar ambientes modernos com praticidade e estilo."
},

{
nome:"MESA X",
preco:"R$836",
imagem:"img/mx.jpg",
imagemProjeto:"img/mxp.jpg",
descricao:"Design marcante e contemporâneo que transforma qualquer espaço, unindo beleza e funcionalidade."
},

{
nome:"BANQUETA Z",
preco:"R$160",
imagem:"img/bcz.jpg",
imagemProjeto:"img/bczp.jpg",
descricao:"Banqueta elegante e moderna, ideal para cozinhas, áreas gourmet e ambientes descontraídos."
},

{
nome:"BANCADA PARA APARTAMENTO",
preco:"R$400",
imagem:"img/ba.jpg",
imagemProjeto:"img/bap.jpg",
descricao:"Solução inteligente para otimizar espaços, oferecendo praticidade sem abrir mão do visual sofisticado."
},

{
nome:"MESA DE CABECEIRA",
preco:"R$120",
imagem:"img/mc.jpg",
imagemProjeto:"img/mcp.jpg",
descricao:"Compacta e funcional, perfeita para manter seus objetos essenciais sempre ao alcance."
},

{
nome:"PRATELEIRA MINIMALISTA",
preco:"R$400",
imagem:"img/pm.jpg",
imagemProjeto:"img/pmp.jpg",
descricao:"Linhas limpas e modernas que valorizam a decoração e ajudam na organização do ambiente."
},

{
nome:"BANCO RÚSTICO PEQUENO",
preco:"R$430",
imagem:"img/brp.jpg",
imagemProjeto:"img/brpp.jpg",
descricao:"Peça charmosa que adiciona personalidade e aconchego aos mais diversos ambientes."
},

{
nome:"BANCO RÚSTICO GRANDE",
preco:"R$745",
imagem:"img/brg.jpg",
imagemProjeto:"img/brgp.jpg",
descricao:"Ideal para quem busca conforto e presença visual, tornando qualquer espaço mais convidativo."
},

{
nome:"PRATELEIRA DE CANTO",
preco:"R$160",
imagem:"img/pc.jpg",
imagemProjeto:"img/pcp.jpg",
descricao:"Aproveita cantos de forma inteligente, criando áreas úteis para decoração e organização."
},

{
nome:"MESA DE CABECEIRA COM GAVETA",
preco:"R$320",
imagem:"img/mcg.jpg",
imagemProjeto:"img/mcgp.jpg",
descricao:"Combina praticidade e organização, oferecendo espaço extra para guardar objetos do dia a dia."
},

{
nome:"MESA DE CENTRO CUBO",
preco:"R$185",
imagem:"img/mcc.jpg",
imagemProjeto:"img/mccp.jpg",
descricao:"Modelo moderno que se destaca pelo formato diferenciado e pela versatilidade de uso."
},

{
nome:"MESA DE CENTRO Z",
preco:"R$160",
imagem:"img/mz.jpg",
imagemProjeto:"img/mzp.jpg",
descricao:"Visual contemporâneo que agrega estilo e personalidade à sala de estar."
},

{
nome:"MESA DE CENTRO DUPLA",
preco:"R$780",
imagem:"img/md.jpg",
imagemProjeto:"img/mdp.jpg",
descricao:"Conjunto elegante que oferece mais espaço de apoio e valoriza a composição do ambiente."
},

{
nome:"MESA OCTAGONAL",
preco:"R$480",
imagem:"img/mo.jpg",
imagemProjeto:"img/mop.jpg",
descricao:"Formato diferenciado que se torna o destaque da decoração, trazendo exclusividade ao espaço."
},

{
nome:"MESA PARA COMPUTADOR",
preco:"R$630",
imagem:"img/mpc.jpg",
imagemProjeto:"img/mpcp.jpg",
descricao:"Desenvolvida para proporcionar conforto e produtividade em estudos, trabalho ou lazer."
},

{
nome:"PRATELEIRA EM CUBOS",
preco:"R$225",
imagem:"img/pec.jpg",
imagemProjeto:"img/pecp.jpg",
descricao:"Ideal para organizar e expor objetos decorativos de forma moderna e criativa."
},

{
nome:"PRATELEIRA 3 NÍVEIS",
preco:"R$200",
imagem:"img/p3a.jpg",
imagemProjeto:"img/p3ap.jpg",
descricao:"Três níveis de organização que ajudam a aproveitar melhor o espaço com muito estilo."
},

{
nome:"PRATELEIRA LOSANGO",
preco:"R$190",
imagem:"img/pl.jpg",
imagemProjeto:"img/plp.jpg",
descricao:"Design geométrico moderno que une funcionalidade e decoração em uma única peça."
},

{
nome:"PRATELEIRA E",
preco:"R$170",
imagem:"img/pe.jpg",
imagemProjeto:"img/pep.jpg",
descricao:"Modelo criativo que oferece espaço para organização enquanto valoriza a estética do ambiente."
},

{
nome:"PRATELEIRA ESCADA",
preco:"R$210",
imagem:"img/pee.jpg",
imagemProjeto:"img/peep.jpg",
descricao:"Visual leve e moderno, perfeito para expor plantas, livros e objetos decorativos."
}



];



const catalogo = document.getElementById("catalogo");


produtos.forEach((produto,index)=>{


catalogo.innerHTML += `

<div class="produto" data-index="${index}">


<div class="card">

<div class="texto">

<h2>${produto.nome}</h2>

<p>${produto.preco}</p>

</div>

</div>


<div class="imagem">

<img src="${produto.imagem}" alt="${produto.nome}">

</div>


</div>

`;

});



document.querySelectorAll(".produto").forEach(card=>{


card.addEventListener("click",()=>{


let index = card.dataset.index;


localStorage.setItem(
"produtoSelecionado",
JSON.stringify(produtos[index])
);


window.location.href="produto.html";


});

const imagens = document.querySelectorAll(".imagem-scroll");


window.addEventListener("scroll",()=>{


    imagens.forEach(imagem=>{


        let posicao = imagem.getBoundingClientRect().top;

        let alturaTela = window.innerHeight;


        if(posicao < alturaTela - 100){

            imagem.classList.add("aparecer");

        }


    });


});

});