const produto = {
    nome: "Caneta bic",
    preco: 1.99,
    desconto: 0.05
}

function clone(objeto) {
    return { ...objeto }
}

const novoProduto = clone(produto);
novoProduto.nome = 'Caneta bic azul'

console.log(produto, novoProduto)