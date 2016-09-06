angular.module('router-app',['ui.router'])
.config(function($stateProvider,$urlRouterProvider){


  $stateProvider
	.state('home', {
    url: "/home",
		templateUrl: 'Home/homeView.html',
		controller: 'homeCtrl'
	})
  .state('Star Wars',{
    url: "/StarWars",
    templateUrl:'starwars/starView.html',
    controller: 'starCtrl'
  })
  .state('Chuck Norris',{
    url: "/ChuckNorris",
    templateUrl:'Chuck/chuckView.html',
    controller:'chuckCtrl'
  })
  .state('Clash of Clans',{
    url: "/ClashofClans",
    templateUrl: "Clash/clashView.html",
    controller:"clashCtrl"
  });


$urlRouterProvider
.otherwise('/home');

});//end of app
