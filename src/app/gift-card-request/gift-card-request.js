angular.module( 'ngBoilerplate.giftcard-request', [
  'ui.router',
  'add.remove.giftcard',
  'GiftCardDataModel',
  'ngMaterial',
  'ngMessages',
  'validate.text.field'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'giftcard-request', {
    url: '/giftcard-request',
    views: {
      "main": {
        controller: 'GiftCardCtrl',
        templateUrl: 'gift-card-request/gift-card-request.tpl.html'
      }
    },
    data:{ pageTitle: 'Gift Card Request Form' }
  });
})

.controller( 'GiftCardCtrl', function GiftCardController( $scope, $state, LoginDataService, GiftCardDataService, moment ) {

  console.log(LoginDataService);
//  if(LoginUserService.email === '') {
//    $state.transitionTo('login', { content: 'no-data-found' });
//  }

  $scope.LoginDataService = LoginDataService;
  $scope.GiftCardDataService = GiftCardDataService;
  $scope.dateNow = moment().format('MMMM Do YYYY');

})

.factory('GiftCardListService', function()  {

  return {
    'gc_amount_list': [
       {
        'quantity': 1,
        'amount': 10,
        'total': 10
       }
    ],
    'allocation_list': [
      {
        "allocation_code":"1",
        "cost_centers":[
             {
                "costcenter_code":"cc125",
                "costcenter_description":"cc125 desc",
                "costcenter_company_code":"Company A",
                "costcenter_gl_account":"gl125",
                "costcenter_gl_description":"gl125 desc"
             }
        ]
      }
    ]
  };


})
;
