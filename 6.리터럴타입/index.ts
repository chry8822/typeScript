let literal :"kim";

literal = 1;
//리터럴 타입으로 변수에 들어올 값을 정확히 정해주면 정해진 값만 들어올 수 있다.

let me : "park" | "solo";

me = "park";

// 리터럴 타입의 장점은 변수에 들어갈 값이 엄격하게 관리가능
// 자동완성 가능

function fn (a: "hello") : 1 | 0 {
  console.log(a);
  return 1
}

fn("hello");

// 함수도 리터럴 타입이 가능 파라미터와 리턴값에도 설정 가능

type Fight = "가위"| "바위" | "보";
type Result = ( "가위"| "바위" | "보" )[]

function fn2 (a:Fight) :Result {
  return [a]
}

fn2("가위")


// 리터럴 타입은 const 변수의 업글버전 const 에는 한가지만 담을수 있지만 리터럴 타입을 쓰면 들어가야할 값을 1개이상 지정 할수 있다.

var obj = {
  name : "kim" // 방법1 readonly 키워드 사용
} as const // 방법2 as const 키워드를 사용하면 object value 값을 그대로 타입으로 지정한다.

obj.name;

// as const는 효과가 2개인데

// 1. 타입을 object의 value로 바꿔줍니다. (타입을 'kim'으로 바꿔줍니다)

// 2. object안에 있는 모든 속성을 readonly로 바꿔줍니다 (변경하면 에러나게)


// obj.name = "kim" 이지만 myFn 파라미터로 들어가면 에러가 발생한다.
// 파라미터에 kim 이라는 타입만 들어올 수 있기 때문
// obj.name; 의 kim 의 타입은 string
function myFn (a: "kim") {

}

myFn(obj.name)