import generateNumber from '../number.js';

const min = 3;
const max = 100;
const gameDescription = 'Find the greatest common divisor of given numbers.';

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

const generateRound = () => {
  const numberA = generateNumber(min, max);
  const numberB = generateNumber(min, max);

  const question = `${numberA} ${numberB}`;
  const answer = calcGcd(numberA, numberB);

  return [question, String(answer)];
};

export { gameDescription, generateRound };
