angular.module( 'validate.text.field', ['ui.bootstrap', 'gift.card.modal'])

.constant('validator', {
   permittedKeys_1: [48, 49, 50, 51, 52, 52, 53, 54, 55, 56, 57],
   permittedKeys_2: [46, 48, 49, 50, 51, 52, 52, 53, 54, 55, 56, 57],
   amtErrorMsg_1: "Value must not exceed 1000.",
   amtErrorMsg_2: "Value must not be lower than 10.",
   qtyErrorMsg_1: "Value must not exceed 100.",
   qtyErrorMsg_2: "Value must not be lower than 1"
})

.factory("math", function () {
    return {
        roundOff: function(value) {
            return parseFloat(value).toFixed(2);
        }
    };
})

.directive("limitText", function() {
    return {
        scope: {
            limit: "="
        },
        link: function(scope, element, attrs) {
            angular.element(element).on("keypress", function(e) {
                if (this.value.length == scope.limit) {
                    e.preventDefault();
                }
            });
        }
    };
})

.directive("intOnly", ['validator', function(validator) {
    return {
        link: function(scope, element, attrs) {
            angular.element(element).on("keypress", function(e) {
                if(!validator.permittedKeys_1.includes(e.charCode)) {
                    e.preventDefault();
                }
            });
            angular.element(element).on("blur", function(e) {
                if(!this.value.localeCompare("")) {
                    this.value = "0";
                }
            });
        }
    };
}])

.directive("floatOnly", ['validator', 'math',  function(validator, math) {
    return {
        link: function(scope, element, attrs) {
            angular.element(element).on("keypress", function(e) {
                if(!validator.permittedKeys_2.includes(e.charCode)) {
                    e.preventDefault();
                }
            });
            angular.element(element).on("blur", function(e) {
                if((this.value.localeCompare("") && this.value.localeCompare("."))) {
                    this.value = math.roundOff(this.value);
                } else {
                    this.value = "0.00";
                }
            });

        }
    };
}])

.directive("qtyValidation", ['validator', '$giftModal', 'math', function(validator, $giftModal, math) {
    return {
        link: function(scope, element, attrs) {
            angular.element(element).on("blur", function(e) {
                if(scope.gc.quantity > 100) {
                    scope.gc.quantity = 100;
                    $giftModal.open(validator.qtyErrorMsg_1);
                } else if(scope.gc.quantity < 1) {
                    scope.gc.quantity = 1;
                    $giftModal.open(validator.qtyErrorMsg_2);
                }
                scope.gc.total = math.roundOff(scope.gc.quantity * scope.gc.amount);
                scope.$apply();
            });
        }
    };
}])

.directive("amtValidation", ['validator', '$giftModal', 'math', function(validator, $giftModal, math) {
    return {
        link: function(scope, element, attrs) {
            angular.element(element).on("blur", function(e) {
                if(scope.gc.amount > 1000) {
                    scope.gc.amount = 1000;
                    $giftModal.open(validator.amtErrorMsg_1);
                } else if(scope.gc.amount < 10) {
                    scope.gc.amount = 10;
                    $giftModal.open(validator.amtErrorMsg_2);
                }
                scope.gc.total = math.roundOff(scope.gc.quantity * scope.gc.amount);
                scope.$apply();
            });

        }
    };
}])

.directive("totalGiftCard", ['math', function(math) {
    return {
        link: function(scope, element, attrs) {
            angular.element(element).on("blur", function(e) {
                    scope.gc.total = math.roundOff(scope.gc.amount * scope.gc.quantity);
                    scope.$apply();
            });
        }
    };
}]);