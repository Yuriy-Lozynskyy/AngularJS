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
        messages = response.data;
    }, function myError(response) {
        messages = response.statusText;
    });
  };

    /*function getMessages(){
		return messages;
	};*/

  function sendMessage(message){
    messages.push(message);
  };
     return service;
};
