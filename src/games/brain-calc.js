import generateNumber from '../number.js';

const min = 0;
const max = 100;
const gameDescription = 'What is the result of the expression?';

const operations = [
  ['+', (a, b) => a + b],
  ['-', (a, b) => a - b],
  ['*', (a, b) => a * b],
];

const getOperation = (collOperations) => {
  const indexOperation = generateNumber(0, collOperations.length - 1);

  return collOperations[indexOperation];
};

const generateRound = () => {
  const numberA = generateNumber(min, max);
  const numberB = generateNumber(min, max);
  const [sign, op] = getOperation(operations);

  const question = `${numberA} ${sign} ${numberB}`;
  const answer = op(numberA, numberB);

  return [question, String(answer)];
};

export default () => [gameDescription, generateRound];
