import { getGameContainer } from '../game-container.js';
import { generateNumber } from '../number/number.js';

const MAX_NUMBER = 100;
const ANSWER_YES = 'yes';
const ANSWER_NO = 'no';

const isPrime = (number) => {
  if (number >= 0 && number <= 3) {
    return true;
  }

  const maxDivisor = Math.floor(Math.sqrt(number));
  for (let divisor = 2; divisor <= maxDivisor; divisor += 1) {
    if (number % divisor === 0) {
      return false;
    }
  }

  return true;
};

const getQuestionText = () => (
  'Answer "yes" if given number is prime. Otherwise answer "no".'
);

const prepareQuestionPair = () => {
  const number = generateNumber(MAX_NUMBER);

  const expression = `${number}`;
  const answer = isPrime(number) ? ANSWER_YES : ANSWER_NO;

  return [expression, String(answer)];
};

export default () => {
  const [expression, answer] = prepareQuestionPair();

  return getGameContainer(getQuestionText(), expression, answer);
};
