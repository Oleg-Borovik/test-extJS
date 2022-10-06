Ext.define('ModernApp.util.MobilePanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mobilepanelcontroller',

    addRow: function(argument) {
        // Canceling editing of a locally added, unsaved record: remove it
        // let rec = Ext.create('ModernApp.model.mobileoperatormodel',{name: '', prise: 0, min: 0});
        let store = this.getViewModel().getStore('items');
        debugger
        // this.up('grid').store.insert(0, rec);
        // this.up('grid').findPlugin('rowediting').startEdit(rec);
    }
});