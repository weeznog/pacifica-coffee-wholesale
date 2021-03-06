angular.module('pacificaApp',
  [
  'ngAnimate',
  'ui.router', 
  'appRoutes',  
  'NavCtrl',
  'ngTouch',  
  'HomeCtrl', 
  'AdminCtrl',
  'CoffeeCtrl'
  ])

// Capitialize =========================

.filter('capitalize', function() {
    return function(input, all) {
      var reg = (all) ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
      return (!!input) ? input.replace(reg, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
    };
  })
// ========================================

// angular reverse row...
.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
})


