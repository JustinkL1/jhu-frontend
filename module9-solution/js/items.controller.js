(function (){
'use strict';

angular.module('MenuApp')
.controller('ItemComponentController', ItemComponentController);

ItemComponentController.$inject = ['itemList'];

function ItemComponentController(itemList){
    var items = this;
    console.log(itemList);
    items.itemList = itemList.data.menu_items;
    items.shortName = items.itemList[0].short_name.replace(/[0-9]/g,'');
}

})();