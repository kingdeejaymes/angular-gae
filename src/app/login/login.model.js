angular.module('LoginDataModel', [])
.service('LoginDataService', function()  {

  var login_func = {
    current_user : {
      email: '',
      id_token: '',
      fullname: '',
      access_token: '',
      logged_in: false
    },

    validate : function() {
      return this.current_user.logged_in;
    }
  };

  return login_func;
});
