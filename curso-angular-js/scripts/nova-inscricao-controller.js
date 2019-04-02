/*
  Nome do autor: Ilton Batista da Silva Júnior
  Data de criação do arquivo: 21/03/2019
  Objetivo sucinto do programa: script para submter novo aluno 
  Referencia ao enunciado/origem do exercicio: https://cursos.timtec.com.br/course/desenvolvimento-web-com-angularjs/intro
*/

angular.module('aplicacao').controller('NovaInscricaoController',function($scope, AlunosCollectionService){

  $scope.submeter = function() {
    if($scope.form_1.$valid) {
      novo_aluno = {};
      novo_aluno['nome'] = $scope.nome_aluno;
      novo_aluno['idade'] = parseInt($scope.idade_aluno);
      AlunosCollectionService.adicionarAluno(novo_aluno);
      $scope.alunos.push(novo_aluno);
    } else {
      alert("Preencha o formulário corretamente");
    }
  };

});
