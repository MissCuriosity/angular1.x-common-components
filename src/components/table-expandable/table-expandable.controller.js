/**
 * @author zhangboxuan@thinkerx.com
 */
angular
    .module('tomato.tableExpandable')
    .controller('TableExpandableCtrl', TableExpandableCtrl);

TableExpandableCtrl.$inject = ['$scope', '$filter'];

function TableExpandableCtrl($scope, $filter) {
    var vm = this;

    vm.checkLast = checkLast;
    vm.changeAllCheckbox = changeAllCheckbox;
    vm.changeCheckbox = changeCheckbox;

    init();

    function init() {
    }

    function checkLast($last) {
        if ( $last ) {
            //var thead = document.getElementsByTagName('thead')[0].rows[0];
            //var thList = thead.cells;
            //var tr = document.getElementsByTagName('tbody')[0].rows[0];
            //var tdList = tr.cells;
            //for ( var i in tdList ) {
            //    var width = tdList[i].offsetWidth;
            //    console.log(555, i, thList[i].offsetWidth, width);
            //    thList[i].offsetWidth = width;
            //}
        }
    }

    function changeAllCheckbox(){
        var selectedItemList = [];
        angular.forEach(vm.itemList, function(item) {
            item.checked = vm.allCheck;
            if ( vm.allCheck ) {
                selectedItemList.push(item);
            }
        });
        vm.selectedItemList = selectedItemList;
        //console.log(111, vm.selectedItemList);
    }

    function changeCheckbox($event, item, from){
        $event.stopPropagation();

        if (from === 'checkbox') {
            // property.checked = true;
        } else {
            item.checked = !item.checked;
        }
        //console.log(999, vm.selectedItemList);
        var checkedList = vm.selectedItemList || [];

        var index = checkedList.indexOf(item);
        if(index < 0 && item.checked) {
            checkedList.push(item);
        } else if(index >= 0  && !item.checked) {
            checkedList.splice(index, 1);
        }
        vm.allCheck = $filter('filter')(vm.itemList, { checked: true }).length === vm.itemList.length;
        vm.selectedItemList = checkedList;
        //console.log(777, vm.selectedItemList);
    }

}
