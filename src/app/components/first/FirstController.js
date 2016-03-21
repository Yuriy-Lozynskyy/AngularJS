angular.module("simpleChatApplication").controller("FirstController",FirstController);
function FirstController($scope){
  $scope.greetings="Hello World";

  function test(){
    for(var i=0;i<10;i++){
      console.log(i);
    }
    console.log($scope.greetings);
  }
  test();
  $scope.messages=['first message', 'second message', 'third message', 'fourth message'];
}
