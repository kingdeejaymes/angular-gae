angular.module( 'ngBoilerplate.login', [
  'ui.router',
  'google-signin'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'login', {
    url: '/login',
    views: {
      "main": {
        controller: 'LoginCtrl',
        templateUrl: 'login/login.tpl.html'
      }
    },
    data:{ pageTitle: 'Login' }
  });
})

.config(function(GoogleSigninProvider, CONSTANTS) {
     GoogleSigninProvider.init({
        'client_id': CONSTANTS.CLIENT_ID
     });
})

.controller( 'LoginCtrl', function LoginController( $scope, $state, GoogleSignin, LoginDataService, $http, CONSTANTS, $timeout ) {

  $scope.login_error = false;
  $scope.login = signIn;
  $scope.btn_disabled = false;
  $scope.logging_in = false;

  function signIn() {
    GoogleSignin.signIn().then(function (user) {
      $scope.logging_in = true;
      $scope.btn_disabled = true;
      LoginDataService.current_user.id_token = user.getAuthResponse().id_token;
      authenticate();
    }, function (err) {
        console.log(err);
    });
  }

  var authenticate = function()  {

    var allowed = false;

    login_url = CONSTANTS.BACKEND_URL + '/api/login';

    // temporary function to bypass the login from backend
    $timeout(function(){
      $scope.logging_in = false;
      $scope.btn_disabled = false;
      LoginDataService.current_user.email = 'john.doe@test.com';
      LoginDataService.current_user.fullname = 'John Doe';
      LoginDataService.current_user.logged_in = true;
      $state.transitionTo('home');
    }, 2000);

    /*$http.post(login_url + "/me", {}, config)
    .then(function (data, status, headers, config) {

      console.log(data);
      $scope.logging_in = false;
      $scope.btn_disabled = false;
      LoginDataService.current_user.email = data.data.email;
      LoginDataService.current_user.fullname = data.data.name;
      LoginDataService.current_user.logged_in = true;
      $state.transitionTo('giftcard-request');

    },function (data, status, header, config) {

      console.log('access denied.');
      $scope.logging_in = false;
      $scope.btn_disabled = false;
      $scope.login_error = true;
      LoginDataService.logged_in = false;

    });*/

  };
});
