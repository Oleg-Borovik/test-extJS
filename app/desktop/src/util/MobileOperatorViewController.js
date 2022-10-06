Ext.define('ModernApp.util.MobileOperatorViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mobileoperatorviewcontroller',

    onEditCancelled: function (editor, value, startValue, eOpts) {
        let {name, prise, min} = Ext._find(value.record.store.config.data.items, { name: value.record.data.name });
        Ext.Msg.confirm(
            `Изменить данные на: Мобильный оператор - ${name}, его цена - ${prise}, 
            минимальный обязательный платеж - ${min}`, 'Изменить', this);
    }
});
