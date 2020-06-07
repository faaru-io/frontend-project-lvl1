import generateNumberBetween from '../number/number.js';

const FROM_NUMBER = 1;
const TO_NUMBER = 100;
const ANSWER_YES = 'yes';
const ANSWER_NO = 'no';
const QUESTION_TEXT = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

const prepareQuestionPair = () => {
  const number = generateNumberBetween(FROM_NUMBER, TO_NUMBER);

  const expression = `${number}`;
  const answer = isPrime(number) ? ANSWER_YES : ANSWER_NO;

  return [expression, String(answer)];
};

const generateRound = () => {
  const [expression, answer] = prepareQuestionPair();
  const question = [QUESTION_TEXT, expression];
  return [question, answer];
};

export default generateRound;
