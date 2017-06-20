angular.module('rebounds.modal', ['ui.bootstrap'])

.controller('ReboundsModalController', function ($reboundsModal, $scope) {

    this.modalBody = $reboundsModal.body;
    this.close = function() {
        $reboundsModal.close();
    };
})

.service('$reboundsModal', [ '$modal', function($modal) {
    var modalInstance;

    this.open = function(message) {
        modalInstance = $modal.open({
            templateUrl: "modal/rebounds-modal.tpl.html",
            controller: "ReboundsModalController"
        });
        this.body = message;
    };

    this.close = function() {
        modalInstance.close();
    };
}]);