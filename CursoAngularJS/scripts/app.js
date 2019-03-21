/*
  Nome do autor: Ilton Batista da Silva Júnior
  Data de criação do arquivo: 21/03/2019
  Objetivo sucinto do programa: incia a aplicação
  Referencia ao enunciado/origem do exercicio: https://cursos.timtec.com.br/course/desenvolvimento-web-com-angularjs/intro
*/
var app = angular.module('aplicacao', ['ngResource', 'ui.router'])
  .config(function($stateProvider){
    $stateProvider
      .state('aplicacao_inicial',{
        name: 'aplicacao',
        url: '/inicial.html',
        templateUrl: 'views/inicial.html'
    }).state('aplicacao_listagem',{
      name:'aplicacao_listagem',
      url: '/listagem.html',
      templateUrl: 'views/listagem-alunos.html'
    }).state('aplicacao_cadastro',{
      name: 'aplicacao_cadastro',
      url: '/cadastro.html',
      templateUrl: 'views/cadastro-alunos.html'
    }).state('aplicacao_previsao',{
      name: 'aplicacao_previsao',
      url: '/previsao.html',
      templateUrl: 'views/previsao-alunos.html'
    })

  });

  app.run(function($rootScope, $state) {
    $state.go("aplicacao_inicial");
  });
