Ext.define('ModernApp.view.mobileOperator.panel.MobilePanel', {
    extend: 'Ext.Panel',
    xtype: 'mobilepanel',
    cls: 'mobilepanel',
    controller: 'mobilepanelcontroller',
    viewModel: {},
    layout: {
        type: 'fit'
    },
    items: [
        {
            xtype: 'button',
            reference: 'button',
            text: 'Добавить',
            docked: 'left',
            ui: 'confirm',
            handler: 'addRow'

        },
        {
            xtype: 'button',
            text: 'Удалить',
            docked: 'left',
            handler: 'deleteSelectedRow',
            ui: 'decline'
        },
    ],

});