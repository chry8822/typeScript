//union type

// 문자 or 숫자가 들어올수 있는 변수
let member :(number | string)= 123;
// 타입 지정후 할당하면 타입이 확정 되어짐 (숫자와 문자는 각각 할당가능함. 가변타입)

// 문자 or 숫자가 들어올수 있는 배열
let members :(number | string)[] = [1,"2",3];
//let members :number | string[] = [1,"2",3];
// 소괄호 없이 사용하면 변수에 숫자타입 자료형 타입이 들어오거나 , 문자를 담은 배열타입이 들어올수 있다.

let obj : { [key:string] : string | number } = { a : "123" };

//모든 타입 모든 자료형 허용해줌(타입스크립트를 쓰는 의미가 없어진다)
let me : any;
me = [];
me = {};

let y :string = me; // any 를 사용한 타입의 변수는 문자 타입을 받는 변수 할당해도 에러를 발생시키지 않는다.

// -----------------------------------------------------------

// any와 똑같은 성질을 가지고 있지만 좀더 안전하게 사용할수 있다.
let my : unknown;
my = 123;
my = {};

// let x :string = my; // x 변수에는 문자만 들어갈수 있다. my 는 unknonw(any와 같은 성질) 이지만 타입 스크립트에서 다른 타입으로 인식하기 때문에 에러를 발생

//my - 1 // 간단한 수학연사도 타입이 맞아야 한다. unknown은  number 타입이 아니다.



let age :string | number;
//age + 1; // 타입에 문자 또는 숫자타입이 들어올수 있는 변수에 + 1(수학연산) 을 하면 에러가 발생한다. 

// string 타입 + 1 (가능)
// number 타입 + 1 (가능)
// string | number 타입 + 1 (에러)

let age2 : unknown = 1;
//age2 + 1; 

// 타입스크립트는 타입에 엄격하기 때문에 숫자타입이어야 숫자처럼 연산된다.


// 다음 변수 4개에 타입을 지정해봅시다.

// let user = 'kim';
// let age3 = undefined;
// let married = false; 

type ArrayCulsu = (string | undefined | boolean)[]

let user:string = 'kim';
let age3:undefined = undefined;
let married:boolean = false; 
let 철수:ArrayCulsu = [user, age3, married];


// 학교라는 변수에 타입지정해보십시오.

// let 학교 = {
//   score : [100, 97, 84],
//   teacher : 'Phil',
//   friend : 'John'
// }
// 학교.score[4] = false;
// 학교.friend = ['Lee' , 학교.teacher]


let 학교 
: {
  score : (number|boolean)[],
  teacher : string,
  friend : string | string[]
}

= {
  score : [100, 97, 84],
  teacher : 'Phil',
  friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]