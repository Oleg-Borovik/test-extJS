Ext.define('ModernApp.view.mobileOperator.panel.MobilePanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mobilepanelcontroller',
    store: {type: 'mobileoperatorviewstore'},

    addRow: function() {
        // Canceling editing of a locally added, unsaved record: remove it
        let rec = Ext.create('mobileoperatorviewmodel',{name: '', prise: 0, min: 0});
        this.up('grid').store.insert(0, rec);
        this.up('grid').findPlugin('rowediting').startEdit(rec);
    }
});