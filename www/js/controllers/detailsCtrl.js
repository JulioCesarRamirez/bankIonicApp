angular
    .module('starter')
    .controller('detailsCtrl', detailsCtrl);

detailsCtrl.$inject = ['$stateParams', '$state']


function detailsCtrl($stateParams, $state) {
    var vm = this;

    if ($stateParams.account) {
        vm.account = $stateParams.account;
    } else {
        $state.go('app.charts')
    }
}