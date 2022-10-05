Ext.define('ModernApp.view.mobileOperator.MobileOperatorViewStore', {
    extend: 'Ext.data.Store',
    alias: 'store.mobileoperatorviewstore',

    data: {
        items: [
            {name: 'MTS++', prise: "200", min: "1"},
            {name: 'velcome', prise: "400", min: "2"},
            {name: 'a1', prise: "50", min: "3"},
            {name: 'life:)', prise: "5.42", min: "4"}
        ]
    },
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    },
});

