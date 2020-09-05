(function (){

angular.module('menuApp')
.config(RoutesConfig);

RoutesConfig.$inject=['$stateProvider','$urlRouterProvider']
function RoutesConfig($stateProvider,$urlRouterProvider){

  $urlRouterProvider.otherwise('/home');

  $stateProvider
  .state('home',{
    url:'/home',
    templateUrl:'src/templates/home.html'
  })
  .state('categories',{
    url:'/categories',
    templateUrl:'src/templates/menuCategories.html',
    controller:'MenuCategoriesController as menuCategoriesController',
    resolve:{
      items:['MenuDataService',function (MenuDataService){
        return MenuDataService.getAllCategories();
      }]
    }
  })
  .state('items',{
    url:'/items/{itemShortName}',
    templateUrl:'src/templates/menuItems.html',
    controller:'MenuItemsController as menuItemsController',
    resolve:{
      menuItems:['$stateParams','MenuDataService',function ($stateParams,MenuDataService){
        return MenuDataService.getItemsForCategory($stateParams.itemShortName);
      }]
    }
  });
}

})();
