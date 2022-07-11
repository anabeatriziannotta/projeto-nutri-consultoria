var receitaModel = require("../models/receitaModel");

var sessoes = [];

function salvar(req, res) {
    var fkUsuario = req.body.fkUsuario;
    var nome = req.body.nome;
    var categoria = req.body.categoria;
    var porcaoTamanho = req.body.porcaoTamanho;
    var porcaoUnidade = req.body.porcaoUnidade;
    var medidaTamanho = req.body.medidaTamanho;
    var medidaUnidade = req.body.medidaUnidade;

    if (fkUsuario == undefined) {
        res.status(400).send("O fkUsuario está undefined!");
    } else if (nome == undefined) {
        res.status(400).send("O nome da receita está undefined!");
    } else if (categoria == undefined) {
        res.status(400).send("A categoria está undefined!");
    } else if (porcaoTamanho == undefined) {
        res.status(400).send("O tamanho da porção está undefined!");
    } else if (porcaoUnidade == undefined) {
        res.status(400).send("A unidade da porção está undefined!");
    } else if (medidaTamanho == undefined) {
        res.status(400).send("O tamanho da medida caseira está undefined!");
    } else if (medidaUnidade == undefined) {
        res.status(400).send("A unidade da medida caseira está undefined!");
    } else {
        receitaModel.salvar(fkUsuario, nome, categoria, porcaoTamanho, porcaoUnidade, medidaTamanho, medidaUnidade)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao salvar a receita! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}

function salvarIngredientes(req, res) {
    var fkDados_receita = req.body.fkDados_receita;
    var ingrediente1 = req.body.ingrediente1;
    var quantidade1 = req.body.quantidade1;
    var ingrediente2 = req.body.ingrediente2;
    var quantidade2 = req.body.quantidade2;
    var ingrediente3 = req.body.ingrediente3;
    var quantidade3 = req.body.quantidade3;
    var ingrediente4 = req.body.ingrediente4;
    var quantidade4 = req.body.quantidade4;
    var ingrediente5 = req.body.ingrediente5;
    var quantidade5 = req.body.quantidade5;
    var ingrediente6 = req.body.ingrediente6;
    var quantidade6 = req.body.quantidade6;
    var ingrediente7 = req.body.ingrediente7;
    var quantidade7 = req.body.quantidade7;
    var ingrediente8 = req.body.ingrediente8;
    var quantidade8 = req.body.quantidade8;
    var ingrediente9 = req.body.ingrediente9;
    var quantidade9 = req.body.quantidade9;
    var ingrediente10 = req.body.ingrediente10;
    var quantidade10 = req.body.quantidade10;

    var vt_ingredientes = [ingrediente1, ingrediente2, ingrediente3, ingrediente4, ingrediente5, ingrediente6, ingrediente7, ingrediente8, ingrediente9, ingrediente10];

    var vt_quantidade = [quantidade1, quantidade2, quantidade3, quantidade4, quantidade5, quantidade6, quantidade7, quantidade8, quantidade9, quantidade10];

    if (fkDados_receita == undefined) {
        res.status(400).send("O fkDados_receita está undefined!");
    } else {
        receitaModel.salvarIngredientes(fkDados_receita, vt_ingredientes, vt_quantidade)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao salvar a receita! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}

function pegarDadosReceita(req, res) {

    var fkUsuario = req.params.fkUsuario;
    var idDados_receita = req.params.idDados_receita;

    if (idDados_receita == undefined) {
        res.status(400).send("O idDados_receita está undefined!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("O fkUsuario está undefined!");
    } else {
        receitaModel.pegarDadosReceita(idDados_receita, fkUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao pegar a receita! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}

function listarMinhasReceitas(req, res) {

    var fkUsuario = req.params.fkUsuario;

    if (fkUsuario == undefined) {
        res.status(400).send("O fkUsuario está undefined!");
    } else {
        receitaModel.listarMinhasReceitas(fkUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao listar as receitas! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}
module.exports = {
    salvar,
    salvarIngredientes,
    pegarDadosReceita,
    listarMinhasReceitas,
}