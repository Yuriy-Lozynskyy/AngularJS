(function() {
  angular.module("simpleChatApplication").controller("ChatController",ChatController);
function ChatController($scope){
     $scope.messages=[];
     $scope.text='';
     $scope.addNewMessage = addNewMessage;

        function addNewMessage(){

          $scope.messages.push($scope.text);
     };
   };
})();
