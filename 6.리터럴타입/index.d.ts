declare let literal: "kim";
declare let me: "park" | "solo";
declare function fn(a: "hello"): 1 | 0;
declare type Fight = "가위" | "바위" | "보";
declare type Result = ("가위" | "바위" | "보")[];
declare function fn2(a: Fight): Result;
declare var obj: {
    readonly name: "kim";
};
declare function myFn(a: "kim"): void;
