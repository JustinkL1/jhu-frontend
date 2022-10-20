(function (){
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)
.filter('angularDollar', AngularDollar);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
    var buyList = this;
    buyList.toBuyItems = ShoppingListCheckOffService.getToBuyItems();
    
    buyList.removeToBuyItems = function(itemIndex){
        ShoppingListCheckOffService.addBoughtItem(itemIndex);
        ShoppingListCheckOffService.removeToBuyItems(itemIndex);
    };

    buyList.checkValidQuantity = function (itemIndex, itemQuantity){
        ShoppingListCheckOffService.checkValidQuantity(itemIndex, itemQuantity);
    };

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtList = this;
    boughtList.boughtItems = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
    var service = this;

    var toBuyItems = [
        {
            name: "Cookies",
            quantity: 10,
            pricePerItem: 2,
            isValidQuantity: true
        },
        {
            name: "Milks",
            quantity: 2,
            pricePerItem: 5,
            isValidQuantity: true
        },
        {
            name: "Donuts",
            quantity: 20,
            pricePerItem: 3,
            isValidQuantity: true
        },
        {
            name: "Cakes",
            quantity: 5,
            pricePerItem: 20,
            isValidQuantity: true
        },
        {
            name: "Chocolates",
            quantity: 100,
            pricePerItem: 1,
            isValidQuantity: true
        },
    ];
    var boughtItems = [];

    service.getToBuyItems = function (){
        return toBuyItems;
    };

    service.removeToBuyItems = function(itemIndex) {
        toBuyItems.splice(itemIndex, 1);
    }

    service.addBoughtItem = function(itemIndex){
        boughtItems.push(toBuyItems[itemIndex]);
    };

    service.getBoughtItems = function (){
        return boughtItems;
    };

    service.checkValidQuantity = function(itemIndex, quantity){
        if(!isNaN(quantity)){
            toBuyItems[itemIndex].isValidQuantity = true;
        } else {
            toBuyItems[itemIndex].isValidQuantity = false;
        }
    };
}

function AngularDollar() {
    return function(input) { 
        input = input || "";
        input = "$$" + input;
        return input;
    }
}

})();