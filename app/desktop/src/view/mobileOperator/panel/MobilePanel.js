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
            // listeners: {
            //     click: 'addRow'
            // },
            handler: 'addRow'

        },
        {
            xtype: 'button',
            text: 'Удалить',
            docked: 'left',
            // bind: {height: '{headerview_height}', width: 30},
            // listeners: {
            //     click: function () { // аналогичен функции в параметре handler
            //         // this в данном случае хранит ссылку на текущую кнопку
            //         this.setText('Привет мир');
            //     },
            // }
        },
    ],

});