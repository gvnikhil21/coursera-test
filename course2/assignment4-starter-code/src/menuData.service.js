(function (){

angular.module('menuData')
.service('MenuDataService',MenuDataService);

MenuDataService.$inject=['$http'];
function MenuDataService($http){
var service=this;

service.getAllCategories=function (){
  var response= $http({
    url:('https://davids-restaurant.herokuapp.com/categories.json')
  });
  return response;
 };

 service.getItemsForCategory=function (categoryShortName){
   var url="https://davids-restaurant.herokuapp.com/menu_items.json?category="+categoryShortName;
   var response= $http({
     url:(url)
   });
   return response;
 };

}


})();
