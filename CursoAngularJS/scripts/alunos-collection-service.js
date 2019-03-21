/*
  Nome do autor: Ilton Batista da Silva Júnior
  Data de criação do arquivo: 21/03/2019
  Objetivo sucinto do programa: script para adicionar novos alunos e ordenar Por Nome e por idade
  Referencia ao enunciado/origem do exercicio: https://cursos.timtec.com.br/course/desenvolvimento-web-com-angularjs/intro
*/

angular.module('aplicacao').service('AlunosCollectionService', function($filter){
  var ordenadoPorNome = false;
  var ordenadoPorIdade = false;
  var alunos = [{'nome': 'Elian', 'idade': 9},
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

  this.ordenarPorNome =  function(){
    ordenadoPorNome = !ordenadoPorNome;
    alunos = $filter = ('orderBy')(alunos,'nome', ordenadoPorNome);
  }
  this.ordernarPorIdade = function(){
    ordenadoPorIdade = !ordenadoPorIdade;
    alunos = $filter = ('orderBy')(alunos,'idade',ordenadoPorIdade);
  }

});
