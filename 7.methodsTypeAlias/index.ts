type FnType = (a: string) => number;  // 함수로 만든 타입은 ()=>{} 화살표 함수로
 
let fn:FnType = function(a) {  // 함수표현식 에서만 함수 type alias 를 사용 할수 있다.
 return 10
}
fn("2")




// - plusOne이라는 속성은 함수여야하고, 숫자를 넣어서 숫자를 뱉는 함수여야합니다.

// - changeName이라는 속성은 함수여야하고, 아무것도 return하면 안됩니다. 

// - type 키워드를 쓰든 말든 알아서 합시다. 
type Member = {
  name : string,
  age : number,
  plusOne : ( x :number) => number,
  changeName : () => void
}

function 함수(a){
  a()
}

function 함수2() {

}

함수(함수2); // 함수가 함수를 호출하는 경우를 콜백 함수라고 부른다.


// 다음 함수2개를 만들어보고 타입까지 정의해보십시오.

// - cutZero()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 맨 앞에 '0' 문자가 있으면 제거하고 문자 type으로 return 해줍니다.

// - removeDash()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 대시기호 '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return 해줍니다. 

// - 함수에 타입지정시 type alias를 꼭 써보도록 합시다. 

// 물론 문자제거 하는 방법을 모른다면 구글검색이 필요합니다. 



// type CutType = (x :string) => string

// let cutZero :CutType = function (x){
//     let result = x.replace(/^0+/, "");
//     return result
// }
// function removeDash(x :string) :number{
//     let result = x.replace(/-/g, "");
//     return parseFloat(result)
// }

function cutZero(a:string): string {
  let result = a.replace(/0/g, ""); // 정규표현신 a에 들어오는 값에서 모든 0 을 "" 으로 대체 한다.
  return result
}
 
function removeDash(b:string): number {
  let remove = b.replace(/-/g,""); // 정규표현식 b에 들어오는 값에서 모든 - 을 "" 으로 대체 한다.
  return parseFloat(remove);       // - 이 없는 값을 숫자로 반환한다.
}



// 함수에 함수를 집어넣고 싶습니다.

// 숙제2에서 만든 함수들을 파라미터로 넣을 수 있는 함수를 제작하고 싶은 것입니다. 

// 이 함수는 파라미터 3개가 들어가는데 첫째는 문자, 둘째는 함수, 셋째는 함수를 집어넣을 수 있습니다. 이 함수를 실행하면

// 1. 첫째 파라미터를 둘째 파라미터 (함수)에 파라미터로 집어넣어줍니다.

// 2. 둘째 파라미터 (함수)에서 return된 결과를 셋째 파라미터(함수)에 집어넣어줍니다.

// 3. 셋째 파라미터 (함수)에서 return된 결과를 콘솔창에 출력해줍니다. 

// 이 함수는 어떻게 만들면 될까요?

// 둘째 파라미터엔 cutZero, 셋째 파라미터엔 removeDash 라는 함수들만 입력할 수 있게 파라미터의 타입도 지정해봅시다.

function union(a:string,b:Function,c:Function) {
  let result = b(a);            // 첫번째 파라미터(문자) 를 두번째 파라미터로 들어온 함수에 파라미터로 넣어서 리턴되는 값을 result 에 담아준다. // '010-1111-2222' => '1-1111-2222'
  let result2 = c(result);      // result의 값을 세번째 파라미터 함수의 파라미터로 넣어주고 리턴되는 값을 result2 에 담아준다.               //  '1-1111-2222' => 111112222
  console.log(result2)          // 111112222
};

union('010-1111-2222', cutZero, removeDash);