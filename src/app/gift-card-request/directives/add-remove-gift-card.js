angular.module( 'add.remove.giftcard', [] )

.directive( 'addGiftCard', function(GiftCardDataService) {
  return {
    link: function( scope, element, attrs , ngCtrl) {
      element.on('click', function(e) {

        var row = {
          'quantity': 0,
          'amount': 0,
          'total': 0
        };
        GiftCardDataService.gc_amount_list.push(row);
        console.log(GiftCardDataService);
        scope.$apply();

        $('.remove-gc-btn').removeAttr('disabled');
        if(GiftCardDataService.gc_amount_list.length >= 10) {
          element.attr("disabled", "disabled");
        }
      });
    }
  };
})


.directive( 'removeGiftCard', function(GiftCardDataService) {
  return {
    link: function( scope, element, attrs , ngCtrl) {

      element.on('click', function(e) {
        var index = element.attr('index');
        GiftCardDataService.gc_amount_list.splice(index, 1);
        scope.$apply();

        if(GiftCardDataService.gc_amount_list.length < 10) {
            $('#add-gift-card-btn').removeAttr('disabled');
        }

        console.log(GiftCardDataService.gc_amount_list.length);
        if(GiftCardDataService.gc_amount_list.length <= 1) {
            $('.remove-gc-btn').attr('disabled', 'disabled');
        } else {
            $('.remove-gc-btn').removeAttr('disabled');
        }
      });
    }
  };
})

.directive( 'addCostCenter', function(GiftCardDataService) {
  return {
    link: function( scope, element, attrs , ngCtrl) {
      element.on('click', function(e) {

        var rowCC = {
          "allocation_code":"",
          "cost_centers":[
             {
                "costcenter_code":"",
                "costcenter_description":"",
                "costcenter_company_code":"",
                "costcenter_gl_account":"",
                "costcenter_gl_description":""
             }
          ]
        };

        GiftCardDataService.allocation_list.push(rowCC);
        console.log(GiftCardDataService);
        scope.$apply();

      });
    }
  };
})

.directive( 'removeCostCenter', function(GiftCardDataService) {
  return {
    link: function( scope, element, attrs , ngCtrl) {

      element.on('click', function(e) {
        var index = element.attr('index');
        GiftCardDataService.allocation_list.splice(index, 1);
        scope.$apply();

      });
    }
  };
})

;
