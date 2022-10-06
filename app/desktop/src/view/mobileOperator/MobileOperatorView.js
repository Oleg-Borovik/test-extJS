Ext.define('ModernApp.view.mobileOperator.MobileOperatorView',{
    extend: 'Ext.grid.Grid',
    xtype: 'mobileoperatorview',
    cls: 'mobileoperatorview',
    requires: ['Ext.grid.rowedit.Plugin'],
    controller: {type: 'mobileoperatorviewcontroller'},
    // viewModel: {type: 'mobileoperatormodel'},
    store: {type: 'mobileoperatorviewstore'},
    grouped: true,
    id: 'mobileTable',
    groupFooter: {
        xtype: 'gridsummaryrow'
    },
    plugins: {
        rowedit: {
            autoConfirm: false
        }
    },
    columns: [
        {
            text: 'Название',
            dataIndex: 'name',
            editable: true,
            width: 100,
            cell: {userCls: 'bold'}
        },
        {text: 'Стоимость подключения',dataIndex: 'prise',editable: true, width: 200},
        {
            text: 'Минимальный обязательный платеж',
            dataIndex: 'min',
            editable: true,
            width: 300
        },

    ],

    listeners: {
        cancelEdit: 'onEditCancelled',

    }
});
