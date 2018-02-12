//  Variable
//  메모리 상의 주소를 기억하는 저장소. 즉, 변수란 메모리 주소에 접근하기 위해 사람이 이해할 수 있는 언어로 지정한 식별자

//  미선언 변수에 접근하면 ReferenceError 예외가 발생

var res = square(5);
console.log(res);
function square(number) {
	return number * number;
}

