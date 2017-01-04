/**
 * Created by panguso on 2017/1/4.
 */
'use strict';
export default function getCurrentDate() {

    function converTime(time) {
        if (time <= 9)
            return '0' + time;
        return time;

    }

    var date = new Date();
    return date.getFullYear() + '/' + converTime(date.getMonth() + 1)
        + '/' + converTime(date.getDate());
}