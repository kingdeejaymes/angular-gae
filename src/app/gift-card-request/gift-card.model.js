angular.module('GiftCardDataModel', [])
.service('GiftCardDataService', function()  {
  return {
    'gc_amount_list': [{
        'quantity': "0",
        'amount': "0.00",
        'total': "0.00"
    }],
    'allocation_list': [{
        "allocation_code":"1",
        "cost_centers":[{
            "costcenter_code": "cc125",
            "costcenter_description": "cc125 desc",
            "costcenter_company_code": "Company A",
            "costcenter_gl_account": "gl125",
            "costcenter_gl_description": "gl125 desc"
        }],
        "Name" : "name",
        "Country" : "Country"
      }
    ]};
});