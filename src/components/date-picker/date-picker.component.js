angular
    .module('tomato.datePicker', [])
    .component('datePicker', {
        templateUrl: 'date-picker.view.html',
        controller: 'DatePickerCtrl',
        controllerAs: 'date',
        bindings: {
            defaultDate: '<'
        }
    })
    // 1-'今天'; 2-'过去7天'; 3-'过去30天'; 4-'指定一天'; 5-'时间段'; 6-'上个月';
    .constant('DATE_PICKER_TYPE', {
        TYPE_TODAY: 1,
        TYPE_7_DAYS_AGO: 2,
        TYPE_30_DAYS_AGO: 3,
        TYPE_DATE: 4,
        TYPE_DATE_RANGE: 5,
        TYPE_LAST_MONTH: 6
    });
