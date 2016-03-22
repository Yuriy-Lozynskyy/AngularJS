angular.module("simpleChatApplication").controller("FirstController",FirstController);
function FirstController($scope){
  function test(){
    for(var i=0;i<10;i++){
      console.log(i);
    }
  }
  test();
  $scope.messages=['first message', 'second message', 'third message', 'fourth message'];
}
