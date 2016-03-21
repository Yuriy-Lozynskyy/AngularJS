angular.module("simpleChatApplication").router(routerConfig);
function routerConfig($stateProvider){
  $stateProvider
     .state('first', {
       url: '/',
       templateUrl: 'app/components/first/first.html',
       controller: 'FirtsController'
     })
  };
