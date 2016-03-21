angular.module("simpleChatApplication").config(routerConfig);
function routerConfig($stateProvider){
  $stateProvider
     .state('first', {
       url: '/',
       templateUrl: 'app/components/first/first.html',
       controller: 'FirtsController'
     })
  };
