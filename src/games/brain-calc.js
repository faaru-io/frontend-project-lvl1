import generateNumberBetween from '../number/number.js';

const FROM_NUMBER = 0;
const TO_NUMBER = 100;
const QUESTION_TEXT = 'What is the result of the expression?';

const getOperation = (collOperations) => {
  const indexOperation = generateNumberBetween(0, collOperations.length);

  return collOperations[indexOperation];
};

const calc = (op, a, b) => {
  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
  }

  return null;
};

const prepareQuestionPair = () => {
  const numberA = generateNumberBetween(FROM_NUMBER, TO_NUMBER);
  const numberB = generateNumberBetween(FROM_NUMBER, TO_NUMBER);
  const op = getOperation(['+', '-', '*']);

  const expression = `${numberA} ${op} ${numberB}`;
  const answer = calc(op, numberA, numberB);

  return [expression, String(answer)];
};

const generateRound = () => {
  const [expression, answer] = prepareQuestionPair();
  const question = [QUESTION_TEXT, expression];
  return [question, answer];
};

export default generateRound;
