//함수의 파라미터,return 값을 타입지정 할수 있다.

function fn (x :number) :number {
  return x * 2
}

fn(2);



// void는 리턴값이 필요없는 함수에 사용하여 리턴을 막는다.
function fn2 (x? :number) :void {
  x + 1;
}

fn2(3);
// 함수 파라미터에 타입이 지정되어 있으면 함수 호출시 필수로 파라미터를 입력해줘야 한다.
// 순수 자바스크립트에서는 함수에 파라미터가 있는 상태에서 호출시 파라미터를 넘기지 않아도 에러가 나지 않는다.

function fn3 (x :number | undefined) :void {
  x + 2;
}

fn3();


// Q. 예를 들어서 함수에 숫자 또는 문자를 집어넣으면 + 1 해주는 함수를 만들어봅시다. 

function 자릿수세기(x :number | string){ 
  return x + 1 
} 

function 내함수(x? :number) :number { 
  return x * 2 
}  

// x파라미터는 옵션이고 옵션인 파라미터는 number 또는 undefined 타입으로 정의되는데 x 라는 타입이 하나로 명확히 정의되지 않아서 에러가 발생한다.


// (숙제1) 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고

function hello (x? :string) {
   if(x) {
    console.log("안녕하세요" + x)
   } else {
     console.log("입력되지 않았습니다.")
   }

}

hello("나여")
hello()


// 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.

function count(x: number | string) :void {
  console.log(x.toString().length)
}



// 결혼 가능 확률을 알려주는 함수를 만들어봅시다.

// 1. 함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수 ('상' or '중' or '하') 를 입력할 수 있어야합니다. 

// 2. 월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산합니다. 

// 3. 총 점수가 600점 이상일 경우 "결혼가능"을 return 해줘야합니다. 그 외엔 아무것도 return하지 않습니다.

function percent (x:number, y: boolean, z:string ) {
  let score : number = 0;
  score += x ;
  if(y === true) {
    score += 500;
  } 
  if(z === "상") {
    score += 100;
  }
  if ( score > 600) {
    return "결혼가능";
  }
}

percent(200,true,"상");


// function marry (money:number , house:boolean, charm:string) {
//   let total = 0;
//   total = money + total;
//   if(house === true) {
//     total += 500;
//   }
//   if(charm === "상") {
//     total += 100;
//   }
//   if (total > 600) {
//     return "결혼"
//   }

// }