(function (){

angular.module('public')
.controller('InfoController',InfoController);

InfoController.$inject=['MenuService','ApiPath'];
function InfoController(MenuService,ApiPath){
  var info=this;

  info.user=MenuService.getUserInfo();
  info.basePath=ApiPath;
}

})();
