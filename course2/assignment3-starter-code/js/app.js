(function(){
'use strict'

angular.module('MyApp',[])
.controller('NarrowItDownController',NarrowItDownController)
.service('MenuSearchService',MenuSearchService)
.directive('foundItems',FoundItems)


NarrowItDownController.$inject=['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
var ctrl=this;

ctrl.toSearchItem="";

ctrl.show=function (){
  var promise=MenuSearchService.getMatchedMenuItems(ctrl.toSearchItem);

  promise.then(function(response){
    if(response.length>0){
      ctrl.message='';
      ctrl.found=response;
    }
    else{
      ctrl.message='Nothing Found!'
      ctrl.found=[];
    }

  })
  .catch(function (error){
    console.log("Something's is wrong!");
  });
}

ctrl.remove=function (index){
  ctrl.found.splice(index,1);
}


}


MenuSearchService.$inject=['$http'];
function MenuSearchService($http){
  var service=this;

  service.getMatchedMenuItems=function (toSearchItem){
    var response= $http({
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
    });
    return response.then(function (result){
      var foundItems=[];
      var items=result.data.menu_items;
      for(var i=0;i<items.length;i++){
        if(toSearchItem.length>0 && items[i].description.match(toSearchItem)){
          foundItems.push(items[i]);
        }
      }
      return foundItems;
    });
  }

}

function FoundItems(){
  var ddo={
    templateUrl:'loader\\itemsloaderindicator.template.html',
    scope: {
      foundItem:'<',
      onEmpty:'<',
      onRemove:'&'
    }
  };
  return ddo;
}
})();
