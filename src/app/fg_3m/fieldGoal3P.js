angular.module( 'ngBoilerplate.fieldGoal3P', [
  'ui.router'
])

.controller('fieldGoal3Pctrl', ['$scope', '$state', '$stateParams','$log', function($scope, $state, $stateParams, $log) {

    $scope.rank = ['1st', '2nd', '3rd', '4th', '5th'];
	$scope.dataName = $stateParams.nameResult;
	$scope.dataValue = $stateParams.valueResult;

	$scope.returnHome = function(){
		$state.go('home');
	};

	$scope.passValue = function(a){
        $log.info('Index ====>', a);

        if(a == 'Stephen Curry'){
            $scope.currRank = $scope.rank[0];
            $scope.currName = $scope.dataName[0];
            $scope.currStat = $scope.dataValue[0];
        }
        else if(a == 'Kevin Love'){
            $scope.currRank = $scope.rank[1];
            $scope.currName = $scope.dataName[1];
            $scope.currStat = $scope.dataValue[1];
        }
        else if(a == 'Kyrie Irving'){
            $scope.currRank = $scope.rank[2];
            $scope.currName = $scope.dataName[2];
            $scope.currStat = $scope.dataValue[2];
        }
        else if(a == 'LeBron James'){
            $scope.currRank = $scope.rank[3];
            $scope.currName = $scope.dataName[3];
            $scope.currStat = $scope.dataValue[3];
        }
        else if(a == 'Klay Thompson'){
            $scope.currRank = $scope.rank[4];
            $scope.currName = $scope.dataName[4];
            $scope.currStat = $scope.dataValue[4];
        }
    };
}])
.config(function config( $stateProvider ) {
  $stateProvider
  .state( 'fieldGoal3P', {
      url: '/fieldGoal3P',
      views: {
        "main": {
          controller: 'fieldGoal3Pctrl',
          templateUrl: 'fg_3m/fieldGoal3P.tpl.html'
        }
      },
      data:{ pageTitle: 'Three Point Field Goal'},
      params:{nameResult: null, valueResult: null}
    })
    ;
})
;

