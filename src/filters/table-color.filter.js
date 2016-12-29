/**
 * 过滤tr,td color
 * MissCuriosity
 */
angular
    .module('tomato.filters')
    .filter('tableColor', tableColor);

tableColor.$inject = [];

function tableColor() {
    return function(color, item) {

        var classType = typeof color;

        if ( classType == 'string' ) {
            return color;
        }

        if ( classType == 'function' ) {
            return color(item);
        }

    };
}
