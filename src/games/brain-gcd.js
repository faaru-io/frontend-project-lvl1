import generateNumber from '../number.js';

const min = 3;
const max = 100;
const gameDescription = 'Find the greatest common divisor of given numbers.';

const calcGcd = (numberA, numberB) => {
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
  const numberA = generateNumber(min, max);
  const numberB = generateNumber(min, max);

  const question = `${numberA} ${numberB}`;
  const answer = calcGcd(numberA, numberB);

  return [question, String(answer)];
};

export default () => [gameDescription, generateRound];
