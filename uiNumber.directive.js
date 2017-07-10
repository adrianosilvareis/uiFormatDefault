angular.module("uiFormat").directive("uiFormatNumber", function () {
    return {
        require: "ngModel",
        link: function (scope, element, attrs, ctrl) {
            var _formatNumber = function (number) {
                if (number === undefined)
                    number = "";
                number = number.replace(/[^0-9]+/g, "");
                return number;
            };

            ctrl.$formatters.push(function (value) {
                return _formatNumber(value);
            });

            element.bind("keyup", function () {
                ctrl.$setViewValue(_formatNumber(ctrl.$viewValue));
                ctrl.$render();
            });

        }
    };
});
