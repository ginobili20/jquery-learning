;(function ($) {
    var namespace = 'colorful';
    var methods = {
        init: function (opts) {
            opts = $.extend({}, $.fn[namespace].defaults, opts)
            if (opts.color) {
                $(this).css('color', opts.color)
            }

            if (opts.font) {
                $(this).css('fontSize', opts.font)
            }
            return this;
        }
    }


    $.fn[namespace] = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1))
        } else if ($.type(method) ===  'object') {
            return methods.init.apply(this, arguments)
        } else {
            $.error('error')
        }
    }
    

    $.fn[namespace].defaults =  {
        color: 'blue',
        font: 20
    }
}(jQuery));