var sdate = {};
;(function() {


    //---------------------------------------------------  
    // 判断闰年  
    //--------------------------------------------------- 
    function isLeapYear(date){
        return (0 == date.getYear() % 4 && ((date.getYear() % 100 != 0) || (date.getYear() % 400 == 0)));
    }


    //---------------------------------------------------  
    // 日期格式化  
    // 格式 YYYY/yyyy/YY/yy 表示年份  
    // MM/M 月份  
    // W/w 星期  
    // dd/DD/d/D 日期  
    // hh/HH/h/H 时间  
    // mm/m 分钟  
    // ss/SS/s/S 秒  
    //---------------------------------------------------  
    function format(date,formatStr){
        var str = formatStr;
        var Week = ['日', '一', '二', '三', '四', '五', '六'];
        var m = date.getMonth() + 1;
        str = str.replace(/yyyy|YYYY/, date.getFullYear());
        str = str.replace(/yy|YY/, (date.getYear() % 100) > 9 ? (date.getYear() % 100).toString() : '0' + (date.getYear() % 100));

        str = str.replace(/MM/, m > 9 ? m.toString() : '0' + m);
        str = str.replace(/M/g, m);

        str = str.replace(/w|W/g, Week[date.getDay()]);

        str = str.replace(/dd|DD/, date.getDate() > 9 ? date.getDate().toString() : '0' + date.getDate());
        str = str.replace(/d|D/g, date.getDate());

        str = str.replace(/hh|HH/, date.getHours() > 9 ? date.getHours().toString() : '0' + date.getHours());
        str = str.replace(/h|H/g, date.getHours());
        str = str.replace(/mm/, date.getMinutes() > 9 ? date.getMinutes().toString() : '0' + date.getMinutes());
        str = str.replace(/m/g, date.getMinutes());

        str = str.replace(/ss|SS/, date.getSeconds() > 9 ? date.getSeconds().toString() : '0' + date.getSeconds());
        str = str.replace(/s|S/g, date.getSeconds());

        return str;
    }


    //+---------------------------------------------------  
    //| 求两个时间的天数差 日期格式为 YYYY-MM-dd   
    //+---------------------------------------------------  
    function daysBetween(DateOne, DateTwo) {
        var OneMonth = DateOne.substring(5, DateOne.lastIndexOf('-'));
        var OneDay = DateOne.substring(DateOne.length, DateOne.lastIndexOf('-') + 1);
        var OneYear = DateOne.substring(0, DateOne.indexOf('-'));

        var TwoMonth = DateTwo.substring(5, DateTwo.lastIndexOf('-'));
        var TwoDay = DateTwo.substring(DateTwo.length, DateTwo.lastIndexOf('-') + 1);
        var TwoYear = DateTwo.substring(0, DateTwo.indexOf('-'));

        var cha = ((Date.parse(OneMonth + '/' + OneDay + '/' + OneYear) - Date.parse(TwoMonth + '/' + TwoDay + '/' + TwoYear)) / 86400000);
        return Math.abs(cha);
    }

    function dateAdd(date,strInterval, Number){
        var dtTmp = date;
        switch (strInterval) {
            case 's':
                return new Date(Date.parse(dtTmp) + (1000 * Number));
            case 'n':
                return new Date(Date.parse(dtTmp) + (60000 * Number));
            case 'h':
                return new Date(Date.parse(dtTmp) + (3600000 * Number));
            case 'd':
                return new Date(Date.parse(dtTmp) + (86400000 * Number));
            case 'w':
                return new Date(Date.parse(dtTmp) + ((86400000 * 7) * Number));
            case 'q':
                return new Date(dtTmp.getFullYear(), (dtTmp.getMonth()) + Number * 3, dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());
            case 'm':
                return new Date(dtTmp.getFullYear(), (dtTmp.getMonth()) + Number, dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());
            case 'y':
                return new Date((dtTmp.getFullYear() + Number), dtTmp.getMonth(), dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());
        }
    }

    function dateDiff(date,strInterval, dtEnd){
        var dtStart = date;
        if (typeof dtEnd == 'string') //如果是字符串转换为日期型  
        {
            dtEnd = StringToDate(dtEnd);
        }
        switch (strInterval) {
            case 's':
                return Math.round((dtEnd - dtStart) / 1000);
            case 'n':
                return Math.round((dtEnd - dtStart) / 60000);
            case 'h':
                return Math.round((dtEnd - dtStart) / 3600000);
            case 'd':
                return Math.round((dtEnd - dtStart) / 86400000);
            case 'w':
                return Math.round((dtEnd - dtStart) / (86400000 * 7));
            case 'm':
                return (dtEnd.getMonth() + 1) + ((dtEnd.getFullYear() - dtStart.getFullYear()) * 12) - (dtStart.getMonth() + 1);
            case 'y':
                return dtEnd.getFullYear() - dtStart.getFullYear();
        }
    }
    //+---------------------------------------------------  
    //| 取得日期数据信息  
    //| 参数 interval 表示数据类型  
    //| y 年 m月 d日 w星期 ww周 h时 n分 s秒  
    //+---------------------------------------------------  
    function datePart(date,interval){
        var myDate = date;
        var partStr = '';
        var Week = ['日', '一', '二', '三', '四', '五', '六'];
        switch (interval) {
            case 'y':
                partStr = myDate.getFullYear();
                break;
            case 'm':
                partStr = myDate.getMonth() + 1;
                break;
            case 'd':
                partStr = myDate.getDate();
                break;
            case 'w':
                partStr = Week[myDate.getDay()];
                break;
            case 'ww':
                partStr = myDate.WeekNumOfYear();
                break;
            case 'h':
                partStr = myDate.getHours();
                break;
            case 'n':
                partStr = myDate.getMinutes();
                break;
            case 's':
                partStr = myDate.getSeconds();
                break;
        }
        return partStr;
    }

   
    

    //+---------------------------------------------------  
    //| 字符串转成日期类型   
    //| 格式 MM/dd/YYYY MM-dd-YYYY YYYY/MM/dd YYYY-MM-dd  
    //+---------------------------------------------------  
    function StringToDate(DateStr) {

        var converted = Date.parse(DateStr);
        var myDate = new Date(converted);
        if (isNaN(myDate)) {
            //var delimCahar = DateStr.indexOf('/')!=-1?'/':'-';  
            var arys = DateStr.split('-');
            myDate = new Date(arys[0], --arys[1], arys[2]);
        }
        return myDate;
    }

    //---------------------------------------------------  
    // 判断闰年  
    //---------------------------------------------------  
    Date.prototype.isLeapYear = function(){
        return isLeapYear(this)
    };

    
    Date.prototype.Format = function(formatStr) {
        return format(this,formatStr);
    }

    Date.prototype.DatePart = function(interval) {
        return datePart(this,interval);
    }

    //+---------------------------------------------------  
    //| 比较日期差 dtEnd 格式为日期型或者有效日期格式字符串  
    //+---------------------------------------------------  
    Date.prototype.DateDiff = function(strInterval, dtEnd) {
        return dateDiff(this,strInterval, dtEnd);
    }

        //+---------------------------------------------------  
    //| 比较日期差 dtEnd 格式为日期型或者有效日期格式字符串  
    //+---------------------------------------------------  
    Date.prototype.DateAdd = function(strInterval, num) {
        return dateAdd(this,strInterval, num);
    }

    //+---------------------------------------------------  
    //| 日期输出字符串，重载了系统的toString方法  
    //+---------------------------------------------------  
    Date.prototype.toString = function(pattern) {
        return format(this,'yyyy-MM-dd hh:mm:ss');
    }


    //+---------------------------------------------------  
    //| 比较日期差 dtEnd 格式为日期型或者有效日期格式字符串  
    //+---------------------------------------------------  
    Date.prototype.DateDiff = function(strInterval, dtEnd) {
        return dateDiff(this,strInterval, dtEnd);
    }

    //+---------------------------------------------------  
    //| 日期输出字符串，重载了系统的toString方法  
    //+---------------------------------------------------  
    Date.prototype.toString = function(pattern) {
        return format(this,'yyyy-MM-dd hh:mm:ss');
    }
    sdate = {
        isLeapYear:isLeapYear
        ,format:format
        ,datePart:datePart
        ,dateDiff:dateDiff
        ,dateAdd:dateAdd
        ,daysBetween:daysBetween
    }
})()
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

