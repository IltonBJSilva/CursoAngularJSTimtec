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
    if($scope.form_1.$valid){
      $scope.alunos.push($scope.nome_aluno);
    }else{
      alert('Preencha o formulario corretamente');
    }
   }
});
