Ext.define('ModernApp.model.MobileOperatorModel', {
    extend: 'Ext.data.Model',
    alias: 'model.mobileoperatormodel',

    fields: [
        {name: 'name', type: 'string'},
        {name: 'prise', type: 'float'},
        {name: 'min', type: 'int'},
    ],
});
