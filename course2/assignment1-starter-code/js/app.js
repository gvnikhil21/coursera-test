(function (){
'use strict'

angular.module('MyApp',[])
.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject=['$scope'];
function LunchCheckController($scope){
$scope.entry="";

$scope.checkIfTooMuch=function (){
var length=getlength($scope.entry);
if(length===0){
 $scope.message="Please enter the data first";
 $scope.msgObj={
   "color":"red"
 };
 $scope.boxObj={
   "border-color":"red"
 };
}
else if(length!=0 && length<=3){
  $scope.message="Enjoy!";
  $scope.msgObj={
    "color":"green"
  };
  $scope.boxObj={
    "border-color":"green"
  };
}
  else{
    $scope.message="Too Much!";
    $scope.msgObj={
      "color":"green"
    };
    $scope.boxObj={
      "border-color":"green"
    };
  }


};

function getlength(string){
  if(string==="")
  return 0;
  var str=string.replace(/ /g,'').split(',');
  var len=str.length;
  for(var i=0;i<str.length;i++){
    if(str[i].length===0)
    len--;
  }
  return len;
}

};
})();
