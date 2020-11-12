// 이벤트리스너에 함수를 등록할 떄 인라인 함수의 경우 함수의 내용을 모두 따라가야하지만 일반 함수로 등록하게 되면 기능을 명확히 파악 가능
// -> $element.addEventlistener('click', someFunc) - O // event 객체 자동으로 넘어감 / 제어권을 Event Listener에게 줌
// -> $element.addEventlistener('click', (e) => someFunc(e)) - X / 어떤 걸 넘길지 결정 / 구조분해 할당으로 하위 객체 감사/ 제어권이 개발자에게
// -> $element.addEventlistener('click', (e) => { // blah blah blach }) - X

// $div.addEventListener('click', () => console.log('hello'));
const $div = document.querySelector('div');

$div.addEventListener('click', (e) => console.log(e.target));

// function printSelectedTarget(target) {
//   console.log(target);
// }
