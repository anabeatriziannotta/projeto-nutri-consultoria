var express = require("express");
var router = express.Router();

var receitaController = require("../controllers/receitaController");

router.get("/pegarDadosReceita/:fkUsuario/:idDados_receita", function(req, res) {
    receitaController.pegarDadosReceita(req, res);
});

router.get("/listarMinhasReceitas/:fkUsuario", function(req, res) {
  receitaController.listarMinhasReceitas(req, res);
});

router.post("/salvar", function(req, res) {
    receitaController.salvar(req, res);
})

router.post("/salvarIngredientes", function(req, res) {
    receitaController.salvarIngredientes(req, res);
})

module.exports = router;