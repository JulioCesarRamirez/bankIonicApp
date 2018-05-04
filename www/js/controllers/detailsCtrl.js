angular.module('starter').controller('detailsCtrl', ['$stateParams', '$state', detailsCtrl])


function detailsCtrl($stateParams, $state) {
    var vm = this;

    if ($stateParams.account) {
        vm.account = $stateParams.account;
    } else {
        $state.go('app.charts')
    }
}