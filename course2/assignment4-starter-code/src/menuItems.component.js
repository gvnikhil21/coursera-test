(function (){

angular.module('menuData')
.component('itemsList',{
templateUrl:'src/templates/menuListItems.html',
  bindings:{
    items:'<'
  }
})

})();
