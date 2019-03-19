angular.module('aplicacao').controller('PrimeiroController',function($scope) {
  $scope.nome = 'Ilton Batista';
  var nome = "Ola ola ola";
  $scope.iniciado = true;

  $scope.alunos = ['Ilton', 'Elian', 'Fabio','João','Ezequiel']

  $scope.finalizar = function(){
    $scope.iniciado = false;
  };
  $scope.iniciar = function(){
    $scope.iniciado = true;
  }
  $scope.submeter = function(){
    $scope.alunos.push($scope.nome_aluno);
  }
});
