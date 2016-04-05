///**
// * Created by dell on 1/4/16.
// */
//var module = angular.module('app', []);
//
//module.service('ContactService', function () {
//
//    var uid = 0;
//
//
//    var contacts = [];
//        /*[{
//        id: 0,
//        'name': 'Mohit',
//        'username':'mahi',
//        'role':'Trainee',
//        'email': 'firstname.lastname@company.com'
//
//    },
//        {
//            id: 1,
//            'name': 'Meenal',
//            'username':'meena',
//            'role':'Trainee',
//            'email': 'firstname.lastname@company.com'
//
//        },
//
//        {
//            id: 2,
//            'name': 'Sachin',
//            'username': 'sach',
//            'role': 'Tarinee',
//            'email': 'firstname.lastname@company.com'
//        },
//
//        {
//            id: 3,
//            'name': 'Abhishek',
//            'username':'abhi',
//            'role':'CEO',
//            'email': 'firstname.lastname@company.com'
//
//        }
//
//
//
//    ];*/
//
//
//    this.save = function (contact) {
//
//        if (contact.id == null) {
//
//            contact.id = uid++;
//            contacts.push(contact);
//            console.log(contacts);
//        } else {
//
//            for (i in contacts) {
//                if (contacts[i].id == contact.id) {
//                    contacts[i] = contact;
//                }
//            }
//        }
//
//    }
//
//
//    this.get = function (id) {
//        for (i in contacts) {
//            if (contacts[i].id == id) {
//                return contacts[i];
//            }
//        }
//
//    }
//
//
//    this.delete = function (id) {
//        for (i in contacts) {
//            if (contacts[i].id == id) {
//                contacts.splice(i, 1);
//            }
//        }
//    }
//
//
//    this.list = function () {
//        return contacts;
//    }
//});
//
//
///*--------Main Controller-----------*/
//
//module.controller('ContactController', function ($scope, ContactService) {
//
//    $scope.contacts = ContactService.list();
//    $scope.saveContact = function () {
//        ContactService.save($scope.newcontact);
//        $scope.newcontact = {};
//    }
//
//
//    $scope.delete= function (id) {
//
//        ContactService.delete(id);
////        if ($scope.newcontact.id == id) $scope.newcontact = {};
//    }
//
//
//    $scope.edit = function (id) {
//        $scope.newcontact = angular.copy(ContactService.get(id));
//    }
//
//
//})
//
///*--------End of Controller-----------*/
//module.directive('myModal', function(){
//    return {
//
//                link: function(scope, element, attrs) {
//                    scope.Display = function() {
//                        scope.saveContact(scope.newcontact);
//
//                }
//    }
//}
//});
//
//module.directive('myTable',function(){
//   return{
//       link:function(scope,element,attrs){
//                scope.deleteUser=function(id){
//                    console.log(id);
//                    scope.delete(id);
//                }
//
//       }
//   }
//})
//
//

(function(angular){

    angular.module("Users",[])
        .service("UserService",[function(){
            var users=[{
                id:1,
                name:"Pratik",
                username:"pratik@mahindra.com",
                role:"Administrator",
                email:"pratik@mahindra.com"
            }];
            return {
                getUsers : function(id){

                    if(id){

                    }
                    return users;
                },
                saveUser : function(user){
                    user.id = users.length + 1;
                    users.push(user);
                    return users;
                }


            }

        }])
        .controller("UsersController",["$scope" ,"UserService", function($scope,UserService){

            $scope.usersList = UserService.getUsers();

            $scope.saveUser = function(user){
                $scope.usersList = UserService.saveUser(user);
            }


        }])
        .directive("usersTable",["$timeout",function($timeout){

            return {
                templateUrl : "users-table.html",
                link : function(){

                }
            }
        }])
        .directive("usersForm",["$timeout",function($timeout){

            return {
                templateUrl : "users-form.html",
                link : function(scope,ele,attrs){


                    scope.saveClicked = function(){
                        scope.saveUser(scope.User);
                    }

                }
            }
        }]);

})(window.angular);


