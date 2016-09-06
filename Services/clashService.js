angular.module('router-app')
.service('clashService',clashService)


function clashService($q,$http){


this.getCards = function(){
  var deferred= $q.defer();
  $http({
    method:"GET",
    url:"http://www.clashapi.xyz/api/cards"
  }).then(function(cards){
    deferred.resolve(cards.data);
  })
  return deferred.promise;
}

this.getArenas = function(){
  var deferred= $q.defer();
  $http({
    method:"GET",
    url:"http://www.clashapi.xyz/api/arenas"
  }).then(function(arena){
    console.log(arena.data);
    deferred.resolve(arena.data);
  })
  return deferred.promise;
}



}//end of clash service
