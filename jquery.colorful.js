(function ($) {
    var namespace = 'colorful'; // 命名空间 提供给外部调用

    var methods = {
        init: function (options) {
            options = $.extend({}, $.fn[namespace].defaults, options); //扩展参数

            if (options.font) {
                this.css('color', options.color)
            }

            if (options.background) {
                this.css('background-color', options.color);
            }


            return this; // 支持链式调用
        }
    };

    $.fn[namespace] = function (method) {  // 基本上是固定写法
        // 如果第一个参数是字符串, 就查找是否存在该方法, 找到就调用; 如果是object对象, 就调用init方法;.

        if (methods[method]) {
            // 如果存在该方法就调用该方法
            // apply 是吧 obj.method(arg1, arg2, arg3) 转换成 method(obj, [arg1, arg2, arg3]) 的过程.
            // Array.prototype.slice.call(arguments, 1) 是把方法的参数转换成数组.
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if ($.type(method) === 'object') { // jquery方法  $.type() 函数用于确定JavaScript内置对象的类型，并返回小写形式的类型名称。能准确区分null  undefined  function date  error regexp 等等
            // 如果传进来的参数是"{...}", 就认为是初始化操作.
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist!');
        }
    };




    $.fn[namespace].defaults = { // 设置默认项
        color: 'red',
        background: false, // 是否开启更换背景颜色
        font: true // 是否 开启更换字体颜色
    }

})(jQuery)