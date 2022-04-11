"use strict";
function fn(x) {
    return x * 2;
}
fn(2);
function fn2(x) {
    x + 1;
}
fn2(3);
function fn3(x) {
    x + 2;
}
fn3();
function 자릿수세기(x) {
    return x + 1;
}
function 내함수(x) {
    return x * 2;
}
function hello(x) {
    if (x) {
        console.log("안녕하세요" + x);
    }
    else {
        console.log("입력되지 않았습니다.");
    }
}
hello("나여");
hello();
function count(x) {
    console.log(x.toString().length);
}
function percent(x, y, z) {
    var score = 0;
    score += x;
    if (y === true) {
        score += 500;
    }
    if (z === "상") {
        score += 100;
    }
    if (score > 600) {
        return "결혼가능";
    }
}
percent(200, true, "상");
