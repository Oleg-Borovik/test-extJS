Ext.define('ModernApp.util.mobileOperator.MobilePanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mobilepanelcontroller',
    store: 'mobileStore',

    addRow: function () {
        const rec = Ext.create('model.mobileoperatormodel', {name: '', prise: 0, min: 0});
        let store = Ext.getStore('mobileStore');
        store.insert(0, rec);
    },


    deleteSelectedRow: function () {
        let selection = Ext.getCmp('mobileTable').getSelection();
        if (selection) {
            let store = Ext.getStore('mobileStore');
            store.remove(selection);
        }
    }
});