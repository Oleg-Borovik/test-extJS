Ext.define('ModernApp.view.mobileOperator.MobileContainer', {
    extend: 'Ext.Container',
    xtype: 'mobilecontainer',
    requires: [
        'Ext.layout.HBox'
    ],
    layout: {
        pack: 'top',
        type: 'hbox'
    },
    items: [
        {
            xtype: 'mobileoperatorview',
            reference: 'mobileoperatorview',
        },
        {
            xtype: 'mobilepanel',
            reference: 'mobilepanel',
            docked: 'top',
        },

    ],

});