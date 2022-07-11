var database = require("../database/config")

function salvar(fkUsuario, nome, categoria, porcaoTamanho, porcaoUnidade, medidaTamanho, medidaUnidade) {
    console.log("ACESSEI O RECEITA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function salvar():", fkUsuario, nome, categoria, porcaoTamanho, porcaoUnidade, medidaTamanho, medidaUnidade);
    var instrucao = `
        INSERT INTO Dados_receita (fkUsuario, nome_receita, categoria, porcao_tamanho, porcao_unidade, medida_tamanho, medida_unidade) VALUES ('${fkUsuario}','${nome}', '${categoria}', '${porcaoTamanho}', '${porcaoUnidade}', '${medidaTamanho}', '${medidaUnidade}');
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}

function salvarIngredientes(fkDados_receita, vt_ingredientes, vt_quantidade) {
    console.log("ACESSEI O RECEITA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function salvarIngredientes():", fkDados_receita, vt_ingredientes, vt_quantidade);

    var retorno;
    for (let index = 0; index < vt_ingredientes.length; index++) {
        var fkIngrediente = vt_ingredientes[index];
        var qtd_ingrediente = vt_quantidade[index];

        if (fkIngrediente != "") {

            var instrucao = `
            INSERT INTO Qtd_ingrediente_receita (fkDados_receita, fkIngrediente, qtd_ingrediente) VALUES ('${fkDados_receita}', '${fkIngrediente}', '${qtd_ingrediente}');
            `;
            console.log("Executando a instrução SQL: \n"+instrucao);
            retorno = database.executar(instrucao);
        }
    }
    
    return retorno;
}

function pegarDadosReceita(idDados_receita, fkUsuario) {
    console.log("ACESSEI O RECEITA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pegarDadosReceita():", idDados_receita, fkUsuario);

    var instrucao = `
    SELECT
        nome_receita, 
        porcao_tamanho,
        porcao_unidade,
        medida_tamanho,
        medida_unidade,
        qtd_ingrediente,
        valor_energetico_kcal,
        carboidratos_totais_g,
        acucares_totais_g,
        acucares_adicionados_g,
        proteinas_g,
        gorduras_totais_g,
        gorduras_saturadas_g,
        gorduras_trans_g,
        fibra_alimentar_g,
        sodio_mg
    FROM Dados_receita
        JOIN qtd_ingrediente_receita
            ON fkDados_receita = idDados_receita
        JOIN ingredientes
            ON fkIngrediente = idIngrediente
    WHERE fkUsuario = ${fkUsuario} AND idDados_receita = ${idDados_receita};`

    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}

function listarMinhasReceitas(fkUsuario) {
    console.log("ACESSEI O RECEITA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarMinhasReceitas():", fkUsuario);

    var instrucao = `
    SELECT
        idDados_receita,
        fkUsuario,
        nome_receita
    FROM Dados_receita
    WHERE fkUsuario = ${fkUsuario};`

    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}

module.exports = {
    salvar,
    salvarIngredientes,
    pegarDadosReceita,
    listarMinhasReceitas,
};