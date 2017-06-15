angular.module('gift.card.modal', ['ui.bootstrap'])

.controller('GiftCardModalController', function ($giftModal, $scope) {

    this.modalBody = $giftModal.body;
    this.close = function() {
        $giftModal.close();
    };
})

.service('$giftModal', [ '$modal', function($modal) {
    var modalInstance;

    this.open = function(message) {
        modalInstance = $modal.open({
            templateUrl: "modal/gift-card-modal.tpl.html",
            controller: "GiftCardModalController"
        });
        this.body = message;
    };

    this.close = function() {
        modalInstance.close();
    };
}]);