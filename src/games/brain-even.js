import generateNumber from '../number.js';

const min = 1;
const max = 100;
const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const generateRound = () => {
  const number = generateNumber(min, max);

  const question = `${number}`;
  const answer = isEven(number) ? 'yes' : 'no';

  return [question, answer];
};

export { gameDescription, generateRound };
