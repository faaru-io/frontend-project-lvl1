import { getGameContainer } from '../game-api.js';
import { generateNumber } from '../number/number.js';

const MAX_NUMBER = 100;

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

const getQuestionText = () => (
  'Find the greatest common divisor of given numbers.'
);

const prepareQuestionPair = () => {
  const numberA = generateNumber(MAX_NUMBER);
  const numberB = generateNumber(MAX_NUMBER);

  const expression = `${numberA} ${numberB}`;
  const answer = calcGcd(numberA, numberB);

  return [expression, String(answer)];
};

export default () => {
  const [expression, answer] = prepareQuestionPair();

  return getGameContainer(getQuestionText(), expression, answer);
};
