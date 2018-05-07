angular
    .module('starter')
    .controller('chartsCtrl', chartsCtrl);

chartsCtrl.$inject = ['$scope', 'datasServices', '$state', '$localStorage'];

function chartsCtrl($scope, datasServices, $state, $localStorage) {
    var vm = this;
    vm.cardss = [];
    vm.colors = ["rgba(255,0,0,0.3)",
        "rgba(0,255,0,0.3)",
        "rgba(0,0,255,0.3)"]
    datasServices.getCards().then((data = []) => {
        if (Array.isArray(data)) {
            data.forEach(element => {
                vm.cardss.push(
                    {
                        title: element.name,
                        id: element.id,
                        labels: ['deposits', 'withdrawals', 'balance'],
                        datas: [element.deposits, element.withdrawals, element.balance]

                    }
                );
            });
        } else {
            if (!data) {
                vm.cardss = null;
            } else {
                vm.cardss.push({
                    title: data.name,
                    id: data.id,
                    labels: ['deposits', 'withdrawals', 'balance'],
                    datas: [data.deposits, data.withdrawals, data.balance]
                })
            }
        }
    }, err => {
        console.log(err);

    });

    vm.details = function (account) {
        $state.go('app.details', { account: account });
    };
    vm.newCard = function () {
        console.log('this is the card function!!')
    }
}
