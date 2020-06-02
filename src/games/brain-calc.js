import { getGameContainer } from '../game-container.js';
import { generateNumber } from '../number/number.js';

const MAX_NUMBER = 100;

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

const getQuestionText = () => (
  'What is the result of the expression?'
);

const prepareQuestionPair = () => {
  const numberA = generateNumber(MAX_NUMBER);
  const numberB = generateNumber(MAX_NUMBER);
  const op = getOperation(['+', '-', '*']);

  const expression = `${numberA} ${op} ${numberB}`;
  const answer = calc(op, numberA, numberB);

  return [expression, String(answer)];
};

export default () => {
  const [expression, answer] = prepareQuestionPair();

  return getGameContainer(getQuestionText(), expression, answer);
};
