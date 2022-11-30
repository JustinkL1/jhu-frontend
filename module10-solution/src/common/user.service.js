(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);

function UserService() {
  var service = this;

  service.user = [];

  service.addUser = function(signedUpUser){
    
    service.user.push(signedUpUser);
  }

}

})();