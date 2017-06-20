angular.module('assists.modal', ['ui.bootstrap'])

.controller('AssistsModalController', function ($assistsModal, $scope) {

    this.modalBody = $assistsModal.body;
    this.close = function() {
        $assistsModal.close();
    };
})

.service('$assistsModal', [ '$modal', function($modal) {
    var modalInstance;

    this.open = function(message) {
        modalInstance = $modal.open({
            templateUrl: "modal/assists-modal.tpl.html",
            controller: "AssistsModalController"
        });
        this.body = message;
    };

    this.close = function() {
        modalInstance.close();
    };
}]);