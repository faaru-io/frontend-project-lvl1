import generateNumberBetween from '../number/number.js';

const FROM_NUMBER = 3;
const TO_NUMBER = 100;
const QUESTION_TEXT = 'Find the greatest common divisor of given numbers.';

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

const prepareQuestionPair = () => {
  const numberA = generateNumberBetween(FROM_NUMBER, TO_NUMBER);
  const numberB = generateNumberBetween(FROM_NUMBER, TO_NUMBER);

  const expression = `${numberA} ${numberB}`;
  const answer = calcGcd(numberA, numberB);

  return [expression, String(answer)];
};

const generateRound = () => {
  const [expression, answer] = prepareQuestionPair();
  const question = [QUESTION_TEXT, expression];
  return [question, answer];
};

export default generateRound;
