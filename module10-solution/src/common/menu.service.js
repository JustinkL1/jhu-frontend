(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  // service.user = [];
  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getFaveMenuItem = function (shortName) {
    return $http.get(ApiPath + '/menu_items/' + shortName + ".json").then(function (response) {
      console.log(response.data);
      return response.data;
    });
  };

  // service.addUser = function(signedUpUser){
  //   service.user.push(signedUpUser);
  // }

}



})();
