// 유니온 타입 지정시 타입이 두개중에 하나이기 때문에 narrowing 을 사용하여 하나의 타입으로 좁혀줘야 에러발생이 안생긴다.
// typeof를 사용하여 변수의 타입을 확인해준다.

// 어떠한 변수가 타입이 불확실하면 if 문 등으로 Narrowing 을 해주어 조작한다.
function fn(x:number | string) {
  if (typeof x === "string") {
    return x + "1"
  } else {
    return x + 1
  }
}

fn(32);



function my(x: number | string) {
  let array :number[] = [];
  if(typeof x === "number") {
    array[0] = x;
  } 
  
}

my(123)

// typeof 를 사용하여 비교할때는 "" 안에 비교할 타입을 입력한다. "number" "string"
// if문으로 narrowing 할지 else나 else if 사용해야 더 안전하게 코딩할수 있다.


// Narrowing 판정 문법들
// typeof 변수
// 속성명 in 오브젝트자료
// 인스턴스 instanceof 부모



function my2(x: number | string) {

  let array :number[] = [];
  array[0] = x as number; // 변수를 as 뒤에 오는 타입으로 덮어 씌어주세요.
  
}

my2(123) // "123" string으로 넣어도 에러가 발생하지 않는다. assertion 문법 사용시 에러를 캐치 하지 못함

// assertion 문법 (타입 덮어쓰기) 타입이 여러게인 유니온타입에서 확정을 지을때 사용
// 하나의 타입으로 지정된걸 바꾼때 사용하는 문법이 아님
// 문법의 용도
// narrowing 할때 사용
// 무슨 타입이 들어올지 100% 확실할때 사용한다.

// 대부분 if 문으로 narrowing 하는게 안정적이다.


// let 이름 :number = 123;

// (이름 as string) + 1;  //현재문법
// <string>이름 + 1;   //옛날문법


// 숫자여러개를 array 자료에 저장해놨는데
// 가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다.

// 이걸 클리닝해주는 함수가 필요합니다. 

// 클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면

// [1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오.


function 클리닝함수 (x: (number|string)[]){
  let result :number[] = [];

  x.forEach((a)=>{
    if(typeof a === "string") {
      result.push(parseFloat(a))
    } else {
      result.push(a)
    }
  })

  return result
}

클리닝함수(["1",3,"4",5])



// 다음과 같은 함수를 만들어보십시오.

let 철수쌤 = { subject : 'math' }
let 영희쌤 = { subject : ['science', 'english'] }
let 민수쌤 = { subject : ['science', 'art', 'korean'] }

function lastObj(x: {subject : string | string[]}) {  // x 파라미터는 객체타입은 받고 키는 string 값은 string 또는 string 을 가지는 배열
  let obj:string = "";                                // string 타입을 가지는 obj 변수 선언
  if(typeof x.subject === "string") {                 // x 파라미터로 들어온 객체의 키 타입이 string 이면
    return x.subject;                                 // 값을 리턴한다.
  }else if(Array.isArray(x.subject)) {                // 배열은 typeof 로 검사가 안된다. Array.isArray로 파라미터로 들어론 객체의 값이 배열인지 확인 
    let init :string = x.subject.pop() || "";         
    // 배열의 마지막 값을 string 타입의 init 변수에 할당한다. pop() 는 string 또는 undefined 타입을 가지므로  init(string) = pop(string | undefined) 로 타입이 확정이어진 상태가 아니라 에러가 난다
    // init :string = x.subject.pop() || ""; or 로 연산에 변화를 주지않는 "" string 타입을 지정해주면   init(string) = pop(string | undefined) || ""(string) 으로 되기 때문에 에러없이 작동한다.
    obj += init;
  }
  return obj;
}