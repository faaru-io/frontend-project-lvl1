import generateNumber from '../number.js';

const min = 0;
const max = 100;
const gameDescription = 'What is the result of the expression?';

const plus = (a, b) => a + b;
const minus = (a, b) => a - b;
const mul = (a, b) => a * b;

const operations = [
  ['+', plus],
  ['-', minus],
  ['*', mul],
];

const getOperation = (collOperations) => {
  const indexOperation = generateNumber(0, collOperations.length);

  return collOperations[indexOperation];
};

const calc = (op, a, b) => op(a, b);

const generateRound = () => {
  const numberA = generateNumber(min, max);
  const numberB = generateNumber(min, max);
  const [sign, op] = getOperation(operations);

  const question = `${numberA} ${sign} ${numberB}`;
  const answer = calc(op, numberA, numberB);

  return [question, String(answer)];
};

export { gameDescription, generateRound };
