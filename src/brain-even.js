import readlineSync from 'readline-sync';
import { generateNumber, isEven } from './number/number.js';

const ANSWER_YES = 'yes';
const ANSWER_NO = 'no';
const SHOTS = 3;
const MAX_NUMBER = 100;
const STATUS_CORRECT = true;
const STATUS_INCORRECT = false;

const generateQuestion = (func) => (arg) => func(arg);

const getCorrectAnswer = (number) => (isEven(number) ? ANSWER_YES : ANSWER_NO);

const checkAnswer = (correct, answer) => {
  if (answer !== ANSWER_YES && answer !== ANSWER_NO) {
    return STATUS_INCORRECT;
  }

  return correct === answer ? STATUS_CORRECT : STATUS_INCORRECT;
};

const getUserAnswer = (number) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log(`Question: ${number}`);
  return readlineSync.question('Your answer:');
};

const success = () => console.log('Correct!');

const gameOver = (name, answer, correct) => {
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correct}".`);
  console.log(`Let's try again, ${name}!`);
};

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);

  let shot = 1;
  let status;
  do {
    const number = generateQuestion(generateNumber)(MAX_NUMBER);
    const answer = getUserAnswer(number);
    const correct = getCorrectAnswer(number);

    status = checkAnswer(correct, answer);

    if (status === STATUS_CORRECT) {
      success();
    } else {
      gameOver(name, answer, correct);
      break;
    }

    shot += 1;
  } while (shot <= SHOTS);

  if (status === STATUS_CORRECT) {
    console.log(`Congratulations, ${name}!`);
  }
};
