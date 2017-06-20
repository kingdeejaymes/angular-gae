angular.module( 'ngBoilerplate', [
  'templates-app',
  'templates-common',
  'appConfiguration',
  'ngBoilerplate.home',
  'ngBoilerplate.about',
  'ngBoilerplate.giftcard-request',
  'ngBoilerplate.login',
  'ngBoilerplate.points',
  'ngBoilerplate.rebounds',
  'ngBoilerplate.assists',
  'LoginDataModel',
  'ui.router',
  'angularMoment'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/giftcard-request' );
})

.factory('tokenInjector', ['LoginDataService', function(LoginDataService) {
    var tokenInjector = {
        request: function(config) {
            config.headers['google-id-token'] = LoginDataService.current_user.id_token;
            config.headers['Content-Type'] = 'application/json';
            return config;
        }
    };
    return tokenInjector;
}])
.config(function AuthOverride ($httpProvider, $stateProvider ) {

    $httpProvider.interceptors.push('tokenInjector');
})

.run( function run ( $rootScope, $state, $location, LoginDataService, CONSTANTS ) {
  $rootScope.$on('$viewContentLoading', function (event, viewConfig) {


    if($location.url() != '/login') {
      var is_loggedin = LoginDataService.validate();
      if(!is_loggedin)  {
        if(!CONSTANTS.DISABLE_LOG_IN) {
          $state.transitionTo('login');
        }
      }
    }
  });
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | Irvine Company' ;
    }
  });
})

;
