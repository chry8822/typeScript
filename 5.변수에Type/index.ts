
// 유니온 타입을 하나의 타입에 변수처럼 담아서 사용할 수 있다.
// 타입을 변수 처럼 담아서 사용할때 작명은 대문자로 시작한다. 국룰
type Animal = string | number | undefined;

let animal :Animal = "kim";
let none :Animal = undefined;

// ------------------------------------------------

type Person = { name: string, age:number }
let person:Person = { name: "kim", age : 30 }

// ------------------------------------------------



// 객체의 값이 바뀐다.
const country = { region: "seoul" }
country.region = "busan"
// const 는 상수이지만 const 안에 오브젝는의 값은 변경 가능하다. (재할당만 안된다.)


// 객체의 값이 바꾸는걸 막는다.
type Girl = {
  readonly name? : string,
}

const girl:Girl = {
  name: "엠버"
}
// 타입에 readonly 키워드를 사용하면 객체 값의 수정까지 막을수 있다.
// readonly 를 사용하더라도 에러만 출력하고 자바스크립트에서는 객체의 값은 바뀐다. (미리 에러를 파악하고 수정할수 있을때 사용하는거 같다.)




type Name = string;
type Age = number;
// 타입을 합쳐서 유니온 타입으로 다시 지정할수 있다.
type Human = Name | Age; 


type PositionX = { x: number };
type PositionY = { Y: number };

type NewType = PositionX & PositionY ;
// 1개 이상의 객체 타입을 하나의 타입으로 합쳐서 새로운 타입을 만들때 & 기호로 익스텐드 해준다.


// 동일한 이름을 가진 타입을 만들수없다.



// object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요??

type One = { name : string }
type Two = { name : string }

type Three = One & Two;

let four : Three = { name : "kim"};


// 다음 조건을 만족하는 타입을 만들어봅시다. 
// 1. 이 타입은 object 자료형이어야합니다.

// 2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다. 

// 3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.

// 4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.  


type Obj = { 
  color?: string, 
  size : number,
  readonly position : number[],
}

let obj :Obj  = {
  size : 20,
  position : [1,2,3]
}


// (숙제3) 다음을 만족하는 type alias를 연습삼아 간단히 만들어보십시오. 

// 1. 대충 이렇게 생긴 object 자료를 다룰 일이 많습니다. { name : 'kim', phone : 123, email : 'abc@naver.com' }

// 2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.

// 3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오. 

type Obj2 = {
  name : string,
  phone : number,
  email : string,
}

let obj2 :Obj2 = {
  name : "oh",
  phone : 9134111,
  email : "gogogo",
}



// (숙제4). 다음을 만족하는 type alias를 만들어보십시오.

// 1. 숙제2와 똑같은데 이번엔 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.

// 2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다. 

// 3. 멋있게 숙제2에서 만들어둔  type alias를 재활용해봅시다.

type Obj3 = {
  adult : boolean,
}

type Obj4 = Obj2 & Obj3;

let obj3 :Obj4 = {
  name : "oh",
  phone : 9134111,
  email : "gogogo",
  adult : true
}

