(function (){

angular.module('menuData')
.controller('MenuItemsController',MenuItemsController);

MenuItemsController.$inject=['MenuDataService','menuItems'];
function MenuItemsController(MenuDataService,menuItems){
var menuItemsController=this;

var menuItemsArray=menuItems.data['menu_items'];
menuItemsController.items=menuItemsArray;
}

})();
