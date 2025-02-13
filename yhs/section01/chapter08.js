// 1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
// var2 값인 10이 출력된다.

let var6 = var2 ?? var3;
// 둘 다 값이 있을 경우엔 처음값인 var2가 출력된다.

// 만약 실무에서 "닉네임이 없으면 유저네임으로 출력되게 해라" 라고 할 경우
let userName = "윤현승";
let userNickName = "yhs";

let displayName = userName ?? userNickName;

// 2. typeof 연산자
// -> 값의 탑입을 문자열로 반환하는 기능을 하는  연산자

let var7 = 1;
var7 = "hello";

let t1 = typeof var7;

// 3. 삼항 연산자
// -> 항을 3개 사용하는 연산자
// -> 조건식을 이용해서 참, 거짓일 때의 값을 다르게 반환
let var8 = 10;

//요구사항: 변수 res에 var8의 값이 짝수 -> "짝", 홀수->"홀"
let res = var8 % 2 === 0 ? "짝수" : "홀수";
