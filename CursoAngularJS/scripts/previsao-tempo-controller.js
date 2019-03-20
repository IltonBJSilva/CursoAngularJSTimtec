angular.module('aplicacao').controller('PrevisaoTempoController', function($scope, $resource){
  var WeatherChannel = $resource('https://api.openweathermap.org/data/2.5/weather?q=Brazil&APPID=cb736063c590f2abe550a94e94645939');

  var getWeather = function(){
    WeatherChannel.get().$promise.then(function(response){
      $scope.tempo = response;
    },function(promise){
      alert("Erro ao requesitar Recurso!");
    })

  }
  getWeather();
});
