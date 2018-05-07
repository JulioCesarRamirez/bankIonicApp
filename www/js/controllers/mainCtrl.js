angular
    .module('starter')
    .controller('mainCtrl', mainCtrl);

mainCtrl.$inject = ['$scope', 'LoginService', '$state', '$localStorage', '$timeout', '$ionicLoading'];

function mainCtrl($scope, LoginService, $state, $localStorage, $timeout, $ionicLoading) {
    var vm = this;
    init();
    function init() {

        if ($localStorage.user) {
            vm.user = true;
        } else {
            vm.user = false;
        }
    }
    vm.logOut = function () {
        $ionicLoading.show({ template: 'Loading...' });
        $timeout(function () {
            localStorage.clear();
            $ionicLoading.hide();
            $state.go('home')
        }, 500)
    }
}
