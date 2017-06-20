angular.module( 'ngBoilerplate.assists', [
  'ui.router',
  'assists.modal'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'assists', {
    url: '/assists',
    views: {
      "main": {
        controller: 'AssistsCtrl',
        templateUrl: 'assists/assists.tpl.html'
      }
    },
    data:{ pageTitle: 'Assists Leaderboards Stats' },
    params:{nameResult_AST: null, valueResult_AST: null}
  });
})

.controller('AssistsCtrl', function AssistsController($scope, $state, $stateParams, $assistsModal) {
	$scope.rank = ['1st', '2nd', '3rd', '4th', '5th'];
	$scope.dataName = $stateParams.nameResult_AST;
	$scope.dataValue = $stateParams.valueResult_AST;


    $scope.openModal = function(a) {
        if (a == $scope.dataName[0]){
            $scope.dataJSON = {
                rank: 'First',
                name: $scope.dataName[0],
                points: $scope.dataValue[0] + ' assists per game'
                };
        }
        else if (a == $scope.dataName[1]){
            $scope.dataJSON = {
                rank: 'Second',
                name: $scope.dataName[1],
                points: $scope.dataValue[1] + ' assists per game'
                };
        }
        else if (a == $scope.dataName[2]){
            $scope.dataJSON = {
                rank: 'Third',
                name: $scope.dataName[2],
                points: $scope.dataValue[2] + ' assists per game'
                };
        }
        else if (a == $scope.dataName[3]){
            $scope.dataJSON = {
                rank: 'Fourth',
                name: $scope.dataName[3],
                points: $scope.dataValue[3] + ' assists per game'
            };
        }
        else if (a == $scope.dataName[4]){
            $scope.dataJSON = {
                rank: 'Fifth',
                name: $scope.dataName[4],
                points: $scope.dataValue[4] + ' assists per game'
            };
        }



        $scope.message = $scope.dataJSON.name + ' got the ' + $scope.dataJSON.rank + ' place with ' + $scope.dataJSON.points;
        $assistsModal.open($scope.message);

    };

	$scope.back = function(){
		$state.go('home');
	};
})

;