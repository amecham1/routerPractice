angular.module('router-app')
.directives('starDirective',starDirective)

function starDirective(){


return {
  templateUrl: 'starwars/watchDirective.html',
   
}


}//end of star directive
