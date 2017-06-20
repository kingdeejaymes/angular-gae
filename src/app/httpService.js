app.service('httpService', function($q, $http){

	function getData() {
		var deferred = $q.defer();
//		$http({
//			method: 'GET',
//			url: 'http://stats.nba.com/js/data/widgets/home_playoffs.json'
//		}).then(function(response){
//			deferred.resolve(response.data);
//		}, function(error){
//			deferred.reject('Error Retrieving JSON');
//		});

        var nbaData = {
                      "uid": "home_playoffs",
                      "title": "Playoff Leaders",
                      "deep_link": "",
                      "last_updated": "2017-06-20T03:55:35-04:00",
                      "count": 2,
                      "items": [
                      {
                      "uid": "home_daily_players_playoffs",
                      "title": "Playoff Leaders",
                      "deep_link": "leaders",
                      "template": "",
                      "last_updated": "2017-06-20T03:55:34-04:00",
                      "count": 9,
                      "items": [
                      {
                      "title": "Points",
                      "deep_link": "leaders#!?Season=2016-17&SeasonType=Playoffs",
                      "name": "PTS",
                      "timestamp": "6/20/2017 3:46:25 AM",
                      "season": "2016-17",
                      "seasontype": "Playoffs",
                      "permode": "PerGame",
                      "playerstats": [
                      {
                      "RANK": 1,
                      "PLAYER_ID": 201566,
                      "PLAYER_NAME": "Russell Westbrook",
                      "TEAM_ID": 1610612760,
                      "TEAM_ABBREVIATION": "OKC",
                      "PTS": 37.4
                      },
                      {
                      "RANK": 2,
                      "PLAYER_ID": 2544,
                      "PLAYER_NAME": "LeBron James",
                      "TEAM_ID": 1610612739,
                      "TEAM_ABBREVIATION": "CLE",
                      "PTS": 32.8
                      },
                      {
                      "RANK": 3,
                      "PLAYER_ID": 201142,
                      "PLAYER_NAME": "Kevin Durant",
                      "TEAM_ID": 1610612744,
                      "TEAM_ABBREVIATION": "GSW",
                      "PTS": 28.5
                      },
                      {
                      "RANK": 4,
                      "PLAYER_ID": 201935,
                      "PLAYER_NAME": "James Harden",
                      "TEAM_ID": 1610612745,
                      "TEAM_ABBREVIATION": "HOU",
                      "PTS": 28.5
                      },
                      {
                      "RANK": 5,
                      "PLAYER_ID": 201939,
                      "PLAYER_NAME": "Stephen Curry",
                      "TEAM_ID": 1610612744,
                      "TEAM_ABBREVIATION": "GSW",
                      "PTS": 28.1
                      }
                      ]
                      },
                      {
                      "title": "Rebounds",
                      "deep_link": "leaders#!?Season=2016-17&SeasonType=Playoffs&StatCategory=REB",
                      "name": "REB",
                      "timestamp": "6/20/2017 3:46:25 AM",
                      "season": "2016-17",
                      "seasontype": "Playoffs",
                      "permode": "PerGame",
                      "playerstats": [
                      {
                      "RANK": 1,
                      "PLAYER_ID": 201599,
                      "PLAYER_NAME": "DeAndre Jordan",
                      "TEAM_ID": 1610612746,
                      "TEAM_ABBREVIATION": "LAC",
                      "REB": 14.4
                      },
                      {
                      "RANK": 2,
                      "PLAYER_ID": 201566,
                      "PLAYER_NAME": "Russell Westbrook",
                      "TEAM_ID": 1610612760,
                      "TEAM_ABBREVIATION": "OKC",
                      "REB": 11.6
                      },
                      {
                      "RANK": 3,
                      "PLAYER_ID": 101162,
                      "PLAYER_NAME": "Marcin Gortat",
                      "TEAM_ID": 1610612764,
                      "TEAM_ABBREVIATION": "WAS",
                      "REB": 11
                      },
                      {
                      "RANK": 4,
                      "PLAYER_ID": 2730,
                      "PLAYER_NAME": "Dwight Howard",
                      "TEAM_ID": 1610612737,
                      "TEAM_ABBREVIATION": "ATL",
                      "REB": 10.7
                      },
                      {
                      "RANK": 5,
                      "PLAYER_ID": 201567,
                      "PLAYER_NAME": "Kevin Love",
                      "TEAM_ID": 1610612739,
                      "TEAM_ABBREVIATION": "CLE",
                      "REB": 10.6
                      }
                      ]
                      },
                      {
                      "title": "Assists",
                      "deep_link": "leaders#!?Season=2016-17&SeasonType=Playoffs&StatCategory=AST",
                      "name": "AST",
                      "timestamp": "6/20/2017 3:46:25 AM",
                      "season": "2016-17",
                      "seasontype": "Playoffs",
                      "permode": "PerGame",
                      "playerstats": [
                      {
                      "RANK": 1,
                      "PLAYER_ID": 201566,
                      "PLAYER_NAME": "Russell Westbrook",
                      "TEAM_ID": 1610612760,
                      "TEAM_ABBREVIATION": "OKC",
                      "AST": 10.8
                      },
                      {
                      "RANK": 2,
                      "PLAYER_ID": 202322,
                      "PLAYER_NAME": "John Wall",
                      "TEAM_ID": 1610612764,
                      "TEAM_ABBREVIATION": "WAS",
                      "AST": 10.3
                      },
                      {
                      "RANK": 3,
                      "PLAYER_ID": 101108,
                      "PLAYER_NAME": "Chris Paul",
                      "TEAM_ID": 1610612746,
                      "TEAM_ABBREVIATION": "LAC",
                      "AST": 9.9
                      },
                      {
                      "RANK": 4,
                      "PLAYER_ID": 201935,
                      "PLAYER_NAME": "James Harden",
                      "TEAM_ID": 1610612745,
                      "TEAM_ABBREVIATION": "HOU",
                      "AST": 8.5
                      },
                      {
                      "RANK": 5,
                      "PLAYER_ID": 2544,
                      "PLAYER_NAME": "LeBron James",
                      "TEAM_ID": 1610612739,
                      "TEAM_ABBREVIATION": "CLE",
                      "AST": 7.8
                      }
                      ]
                      },
                      {
                      "title": "Blocks",
                      "deep_link": "leaders#!?Season=2016-17&SeasonType=Playoffs&StatCategory=BLK",
                      "name": "BLK",
                      "timestamp": "6/20/2017 3:46:25 AM",
                      "season": "2016-17",
                      "seasontype": "Playoffs",
                      "permode": "PerGame",
                      "playerstats": [
                      {
                      "RANK": 1,
                      "PLAYER_ID": 203460,
                      "PLAYER_NAME": "Andre Roberson",
                      "TEAM_ID": 1610612760,
                      "TEAM_ABBREVIATION": "OKC",
                      "BLK": 3.4
                      },
                      {
                      "RANK": 2,
                      "PLAYER_ID": 203991,
                      "PLAYER_NAME": "Clint Capela",
                      "TEAM_ID": 1610612745,
                      "TEAM_ABBREVIATION": "HOU",
                      "BLK": 2.5
                      },
                      {
                      "RANK": 3,
                      "PLAYER_ID": 1627748,
                      "PLAYER_NAME": "Thon Maker",
                      "TEAM_ID": 1610612749,
                      "TEAM_ABBREVIATION": "MIL",
                      "BLK": 1.8
                      },
                      {
                      "RANK": 4,
                      "PLAYER_ID": 203500,
                      "PLAYER_NAME": "Steven Adams",
                      "TEAM_ID": 1610612760,
                      "TEAM_ABBREVIATION": "OKC",
                      "BLK": 1.8
                      },
                      {
                      "RANK": 5,
                      "PLAYER_ID": 201586,
                      "PLAYER_NAME": "Serge Ibaka",
                      "TEAM_ID": 1610612761,
                      "TEAM_ABBREVIATION": "TOR",
                      "BLK": 1.7
                      }
                      ]
                      },
                      {
                      "title": "Steals",
                      "deep_link": "leaders#!?Season=2016-17&SeasonType=Playoffs&StatCategory=STL",
                      "name": "STL",
                      "timestamp": "6/20/2017 3:46:25 AM",
                      "season": "2016-17",
                      "seasontype": "Playoffs",
                      "permode": "PerGame",
                      "playerstats": [
                      {
                      "RANK": 1,
                      "PLAYER_ID": 203460,
                      "PLAYER_NAME": "Andre Roberson",
                      "TEAM_ID": 1610612760,
                      "TEAM_ABBREVIATION": "OKC",
                      "STL": 2.4
                      },
                      {
                      "RANK": 1,
                      "PLAYER_ID": 201566,
                      "PLAYER_NAME": "Russell Westbrook",
                      "TEAM_ID": 1610612760,
                      "TEAM_ABBREVIATION": "OKC",
                      "STL": 2.4
                      },
                      {
                      "RANK": 3,
                      "PLAYER_ID": 203507,
                      "PLAYER_NAME": "Giannis Antetokounmpo",
                      "TEAM_ID": 1610612749,
                      "TEAM_ABBREVIATION": "MIL",
                      "STL": 2.2
                      },
                      {
                      "RANK": 4,
                      "PLAYER_ID": 201939,
                      "PLAYER_NAME": "Stephen Curry",
                      "TEAM_ID": 1610612744,
                      "TEAM_ABBREVIATION": "GSW",
                      "STL": 2
                      },
                      {
                      "RANK": 4,
                      "PLAYER_ID": 204060,
                      "PLAYER_NAME": "Joe Ingles",
                      "TEAM_ID": 1610612762,
                      "TEAM_ABBREVIATION": "UTA",
                      "STL": 2
                      }
                      ]
                      },
                      {
                      "title": "Field Goal Percentage",
                      "deep_link": "leaders#!?Season=2016-17&SeasonType=Playoffs&StatCategory=FG_PCT&PerMode=Totals",
                      "name": "FG_PCT",
                      "timestamp": "6/20/2017 3:46:25 AM",
                      "season": "2016-17",
                      "seasontype": "Playoffs",
                      "permode": "Totals",
                      "playerstats": [
                      {
                      "RANK": 1,
                      "PLAYER_ID": 201599,
                      "PLAYER_NAME": "DeAndre Jordan",
                      "TEAM_ID": 1610612746,
                      "TEAM_ABBREVIATION": "LAC",
                      "FG_PCT": 0.705
                      },
                      {
                      "RANK": 2,
                      "PLAYER_ID": 201577,
                      "PLAYER_NAME": "Robin Lopez",
                      "TEAM_ID": 1610612741,
                      "TEAM_ABBREVIATION": "CHI",
                      "FG_PCT": 0.654
                      },
                      {
                      "RANK": 3,
                      "PLAYER_ID": 203924,
                      "PLAYER_NAME": "Jerami Grant",
                      "TEAM_ID": 1610612760,
                      "TEAM_ABBREVIATION": "OKC",
                      "FG_PCT": 0.613
                      },
                      {
                      "RANK": 4,
                      "PLAYER_ID": 201959,
                      "PLAYER_NAME": "Taj Gibson",
                      "TEAM_ID": 1610612760,
                      "TEAM_ABBREVIATION": "OKC",
                      "FG_PCT": 0.6
                      },
                      {
                      "RANK": 5,
                      "PLAYER_ID": 201143,
                      "PLAYER_NAME": "Al Horford",
                      "TEAM_ID": 1610612738,
                      "TEAM_ABBREVIATION": "BOS",
                      "FG_PCT": 0.584
                      }
                      ]
                      },
                      {
                      "title": "Three Pointers Made",
                      "deep_link": "leaders#!?Season=2016-17&SeasonType=Playoffs&StatCategory=FG3M&PerMode=Totals",
                      "name": "FG3M",
                      "timestamp": "6/20/2017 3:46:25 AM",
                      "season": "2016-17",
                      "seasontype": "Playoffs",
                      "permode": "Totals",
                      "playerstats": [
                      {
                      "RANK": 1,
                      "PLAYER_ID": 201939,
                      "PLAYER_NAME": "Stephen Curry",
                      "TEAM_ID": 1610612744,
                      "TEAM_ABBREVIATION": "GSW",
                      "FG3M": 72
                      },
                      {
                      "RANK": 2,
                      "PLAYER_ID": 201567,
                      "PLAYER_NAME": "Kevin Love",
                      "TEAM_ID": 1610612739,
                      "TEAM_ABBREVIATION": "CLE",
                      "FG3M": 50
                      },
                      {
                      "RANK": 3,
                      "PLAYER_ID": 202681,
                      "PLAYER_NAME": "Kyrie Irving",
                      "TEAM_ID": 1610612739,
                      "TEAM_ABBREVIATION": "CLE",
                      "FG3M": 44
                      },
                      {
                      "RANK": 3,
                      "PLAYER_ID": 2544,
                      "PLAYER_NAME": "LeBron James",
                      "TEAM_ID": 1610612739,
                      "TEAM_ABBREVIATION": "CLE",
                      "FG3M": 44
                      },
                      {
                      "RANK": 5,
                      "PLAYER_ID": 202691,
                      "PLAYER_NAME": "Klay Thompson",
                      "TEAM_ID": 1610612744,
                      "TEAM_ABBREVIATION": "GSW",
                      "FG3M": 41
                      }
                      ]
                      },
                      {
                      "title": "Three Point Percentage",
                      "deep_link": "leaders#!?Season=2016-17&SeasonType=Playoffs&StatCategory=FG3_PCT&PerMode=Totals",
                      "name": "FG3_PCT",
                      "timestamp": "6/20/2017 3:46:25 AM",
                      "season": "2016-17",
                      "seasontype": "Playoffs",
                      "permode": "Totals",
                      "playerstats": [
                      {
                      "RANK": 1,
                      "PLAYER_ID": 201188,
                      "PLAYER_NAME": "Marc Gasol",
                      "TEAM_ID": 1610612763,
                      "TEAM_ABBREVIATION": "MEM",
                      "FG3_PCT": 0.583
                      },
                      {
                      "RANK": 2,
                      "PLAYER_ID": 203926,
                      "PLAYER_NAME": "Doug McDermott",
                      "TEAM_ID": 1610612760,
                      "TEAM_ABBREVIATION": "OKC",
                      "FG3_PCT": 0.538
                      },
                      {
                      "RANK": 3,
                      "PLAYER_ID": 201952,
                      "PLAYER_NAME": "Jeff Teague",
                      "TEAM_ID": 1610612754,
                      "TEAM_ABBREVIATION": "IND",
                      "FG3_PCT": 0.529
                      },
                      {
                      "RANK": 4,
                      "PLAYER_ID": 201143,
                      "PLAYER_NAME": "Al Horford",
                      "TEAM_ID": 1610612738,
                      "TEAM_ABBREVIATION": "BOS",
                      "FG3_PCT": 0.519
                      },
                      {
                      "RANK": 5,
                      "PLAYER_ID": 203503,
                      "PLAYER_NAME": "Tony Snell",
                      "TEAM_ID": 1610612749,
                      "TEAM_ABBREVIATION": "MIL",
                      "FG3_PCT": 0.516
                      }
                      ]
                      },
                      {
                      "title": "Fantasy Points Per Game",
                      "deep_link": "",
                      "name": "FANTASY_POINTS",
                      "timestamp": "6/20/2017 3:46:25 AM",
                      "season": "2016-17",
                      "seasontype": "Playoffs",
                      "permode": "PerGame",
                      "playerstats": [
                      {
                      "PLAYER_ID": 201566,
                      "PLAYER_NAME": "Russell Westbrook",
                      "TEAM_ID": 1610612760,
                      "TEAM_ABBREVIATION": "OKC",
                      "FANTASY_POINTS": 67.1
                      },
                      {
                      "PLAYER_ID": 2544,
                      "PLAYER_NAME": "LeBron James",
                      "TEAM_ID": 1610612739,
                      "TEAM_ABBREVIATION": "CLE",
                      "FANTASY_POINTS": 58
                      },
                      {
                      "PLAYER_ID": 202331,
                      "PLAYER_NAME": "Paul George",
                      "TEAM_ID": 1610612754,
                      "TEAM_ABBREVIATION": "IND",
                      "FANTASY_POINTS": 50.6
                      },
                      {
                      "PLAYER_ID": 202322,
                      "PLAYER_NAME": "John Wall",
                      "TEAM_ID": 1610612764,
                      "TEAM_ABBREVIATION": "WAS",
                      "FANTASY_POINTS": 48.5
                      },
                      {
                      "PLAYER_ID": 101108,
                      "PLAYER_NAME": "Chris Paul",
                      "TEAM_ID": 1610612746,
                      "TEAM_ABBREVIATION": "LAC",
                      "FANTASY_POINTS": 47.1
                      }
                      ]
                      }
                      ]
                      },
                      {
                      "uid": "home_daily_teams_playoffs",
                      "title": "Playoff Leaders",
                      "deep_link": "teams/traditional/#!?sort=W_PCT&dir=-1",
                      "template": "",
                      "last_updated": "2017-06-20T03:55:35-04:00",
                      "count": 9,
                      "items": [
                      {
                      "title": "Points",
                      "deep_link": "teams/traditional/#!?sort=PTS&dir=-1&Season=2016-17&SeasonType=Playoffs",
                      "name": "PTS",
                      "timestamp": "6/20/2017 3:47:32 AM",
                      "season": "2016-17",
                      "seasontype": "Playoffs",
                      "permode": "PerGame",
                      "teamstats": [
                      {
                      "TEAM_ID": 1610612744,
                      "TEAM_CITY": "Golden State",
                      "TEAM_NAME": "Warriors",
                      "TEAM_ABBREVIATION": "GSW",
                      "PTS": 119.3
                      },
                      {
                      "TEAM_ID": 1610612739,
                      "TEAM_CITY": "Cleveland",
                      "TEAM_NAME": "Cavaliers",
                      "TEAM_ABBREVIATION": "CLE",
                      "PTS": 116.2
                      },
                      {
                      "TEAM_ID": 1610612754,
                      "TEAM_CITY": "Indiana",
                      "TEAM_NAME": "Pacers",
                      "TEAM_ABBREVIATION": "IND",
                      "PTS": 108.8
                      },
                      {
                      "TEAM_ID": 1610612764,
                      "TEAM_CITY": "Washington",
                      "TEAM_NAME": "Wizards",
                      "TEAM_ABBREVIATION": "WAS",
                      "PTS": 108.1
                      },
                      {
                      "TEAM_ID": 1610612745,
                      "TEAM_CITY": "Houston",
                      "TEAM_NAME": "Rockets",
                      "TEAM_ABBREVIATION": "HOU",
                      "PTS": 107.7
                      }
                      ]
                      },
                      {
                      "title": "Rebounds",
                      "deep_link": "teams/traditional/#!?sort=REB&dir=-1&Season=2016-17&SeasonType=Playoffs",
                      "name": "REB",
                      "timestamp": "6/20/2017 3:47:32 AM",
                      "season": "2016-17",
                      "seasontype": "Playoffs",
                      "permode": "PerGame",
                      "teamstats": [
                      {
                      "TEAM_ID": 1610612741,
                      "TEAM_CITY": "Chicago",
                      "TEAM_NAME": "Bulls",
                      "TEAM_ABBREVIATION": "CHI",
                      "REB": 46.7
                      },
                      {
                      "TEAM_ID": 1610612744,
                      "TEAM_CITY": "Golden State",
                      "TEAM_NAME": "Warriors",
                      "TEAM_ABBREVIATION": "GSW",
                      "REB": 45.8
                      },
                      {
                      "TEAM_ID": 1610612759,
                      "TEAM_CITY": "San Antonio",
                      "TEAM_NAME": "Spurs",
                      "TEAM_ABBREVIATION": "SAS",
                      "REB": 44.4
                      },
                      {
                      "TEAM_ID": 1610612737,
                      "TEAM_CITY": "Atlanta",
                      "TEAM_NAME": "Hawks",
                      "TEAM_ABBREVIATION": "ATL",
                      "REB": 44.3
                      },
                      {
                      "TEAM_ID": 1610612757,
                      "TEAM_CITY": "Portland",
                      "TEAM_NAME": "Trail Blazers",
                      "TEAM_ABBREVIATION": "POR",
                      "REB": 44
                      }
                      ]
                      },
                      {
                      "title": "Assists",
                      "deep_link": "teams/traditional/#!?sort=AST&dir=-1&Season=2016-17&SeasonType=Playoffs",
                      "name": "AST",
                      "timestamp": "6/20/2017 3:47:32 AM",
                      "season": "2016-17",
                      "seasontype": "Playoffs",
                      "permode": "PerGame",
                      "teamstats": [
                      {
                      "TEAM_ID": 1610612744,
                      "TEAM_CITY": "Golden State",
                      "TEAM_NAME": "Warriors",
                      "TEAM_ABBREVIATION": "GSW",
                      "AST": 28.2
                      },
                      {
                      "TEAM_ID": 1610612738,
                      "TEAM_CITY": "Boston",
                      "TEAM_NAME": "Celtics",
                      "TEAM_ABBREVIATION": "BOS",
                      "AST": 26.9
                      },
                      {
                      "TEAM_ID": 1610612764,
                      "TEAM_CITY": "Washington",
                      "TEAM_NAME": "Wizards",
                      "TEAM_ABBREVIATION": "WAS",
                      "AST": 22.8
                      },
                      {
                      "TEAM_ID": 1610612754,
                      "TEAM_CITY": "Indiana",
                      "TEAM_NAME": "Pacers",
                      "TEAM_ABBREVIATION": "IND",
                      "AST": 22.5
                      },
                      {
                      "TEAM_ID": 1610612737,
                      "TEAM_CITY": "Atlanta",
                      "TEAM_NAME": "Hawks",
                      "TEAM_ABBREVIATION": "ATL",
                      "AST": 22.3
                      }
                      ]
                      },
                      {
                      "title": "Blocks",
                      "deep_link": "teams/traditional/#!?sort=BLK&dir=-1&Season=2016-17&SeasonType=Playoffs",
                      "name": "BLK",
                      "timestamp": "6/20/2017 3:47:32 AM",
                      "season": "2016-17",
                      "seasontype": "Playoffs",
                      "permode": "PerGame",
                      "teamstats": [
                      {
                      "TEAM_ID": 1610612760,
                      "TEAM_CITY": "Oklahoma City",
                      "TEAM_NAME": "Thunder",
                      "TEAM_ABBREVIATION": "OKC",
                      "BLK": 8
                      },
                      {
                      "TEAM_ID": 1610612764,
                      "TEAM_CITY": "Washington",
                      "TEAM_NAME": "Wizards",
                      "TEAM_ABBREVIATION": "WAS",
                      "BLK": 6.6
                      },
                      {
                      "TEAM_ID": 1610612744,
                      "TEAM_CITY": "Golden State",
                      "TEAM_NAME": "Warriors",
                      "TEAM_ABBREVIATION": "GSW",
                      "BLK": 6.1
                      },
                      {
                      "TEAM_ID": 1610612741,
                      "TEAM_CITY": "Chicago",
                      "TEAM_NAME": "Bulls",
                      "TEAM_ABBREVIATION": "CHI",
                      "BLK": 5.2
                      },
                      {
                      "TEAM_ID": 1610612749,
                      "TEAM_CITY": "Milwaukee",
                      "TEAM_NAME": "Bucks",
                      "TEAM_ABBREVIATION": "MIL",
                      "BLK": 5
                      }
                      ]
                      },
                      {
                      "title": "Steals",
                      "deep_link": "teams/traditional/#!?sort=STL&dir=-1&Season=2016-17&SeasonType=Playoffs",
                      "name": "STL",
                      "timestamp": "6/20/2017 3:47:32 AM",
                      "season": "2016-17",
                      "seasontype": "Playoffs",
                      "permode": "PerGame",
                      "teamstats": [
                      {
                      "TEAM_ID": 1610612744,
                      "TEAM_CITY": "Golden State",
                      "TEAM_NAME": "Warriors",
                      "TEAM_ABBREVIATION": "GSW",
                      "STL": 8.7
                      },
                      {
                      "TEAM_ID": 1610612760,
                      "TEAM_CITY": "Oklahoma City",
                      "TEAM_NAME": "Thunder",
                      "TEAM_ABBREVIATION": "OKC",
                      "STL": 8.4
                      },
                      {
                      "TEAM_ID": 1610612749,
                      "TEAM_CITY": "Milwaukee",
                      "TEAM_NAME": "Bucks",
                      "TEAM_ABBREVIATION": "MIL",
                      "STL": 8.2
                      },
                      {
                      "TEAM_ID": 1610612754,
                      "TEAM_CITY": "Indiana",
                      "TEAM_NAME": "Pacers",
                      "TEAM_ABBREVIATION": "IND",
                      "STL": 8
                      },
                      {
                      "TEAM_ID": 1610612764,
                      "TEAM_CITY": "Washington",
                      "TEAM_NAME": "Wizards",
                      "TEAM_ABBREVIATION": "WAS",
                      "STL": 7.9
                      }
                      ]
                      },
                      {
                      "title": "Field Goal Percentage",
                      "deep_link": "teams/traditional/#!?sort=FG_PCT&dir=-1&Season=2016-17&SeasonType=Playoffs",
                      "name": "FG_PCT",
                      "timestamp": "6/20/2017 3:47:32 AM",
                      "season": "2016-17",
                      "seasontype": "Playoffs",
                      "permode": "Totals",
                      "teamstats": [
                      {
                      "TEAM_ID": 1610612744,
                      "TEAM_CITY": "Golden State",
                      "TEAM_NAME": "Warriors",
                      "TEAM_ABBREVIATION": "GSW",
                      "FG_PCT": 0.494
                      },
                      {
                      "TEAM_ID": 1610612739,
                      "TEAM_CITY": "Cleveland",
                      "TEAM_NAME": "Cavaliers",
                      "TEAM_ABBREVIATION": "CLE",
                      "FG_PCT": 0.493
                      },
                      {
                      "TEAM_ID": 1610612746,
                      "TEAM_CITY": "LA",
                      "TEAM_NAME": "Clippers",
                      "TEAM_ABBREVIATION": "LAC",
                      "FG_PCT": 0.473
                      },
                      {
                      "TEAM_ID": 1610612754,
                      "TEAM_CITY": "Indiana",
                      "TEAM_NAME": "Pacers",
                      "TEAM_ABBREVIATION": "IND",
                      "FG_PCT": 0.466
                      },
                      {
                      "TEAM_ID": 1610612759,
                      "TEAM_CITY": "San Antonio",
                      "TEAM_NAME": "Spurs",
                      "TEAM_ABBREVIATION": "SAS",
                      "FG_PCT": 0.462
                      }
                      ]
                      },
                      {
                      "title": "Three Pointers Made",
                      "deep_link": "teams/traditional/#!?sort=FG3M&dir=-1&Season=2016-17&SeasonType=Playoffs&PerMode=Totals",
                      "name": "FG3M",
                      "timestamp": "6/20/2017 3:47:32 AM",
                      "season": "2016-17",
                      "seasontype": "Playoffs",
                      "permode": "Totals",
                      "teamstats": [
                      {
                      "TEAM_ID": 1610612739,
                      "TEAM_CITY": "Cleveland",
                      "TEAM_NAME": "Cavaliers",
                      "TEAM_ABBREVIATION": "CLE",
                      "FG3M": 256
                      },
                      {
                      "TEAM_ID": 1610612738,
                      "TEAM_CITY": "Boston",
                      "TEAM_NAME": "Celtics",
                      "TEAM_ABBREVIATION": "BOS",
                      "FG3M": 229
                      },
                      {
                      "TEAM_ID": 1610612744,
                      "TEAM_CITY": "Golden State",
                      "TEAM_NAME": "Warriors",
                      "TEAM_ABBREVIATION": "GSW",
                      "FG3M": 216
                      },
                      {
                      "TEAM_ID": 1610612745,
                      "TEAM_CITY": "Houston",
                      "TEAM_NAME": "Rockets",
                      "TEAM_ABBREVIATION": "HOU",
                      "FG3M": 141
                      },
                      {
                      "TEAM_ID": 1610612759,
                      "TEAM_CITY": "San Antonio",
                      "TEAM_NAME": "Spurs",
                      "TEAM_ABBREVIATION": "SAS",
                      "FG3M": 137
                      }
                      ]
                      },
                      {
                      "title": "Three Point Percentage",
                      "deep_link": "teams/traditional/#!?sort=FG3_PCT&dir=-1&Season=2016-17&SeasonType=Playoffs",
                      "name": "FG3_PCT",
                      "timestamp": "6/20/2017 3:47:32 AM",
                      "season": "2016-17",
                      "seasontype": "Playoffs",
                      "permode": "Totals",
                      "teamstats": [
                      {
                      "TEAM_ID": 1610612739,
                      "TEAM_CITY": "Cleveland",
                      "TEAM_NAME": "Cavaliers",
                      "TEAM_ABBREVIATION": "CLE",
                      "FG3_PCT": 0.42
                      },
                      {
                      "TEAM_ID": 1610612749,
                      "TEAM_CITY": "Milwaukee",
                      "TEAM_NAME": "Bucks",
                      "TEAM_ABBREVIATION": "MIL",
                      "FG3_PCT": 0.415
                      },
                      {
                      "TEAM_ID": 1610612754,
                      "TEAM_CITY": "Indiana",
                      "TEAM_NAME": "Pacers",
                      "TEAM_ABBREVIATION": "IND",
                      "FG3_PCT": 0.391
                      },
                      {
                      "TEAM_ID": 1610612744,
                      "TEAM_CITY": "Golden State",
                      "TEAM_NAME": "Warriors",
                      "TEAM_ABBREVIATION": "GSW",
                      "FG3_PCT": 0.386
                      },
                      {
                      "TEAM_ID": 1610612763,
                      "TEAM_CITY": "Memphis",
                      "TEAM_NAME": "Grizzlies",
                      "TEAM_ABBREVIATION": "MEM",
                      "FG3_PCT": 0.386
                      }
                      ]
                      },
                      {
                      "title": "Free Throw Percentage",
                      "deep_link": "teams/traditional/#!?sort=FT_PCT&dir=-1&Season=2016-17&SeasonType=Playoffs&PerMode=Totals",
                      "name": "FT_PCT",
                      "timestamp": "6/20/2017 3:47:32 AM",
                      "season": "2016-17",
                      "seasontype": "Playoffs",
                      "permode": "Totals",
                      "teamstats": [
                      {
                      "TEAM_ID": 1610612763,
                      "TEAM_CITY": "Memphis",
                      "TEAM_NAME": "Grizzlies",
                      "TEAM_ABBREVIATION": "MEM",
                      "FT_PCT": 0.869
                      },
                      {
                      "TEAM_ID": 1610612741,
                      "TEAM_CITY": "Chicago",
                      "TEAM_NAME": "Bulls",
                      "TEAM_ABBREVIATION": "CHI",
                      "FT_PCT": 0.849
                      },
                      {
                      "TEAM_ID": 1610612744,
                      "TEAM_CITY": "Golden State",
                      "TEAM_NAME": "Warriors",
                      "TEAM_ABBREVIATION": "GSW",
                      "FT_PCT": 0.815
                      },
                      {
                      "TEAM_ID": 1610612761,
                      "TEAM_CITY": "Toronto",
                      "TEAM_NAME": "Raptors",
                      "TEAM_ABBREVIATION": "TOR",
                      "FT_PCT": 0.813
                      },
                      {
                      "TEAM_ID": 1610612757,
                      "TEAM_CITY": "Portland",
                      "TEAM_NAME": "Trail Blazers",
                      "TEAM_ABBREVIATION": "POR",
                      "FT_PCT": 0.804
                      }
                      ]
                      }
                      ]
                      }
                      ]
                      };
        deferred.resolve(nbaData);
		return deferred.promise;
	}

	return {
		getData: getData
	};
});