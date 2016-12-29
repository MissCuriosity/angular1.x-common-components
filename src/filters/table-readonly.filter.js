/**
 * 过滤expandable readonly
 * MissCuriosity
 */
angular
    .module('tomato.filters')
    .filter('tableReadonly', tableReadonly);

tableReadonly.$inject = ['$filter', 'DataConversion'];

function tableReadonly($filter, DataConversion) {
    return function(item, key, type) {
        if ( !key ) {
            return '';
        }
        var value = DataConversion.fetchFromObject(item, key);
        switch (type) {
            case 'text':
                return value;
                //return item[key];
            case 'price':
                //return $filter('currency')(item[key], '￥');
                return $filter('currency')(value, '￥');
            case 'weight':
                //var weight = item[key];
                var weight = value;
                if ( item.unit ) {
                    weight += '/' + item.unit;
                }
                return weight;
            case 'quantity':
                //var weight = item[key];
                var quantity = value;
                if ( item.unit ) {
                    quantity += item.unit;
                }
                return quantity;
            //case 'orderStatus':
            //    var status = $filter('orderStatus')(item);
            //    return status;
            //case 'uri':
                //return '<a>item[key]</a>';
                //return '<a>'+ value +'</a>';
            //case 'img':
            //    return '<p>'+ weight +'</p>';
            default :
                break;
        }
    };
}
