declare type Animal = string | number | undefined;
declare let animal: Animal;
declare let none: Animal;
declare type Person = {
    name: string;
    age: number;
};
declare let person: Person;
declare const country: {
    region: string;
};
declare type Girl = {
    readonly name?: string;
};
declare const girl: Girl;
declare type Name = string;
declare type Age = number;
declare type Human = Name | Age;
declare type PositionX = {
    x: number;
};
declare type PositionY = {
    Y: number;
};
declare type NewType = PositionX & PositionY;
