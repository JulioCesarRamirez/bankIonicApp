angular
    .module('starter')
    .controller('loginCtrl', loginCtrl);

loginCtrl.$inject = ['$scope', 'LoginService', '$ionicPopup', '$state'];

function loginCtrl($scope, LoginService, $ionicPopup, $state) {
    var vm = this;

    init();
    vm.login = function () {
        if (vm.form.$valid) {
            LoginService.loginUser(vm.data.username, vm.data.password)
                .success(function (data) {
                    $state.go('app.charts')
                }).error(function (data) {
                    var alertPopup = $ionicPopup.alert({
                        title: 'Login failed!',
                        template: 'Please try again'
                    });
                });
        }
    }
    function init() {
        vm.data = {};
    }
}
