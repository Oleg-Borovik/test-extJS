Ext.define('ModernApp.model.MobileOperatorModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.mobileoperatormodel',

    fields: [
        {name: 'name', type: 'string'},
        {name: 'prise', type: 'float'},
        {name: 'min', type: 'int'},
    ],
});
