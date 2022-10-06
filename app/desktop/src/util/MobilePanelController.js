Ext.define('ModernApp.util.MobilePanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mobilepanelcontroller',
    store: 'mobileStore',

    addRow: function() {
        // Canceling editing of a locally added, unsaved record: remove it
        const rec = Ext.create('model.mobileoperatormodel',{name: '', prise: 0, min: 0});
        let store = Ext.getStore('mobileStore');
        // debugger
        store.insert(0, rec);
        // Ext.lookup('mobileoperatorview').getView().findPlugin('rowediting').startEdit(rec);
    },

    deleteSelectedRow: function () {
        var selection = Ext.getCmp('mobileTable').getSelection();
        // debugger
        if (selection) {
            let store = Ext.getStore('mobileStore');
            store.remove(selection);
        }
    }
});