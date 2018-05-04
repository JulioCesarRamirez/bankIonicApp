angular.module('starter').controller('homeCtrl', ['$scope', 'datasServices', '$state', '$ionicPopup', homeCtrl])


function homeCtrl($scope, datasServices, $state, $ionicPopup) {
   
    var vm = this;
    
    vm.login = function () {
        $state.go('login');
    }
}