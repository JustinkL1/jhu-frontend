(function () {
  "use strict";

  angular
    .module("NarrowItDownApp", [])
    .controller("NarrowItDownController", NarrowItDownController)
    .service("MenuSearchService", MenuSearchService)
    .constant("ApiBasePath", "https://davids-restaurant.herokuapp.com")
    .directive("foundItems", FoundItemsDirective);

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: "menuList.html",
      scope: {
        narrowItDown: "<",
        found: "<",
        onRemove: "&",
      },
      controller: FoundItemsDirectiveController,
      controllerAs: "list",
      bindToController: true,
    };
    return ddo;
  }

  function FoundItemsDirectiveController() {
    var list = this;
    list.isSearchTermCorrect = function () {
        if(list.narrowItDown.errorMessage){
            list.found = [];
        }
        return list.narrowItDown.errorMessage;
    };
  }

  NarrowItDownController.$inject = ["MenuSearchService"];
  function NarrowItDownController(MenuSearchService) {
    var narrowItDown = this;
    narrowItDown.searchTerm = "";
    narrowItDown.found = [];
    narrowItDown.errorMessage = false;
    narrowItDown.getFoundItems = function () {
        if(narrowItDown.searchTerm.length !== 0){
            var promise = MenuSearchService.getMatchedMenuItems(narrowItDown.searchTerm);
        
            promise.then(function (response) {
                narrowItDown.found = response;
                if(narrowItDown.found.length === 0){
                    narrowItDown.errorMessage = true;
                } else {
                    narrowItDown.errorMessage = false;
                }
            })
        } else {
            narrowItDown.errorMessage = true;
        }
        
    };

    narrowItDown.removeItem = function (itemIndex) {
      MenuSearchService.removeItem(itemIndex);
      if(narrowItDown.found.length === 0) {
        narrowItDown.errorMessage = true;
      } else {
        narrowItDown.errorMessage = false;
      }
    };

  }

  MenuSearchService.$inject = ["$http", "ApiBasePath"];
  function MenuSearchService($http, ApiBasePath) {
    var service = this;

    var found = [];
    service.getMatchedMenuItems = function (searchTerm) {
      return $http({
        method: "GET",
        url: ApiBasePath + "/menu_items.json",
      }).then(
        function success(result) {
          // process result and only keep items that match
          var menu_items = result.data.menu_items;
          var foundItems = [];

          for (var i = 0; i < menu_items.length; i++) {
            if (
              menu_items[i].description
                .toLowerCase()
                .indexOf(searchTerm.toLowerCase()) !== -1
            ) {
              foundItems.push(menu_items[i]);
            }
          }

          // return processed items
          found = foundItems;
          return foundItems;
        },
        function error(result) {
          console.log("error getting menu_items");
        }
      );
    };

    service.removeItem = function (itemIndex) {
      found.splice(itemIndex, 1);
    };
  }
})();
