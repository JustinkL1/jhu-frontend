(function () {
"use strict";

angular.module('public')
.directive('signUpDirective', SignUpDirective);

SignUpDirective.$inject = ['MenuService'];
function SignUpDirective(MenuService) {
    return function (scope, element, attrs, controller) {
        
        // console.log(MenuService);
        // console.log("----");
        scope.$watch('signup.user.faveDish', function(value){
            // console.log(value.length);
            if(value != undefined && value != null && value.length > 1){
                // console.log("here");
                var category_short_name = value.replace(/[0-9]/g, '');
                var menu_number = value.replace(/\D/g,'');
                // console.log("short" + category_short_name);
                // console.log("number '" + parseInt(menu_number-1) + "'");
                
                MenuService.getFaveMenuItem(category_short_name, (parseInt(menu_number-1))).then(function(response){
                    // console.log('scope is')
                    // console.log(scope);
                    // console.log("----");
                    // console.log('element is')
                    // console.log(element);
                    // console.log("----");
                    // console.log('attr is')
                    // console.log(attrs);
                    // console.log("----");
                    // console.log('cont is')
                    // console.log(controller);
                    // console.log(response.category.name);
                    console.log(MenuService.getMenuItems(category_short_name));
                    if(response === null){
                        scope.signup.faveDishNotValid = true;
                        scope.signup.faveDishName = "";
                        // console.log(true);
                    } else {
                        console.log(response);
                        scope.signup.faveDishNotValid = false;
                        scope.signup.faveDishName = response.name;
                        scope.signup.faveDishDescription = response.description;
                        scope.signup.faveDishCategory = category_short_name;
                        scope.signup.faveDishMenuNumber = menu_number;
                        // console.log(false);
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
