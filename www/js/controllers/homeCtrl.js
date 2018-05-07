angular
    .module('starter')
    .controller('homeCtrl', homeCtrl)

homeCtrl.$inject = ['$scope', 'datasServices', '$state', '$ionicPopup'];

function homeCtrl($scope, datasServices, $state, $ionicPopup) {

    var vm = this;

    vm.login = function () {
        $state.go('login');
    }
}