angular.module("uiFormat").directive("uiFormatValue", function () {
    return {
        require: "ngModel",
        link: function (scope, element, attrs, ctrl) {
            var _formatNumber = function (number) {
                if (number === undefined)
                    number = "";
                number = number.replace(/[^0-9]+/g, "");
                if (number.length > 1) {
                    number = number.substring(0, 1) + "," + number.substring(1);
                }
                if (number.length > 3) {
                    number = number.replace(/[^0-9]+/g, "");
                    var length = number.length - 2;
                    number = number.substring(0, length) + "," + number.substring(length);
                }
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
