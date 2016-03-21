angular.module("simpleChatApplication").config(routerConfig);
function routerConfig($stateProvider){
  $stateProvider
     .state('first', {
       url: '/',
       templateUrl: './components/first/first.html',
       controller: 'FirstController'
     })
     .state('second', {
       url: '/second',
       templateUrl: './components/second/second.html',
       controller: 'SecondController'
     })
  };
