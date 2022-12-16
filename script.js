// получаем наши HTML элементы в переменные 
const startButton = document.querySelector('.start-button');
const gameContainer = document.querySelector('.game-container');
const question = document.querySelector('.question');
const submit = document.querySelector('.submit');
const answer = document.querySelector('.answer');

// функция рандома
const getRandomNumber = (min, max) => {
  let randomNumber = min + Math.random() * (max + 1 - min);
  return Math.floor(randomNumber);
}

// определили переменные  которые получают рандомное число от 1 до 9
let firstNumber = getRandomNumber(1, 9);
let secondNumber = getRandomNumber(1, 9);

// обработчики событий
startButton.addEventListener('click', () => {
  gameContainer.style.display = 'flex';
  startButton.style.display = 'none';
  question.innerText = `${firstNumber} * ${secondNumber}`;
});

submit.addEventListener('click', () => {
  const userCurrectAnswer = Number(answer.value);
  const correctAnswer = firstNumber * secondNumber;
  
  if (correctAnswer === userCurrectAnswer) {
    alert('Вы ответили верно');
    answer.value = '';
    firstNumber = getRandomNumber(1, 9);
    secondNumber = getRandomNumber(1, 9);
    question.innerText = `${firstNumber} * ${secondNumber}`;
  } else {
    alert('Вы ответили не верно, попробуйте снова!');
  } 
  
});
