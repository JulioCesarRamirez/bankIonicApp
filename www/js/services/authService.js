angular.module('starter')
    .service('LoginService', function ($q, $localStorage, $http, jwtHelper, $ionicLoading) {

        const url = 'http://10.230.43.10:3001/'

        function loginUser(name, pw) {
            const deferred = $q.defer();
            const promise = deferred.promise;
            let tokenPayload;
            let body = {
                email: name,
                password: pw
            };
            $ionicLoading.show({ template: 'Loading...'});

            $http.post(url + 'api/auth/user/authenticate', body).then(response => {
                $localStorage.token = response.data.token;
                tokenPayload = jwtHelper.decodeToken(response.data.token);
                $localStorage.user = tokenPayload;
                $ionicLoading.hide();
                deferred.resolve('login success');
            }, err => {
                $ionicLoading.hide();
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

        function singUp(user) {
            const deferred = $q.defer();
            const promise = deferred.promise;
            console.log(user);
            let body = {
                "email": user.username,
                "name": user.userlastname,
                "lastname": user.mail,
                "password": user.password
            }
            $http.post(url + 'api/users', body).then(response => {
                $localStorage.token = response.data.token;
                deferred.resolve('Sing up success');
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
            loginUser: loginUser,
            singUp: singUp
        }
    })