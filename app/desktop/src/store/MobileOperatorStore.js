Ext.define('ModernApp.store.MobileOperatorStore', {
    extend: 'Ext.data.Store',
    alias: 'store.mobileoperatorstore',
    model: 'ModernApp.model.MobileOperatorModel',
    storeId: 'mobileStore',
    // data: [
    //         {name: 'MTS++', prise: 200, min: 1},
    //         {name: 'velcome', prise: 400, min: 2},
    //         {name: 'a1', prise: 50, min: 3},
    //         {name: 'life:)', prise: 5.42, min: 4}
    //     ],
    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: 'http://localhost:8081/mobiles',
        reader: {
            type: 'json',
            rootProperty: 'items'
            // type: 'json',
            // reader: 'json',
            // url: 'resources/desktop/menu.json'
            // reader: {
            //     type: 'json',
            //     rootProperty: 'items'
            // }
        }
    },
});

