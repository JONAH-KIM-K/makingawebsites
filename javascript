// HTML에서 'myButton' 이라는 id를 가진 요소를 선택합니다.
let button = document.getElementById('myButton');

// HTML에서 'message' 이라는 id를 가진 요소를 선택합니다.
let message = document.getElementById('message');

// 버튼을 클릭했을 때 실행될 함수를 만듭니다.
button.addEventListener('click', function() {
  // 'message' 요소의 텍스트 내용을 변경합니다.
  message.textContent = '버튼이 클릭되었습니다!';
});
