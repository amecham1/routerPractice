angular.module('router-app')
.controller('chuckCtrl',chuckCtrl)


function chuckCtrl($scope,chuckService){

chuckService.getChuckData()
.then(function(chuck){
  console.log(chuck);
  $scope.jokes = chuck;
})

}//end of chuck controller
