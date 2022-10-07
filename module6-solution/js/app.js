(function (){
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
    $scope.lunchMenu = "";
    $scope.checkIfTooMuch = function () {
        if($scope.lunchMenu.length === 0){
            $scope.isItTooMuch = "Please enter data first";
            $scope.fontColor = "Red";
        } else {
            var menuArray = $scope.lunchMenu.split(",");
            var menuSize = 0;
            for(var i = 0; i < menuArray.length; i++){
                menuArray[i].trim();
                if(menuArray[i].trim().length !== 0){
                    menuSize++;
                }
            }
            if(1 <= menuSize && menuSize <= 3){
                $scope.isItTooMuch = "Enjoy!";
            } else {
                $scope.isItTooMuch = "Too Much!";
            }
            $scope.fontColor = "Green";
        }
    }
}

})();