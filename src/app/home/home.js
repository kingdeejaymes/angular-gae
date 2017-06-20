/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module( 'ngBoilerplate.home', [
  'ui.router'
])

/**
// * Each section or module of the site can also have its own routes. AngularJS
// * will handle ensuring they are all available at run-time, but splitting it
// * this way makes each module more "self-contained".
// */
//
//
//
.config(function config( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    views: {
      "main": {
        controller: 'mainCtrl',
        templateUrl: 'home/home.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  });
})

/**
 * And of course we define a controller for our route.
 */
//.controller( 'HomeCtrl', function HomeController( $scope ) {
//})
//
//;


.controller('mainCtrl',['httpService','$scope', '$log', '$state',
	function(httpService, $scope, $log, $state){

$scope.fg3pctModal = {},
$scope.ptsName = {}, $scope.ptsValue = {},
$scope.rebName = {}, $scope.rebValue = {},
$scope.astName = {}, $scope.astValue = {},
$scope.blkName = {}, $scope.blkValue = {},
$scope.stlName = {}, $scope.stlValue = {},
$scope.fgpctName = {}, $scope.fgpctValue = {},
$scope.fg3mName = {}, $scope.fg3mValue = {},
$scope.fg3pctName = {}, $scope.fg3pctValue = {},
$scope.fpName = {}, $scope.fpValue = {};
$scope.flag = "";


	httpService.getData().then(function(response){
	$log.info('JSON RESPONSE =======>', response);
	var jsonData = response;
	for (var i in jsonData.items[0].items){
		var basketballObj = jsonData.items[0].items[i];
			for (i = 0; i < 5; i++){

				if (basketballObj.name == 'PTS'){
					$scope.ptsName[i] = basketballObj.playerstats[i].PLAYER_NAME;
					$scope.ptsValue[i] = basketballObj.playerstats[i].PTS;
				}
				else if (basketballObj.name == 'REB'){
						$scope.rebName[i] = basketballObj.playerstats[i].PLAYER_NAME;
						$scope.rebValue[i] = basketballObj.playerstats[i].REB;
				}
				else if (basketballObj.name == 'AST'){
						$scope.astName[i] = basketballObj.playerstats[i].PLAYER_NAME;
						$scope.astValue[i] = basketballObj.playerstats[i].AST;
				}

				else if (basketballObj.name == 'BLK'){
						$scope.blkName[i] = basketballObj.playerstats[i].PLAYER_NAME;
						$scope.blkValue[i] = basketballObj.playerstats[i].BLK;
				}
				else if (basketballObj.name == 'STL'){
						$scope.stlName[i] = basketballObj.playerstats[i].PLAYER_NAME;
						$scope.stlValue[i] = basketballObj.playerstats[i].STL;
				}
				else if (basketballObj.name == 'FG_PCT'){
						$scope.fgpctName[i] = basketballObj.playerstats[i].PLAYER_NAME;
						$scope.fgpctValue[i] = basketballObj.playerstats[i].FG_PCT;
				}
				else if (basketballObj.name == 'FG3M'){
						$scope.fg3mName[i] = basketballObj.playerstats[i].PLAYER_NAME;
						$scope.fg3mValue[i] = basketballObj.playerstats[i].FG3M;
				}
				else if (basketballObj.name == 'FG3_PCT'){
						$scope.fg3pctName[i] = basketballObj.playerstats[i].PLAYER_NAME;
						$scope.fg3pctValue[i] = basketballObj.playerstats[i].FG3_PCT;
						$scope.fg3pctModal[i] = basketballObj.playerstats[i];
				}
				else if (basketballObj.name == 'FANTASY_POINTS'){
						$scope.fpName[i] = basketballObj.playerstats[i].PLAYER_NAME;
						$scope.fpValue[i] = basketballObj.playerstats[i].FANTASY_POINTS;
				}
			}
	}
	}, function(error){
		$log.info('ERROR =======>', error);
	});

	$scope.points = function(){
		$state.go('points', {nameResult_PTS: $scope.ptsName, valueResult_PTS: $scope.ptsValue});
	};

	$scope.rebounds = function(){
		$state.go('rebounds', {nameResult_REB: $scope.rebName, valueResult_REB: $scope.rebValue});
	};

	$scope.assists = function(){
		$state.go('assists', {nameResult_AST: $scope.astName, valueResult_AST: $scope.astValue});

	};
    $scope.blocks = function(){
		$scope.flag = "BLK";
		$state.go('blocksPage', {nameResult: $scope.blkName, valueResult: $scope.blkValue, _flag: $scope.flag});

	};
	$scope.blocks = function(){
		$scope.flag = "BLK";
		$state.go('blocksPage', {nameResult: $scope.blkName, valueResult: $scope.blkValue, _flag: $scope.flag});
	};
	$scope.steals = function(){
		$scope.flag = "STL";
		$state.go('stealsPage', {nameResult: $scope.stlName, valueResult: $scope.stlValue, _flag: $scope.flag});
	};
	$scope.fg3percent = function(){
        $state.go('fg3percent', {nameResult: $scope.fg3pctName, valueResult: $scope.fg3pctValue, modalResult: $scope.fg3pctModal});
    };
    $scope.fantasypoints = function(){
        $state.go('fppg', {nameResult: $scope.fpName, valueResult: $scope.fpValue});
    };
    $scope.fgpercent = function(){
		$scope.flag = "FG_PCT";
		$state.go('fieldGoalPCT', {nameResult: $scope.fgpctName, valueResult: $scope.fgpctValue});
	};

	$scope.fgthree = function(){
		$scope.flag = "FG3M";
		$state.go('fieldGoal3P', {nameResult: $scope.fg3mName, valueResult: $scope.fg3mValue});
	};
}]);
