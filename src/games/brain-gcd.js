import readlineSync from 'readline-sync';
import pair from '@hexlet/pairs';
import { generateNumber } from '../number/number.js';

const { cons } = pair;

const MAX_NUMBER = 100;
const STATUS_CORRECT = true;
const STATUS_INCORRECT = false;

const calcGcd = (numberA, numberB) => {
  let a = numberA;
  let b = numberB;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }

  return a > b ? a : b;
};

const generateExpression = () => {
  const numberA = generateNumber(MAX_NUMBER);
  const numberB = generateNumber(MAX_NUMBER);

  const exp = `${numberA} ${numberB}`;
  const result = calcGcd(numberA, numberB);

  return [exp, result];
};

const generateQuestion = () => {
  const [question, correctAnswer] = generateExpression();
  console.log('Find the greatest common divisor of given numbers.');
  console.log(`Question: ${question}`);

  return correctAnswer;
};

const getUserAnswer = () => (
  Number(readlineSync.question('Your answer:'))
);

const checkAnswer = (correct, answer) => (
  correct === answer ? STATUS_CORRECT : STATUS_INCORRECT
);

const getGame = () => (
  cons('brain-gcd', [
    cons('generateQuestion', generateQuestion),
    cons('getUserAnswer', getUserAnswer),
    cons('checkAnswer', checkAnswer),
  ])
);

export {
  getGame,
  generateQuestion,
  getUserAnswer,
  checkAnswer,
};
