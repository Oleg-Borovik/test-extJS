Ext.define('ModernApp.view.mobileOperator.panel.MobilePanel', {
    extend: 'Ext.Container',
    xtype: 'mobilepanel',
    cls: 'mobilepanel',
    viewModel: {type: 'mobilepanel'},
    controller: {type: 'mobileoperatorviewcontroller'},
    layout: {
        type: 'fit'
    },
    items: [
        {
            xtype: 'button',
            text: 'Добавить',
            docked: 'left',
            bind: {height: '{headerview_height}', width: 30},
            listeners: {add: 'addRow'}
        },
        {
            xtype: 'button',
            text: 'Удалить',
            docked: 'left',
            bind: {height: '{headerview_height}', width: 30}
        },
    ],
});