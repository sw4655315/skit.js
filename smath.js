var smath = {};
;(function() {
    "use strict";
    /**
     * 加法
     */
    function add(arg1, arg2) {
        var r1, r2, m;
        try {
            r1 = arg1.toString().split(".")[1].length;
        } catch (e) { r1 = 0; }
        try {
            r2 = arg2.toString().split(".")[1].length;
        } catch (e) { r2 = 0; }
        m = Math.pow(10, Math.max(r1, r2));
        return (arg1 * m + arg2 * m) / m;
    }

    /**
     * 减法
     */
    function sub(arg1, arg2) {
        return add(arg1, -arg2);
    }

    /**
     * 乘法
     */
    function mul(arg1, arg2) {
        var m = 0,
            s1 = arg1.toString(),
            s2 = arg2.toString();
        try {
            m += s1.split(".")[1].length;
        } catch (e) {}
        try {
            m += s2.split(".")[1].length;
        } catch (e) {}
        return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
    }

    /**
     * 除法
     */
    function div(arg1, arg2) {
        var t1 = 0,
            t2 = 0,
            r1, r2;
        try {
            t1 = arg1.toString().split(".")[1].length;
        } catch (e) {}
        try {
            t2 = arg2.toString().split(".")[1].length;
        } catch (e) {}
        r1 = Number(arg1.toString().replace(".", ""));
        r2 = Number(arg2.toString().replace(".", ""));
        return (r1 / r2) * pow(10, t2 - t1);
    }

    /**
     * 格式化
     */
    function format(number, form) {
        var forms = form.split('.'),
            number = '' + number,
            numbers = number.split('.'),
            leftnumber = numbers[0].split(''),
            exec = function(lastMatch) {
                if (lastMatch == '0' || lastMatch == '#') {
                    if (leftnumber.length) {
                        return leftnumber.pop();
                    } else if (lastMatch == '0') {
                        return lastMatch;
                    } else {
                        return '';
                    }
                } else {
                    return lastMatch;
                }
            },
            string
        string = forms[0].split('').reverse().join('').replace(/./g, exec).split('').reverse().join('');
        string = leftnumber.join('') + string;
        if (forms[1] && forms[1].length) {
            leftnumber = (numbers[1] && numbers[1].length) ? numbers[1].split('').reverse() : [];
            string += '.' + forms[1].replace(/./g, exec);
        }
        return string.replace(/\.$/, '');
    };

    //给Number类型增加一个add方法，，使用时直接用 .add 即可完成计算。 
    Number.prototype.add = function(arg) {
        return add(arg, this);
    };
    //给Number类型增加一个sub方法，，使用时直接用 .sub 即可完成计算。 
    Number.prototype.sub = function(arg) {
        return sub(this, arg);
    };

    //给Number类型增加一个mul方法，使用时直接用 .mul 即可完成计算。 
    Number.prototype.mul = function(arg) {
        return mul(arg, this);
    };
    //给Number类型增加一个div方法，，使用时直接用 .div 即可完成计算。 
    Number.prototype.div = function(arg) {
        return div(this, arg);
    };
    //给Number类型增加一个format方法，，使用时直接用 .format 即可完成计算。 
    Number.prototype.format = function(arg) {
        return format(this, arg);
    };

    smath = {
    	add:add
    	,sub:sub
    	,mul:mul
    	,div:div
    	,format:format
    }
})()
