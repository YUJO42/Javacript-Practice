// // arg === 인자
// // par === 매개변수

// function map(callback) {
//   callback('currentValue', 'index', 'array');
// }

// map(callbackFunc);

// //--------------

// // function addEventListener(eventType, callbackFunc) {
// //     const event = {
// //       target: {
// //         nodeName: 'A',
// //         name: 'some',
// //         value: 'hello',
// //       },
// //     };

// //     if (eventType === 'click') {
// //       callbackFunc(event);
// //     }
// //   }

// // const handleSubmit = (e, name, value = '') => {
// //     if
// //     // some code....
// //     // TODO: name, value
// //   }
// //   <ReactDOM>
// //     <ul>
// //     {dataList.map(func)}

// //     </ul>
// //   <ReactDOM>

// // addEventListener('click', ({ target: { name } }) =>
// //   console.log(`${name} [레벨1 4기]조윤호`),
// // ); // output: hello

// const func = (ele, index, arr) => {
//   return (
//     <li key={index} onClick={(e) => handleSubmit(e, ele.name, ele.value)}>
//       {ele}
//     </li>
//   );
// };

// String.prototype.sayHello = function () {
//   return 'hello';
// };

// '나는 문자열'.sayHello();

/**
 * 1. 내부에서 어떻게 동작하는지
 * 2. 사용법을 잘 알고 있는지 - 최소한 갖춰야 할 소양
 * 3. 어 왜 되는거지? - 현재 내 수준
 */

function test({ name, value }) {
  const name = obj.name;
  const value = obj.value;
  console.log(name, value);
}

const objTest = () => {
  const hello = 'hello';

  return {
    name: hello,
    hello,
    hello: hello,
  };
};

console.log(objTest());

/**
 * documnet.querySelector
 * - 단일 셀렉터
 *
 */

/**
 * 프로토타입 중요
 * Array.prototype.---
 * -> Array에 프로토타입으로 존재하는 애들, (이미 매핑 된)
 * -> 쟤네만 사용가능
 */

/**
 * ****************************************************
 * 1. 프로토타입 정리
 * 2. querySelector, getElementBy... 차이 정리
 * 3. 구조분해할당은 결국 하나의 객체를 넘겨받는거 정리
 * 4. 인라인 함수에서 주도권을 함수가 가지고 있는지 이벤트리스너가 가지고 있는지 정리
 * 5. 폴리필 정리
 * 6. 문서 정말 중요
 * 7. 이전에 쓴 글 고치기 -> 새로 쓰고 링크 걸기
 * ******************************************************
 */

/**
 * q. 질문 잘 하려면
 * a. 뭘 모르는지 모르고 질문하는 사람이 ㅇ있음
 * ex) 로그인 기능을 구현했는데 안 돼요...
 * ex) 여기서 인수를 받아오고 저기서 인수를 보내는데
 *     이런 타이밍에서 저런 함수의 값이 undefined라서 ~~
 * 많이 쪼갠다
 * -> 로그인 기능 =>
 * 1. 버튼을 클릭
 * 2. 함수 도달
 * 3. ...
 * 4. ...   <--- 여기가 안 돼요 이런 식으로
 * 5. ...
 */
