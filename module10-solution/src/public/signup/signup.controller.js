(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['UserService'];
function SignUpController(UserService) {
    var signup = this;
    signup.faveDishNotValid = false;
    signup.faveDishName;
    signup.faveDishDescription;
    signup.faveDishCategory;
    signup.faveDishMenuNumber;
    signup.completed = false;

    signup.submit = function () {
        signup.completed = true;
        console.log(signup.user);
        signup.user.faveDishName = signup.faveDishName
        signup.user.faveDishDescription = signup.faveDishDescription;
        signup.user.faveDishCategory = signup.faveDishCategory;
        signup.user.faveDishMenuNumber = signup.faveDishMenuNumber;
        UserService.addUser(signup.user);
        console.log(UserService);
    };
}

})();
