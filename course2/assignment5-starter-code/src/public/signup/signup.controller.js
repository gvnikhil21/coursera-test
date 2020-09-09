(function (){

angular.module('public')
.controller('RegistrationController',RegistrationController);

RegistrationController.$inject=['MenuService'];
function RegistrationController(MenuService){
  var reg=this;

  reg.checkValid=function (){
    if(reg.user.favMenu){
      var promise=MenuService.checkValid(reg.user.favMenu);
      promise.then(function (response){
        reg.user.menuData=response.data;
        MenuService.storeUserInfo(reg.user);
          reg.complete=true;;
      })
      .catch(function (response){
        reg.user.menuData=null;
      });
    }
    else
    reg.user.menuData=null;
  };
}




})();
