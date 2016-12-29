/**
 * @author zhangboxuan@thinkerx.com
 */
angular
    .module('tomato.tableExpandable')
    .controller('TableExpandableCtrl', TableExpandableCtrl);

TableExpandableCtrl.$inject = ['$scope'];

function TableExpandableCtrl($scope) {
    var vm = this;
    var targetUser = null;
    var warehouseId = null;
    var warehouseSubjectStepList = null;
    //var isWarehouseStep = null;

    vm.isWarehouseStep = null;

    vm.checkLast = checkLast;
    vm.changeAllCheckbox = changeAllCheckbox;
    vm.changeCheckbox = changeCheckbox;

    init();

    function init() {
        getUserInfo();
        getToken();
    }

    function getUserInfo() {
        targetUser = Order.getUserInfo();
        if ( !targetUser ){
            Order.
                getTargetUser()
                .success(function(response) {
                    if ( response.status === 0 ) {
                        targetUser = response.data;
                        warehouseId = targetUser.warehouse.id;
                        getWarehouseStep();
                        //warehouseId = 'ebe45f09-1599-91fe-6898-19e78c9ea1fa';
                    }
                });
        } else {
            warehouseId = targetUser.warehouse.id;
            getWarehouseStep();
            //warehouseId = 'ebe45f09-1599-91fe-6898-19e78c9ea1fa';
        }
    }

    function getWarehouseStep() {
        Order
            .getWarehouseStep()
            .success(function(response) {
                warehouseSubjectStepList = response.data;
                //warehouseId = 'b5a1d2dc-40f5-3b5d-8971-3d8964d96d33';
                vm.isWarehouseStep = warehouseSubjectStepList[warehouseId];
            });
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
