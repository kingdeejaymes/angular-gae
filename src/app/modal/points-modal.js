angular.module('points.modal', ['ui.bootstrap'])

.controller('PointsModalController', function ($pointsModal, $scope) {

    this.modalBody = $pointsModal.body;
    this.close = function() {
        $pointsModal.close();
    };
})

.service('$pointsModal', [ '$modal', function($modal) {
    var modalInstance;

    this.open = function(message) {
        modalInstance = $modal.open({
            templateUrl: "modal/points-modal.tpl.html",
            controller: "PointsModalController"
        });
        this.body = message;
    };

    this.close = function() {
        modalInstance.close();
    };
}]);