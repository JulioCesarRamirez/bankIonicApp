angular.module('starter').controller('cardCtrl', ['$scope', 'datasServices', '$state', '$ionicPopup', cardCtrl])


function cardCtrl($scope, datasServices, $state, $ionicPopup) {
   
    var vm = this;
    vm.card = null;
    vm.cards = [];
    vm.show = true; 
    datasServices.cardType().then(data => {
        vm.cards = data.type_cards;
    }, err =>{
        console.log(err);
    });
    vm.requestCard = function(){
        datasServices.requestCard(vm.card).then(data => {
            var alertPopup = $ionicPopup.alert({
                title: 'Request Success',
                template: 'Please wait for the answer!'
            });
            vm.show = false;
        }, err => {
            console.log(err);
            var alertPopup = $ionicPopup.alert({
                title: 'Request faild',
                template: 'Please try again something faild'
            });
            vm.show = true;
        });
    }
}