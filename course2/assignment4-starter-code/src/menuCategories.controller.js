(function (){

angular.module('menuData')
.controller('MenuCategoriesController',MenuCategoriesController);

MenuCategoriesController.$inject=['MenuDataService','items'];
function MenuCategoriesController(MenuDataService,items){
  var menuCategoriesController=this;

  var itemsArray=items.data;
      menuCategoriesController.items=itemsArray;
}

})();
