//  nodeJs 최신버전 설치
// npm install -g typescript
// tsconfig.json 만들기
// tsc -w 명령어 시작하고 (ts 파일은 실시간으로 js 로 컴파일 해줌)
// index.ts 파일에 코딩.

type MyType = string | number;

let x :MyType = "kim";

// --------------------------------------------


function fn (x : number) :number {
  return x * 2
}

fn(2);


// --------------------------------------------


// tuple 타입
// 첫번째는 무조건 숫자, 두번째는 boolean
type Member = [number, boolean];
let john:Member = [123,true];



// --------------------------------------------


// 객체의 키와 값의 타입을 지정 (모두 string)
type ObjMember = {
  [ket : string] : string,
}


// 객체를 담을 변수에 타입을 지정한 변수로 타입지정,
let park:ObjMember = { name: "park", age: "20" }


// --------------------------------------------



// 클래스도 타입지정 가능
class User {
  name :string;
  constructor(name:string){
    this.name = name;
  }
}

// --------------------------------------------

// 타입의 종류 - string, number, boolean, null, undefined,[],{}

//변수만들기

let myName :string = "kim"; // 문자열만 들어올수있는 타입 지정 숫자 할당시 에러 출력

let age :number = 20; // 숫자만 들어올수있는 타입

let isOn :boolean = true // true/false 타입

let isOff :null = null // null. undefined 타입

let members :string[] = ["kim", "park"] // 문자열이 담긴 배열만 가능한 타입

let member :{ [key:string] : string | number } = { name: "park", age: 23 } // 문자열인 키와 문자열과 숫자를 담을수 있는 객체


// 타입스크립트는 대부분 타입지정이 자동으로 된다. 타입지정 문법 생략가능

//Q1. 여러분의 이름, 나이, 출생지역을 변수로 각각 저장해봅시다. 
let me :string = "오국화";
let myAge :number = 33;
let adress :string  = "서울";


// Q2. 여러분이 가장 좋아하는 곡과 가수이름을 변수에 object 자료형으로 담아보십시오.

let favorite :{[key:string] : string | number} = {
  name : "오국화",
  song : "잘해보자"
}


// Q3. 다음과 같이 생긴 자료의 타입지정을 해보도록 합시다.

// let project = {
//   member : ['kim', 'park'],
//   days : 30,
//   started : true,
// }

let project :{ member: string[], days:number , started:boolean} = {
  member : ['kim', 'park'],
  days : 30,
  started : true,
}


const tuple : [Number,string] = [2,"2"];