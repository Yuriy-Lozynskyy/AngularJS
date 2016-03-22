angular.module("simpleChatApplication").factory('ChatService',ChatService);
function ChatService($scope){
  $scope.messages=['first','second','third'];
};
