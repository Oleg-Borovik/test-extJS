Ext.define('ModernApp.view.mobileOperator.MobileOperatorViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.mobileoperatorviewmodel',
    data: {
        name: 'ModernApp'
    },
    fields: [
        {name: 'name', type: 'string'},
        {name: 'prise', type: 'float'},
        {name: 'min', type: 'int'},
    ],
});
