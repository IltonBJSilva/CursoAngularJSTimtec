angular.module('aplicacao').service('AlunosCollectionService', function($filter){
  $scope.alunos = [{'nome': 'Elian', 'idade': 9},
                   {'nome': 'Ilton', 'idade': 11},
                   {'nome': 'João', 'idade': 11},
                   {'nome': 'Francisco', 'idade': 14},
                   {'nome': 'Sara', 'idade': 10},
                   {'nome': 'Andressa', 'idade': 12}];
  this.getAlunos = function(){
    return alunos;
  }

  this.adicionarAluno = function(aluno){
    alunos.push(aluno);
  }

  thisordenarPorNome =  function(){
    $scope.ordenadoPorNome = !$scope.ordenadoPorNome;
    $scope.alunos = $filter = ('orderBy')($scope.alunos,'nome', $scope.ordenadoPorNome);
  }
  this.ordernarPorIdade = function(){
    $scope.ordenadoPorIdade = !$scope.ordenadoPorIdade;
    $scope.alunos = $filter = ('orderBy')($scope.alunos,'idade',$scope.ordenadoPorIdade);
  }

});
