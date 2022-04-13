declare type FnType = (a: string) => number;
declare let fn: FnType;
declare type Member = {
    name: string;
    age: number;
    plusOne: (x: number) => number;
    changeName: () => void;
};
declare function 함수(a: any): void;
declare function 함수2(): void;
declare function cutZero(a: string): string;
declare function removeDash(b: string): number;
declare function union(a: string, b: Function, c: Function): void;
