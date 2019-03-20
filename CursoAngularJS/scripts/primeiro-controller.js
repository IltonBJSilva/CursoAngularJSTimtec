angular.module('aplicacao').controller('PrimeiroController', function($scope){
	$scope.nome = 'Ilton Batista';
	var nome = "Aleatorio";

	$scope.iniciado = true;

	$scope.alunos = [{'nome': 'Elian', 'idade': 9},
	                 {'nome': 'Ilton', 'idade': 11},
	                 {'nome': 'João', 'idade': 11},
	                 {'nome': 'Francisco', 'idade': 14},
	                 {'nome': 'Sara', 'idade': 10},
	                 {'nome': 'Andressa', 'idade': 12}];	$scope.hoje = new Date();

	$scope.finalizar = function(){
		$scope.iniciado = false;
	};

	$scope.iniciar = function() {
		$scope.iniciado = true;
	};

	$scope.submeter = function() {
		if($scope.form_1.$valid) {
			novo_aluno = {};
			novo_aluno['nome'] = $scope.nome_aluno;
			novo_aluno['idade'] = parseInt($scope.idade_aluno);
			$scope.alunos.push(novo_aluno);
		} else {
			alert("Preencha o formulário corretamente");
		}
	};

});
