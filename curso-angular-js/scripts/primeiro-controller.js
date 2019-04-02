/*
  Nome do autor: Ilton Batista da Silva Júnior
  Data de criação do arquivo: 21/03/2019
  Objetivo sucinto do programa: codigo html para abrir na web com a estrutura do site
  Referencia ao enunciado/origem do exercicio: https://cursos.timtec.com.br/course/desenvolvimento-web-com-angularjs/intro
*/

angular.module('aplicacao').controller('ListagemAlunosController', function($scope, $filter, AlunosCollectionService){
	$scope.nome = 'Ilton Batista';
	var nome = "Aleatorio";

	$scope.iniciado = true;
	$scope.cadastrar = false;

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

	$scope.exibeCadastro = function(){
		$scope.cadastrar = !$scope.cadastrar;
	}

});
