angular.module('aplicacao').service('AlunosCollectionService', function($filter){
  var ordenadoPorIdade = false;
  var ordenadoPorNome = false;
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
