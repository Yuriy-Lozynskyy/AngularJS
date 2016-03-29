angular.module("simpleChatApplication").factory('chatService',chatService);
function chatService($http){
    var messages=[];
    var service={
      getMessages: getMessages,
      sendMessage:sendMessage
    };

  function getMessages(){
    $http({
        method : "GET",
        url : "http://simple-chat-example.herokuapp.com/v1/messages"
    }).then(function mySucces(response) {
          for (var i=0;i<=response.data.messages.length;i++){
            messages.push(response.data.messages[i]);
      };
    }, function myError(response) {
        messages = response.statusText.messages;
    });
  };

  function sendMessage(message){
    messages.push(message);
  };
     return service;
};
