import generateNumberInRange from '../random.js';

const min = 0;
const max = 100;
const gameDescription = 'What is the result of the expression?';

const operators = [
  ['+', (a, b) => a + b],
  ['-', (a, b) => a - b],
  ['*', (a, b) => a * b],
];

const generateRound = () => {
  const numberA = generateNumberInRange(min, max);
  const numberB = generateNumberInRange(min, max);
  const operatorIndex = generateNumberInRange(0, operators.length - 1);
  const [sign, calculate] = operators[operatorIndex];

  const question = `${numberA} ${sign} ${numberB}`;
  const answer = calculate(numberA, numberB);

  return [question, String(answer)];
};

export default () => [gameDescription, generateRound];
