(function() {
angular.module("simpleChatApplication").config(routerConfig);
function routerConfig($stateProvider){
  $stateProvider
     .state('chat', {
       url: '/',
       templateUrl: './components/Chat/Chat.html',
       controller: 'ChatController'
     })
     .state('about', {
       url: '/about',
       templateUrl: './components/About/About.html',
       controller: 'AboutController'
     })
  };
})();
