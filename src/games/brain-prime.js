import generateNumber from '../number.js';

const min = 1;
const max = 100;
const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  const maxDivisor = Math.floor(Math.sqrt(number));
  for (let divisor = 2; divisor <= maxDivisor; divisor += 1) {
    if (number % divisor === 0) {
      return false;
    }
  }

  return true;
};

const generateRound = () => {
  const number = generateNumber(min, max);

  const question = `${number}`;
  const answer = isPrime(number) ? 'yes' : 'no';

  return [question, answer];
};

export default () => [gameDescription, generateRound];
