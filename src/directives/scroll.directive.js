/**
 * scroll.
 */
angular
    .module('tomato.directives')
    .directive('scroll', scroll);

scroll.$inject = [];

function scroll() {

    return {
        restrict: 'A',
        controller: function(){},
        controllerAs: 'csPreview',
        scope: {
            callback: '&',
            fixedDom: '@',
            isRefresh: '='
        },
        link: function (scope, element, attrs) {
            var fixedDom = document.querySelector(scope.fixedDom);
            var footer = document.querySelector('#footer');
            var footerHeight = 327;

            if ( fixedDom ) {
                document.addEventListener('scroll', winScroll, false);

                function winScroll(e){
                    //var offsetTop = fixedDom.offsetTop;
                    var scrollTop = fixedDom.scrollTop;
                    var scrollHeight = fixedDom.scrollHeight;
                    var clientHeight = fixedDom.clientHeight;
                    if( scrollTop >= scrollHeight - clientHeight - footerHeight ) {
                        if ( scope.callback && scope.isRefresh ) {
                            scope.callback();
                        }
                    }
                }
            }

        }
    };

}
