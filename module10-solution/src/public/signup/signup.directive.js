(function () {
"use strict";

angular.module('public')
.directive('signUpDirective', SignUpDirective);

SignUpDirective.$inject = ['MenuService'];
function SignUpDirective(MenuService) {
    return function (scope) {
        
        scope.$watch('signup.user.faveDish', function(value){
            if(value != undefined && value != null && value.length > 1){
                var category_short_name = value.replace(/[0-9]/g, '');
                var menu_number = value.replace(/\D/g,'');
                
                MenuService.getFaveMenuItem(category_short_name, (parseInt(menu_number-1))).then(function(response){
                    if(response === null){
                        scope.signup.faveDishNotValid = true;
                        scope.signup.faveDishName = "";
                    } else {
                        scope.signup.faveDishNotValid = false;
                        scope.signup.faveDishName = response.name;
                        scope.signup.faveDishDescription = response.description;
                        scope.signup.faveDishCategory = category_short_name;
                        scope.signup.faveDishMenuNumber = menu_number;
                    }
                })
            } else {
                scope.signup.faveDishNotValid = true;
                scope.signup.faveDishName = "";
            }
            
        });
    };
}

})();
