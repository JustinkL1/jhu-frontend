(function () {
"use strict";

angular.module('public')
.directive('signUpDirective', SignUpDirective);

SignUpDirective.$inject = ['MenuService'];
function SignUpDirective(MenuService) {
    return function (scope, element, attrs, controller) {
        console.log(scope);
        console.log("----");
        console.log(element);
        console.log("----");
        console.log(attrs);
        console.log("----");
        console.log(controller);
        console.log("----");
        console.log(MenuService);
        console.log("----");
        scope.$watch('signup.user.faveDish', function(value){
            MenuService.getFaveMenuItem(value).then(function(response){
                if(response === value){
                    console.log(true);
                } else {
                    console.log(false);
                }
            })
            console.log("val " +  value);
        });
    };
}

// function SignUpDirectiveLink(scope, element, attrs, controller, MenuService){
//     console.log(scope);
//     console.log("----");
//     console.log(element);
//     console.log("----");
//     console.log(attrs);
//     console.log("----");
//     console.log(controller);
//     console.log("----");
//     console.log(MenuService);
//     console.log("----");
// }

})();
