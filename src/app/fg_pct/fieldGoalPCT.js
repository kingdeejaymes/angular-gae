angular.module( 'ngBoilerplate.fieldGoalPCT', [
  'ui.router'
])
.controller('fieldGoalPCTctrl', ['$scope', '$state', '$stateParams', '$log', function($scope, $state, $stateParams, $log) {

    $scope.rank = ['1st', '2nd', '3rd', '4th', '5th'];
	$scope.dataName = $stateParams.nameResult;
	$scope.dataValue = $stateParams.valueResult;

	$scope.returnHome = function(){
		$state.go('home');
	};

	$scope.passValue = function(a){
            $log.info('Index ====>', a);

            if(a == 'DeAndre Jordan'){
                $scope.currRank = $scope.rank[0];
                $scope.currName = $scope.dataName[0];
                $scope.currStat = $scope.dataValue[0];
            }
            else if(a == 'Robin Lopez'){
                $scope.currRank = $scope.rank[1];
                $scope.currName = $scope.dataName[1];
                $scope.currStat = $scope.dataValue[1];
            }
            else if(a == 'Jerami Grant'){
                $scope.currRank = $scope.rank[2];
                $scope.currName = $scope.dataName[2];
                $scope.currStat = $scope.dataValue[2];
            }
            else if(a == 'Taj Gibson'){
                $scope.currRank = $scope.rank[3];
                $scope.currName = $scope.dataName[3];
                $scope.currStat = $scope.dataValue[3];
            }
            else if(a == 'Al Horford'){
                $scope.currRank = $scope.rank[4];
                $scope.currName = $scope.dataName[4];
                $scope.currStat = $scope.dataValue[4];
            }
        };
}])
.config(function config( $stateProvider ) {
  $stateProvider
  .state( 'fieldGoalPCT', {
      url: '/fieldGoalPCT',
      views: {
        "main": {
          controller: 'fieldGoalPCTctrl',
          templateUrl: 'fg_pct/fieldGoalPCT.tpl.html'
        }
      },
      data:{ pageTitle: 'Field Goal Percentage'},
      params:{nameResult: null, valueResult: null}
    })
    ;
})
;

