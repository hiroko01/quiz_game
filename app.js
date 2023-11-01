const quiz = [
  {
    question: 'ゲーム市場、最も売れたゲーム機は次のうちどれ？',
    answers: [
      'スーパーファミコン',
      'プレイステーション',
      'ニンテンドースイッチ',
      'ニンテンドーDS'
  ],
  correct: 'ニンテンドーDS'
  },{
    question: '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
    answers: [
      'MOTHER2',
      'スーパーマリオブラザーズ3',
      'スーパードンキーコング',
      '星のカービィ'
  ],
  correct: 'MOTHER2'ß
  },{
    question: 'ファイナルファンタジーⅣの主人公の名前は？',
    answers: [
      'フリオニール',
      'クラウド',
      'ティーダ',
      'セシル'
  ],
  correct: 'セシル'
  }
];
const quizLength = quiz.length;
let quizIndex = 0;

const question = 'ゲーム市場、最も売れたゲーム機は次のうちどれ？';
const answers = [
  'スーパーファミコン',
  'プレイステーション',
  'ニンテンドースイッチ',
  'ニンテンドーDS'
];
const correct = 'ニンテンドーDS';

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = question;
  let buttonIndex = 0;
  let buttonLength = $button.length;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if(correct === e.target.textContent){
    window.alert('正解！');
  } else {
    window.alert('不正解！');
  }
};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click',(e) => {
    clickHandler(e);
  });
  handlerIndex++;
}






// let handlerIndex = 0;
// const buttonLength = $button.length;
// while (handlerIndex < buttonLength) {
//   $button[handlerIndex].addEventListener('click', (e) => {
//     clickHandler(e);
//   });
//   handlerIndex++;
// }

// $button[0].addEventListener('click', (e) => {
//   clickHandler(e);
// });
// $button[1].addEventListener('click', (e) => {
//   clickHandler(e);
// });
// $button[2].addEventListener('click', (e) => {
//   clickHandler(e);
// });
// $button[3].addEventListener('click', (e) => {
//   clickHandler(e);
// });