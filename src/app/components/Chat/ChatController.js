(function() {
  angular.module("simpleChatApplication").controller("ChatController",ChatController);
function ChatController($scope,chatService){
     $scope.messages=chatService.getMessages();
     $scope.text='';
     $scope.addNewMessage = addNewMessage;

        function addNewMessage(){
            chatService.sendMessage($scope.text);
          //$scope.messages.push($scope.text);
     };
        setInterval(function () {
            $scope.messages = chatService.getMessages
        },5000);
   };
})();
