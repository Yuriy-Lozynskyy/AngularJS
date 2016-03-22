angular.module("simpleChatApplication").controller("FirstController",FirstController);
function FirstController($scope){
     $scope.messages=[];
     $scope.text='';

        $scope.input=function(){

          $scope.messages.push($scope.text);
     };
   };
