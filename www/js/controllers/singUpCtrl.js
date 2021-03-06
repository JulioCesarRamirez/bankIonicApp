angular
    .module('starter')
    .controller('singUpCtrl', singUpCtrl);

singUpCtrl.$inject = ['LoginService', '$ionicPopup', '$state'];

function singUpCtrl(LoginService, $ionicPopup, $state) {

    var vm = this;

    vm.data = {};
    vm.singUp = function () {
        if (vm.form.$valid) {
            LoginService.singUp(vm.data)
                .success(function (data) {
                    $state.go('app.charts')
                }).error(function (data) {
                    var alertPopup = $ionicPopup.alert({
                        title: 'Sing Up failed!',
                        template: 'Please check your credentials!'
                    });
                });
        }
    }
}