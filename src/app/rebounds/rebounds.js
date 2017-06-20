angular.module( 'ngBoilerplate.rebounds', [
  'ui.router',
  'rebounds.modal'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'rebounds', {
    url: '/rebounds',
    views: {
      "main": {
        controller: 'ReboundsCtrl',
        templateUrl: 'rebounds/rebounds.tpl.html'
      }
    },
    data:{ pageTitle: 'Rebounds Leaderboards Stats' },
    params:{nameResult_REB: null, valueResult_REB: null}
  });
})

.controller('ReboundsCtrl', function ReboundsController($scope, $state, $stateParams, $reboundsModal) {
	$scope.rank = ['1st', '2nd', '3rd', '4th', '5th'];
	$scope.dataName = $stateParams.nameResult_REB;
	$scope.dataValue = $stateParams.valueResult_REB;

    $scope.openModal = function(a) {
        if (a == $scope.dataName[0]){
            $scope.dataJSON = {
                rank: 'First',
                name: $scope.dataName[0],
                points: $scope.dataValue[0] + ' rebounds per game'
                };
        }
        else if (a == $scope.dataName[1]){
            $scope.dataJSON = {
                rank: 'Second',
                name: $scope.dataName[1],
                points: $scope.dataValue[1] + ' rebounds per game'
                };
        }
        else if (a == $scope.dataName[2]){
            $scope.dataJSON = {
                rank: 'Third',
                name: $scope.dataName[2],
                points: $scope.dataValue[2] + ' rebounds per game'
                };
        }
        else if (a == $scope.dataName[3]){
            $scope.dataJSON = {
                rank: 'Fourth',
                name: $scope.dataName[3],
                points: $scope.dataValue[3] + ' rebounds per game'
                };
        }
        else if (a == $scope.dataName[4]){
            $scope.dataJSON = {
                rank: 'Fifth',
                name: $scope.dataName[4],
                points: $scope.dataValue[4] + ' rebounds per game'
                };
        }

        $scope.message = $scope.dataJSON.name + ' got the ' + $scope.dataJSON.rank + ' place with ' + $scope.dataJSON.points;
        $reboundsModal.open($scope.message);
    };

	$scope.back = function(){
		$state.go('home');
	};
})

;