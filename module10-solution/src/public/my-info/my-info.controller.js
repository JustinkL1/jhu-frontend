(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['UserService', 'ApiPath'];
function MyInfoController(UserService, ApiPath) {
    var myinfo = this;
    myinfo.user = UserService.getUser();
    console.log(myinfo.user.length);
    myinfo.basePath = ApiPath;
    if(myinfo.user.length != 0){
        myinfo.firstName = myinfo.user[myinfo.user.length-1].firstName;
        myinfo.lastName = myinfo.user[myinfo.user.length-1].lastName;
        myinfo.email = myinfo.user[myinfo.user.length-1].email;
        myinfo.phone = myinfo.user[myinfo.user.length-1].phone;
        myinfo.faveDish = myinfo.user[myinfo.user.length-1].faveDish;
        myinfo.faveDishName = myinfo.user[myinfo.user.length-1].faveDishName;
        myinfo.faveDishDescription = myinfo.user[myinfo.user.length-1].faveDishDescription;
        myinfo.faveDishCategory = myinfo.user[myinfo.user.length-1].faveDishCategory;
        myinfo.faveDishMenuNumber = myinfo.user[myinfo.user.length-1].faveDishMenuNumber;
    }
    
}

})();
