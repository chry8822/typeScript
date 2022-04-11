
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



