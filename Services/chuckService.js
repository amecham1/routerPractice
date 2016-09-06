angular.module('router-app')
.service('chuckService',chuckService);


function chuckService($http,$q){

 this.getChuckData=function(){
   var deferred = $q.defer();
   $http({
     method: "GET",
     url: "http://api.icndb.com/jokes/random/40?exclude=[explicit]"
   }).then(function(chuckdata){
     deferred.resolve(chuckdata.data.value);
   })

   return deferred.promise;
 }


}// end of Chuck Service
