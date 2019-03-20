angular.module('aplicacao').controller('PrimeiroController', function($scope, $filter, AlunosCollectionService){
	$scope.nome = 'Ilton Batista';
	var nome = "Aleatorio";

	$scope.iniciado = true;

	$scope.alunos = AlunosCollectionService.getAlunos();

	$scope.alunos = [{'nome': 'Elian', 'idade': 9},
	                 {'nome': 'Ilton', 'idade': 11},
	                 {'nome': 'João', 'idade': 11},
	                 {'nome': 'Francisco', 'idade': 14},
	                 {'nome': 'Sara', 'idade': 10},
	                 {'nome': 'Andressa', 'idade': 12}];
$scope.hoje = new Date();

	$scope.finalizar = function(){
		$scope.iniciado = false;
	};

	$scope.iniciar = function() {
		$scope.iniciado = true;
	};

	$scope.ordenarPorNome =  function(){
		AlunosCollectionService.ordenarPorNome();
		$scope.alunos = AlunosCollectionService.getAlunos();
	}
	$scope.ordernarPorIdade = function(){
		AlunosCollectionService.ordernarPorIdade();
		$scope.alunos = $filter = ('orderBy')($scope.alunos,'idade',$scope.ordenadoPorIdade);
	}

});
