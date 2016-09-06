angular.module('router-app')
.service('starService',starService)


function starService($http,$q){


this.getStarShips = function(){
  var deffered = $q.defer();
  $http({
    method:"GET",
    url:"http://swapi.co/api/starships/?page=1"
  }).then(function(data){
    deffered.resolve(data.data.results);
  })
  return deffered.promise
}

this.getStarShips = function(){
  var deffered = $q.defer();
  $http({
    method:"GET",
    url:"http://swapi.co/api/starships/?page=2"
  }).then(function(data){
    deffered.resolve(data.data.results);
  })
  return deffered.promise
}

this.getStarShips = function(){
  var deffered = $q.defer();
  $http({
    method:"GET",
    url:"http://swapi.co/api/starships/?page=3"
  }).then(function(data){
    deffered.resolve(data.data.results);
  })
  return deffered.promise
}

this.getStarShips = function(){
  var deffered = $q.defer();
  $http({
    method:"GET",
    url:"http://swapi.co/api/starships/?page=4"
  }).then(function(data){
    deffered.resolve(data.data.results);
  })
  return deffered.promise
}
// Beginning of Person Get Requests

this.getPeople = function(){
  var deffered = $q.defer();
  $http({
    method:"GET",
    url:"http://swapi.co/api/people/?page=1"
  }).then(function(data){
    deffered.resolve(data.data.results);
  })
  return deffered.promise
}

this.getPeople = function(){
  var deffered = $q.defer();
  $http({
    method:"GET",
    url:"http://swapi.co/api/people/?page=2"
  }).then(function(data){
    deffered.resolve(data.data.results);
  })
  return deffered.promise
}

this.getPeople = function(){
  var deffered = $q.defer();
  $http({
    method:"GET",
    url:"http://swapi.co/api/people/?page=3"
  }).then(function(data){
    // console.log(data.data.results);
    deffered.resolve(data.data.results);
  })
  return deffered.promise
}

// Beginning of the planets

this.getPlanets = function(){
  var deffered = $q.defer();
  $http({
    method:"GET",
    url:"http://swapi.co/api/planets/?page=1"
  }).then(function(data){
    deffered.resolve(data.data.results);
  })
  return deffered.promise
}

this.getPlanets = function(){
  var deffered = $q.defer();
  $http({
    method:"GET",
    url:"http://swapi.co/api/planets/?page=2"
  }).then(function(data){
    deffered.resolve(data.data.results);
  })
  return deffered.promise
}

this.getPlanets = function(){
  var deffered = $q.defer();
  $http({
    method:"GET",
    url:"http://swapi.co/api/planets/?page=2"
  }).then(function(data){
    deffered.resolve(data.data.results);
  })
  return deffered.promise
}








}//end of starService
