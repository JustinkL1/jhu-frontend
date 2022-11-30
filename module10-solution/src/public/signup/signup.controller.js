(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['UserService', 'MenuService'];
function SignUpController(UserService, MenuService) {
    var signup = this;

    signup.submit = function () {
        signup.completed = true;
        console.log(signup.user);
        UserService.addUser(signup.user);
        console.log(UserService);
    };
}

})();
