/**
 * 过滤expandable readonly
 * MissCuriosity
 */
angular
    .module('tomato.filters')
    .filter('tableOperation', tableOperation);

tableOperation.$inject = [];

function tableOperation() {
    return function(isOperation, item) {

        var flag = typeof isOperation;

        if ( flag == 'boolean' ) {
            return isOperation;
        }

        if ( flag == 'function' ) {
            return isOperation(item);
        }

    };
}
