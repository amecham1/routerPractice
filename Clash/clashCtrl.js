angular.module('router-app')
.controller('clashCtrl',clashCtrl)

function clashCtrl($scope,clashService){

clashService.getCards()
.then(function(data){
  var cardArr = [];
  for(var i=0; i < data.length;i++){
    var cardObj = {
      Name: data[i].name,
      Type: data[i].type,
      Description: data[i].description,
      Rarity: data[i].rarity
    }
    cardArr.push(cardObj);
  }

  $scope.cards = cardArr;
})

clashService.getArenas()
.then(function(stadium){
  var arenaArr = [];
  for(var i=0; i < stadium.length;i++){
    var arenaObj = {
      Name: stadium[i].name,
      Trophies: stadium[i].minTrophies,
      VictoryGold: stadium[i].victoryGold
    }
    arenaArr.push(arenaObj);
  }
    console.log(arenaArr);
  $scope.arenas = arenaArr;
})



}// end of controller
