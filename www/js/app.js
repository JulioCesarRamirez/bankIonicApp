
angular.module('starter', ['ionic', 'chart.js', 'ngStorage', 'angular-jwt'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

      .state('app', {
        url: '/app',
        templateUrl: 'templates/menu.html',
        controller: 'mainCtrl'
      })
      .state('home', {
        url: '/home',
        templateUrl: 'templates/principal.html',
        controller: 'homeCtrl'
      })
      .state('app.charts', {
        url: '/charts',
        views: {
          'menuContent': {
            templateUrl: 'templates/charts.html',
            controller: 'chartsCtrl'
          }
        }
      })
      .state('app.details', {
        url: '/details',
        params: {
          account: null
        },
        views: {
          'menuContent': {
            templateUrl: 'templates/details.html',
            controller: 'detailsCtrl'

          }
        }
      })
      .state('app.card', {
        url: '/card',
        views: {
          'menuContent': {
            templateUrl: 'templates/card.html',
            controller: 'cardCtrl'
          }
        }
      })
      .state('singUp', {
        url: '/singUp',
        templateUrl: 'templates/SingUp.html',
        controller: 'singUpCtrl'

      })
      .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'

      });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/home');
  });
