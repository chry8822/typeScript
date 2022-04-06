"use strict";
function fn(x) {
    if (typeof x === "string") {
        return x + "1";
    }
    else {
        return x + 1;
    }
}
fn(32);
function my(x) {
    var array = [];
    if (typeof x === "number") {
        array[0] = x;
    }
}
my(123);
function my2(x) {
    var array = [];
    array[0] = x;
}
my2(123);
function 클리닝함수(x) {
    var result = [];
    x.forEach(function (a) {
        if (typeof a === "string") {
            result.push(parseFloat(a));
        }
        else {
            result.push(a);
        }
    });
    return result;
}
클리닝함수(["1", 3, "4", 5]);
var 철수쌤 = { subject: 'math' };
var 영희쌤 = { subject: ['science', 'english'] };
var 민수쌤 = { subject: ['science', 'art', 'korean'] };
function lastObj(x) {
    var obj = "";
    if (typeof x.subject === "string") {
        return x.subject;
    }
    else if (Array.isArray(x.subject)) {
        var init = x.subject.pop() || "";
        obj += init;
    }
    return obj;
}
