"use strict";
var fn = function (a) {
    return 10;
};
fn("2");
function 함수(a) {
    a();
}
function 함수2() {
}
함수(함수2);
function cutZero(a) {
    var result = a.replace(/0/g, "");
    return result;
}
function removeDash(b) {
    var remove = b.replace(/-/g, "");
    return parseFloat(remove);
}
function union(a, b, c) {
    var result = b(a);
    var result2 = c(result);
    console.log(result2);
}
;
union('010-1111-2222', cutZero, removeDash);
