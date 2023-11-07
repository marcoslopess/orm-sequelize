const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController");

const router = Router();

router
  .get("/pessoas", PessoaController.pegaPessoasAtivas)
  .get("/pessoas/todos", PessoaController.pegaTodasAsPessoas)
  .get("/pessoas/:id", PessoaController.pegaUmaPessoa)
  .post("/pessoas", PessoaController.criaPessoa)
  .put("/pessoas/:id", PessoaController.atualizaPessoa)
  .delete("/pessoas/:id", PessoaController.apagaPessoa)
  .get("/pessoas/:estudanteId/matricula", PessoaController.pegaMatriculas)
  .get("/pessoas/matricula/:turmaId/confirmadas", PessoaController.pegaMatriculasPorTurma)
  .get("/pessoas/matricula/lotada", PessoaController.pegaTurmasLotadas)
  .get("/pessoas/:estudanteId/matricula/:matriculaId", PessoaController.pegaUmaMatricula)
  .post("/pessoas/:estudanteId/matricula", PessoaController.criaMatricula)
  .post("/pessoas/:estudanteId/matricula/:matriculaId/restaura", PessoaController.restauraMatricula)
  .put("/pessoas/:estudanteId/matricula/:matriculaId", PessoaController.atualizaMatricula)
  .delete("/pessoas/:estudanteId/matricula/:matriculaId", PessoaController.apagaMatricula)
  .post("/pessoas/:id/restaura", PessoaController.restauraPessoa);

module.exports = router;
