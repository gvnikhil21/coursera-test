(function (){
'use strict'

angular.module('ShoppingListCheckOff',[])
.controller('NewItemsToList',NewItemsToList)
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService)

NewItemsToList.$inject=['ShoppingListCheckOffService'];
function NewItemsToList(ShoppingListCheckOffService){
  var Item=this;
  Item.newItemName="";
  Item.newItemQuantity="";

  Item.addItemToBuyList=function(){
    ShoppingListCheckOffService.addToBuyItem(Item.newItemName,Item.newItemQuantity);
    Item.newItemName="";
    Item.newItemQuantity="";
  }
}

ToBuyController.$inject=['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var Buy=this;

  Buy.items=ShoppingListCheckOffService.getToBuyItems();

  Buy.addToBoughtAndRemoveToBuy=function (itemIndex){
    ShoppingListCheckOffService.addToBoughtItem(itemIndex);
  }
}

AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var Bought=this;

  Bought.items=ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService(){
  var service=this;
  var toBuyItems=[
    {
      name:"soft-drinks",
      quantity:"3 bottles of"
    },
    {
      name:"Cookies",
      quantity:"4 packets of"
    },
    {
      name:"Chocolates",
      quantity:"3 dairy-milk"
    },
    {
      name:"Chips",
      quantity:"3 packets of"
    },
    {
      name:"Milk",
      quantity:"2 boottles of"
    }
  ];

  var toBoughtItems=[];

  service.addToBuyItem=function (itemName,itemQuantity){
    if(itemName===""||itemQuantity==="")
    return;

    var item={
      name:itemName,
      quantity:itemQuantity
    };
    toBuyItems.push(item);
  }
  service.addToBoughtItem=function (itemIndex){
    var item={
      name:toBuyItems[itemIndex].name,
      quantity:toBuyItems[itemIndex].quantity
    };
    toBoughtItems.push(item);
    service.removeToBuyItem(itemIndex);
  }

  service.removeToBuyItem=function (itemIndex){
    toBuyItems.splice(itemIndex,1);
  }

  service.getToBuyItems=function (){
    return toBuyItems;
  }
  service.getBoughtItems=function (){
    return toBoughtItems;
  }


}


})();
