angular
    .module('starter')
    .service('datasServices', dataServices);

function dataServices($q, $http, $localStorage) {
    function getCards() {

        const deferred = $q.defer();
        const promise = deferred.promise;
        const url = 'http://10.230.43.10:3001/'

        let headers = {
            'Content-Type': 'application/json',
            'x-access-token': $localStorage.token
        };

        $http.get(url + 'api/accounts', { headers: headers }).then(response => {

            deferred.resolve(response.data.response);
        }, err => {
            if (err.data) {
                const data = null;
                deferred.resolve(data);
            } else {
                deferred.reject(err);
            }
        });

        promise.success = function (fn) {
            promise.then(fn);
            return promise;
        }
        promise.error = function (fn) {
            promise.then(null, fn);
            return promise;
        }
        return promise;
    }
    function cardType() {
        const deferred = $q.defer();
        const promise = deferred.promise;
        const url = 'http://10.230.43.10:3001/'

        let headers = {
            'Content-Type': 'application/json',
        }
        $http.get(url + 'api/catalogs/cards', { headers: headers }).then(response => {
            deferred.resolve(response.data.response);
        }, err => {
            console.log(err);
            deferred.reject(err);
        });

        promise.success = function (fn) {
            promise.then(fn);
            return promise;
        }
        promise.error = function (fn) {
            promise.then(null, fn);
            return promise;
        }
        return promise;
    }
    function requestCard(card) {
        const deferred = $q.defer();
        const promise = deferred.promise;
        const url = 'http://10.230.43.10:3001/'

        let headers = {
            'Content-Type': 'application/json',
            'x-access-token': $localStorage.token
        }
        let body = {
            "userId": $localStorage.user.id,
            "type": card.type,
            "name": card.name
        }
        $http.post(`${url}api/accounts`, body, { headers }).then(response => {
            console.log(response.data);
            deferred.resolve(response.data);
        }, err => {
            console.log(err);
            deferred.reject(err);
        });

        promise.success = function (fn) {
            promise.then(fn);
            return promise;
        }
        promise.error = function (fn) {
            promise.then(null, fn);
            return promise;
        }
        return promise;
    }
    return {
        getCards,
        cardType,
        requestCard
    }
}