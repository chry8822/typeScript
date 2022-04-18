let title = document.querySelector('#title')

//title.innerHTML = "HelloWorld"
// 엘리먼트 타입 또는 null 타입을 가질수 있어서 에러가 남 null은 돔을 잘못 찾았을때는 null이 반환되기 때문이다.
// 그래서 narrowing을 해서 타입을 확정해 줘야한다.

// 만약에 null 타입이 아닐 경우에는 엘리먼트 타입이기 때문에 타입이 확정되서 동작한다.
if(title != null) {
  title.innerHTML = "HelloWorld"
}

// 2번째 narrowing 방법
// instanceof 연산자를 사용한 방법
if(title instanceof Element) {
  title.innerHTML = "HelloWorld"
}

// 3번째 방법 as 사용하기
// as 를 사용해서 어떤타입 들어와도 as 뒤에 지정한 타입으로 해주세요. 비상시 또는 100%로 확실이 들때만.. 자주 사용하면 안됨

//let title = document.querySelector('#title') as Element


// 4번째 방법 ?. 사용하기
// 1. title 에 innerHTML 이 있으면 출력해주고
// 2. 없으면 undefined 출력
// (optional chaining)

if(title?.innerHTML != undefined) {
  title.innerHTML = "HelloWorld"
}


// 타입스크립트를 사용하면 narrowing 과정들이 많이 필요하다.



let findLink = document.querySelector(".link")

if(findLink instanceof HTMLAnchorElement){
  findLink.href = "https://kakao.com"
}
// 앵커 태그는 일반 엘리먼트 타입이 아니기때문에 HTMLAnchorElement 타입으로 정확하게 지정해줘야 가능하다.


//과제1: 버튼 클릭시 이미지 변경하기

let img = document.querySelector("#img")
let btn = document.querySelector("#btn")

btn?.addEventListener("click", function() {
  if(img instanceof HTMLImageElement){
    img.src = "./노트북.jpg"
  }
})

// ?. 를 사용하면 해당 왼쪽에 있는 요소에 오른쪽에 속성이 있으면 가능하게 하고 아니면 undefined 를 출력해라 
// 간단하게 narrowing 할수 있다.


//과제2: 바꾸고 싶은 요소가 많을때

let allLink = document.querySelectorAll(".link")

allLink.forEach((link) => {
  if(link instanceof HTMLAnchorElement){
    link.href = "https://kakao.com"
  }
})

