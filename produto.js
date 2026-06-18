const produto = JSON.parse(
    localStorage.getItem("produtoSelecionado")
);



document.getElementById("nome").innerHTML = produto.nome;


document.getElementById("preco").innerHTML = produto.preco;


document.getElementById("descricao").innerHTML = produto.descricao;



document.getElementById("imagem").src = produto.imagem;



document.getElementById("imagemProjeto").src = produto.imagemProjeto;





function fazerPedido(){


    const numero = "5519999820321"; 
    // coloque seu WhatsApp aqui



    const observacao = 
    document.getElementById("observacao").value;



    const mensagem =

`Olá! Vi o produto "${produto.nome}" no catálogo da 3H Móveis e gostaria de solicitar um orçamento.

Produto: ${produto.nome}

Preço: ${produto.preco}

Observação:
${observacao}`;



    const link =

    `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;



    window.open(link,"_blank");


}