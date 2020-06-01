import readlineSync from 'readline-sync';
import pair from '@hexlet/pairs';
import { generateNumber } from '../number/number.js';

const { cons } = pair;

const MAX_NUMBER = 100;
const STATUS_CORRECT = true;
const STATUS_INCORRECT = false;

const getOperation = (collOperations) => {
  const indexOperation = Math.floor(Math.random() * Math.floor(collOperations.length));

  return collOperations[indexOperation];
};

const calc = (op, a, b) => {
  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
  }

  return null;
};

const generateExpression = () => {
  const numberA = generateNumber(MAX_NUMBER);
  const numberB = generateNumber(MAX_NUMBER);
  const op = getOperation(['+', '-', '*']);

  const exp = `${numberA} ${op} ${numberB}`;
  const result = calc(op, numberA, numberB);

  return [exp, result];
};

const generateQuestion = () => {
  const [question, correctAnswer] = generateExpression();
  console.log('What is the result of the expression?');
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
  cons('brain-calc', [
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
