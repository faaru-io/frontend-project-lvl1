import generateNumberInRange from '../random.js';

const min = 3;
const max = 100;
const gameDescription = 'Find the greatest common divisor of given numbers.';

const calculateGcd = (numberA, numberB) => {
  let a = numberA;
  let b = numberB;
  while (b) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  return a;
};

const generateRound = () => {
  const numberA = generateNumberInRange(min, max);
  const numberB = generateNumberInRange(min, max);

  const question = `${numberA} ${numberB}`;
  const answer = calculateGcd(numberA, numberB);

  return [question, String(answer)];
};

export default () => [gameDescription, generateRound];
