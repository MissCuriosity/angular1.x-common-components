/**
 * @author MissCuriosity
 */
angular
    .module('tomato.tableExpandable', [])
    .component('tableExpandable', {
        templateUrl: 'table-expandable.view.html',
        controller: 'TableExpandableCtrl',
        controllerAs: 'table',
        bindings: {
            itemList: '<',
            tableConfig: '<',
            type: '@',
            selectedItemList: '=',
            allCheck: '<'
        }
    });

//var tableConfig = [
//    {
//        label: '编号',//表头名称
//        key: 'sn, imgUri',
//        //itemList数据中表头名称对应的参数,图片uri建议统一用imgUri如果要读取多个图片的话,
//        //object2.attribute2.0.name如果要传数组，0表示数组中的0号元素
//        type: 'text',
//        color: 'btn-danger',可以直接输入class名字也可以写成一个function来return所需要显示的color
//        text,price,weight,img,uri,orderStatus,quantity如果是uri的话需要有对应的linkUri
//        orderStatus是为了订单状态做筛选用的
//        linkUri: '',
//        editable: false,//input是否需要用户输入
//        onInputChange: null,//input ng-change
//        operable: false,//是否有操作
//        editable: true,  是否是输入框
//        editableConfig: { 输入框配置
//              width:      //输入框宽度
//              onInputFocus:       //fn
//              onInputChange:      //fn
//        }
//        operationList: [
//            {
//                label: '删除',
//                onOperation: del,//del function
//                enable: isDel / true//是否有这个功能，建议与onOperation对应,全部都有的用true
//                type: 'uploads'  //是否需要上传文件，不需要就不加这一行
//                callback： callback    //上传文件后的回调
//                uploadSrc: uploadSrc   //上传文件的key
//            }
//        ],
//        footer: {
//            value:  //footer绑定的值
//        }
//        onImgClick: onImgClick //img click function
//        isImgClick: onImgClick //img是否有click事件
//        isImgHover: onImgClick //img是否有hover事件
//    }
//];

//每一行的点击事件
//     vm.tableConfig.onClick = onClick;
//     vm.tableConfig.isCheckBox = true;  //是否出现多选框
//     vm.tableConfig.isDetail = true;   //是否出现下拉的箭头
//function onClick(item) {
//    item.isSelected = true; //每一行的选中效果，如果选中要有黄色效果，此行必写
//            item.checked = true; //每一行的复选框的选中效果
//            item.isShowDetail = true; //每一行是否展示detail
//}
//     vm.tableConfig.isFooter = true;  //是否有底部
//        vm.tableConfig.footer = [ //footer配置key
//            {
//                key: '',
//                color: ''/functionName
//            }
//        ];
//      tableConfig.trClass = getTrClass();获取每一行的颜色，getTrClass()中return一个class的name
//
//var itemList = [
//    {
//        onClick: onClick,
//        isShowDetail: false/true,
//        detail: null
//    }
//];

//selectedItemList 在外部controller用$watch监听
