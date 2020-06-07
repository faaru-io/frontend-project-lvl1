import generateNumberBetween from '../number/number.js';

const ANSWER_YES = 'yes';
const ANSWER_NO = 'no';
const FROM_NUMBER = 1;
const TO_NUMBER = 100;
const QUESTION_TEXT = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const getCorrectAnswer = (number) => (isEven(number) ? ANSWER_YES : ANSWER_NO);

const prepareQuestionPair = () => {
  const expression = generateNumberBetween(FROM_NUMBER, TO_NUMBER);
  const answer = getCorrectAnswer(expression);

  return [expression, answer];
};

const generateRound = () => {
  const [expression, answer] = prepareQuestionPair();
  const question = [QUESTION_TEXT, expression];
  return [question, answer];
};

export default generateRound;
