(function (){
'use strict';

angular.module('MenuApp')
.controller('CategoryComponentController', CategoryComponentController);

CategoryComponentController.$inject = ['categoryList'];

function CategoryComponentController(categoryList){
    var categories = this;
    categories.categoryList = categoryList.data;
}

})();