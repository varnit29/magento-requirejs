define([
    "jquery",
    'Magento_Ui/js/modal/alert',
    "jquery/ui",
], function ($, alert) {
    'use strict';
    $.widget('mage.usetestrequire', {
        options: {
            confirmMsg: ('divElement is removed.')
        },
        _create: function () {
            var self = this;
            $(self.options.divElement).remove();
            alert({
                content: self.options.confirmMsg
            });
        }
    });
    return $.mage.usetestrequire;
});