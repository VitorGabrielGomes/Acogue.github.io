// Cadastro de clientes

const formCliente = document.getElementById("formCliente");

if (formCliente) {

    formCliente.addEventListener("submit", function(event) {

        // Impede o envio do formulário
        event.preventDefault();

        // Obtém o nome digitado
        let nome = document.getElementById("nome").value;

        // Exibe uma mensagem
        alert("Cliente " + nome + " cadastrado com sucesso!");

        // Limpa o formulário
        formCliente.reset();

    });
}


// Cadastro de funcionários

const formFuncionario =
    document.getElementById("formFuncionario");

if (formFuncionario) {

    formFuncionario.addEventListener("submit", function(event) {

        event.preventDefault();

        let nome =
            document.getElementById("nomeFuncionario").value;

        alert(
            "Funcionário " + nome +
            " cadastrado com sucesso!"
        );

        formFuncionario.reset();

    });
}


// Cadastro de produtos

const formProduto =
    document.getElementById("formProduto");

if (formProduto) {

    formProduto.addEventListener("submit", function(event) {

        event.preventDefault();

        let produto =
            document.getElementById("produto").value;

        alert(
            "Produto " + produto +
            " cadastrado com sucesso!"
        );

        formProduto.reset();

    });
}