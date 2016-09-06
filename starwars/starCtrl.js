angular.module('router-app')
.controller('starCtrl',starCtrl)


function starCtrl($scope,starService){

var starData= [];

starService.getStarShips()
.then(function(ship){
  for(var i = 0; i < ship.length;i++){
    var ships = {
      Name:ship[i].name,
      Model:ship[i].model,
      Manufacturer: ship[i].manufacturer,
      Class: ship[i].starship_class,
      Hyperdrive: ship[i].hyperdrive_rating
    }
    starData.push(ships);
  }

})

starService.getStarShips()
.then(function(craft){
  for(var i = 0; i < craft.length;i++){
    var crafts = {
      Name:craft[i].name,
      Model:craft[i].model,
      Manufacturer: craft[i].manufacturer,
      Class: craft[i].starship_class,
      Hyperdrive: craft[i].hyperdrive_rating
    }
    starData.push(crafts);
  }

})

starService.getStarShips()
.then(function(star){
  for(var i = 0; i < star.length;i++){
    var stars = {
      Name:star[i].name,
      Model:star[i].model,
      Manufacturer: star[i].manufacturer,
      Class: star[i].starship_class,
      Hyperdrive: star[i].hyperdrive_rating
    }
    starData.push(stars);
  }

})

starService.getStarShips()
.then(function(boat){
  for(var i = 0; i < boat.length;i++){
    var boats = {
      Name:boat[i].name,
      Model:boat[i].model,
      Manufacturer: boat[i].manufacturer,
      Class: boat[i].starship_class,
      Hyperdrive: boat[i].hyperdrive_rating
    }
    starData.push(boats);
  }

})

$scope.ships=starData;


// Beginning of Person Info

var personData = [];

starService.getPeople()
.then(function(person){
  for(var i = 0; i < person.length;i++){
    var persons = {
      Name:person[i].name,
      Mass:person[i].mass,
      Height: person[i].height,
      Born: person[i].birth_year
    }
    personData.push(persons);
  }

})

starService.getPeople()
.then(function(alien){
  for(var i = 0; i < alien.length;i++){
    var aliens = {
      Name:alien[i].name,
      Mass:alien[i].mass,
      Height: alien[i].height,
      Born: alien[i].birth_year
    }
    personData.push(aliens);
  }

})

starService.getPeople()
.then(function(character){
  for(var i = 0; i < character.length;i++){
    var characters = {
      Name:character[i].name,
      Mass:character[i].mass,
      Height: character[i].height,
      Born: character[i].birth_year
    }
    personData.push(characters);
  }

})
// console.log(personData);
$scope.persons=personData;

// Beginning of planets

var planetData = [];

starService.getPlanets()
.then(function(planets){
  for(var i = 0; i < planets.length;i++){
    var planet = {
      Name:planets[i].name,
      Terrain:planets[i].terrain,
      Climate: planets[i].climate,
      Diameter: planets[i].diameter
    }
    planetData.push(planet);
  }

})

starService.getPlanets()
.then(function(world){
  for(var i = 0; i < world.length;i++){
    var globe = {
      Name:world[i].name,
      Terrain:world[i].terrain,
      Climate: world[i].climate,
      Diameter: world[i].diameter
    }
    planetData.push(globe);
  }

})

starService.getPlanets()
.then(function(worlds){
  for(var i = 0; i < worlds.length;i++){
    var globes = {
      Name:worlds[i].name,
      Terrain:worlds[i].terrain,
      Climate: worlds[i].climate,
      Diameter: worlds[i].diameter
    }
    planetData.push(globes);
  }

})

$scope.earths=planetData;






}; //end of Star Controller
